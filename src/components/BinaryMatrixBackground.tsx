import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Restrained decorative layer — fully dormant until the pointer clicks (or a
// finger taps) on open background. It then pops open as a glowing green
// spotlight for ~1s before easing shut again. It never triggers over cards
// or text/interactive content. See CLAUDE.md §46a for why this is an
// intentional, scoped exception to the general "no Matrix rain" rule.
const CELL = 18;
const POP_RADIUS = 260;
const GLOW_RADIUS = 200;
const OPEN_MS = 320;
const VISIBLE_MS = 1000;
const CLOSE_MS = 500;
const GLYPH_COLOR = "rgba(57, 213, 51, 0.85)";
const GLYPH_GLOW = "#08cb00";

// Elements the pop should never trigger over — clicking/tapping one of these
// is treated as ordinary interaction with content, not a background click.
const CONTENT_SELECTOR =
  "p, h1, h2, h3, h4, h5, span, a, button, li, label, img, svg, input, textarea, .panel, .panel-raised";

function paintGrid(ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number) {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.font = "12px 'JetBrains Mono', monospace";
  ctx.textBaseline = "top";
  ctx.shadowColor = GLYPH_GLOW;
  ctx.shadowBlur = 4;
  ctx.fillStyle = GLYPH_COLOR;

  const cols = Math.ceil(width / CELL);
  const rows = Math.ceil(height / CELL);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      ctx.fillText(Math.random() > 0.5 ? "1" : "0", c * CELL, r * CELL);
    }
  }
}

export default function BinaryMatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const container = containerRef.current;
    const glow = glowRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!container || !glow || !canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const draw = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      ({ innerWidth: width, innerHeight: height } = window);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      paintGrid(ctx, width, height, dpr);
    };

    draw();

    let resizeTimer: number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(draw, 200);
    };

    let closeTimer: number;
    const pop = (x: number, y: number) => {
      window.clearTimeout(closeTimer);
      paintGrid(ctx, width, height, dpr);

      container.style.setProperty("--spot-x", `${x}px`);
      container.style.setProperty("--spot-y", `${y}px`);
      glow.style.setProperty("--spot-x", `${x}px`);
      glow.style.setProperty("--spot-y", `${y}px`);

      container.style.transitionDuration = `${OPEN_MS}ms`;
      container.style.transitionTimingFunction = "cubic-bezier(0.34, 1.56, 0.64, 1)";
      container.style.setProperty("--spot-r", `${POP_RADIUS}px`);
      glow.style.transitionDuration = "160ms";
      glow.style.opacity = "1";

      closeTimer = window.setTimeout(() => {
        container.style.transitionDuration = `${CLOSE_MS}ms`;
        container.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
        container.style.setProperty("--spot-r", "0px");
        glow.style.transitionDuration = `${CLOSE_MS}ms`;
        glow.style.opacity = "0";
      }, VISIBLE_MS);
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = document.elementFromPoint(event.clientX, event.clientY);
      if (target?.closest(CONTENT_SELECTOR)) return;
      pop(event.clientX, event.clientY);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.clearTimeout(resizeTimer);
      window.clearTimeout(closeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        transition: "--spot-r 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        WebkitMaskImage:
          "radial-gradient(circle var(--spot-r, 0px) at var(--spot-x, 50%) var(--spot-y, 50%), black 0%, transparent 100%)",
        maskImage:
          "radial-gradient(circle var(--spot-r, 0px) at var(--spot-x, 50%) var(--spot-y, 50%), black 0%, transparent 100%)",
      }}
    >
      <canvas ref={canvasRef} />
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          opacity: 0,
          transition: "opacity 500ms ease",
          background: `radial-gradient(circle ${GLOW_RADIUS}px at var(--spot-x, 50%) var(--spot-y, 50%), rgba(57, 213, 51, 0.35), transparent 70%)`,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
