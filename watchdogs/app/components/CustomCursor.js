'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTarget, setHoverTarget] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const updatePosition = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateCursor = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(isInteractive);
      
      if (isInteractive) {
        const rect = (target.closest('a') || target.closest('button') || target).getBoundingClientRect();
        setHoverTarget({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
        });
      } else {
        setHoverTarget(null);
      }
    };

    const animate = () => {
      // Smooth lerp animation
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      setPosition({ x: currentX, y: currentY });
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursor);
    window.addEventListener('mouseout', () => {
      setIsHovering(false);
      setHoverTarget(null);
    });

    animate();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${isHovering ? styles.cursorHover : ''}`}
        style={{
          left: `${hoverTarget ? hoverTarget.x : position.x}px`,
          top: `${hoverTarget ? hoverTarget.y : position.y}px`,
          width: hoverTarget ? `${hoverTarget.width + 20}px` : '40px',
          height: hoverTarget ? `${hoverTarget.height + 20}px` : '40px',
        }}
      />
      
      {/* Cursor dot */}
      <div
        className={`${styles.cursorDot} ${isHovering ? styles.cursorDotHover : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
