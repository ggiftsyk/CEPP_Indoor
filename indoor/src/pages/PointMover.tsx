// PointMover.tsx
import React, { useState, useEffect } from 'react';

const PointMover: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - 1 }));
        break;
      case 'ArrowDown':
        setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 1 }));
        break;
      case 'ArrowLeft':
        setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 1 }));
        break;
      case 'ArrowRight':
        setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 1 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div
      className="w-8 h-8 bg-pointGreen rounded-full absolute"
      style={{ left: `${position.x * 20}px`, top: `${position.y * 20}px` }}
    ></div>
  );
};

export default PointMover;
