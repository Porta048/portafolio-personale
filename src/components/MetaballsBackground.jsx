import React, { useRef, useEffect } from 'react';

const COLORS = ['rgba(0,0,0,0.85)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.55)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.6)'];
const BALLS = 7;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function MetaballsBackground({ className = '', style = {} }) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const balls = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);

    // Inizializza le palle
    balls.current = Array.from({ length: BALLS }, (_, i) => ({
      x: randomBetween(0.2, 0.8) * width,
      y: randomBetween(0.2, 0.8) * height,
      r: randomBetween(60, 110),
      vx: randomBetween(-1.2, 1.2),
      vy: randomBetween(-1.2, 1.2),
      color: COLORS[i % COLORS.length],
    }));

    function metaball(x, y, r, balls) {
      let sum = 0;
      for (const b of balls) {
        const dx = x - b.x;
        const dy = y - b.y;
        sum += (b.r * b.r) / (dx * dx + dy * dy);
      }
      return sum;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Disegna effetto metaballs
      const image = ctx.createImageData(width, height);
      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          let maxVal = 0;
          let color = [0,0,0,180];
          for (const b of balls.current) {
            const dx = x - b.x;
            const dy = y - b.y;
            const val = (b.r * b.r) / (dx * dx + dy * dy + 1);
            if (val > maxVal) {
              maxVal = val;
              // rgba string to array
              const rgba = b.color.match(/rgba?\((\d+), ?(\d+), ?(\d+)(?:, ?([\d.]+))?\)/);
              color = [parseInt(rgba[1]), parseInt(rgba[2]), parseInt(rgba[3]), Math.round((rgba[4] ? parseFloat(rgba[4]) : 1) * 255)];
            }
          }
          if (maxVal > 1.1) {
            const idx = (y * width + x) * 4;
            image.data[idx] = color[0];
            image.data[idx+1] = color[1];
            image.data[idx+2] = color[2];
            image.data[idx+3] = color[3];
          }
        }
      }
      ctx.putImageData(image, 0, 0);
      // Muovi le palle
      for (const b of balls.current) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < b.r || b.x > width - b.r) b.vx *= -1;
        if (b.y < b.r || b.y > height - b.r) b.vy *= -1;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        ...style,
      }}
    />
  );
} 