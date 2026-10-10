import * as THREE from "three";
import { feature, mesh } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { MultiPolygon, Polygon } from "geojson";
// Source: world-atlas@2.0.2 countries-110m.json (Natural Earth 110m, ISC license)
import worldTopology from "../data/countries-110m.json";

const WIDTH = 2048;
const HEIGHT = 1024;

const OCEAN = "#0b1100";
const LAND_DOT = "#eaeae4";
const COASTLINE = "rgba(238, 238, 238, 0.18)";
const GRATICULE = "rgba(238, 238, 238, 0.07)";

const DOT_SPACING = 9;
const DOT_RADIUS = 1.6;

function project(lng: number, lat: number): [number, number] {
  return [((lng + 180) / 360) * WIDTH, ((90 - lat) / 180) * HEIGHT];
}

function ringToPath(path: Path2D, ring: number[][]) {
  ring.forEach(([lng, lat], i) => {
    const [x, y] = project(lng, lat);
    if (i === 0) path.moveTo(x, y);
    else path.lineTo(x, y);
  });
  path.closePath();
}

function drawLine(ctx: CanvasRenderingContext2D, line: number[][]) {
  line.forEach(([lng, lat], i) => {
    const [x, y] = project(lng, lat);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
}

function drawGraticule(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = GRATICULE;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let lng = -180; lng <= 180; lng += 30) {
    const [x] = project(lng, 0);
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT);
  }
  for (let lat = -80; lat <= 80; lat += 20) {
    const [, y] = project(0, lat);
    ctx.moveTo(0, y);
    ctx.lineTo(WIDTH, y);
  }
  ctx.stroke();
}

function drawLandDots(ctx: CanvasRenderingContext2D, landPath: Path2D) {
  ctx.save();
  ctx.clip(landPath);
  ctx.fillStyle = LAND_DOT;
  for (let y = 0; y <= HEIGHT; y += DOT_SPACING) {
    for (let x = 0; x <= WIDTH; x += DOT_SPACING) {
      ctx.beginPath();
      ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

let cached: THREE.CanvasTexture | null = null;

export function buildWorldTexture(): THREE.CanvasTexture {
  if (cached) return cached;

  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = OCEAN;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const topology = worldTopology as unknown as Topology;
  const landObject = topology.objects.land as unknown as GeometryCollection;

  const land = feature(topology, landObject);
  const landFeatures = "features" in land ? land.features : [land];

  const landPath = new Path2D();
  landFeatures.forEach((f) => {
    const geometry = f.geometry as Polygon | MultiPolygon;
    const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
    polygons.forEach((rings) => rings.forEach((ring) => ringToPath(landPath, ring)));
  });

  drawLandDots(ctx, landPath);

  const coastline = mesh(topology, landObject);
  ctx.strokeStyle = COASTLINE;
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  coastline.coordinates.forEach((line) => drawLine(ctx, line));
  ctx.stroke();

  drawGraticule(ctx);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.needsUpdate = true;

  cached = texture;
  return texture;
}
