"use client";

import { motion, useMotionValue } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

export default function Drag() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      className="fixed pointer-events-none"
      ref={ref}
      style={{ ...cursorStyle, x, y }}
    />
  );
}

function useFollowPointer(ref) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      x.set(clientX - 17); // Centraliza o cursor corretamente
      y.set(clientY - 17);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */

const cursorStyle = {
  width: 50, // Menor para caber melhor dentro do ponteiro
  height: 50,
  border: "2px solid white",
  backgroundColor: "transparent",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  mixBlendMode: "difference", // Faz o cursor se destacar sobre fundos claros e escuros
  boxShadow: "0 0 15px 5px rgba(79, 240, 184, 0.47)", // Brilho mais suave
};