"use client";

import { useEffect, useRef } from "react";

class Particle {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  r = 0;
  alpha = 0;
  color = "59,130,246";

  constructor(private W: number, private H: number) {
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.W;
    this.y = Math.random() * this.H;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.r = Math.random() * 2 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color =
      Math.random() > 0.5
        ? "59,130,246"
        : Math.random() > 0.5
          ? "124,58,237"
          : "34,211,238";
  }

  update(mouse: { x: number | null; y: number | null }, W: number, H: number) {
    this.W = W;
    this.H = H;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        this.vx -= (dx / dist) * 0.03;
        this.vy -= (dy / dist) * 0.03;
      }
    }

    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.99;
    this.vy *= 0.99;

    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let frameId = 0;
    let cancelled = false;
    let W = 0;
    let H = 0;
    const mouse = { x: null as number | null, y: null as number | null };
    let particles: Particle[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      if (particles.length === 0) {
        particles = Array.from({ length: 50 }, () => new Particle(W, H));
      }
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const draw = () => {
      if (cancelled) return;
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.update(mouse, W, H);
        p.draw(ctx);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    const init = () => {
      if (cancelled) return;
      resize();
      draw();
      window.addEventListener("resize", resize);
      document.addEventListener("mousemove", onMove);
    };

    const idleCallback = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1));
    idleCallback(init);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      aria-hidden="true"
      className="absolute inset-0 z-0"
    />
  );
}
