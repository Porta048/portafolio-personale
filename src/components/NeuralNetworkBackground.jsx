import React, { useRef, useEffect } from 'react';

const NODES = 18; // Numero di nodi
const LAYERS = 4; // Numero di layer (livelli)
const NODE_RADIUS = 7;
const LINE_COLOR = 'rgba(120,200,255,0.25)';
const NODE_COLOR = 'rgba(120,200,255,0.85)';
const BG_COLOR = 'rgba(255,255,255,1)';

function generateNetwork(width, height) {
  // Genera nodi distribuiti su layer verticali
  const layers = [];
  for (let l = 0; l < LAYERS; l++) {
    const nodesInLayer = Math.floor(NODES / LAYERS) + (l < NODES % LAYERS ? 1 : 0);
    const layer = [];
    for (let n = 0; n < nodesInLayer; n++) {
      const x = ((l + 1) / (LAYERS + 1)) * width;
      const y = ((n + 1) / (nodesInLayer + 1)) * height + (Math.random() - 0.5) * 20;
      layer.push({ x, y, vx: (Math.random()-0.5)*0.2, vy: (Math.random()-0.5)*0.2 });
    }
    layers.push(layer);
  }
  return layers;
}

export default function NeuralNetworkBackground({ className = '', style = {} }) {
  const canvasRef = useRef(null);
  const networkRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      networkRef.current = generateNetwork(width, height);
    }
    window.addEventListener('resize', resize);
    networkRef.current = generateNetwork(width, height);

    function animate() {
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);
      // Disegna connessioni
      for (let l = 0; l < networkRef.current.length - 1; l++) {
        const layer = networkRef.current[l];
        const nextLayer = networkRef.current[l + 1];
        for (const node of layer) {
          for (const nextNode of nextLayer) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nextNode.x, nextNode.y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }
      // Disegna nodi
      for (const layer of networkRef.current) {
        for (const node of layer) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, NODE_RADIUS, 0, 2 * Math.PI);
          ctx.fillStyle = NODE_COLOR;
          ctx.shadowColor = NODE_COLOR;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      // Anima leggermente i nodi
      for (const layer of networkRef.current) {
        for (const node of layer) {
          node.x += node.vx;
          node.y += node.vy;
          // Rimbalzo ai bordi
          if (node.x < NODE_RADIUS || node.x > width - NODE_RADIUS) node.vx *= -1;
          if (node.y < NODE_RADIUS || node.y > height - NODE_RADIUS) node.vy *= -1;
        }
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