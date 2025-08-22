'use client';

import { useEffect, useRef } from 'react';

interface BackgroundCanvasProps {
  className?: string;
}

export default function BackgroundCanvas({ className = "fixed top-0 left-0 w-full h-full pointer-events-none" }: BackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let pts: any[] = [];
    const n = 60;
    const d = 120;
    const cols = {
      c1: '#60284A',
      c2: '#435177',
      c3: '#FFFFFF',
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      init();
    };

    const init = () => {
      pts = [];
      for (let i = 0; i < n; i++) {
        const ck = Object.keys(cols);
        const c = cols[ck[Math.floor(Math.random() * ck.length)] as keyof typeof cols];
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          c: c
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const op = pts[j];
          const dx = p.x - op.x;
          const dy = p.y - op.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < d) {
            const g = ctx.createLinearGradient(p.x, p.y, op.x, op.y);
            g.addColorStop(0, p.c);
            g.addColorStop(1, op.c);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(op.x, op.y);
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.3 * (1 - dist / d);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} id="bg" />;
}
