import React, { useEffect, useRef } from "react";

import canvasConfetti from "canvas-confetti";

export const Congratulation = () => {
  const confettiRef = useRef(null);

  const execute = () => {
    canvasConfetti({
      colors: ["#21B9C1"],
      particleCount: 500,
      spread: 250,
      origin: {
        x: 0.5,
        y: 0.5,
      },
    });
  };

  useEffect(() => {
    if (confettiRef.current) {
      canvasConfetti.create(confettiRef.current, {
        resize: true,
        useWorker: true,
      });
    }
  }, [confettiRef.current]);

  useEffect(() => {
    setTimeout(() => {
      execute();
    }, 200);
  }, [confettiRef.current]);

  if (!confettiRef.current) return null;

  return (
    <div>
      <canvas ref={confettiRef} />
    </div>
  );
};

export default Congratulation;
