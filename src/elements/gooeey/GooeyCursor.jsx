// src/components/GooeyCursor.js
import { useEffect, useRef } from 'react';
import './GooeyCursor.css';

const TAIL_LENGTH = 40;

const GooeyCursor = () => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorHistory = useRef(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));
  const cursorCircles = useRef([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    const handleClick = () => {
      cursorHistory.current = cursorHistory.current.map((pos) => ({
        x: pos.x + Math.random() * 100 - 50,
        y: pos.y + Math.random() * 100 - 50,
      }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      const newHistory = [...cursorHistory.current];
      newHistory.shift();
      newHistory.push({ x: mouseX.current, y: mouseY.current });

      newHistory.forEach((current, i) => {
        const next = newHistory[i + 1] || newHistory[TAIL_LENGTH - 1];
        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        cursorCircles.current[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
      });

      cursorHistory.current = newHistory;
      requestAnimationFrame(updateCursor);
    };

    updateCursor();
  }, []);

  return (
    <div id="cursor">
      {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          className="cursor-circle"
          ref={(el) => (cursorCircles.current[i] = el)}
        />
      ))}
    </div>
  );
};

export default GooeyCursor;
