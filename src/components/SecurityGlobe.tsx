import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { Globe as GlobeIcon } from "lucide-react";
import * as THREE from "three";
import { buildWorldTexture } from "../lib/worldTexture";

const RADIUS = 1.6;
const BENGALURU_LAT = 12.9716;
const BENGALURU_LNG = 77.5946;

// Illustrative / simulated activity data only — not connected to any live
// threat-intel source. Never relabel this as real-time or live. See globe.md §08/14/22.
interface GeoPoint {
  lat: number;
  lng: number;
}

type NodeId = "na" | "eu" | "asia" | "india";

const NODES: { id: NodeId; point: GeoPoint }[] = [
  { id: "na", point: { lat: 40, lng: -100 } },
  { id: "eu", point: { lat: 50, lng: 10 } },
  { id: "asia", point: { lat: 30, lng: 100 } },
  { id: "india", point: { lat: 21, lng: 78 } },
];

const ARCS: { id: string; origin: GeoPoint; destination: GeoPoint; endpoints: NodeId[] }[] = [
  { id: "na-eu", origin: NODES[0].point, destination: NODES[1].point, endpoints: ["na", "eu"] },
  { id: "eu-asia", origin: NODES[1].point, destination: NODES[2].point, endpoints: ["eu", "asia"] },
  {
    id: "asia-blr",
    origin: NODES[2].point,
    destination: { lat: BENGALURU_LAT, lng: BENGALURU_LNG },
    endpoints: ["asia", "india"],
  },
];

const ARC_GROW = 1.1;
const ARC_HOLD = 1.4;
const ARC_FADE = 0.9;
const ARC_GAP = 1.0;
const ARC_CYCLE = ARC_GROW + ARC_HOLD + ARC_FADE + ARC_GAP;
const ARC_TOTAL = ARC_CYCLE * ARCS.length;
const ARC_POINTS = 48;
const ARC_TARGET_OPACITY = 0.4;
const NODE_DIM_OPACITY = 0.25;
const NODE_ACTIVE_OPACITY = 0.55;

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function buildArcCurve(origin: GeoPoint, destination: GeoPoint) {
  const p0 = latLngToVector3(origin.lat, origin.lng, RADIUS * 1.005);
  const p2 = latLngToVector3(destination.lat, destination.lng, RADIUS * 1.005);
  const angularFactor = p0.angleTo(p2) / Math.PI;
  const mid = p0
    .clone()
    .add(p2)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(RADIUS * (1.15 + 0.25 * angularFactor));
  return new THREE.QuadraticBezierCurve3(p0, mid, p2);
}

// Rotation offset so Bengaluru faces the camera at rest (y=0), used both as the
// default resting orientation and as the frozen orientation under reduced motion.
const BENGALURU_FACE_OFFSET = (() => {
  const theta = ((BENGALURU_LNG + 180) * Math.PI) / 180;
  return Math.PI / 2 - theta;
})();

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.01,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function useIsNarrowViewport() {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches,
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const onChange = () => setNarrow(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return narrow;
}

function BengaluruMarker({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const shouldReduceMotion = useReducedMotion();
  const position = useMemo(() => latLngToVector3(BENGALURU_LAT, BENGALURU_LNG, RADIUS * 1.01), []);
  const stemPoints = useMemo(() => {
    const normal = position.clone().normalize();
    return [position.clone(), normal.multiplyScalar(RADIUS * 1.07)];
  }, [position]);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (shouldReduceMotion || !ringRef.current) return;
    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 2) * 0.15;
    ringRef.current.scale.setScalar(pulse);
    const material = ringRef.current.material as THREE.MeshBasicMaterial;
    material.opacity = 0.35 + Math.sin(t * 2) * 0.15;
  });

  return (
    <group position={position}>
      <mesh
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.028, 12, 12]} />
        <meshStandardMaterial color="#08CB00" emissive="#08CB00" emissiveIntensity={1.1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial
          color="#08CB00"
          transparent
          opacity={0.25}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.045, 0.06, 24]} />
        <meshBasicMaterial color="#08CB00" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(stemPoints.flatMap((p) => [p.x - position.x, p.y - position.y, p.z - position.z])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#08CB00" transparent opacity={0.3} />
      </line>
      {hovered && (
        <Html occlude={[groupRef as React.RefObject<THREE.Object3D>]} center distanceFactor={4}>
          <div className="pointer-events-none rounded-md border border-card-border bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-ink shadow-lg">
            <p className="text-accent-ink">Bengaluru, India</p>
            <p className="mt-0.5 text-ink-secondary">Security Research</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function ActivityArcs({ isNarrow }: { isNarrow: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const curves = useMemo(() => ARCS.map((arc) => buildArcCurve(arc.origin, arc.destination)), []);
  const arcPositions = useMemo(
    () => curves.map((curve) => new Float32Array(curve.getPoints(ARC_POINTS).flatMap((p) => [p.x, p.y, p.z]))),
    [curves],
  );

  const geometryRefs = useRef<(THREE.BufferGeometry | null)[]>([]);
  const materialRefs = useRef<(THREE.LineBasicMaterial | null)[]>([]);
  const nodeMaterialRefs = useRef<(THREE.MeshBasicMaterial | null)[]>([]);
  const dotRef = useRef<THREE.Mesh>(null);
  const dotMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  const nodePositions = useMemo(
    () => NODES.map((node) => latLngToVector3(node.point.lat, node.point.lng, RADIUS * 1.002)),
    [],
  );

  const opacityScale = isNarrow ? 0.5 : 1;

  useEffect(() => {
    if (!shouldReduceMotion) return;
    materialRefs.current.forEach((mat) => {
      if (mat) mat.opacity = 0;
    });
    nodeMaterialRefs.current.forEach((mat) => {
      if (mat) mat.opacity = NODE_DIM_OPACITY;
    });
    if (dotRef.current) dotRef.current.visible = false;
  }, [shouldReduceMotion]);

  useFrame(({ clock }) => {
    if (shouldReduceMotion) return;
    const t = clock.getElapsedTime() % ARC_TOTAL;
    const activeIndex = Math.floor(t / ARC_CYCLE);
    const local = t % ARC_CYCLE;

    ARCS.forEach((_, i) => {
      const geometry = geometryRefs.current[i];
      const material = materialRefs.current[i];
      if (!geometry || !material) return;

      if (i !== activeIndex) {
        material.opacity = 0;
        geometry.setDrawRange(0, 0);
        return;
      }

      if (local < ARC_GROW) {
        const p = local / ARC_GROW;
        geometry.setDrawRange(0, Math.max(2, Math.floor(p * ARC_POINTS)));
        material.opacity = ARC_TARGET_OPACITY * opacityScale * p;
      } else if (local < ARC_GROW + ARC_HOLD) {
        geometry.setDrawRange(0, ARC_POINTS);
        material.opacity = ARC_TARGET_OPACITY * opacityScale;
        const holdP = (local - ARC_GROW) / ARC_HOLD;
        if (dotRef.current) {
          dotRef.current.position.copy(curves[i].getPoint(holdP));
          dotRef.current.visible = true;
        }
        if (dotMaterialRef.current) dotMaterialRef.current.opacity = opacityScale;
      } else if (local < ARC_GROW + ARC_HOLD + ARC_FADE) {
        geometry.setDrawRange(0, ARC_POINTS);
        const fadeP = (local - ARC_GROW - ARC_HOLD) / ARC_FADE;
        material.opacity = ARC_TARGET_OPACITY * opacityScale * (1 - fadeP);
        if (dotRef.current) dotRef.current.visible = false;
      } else {
        material.opacity = 0;
        if (dotRef.current) dotRef.current.visible = false;
      }
    });

    const activeEndpoints = ARCS[activeIndex]?.endpoints ?? [];
    const nodesActive = local < ARC_GROW + ARC_HOLD;
    NODES.forEach((node, ni) => {
      const material = nodeMaterialRefs.current[ni];
      if (!material) return;
      material.opacity = nodesActive && activeEndpoints.includes(node.id) ? NODE_ACTIVE_OPACITY : NODE_DIM_OPACITY;
    });
  });

  return (
    <group>
      {arcPositions.map((positions, i) => (
        <line key={ARCS[i].id}>
          <bufferGeometry ref={(g) => { geometryRefs.current[i] = g as THREE.BufferGeometry | null; }}>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial
            ref={(m) => { materialRefs.current[i] = m; }}
            color="#EEEEEE"
            transparent
            opacity={0}
          />
        </line>
      ))}
      <mesh ref={dotRef} visible={false}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial ref={dotMaterialRef} color="#EEEEEE" transparent opacity={1} />
      </mesh>
      {nodePositions.map((pos, ni) => (
        <mesh key={NODES[ni].id} position={pos}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshBasicMaterial
            ref={(m) => { nodeMaterialRefs.current[ni] = m; }}
            color="#A6A6A6"
            transparent
            opacity={NODE_DIM_OPACITY}
          />
        </mesh>
      ))}
    </group>
  );
}

function Globe({ isNarrow }: { isNarrow: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const groupRef = useRef<THREE.Group>(null);
  const dragState = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const lastInteraction = useRef(0);
  const autoSpeed = useRef(0);
  const { gl } = useThree();
  const worldUp = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const worldRight = useMemo(() => new THREE.Vector3(1, 0, 0), []);
  const dragQuat = useMemo(() => new THREE.Quaternion(), []);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.quaternion.setFromAxisAngle(worldUp, BENGALURU_FACE_OFFSET);
    }
  }, [worldUp]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    if (dragState.current.dragging) {
      return;
    }

    if (shouldReduceMotion) return;

    const idleTime = performance.now() - lastInteraction.current;
    const targetSpeed = idleTime > 900 ? 0.08 : 0;
    autoSpeed.current += (targetSpeed - autoSpeed.current) * Math.min(delta * 2, 1);
    dragQuat.setFromAxisAngle(worldUp, autoSpeed.current * delta);
    group.quaternion.premultiply(dragQuat);
  });

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    dragState.current.dragging = true;
    dragState.current.lastX = e.clientX;
    dragState.current.lastY = e.clientY;
    lastInteraction.current = performance.now();
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!dragState.current.dragging || !groupRef.current) return;
    const deltaX = e.clientX - dragState.current.lastX;
    const deltaY = e.clientY - dragState.current.lastY;
    dragState.current.lastX = e.clientX;
    dragState.current.lastY = e.clientY;

    // Free trackball-style rotation around world axes (not local Euler axes) so the
    // globe can be spun a full 360° in any direction without gimbal-lock artifacts.
    const yaw = new THREE.Quaternion().setFromAxisAngle(worldUp, deltaX * 0.006);
    const pitch = new THREE.Quaternion().setFromAxisAngle(worldRight, deltaY * 0.006);
    groupRef.current.quaternion.premultiply(yaw).premultiply(pitch);
    lastInteraction.current = performance.now();
  };

  const endDrag = () => {
    dragState.current.dragging = false;
    lastInteraction.current = performance.now();
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointerleave", endDrag);
    return () => {
      canvas.removeEventListener("pointerup", endDrag);
      canvas.removeEventListener("pointerleave", endDrag);
    };
  }, [gl]);

  const worldTexture = useMemo(() => buildWorldTexture(), []);

  return (
    <group ref={groupRef} onPointerDown={onPointerDown} onPointerMove={onPointerMove}>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial map={worldTexture} roughness={0.7} metalness={0.1} />
      </mesh>

      <ActivityArcs isNarrow={isNarrow} />
      <BengaluruMarker groupRef={groupRef} />
    </group>
  );
}

function Scene({ isNarrow }: { isNarrow: boolean }) {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 2, 4]} intensity={1.0} color="#dfe9f7" />
      <pointLight position={[-3, -1, -2]} intensity={1.3} color="#EEEEEE" />
      <Globe isNarrow={isNarrow} />
    </>
  );
}

function StaticFallback() {
  return (
    <div
      role="img"
      aria-label="Interactive globe showing Bengaluru, India."
      className="flex h-72 w-72 flex-col items-center justify-center gap-3 rounded-full border border-card-border bg-card text-center sm:h-80 sm:w-80"
    >
      <GlobeIcon className="h-10 w-10 text-accent-ink" aria-hidden="true" />
      <p className="font-mono text-xs uppercase tracking-wide text-ink-secondary">
        Bengaluru, India
        <br />
        Security Research
      </p>
    </div>
  );
}

class GlobeErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function SecurityGlobe() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [webglOk] = useState(() => supportsWebGL());
  const isNarrow = useIsNarrowViewport();

  if (!webglOk) {
    return <StaticFallback />;
  }

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Interactive globe showing Bengaluru, India."
      className="h-72 w-72 touch-none sm:h-80 sm:w-80 lg:h-96 lg:w-96"
    >
      <GlobeErrorBoundary fallback={<StaticFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          frameloop={inView ? "always" : "never"}
          camera={{ position: [0, 0, 4.4], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.domElement.setAttribute("aria-hidden", "true");
          }}
        >
          <Suspense fallback={null}>
            <Scene isNarrow={isNarrow} />
          </Suspense>
        </Canvas>
      </GlobeErrorBoundary>
    </div>
  );
}
