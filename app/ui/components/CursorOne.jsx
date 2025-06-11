"use client"

import { motion, useSpring } from "motion/react"
import { useEffect, useRef } from "react"

export default function CursorOne() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)

  return (
    <motion.div
      ref={ref}
      style={{
        ...ball,
        x,
        y,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  )
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

export function useFollowPointer(ref) {
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      x.set(clientX - 15) // 30px / 2 para centralizar
      y.set(clientY - 15)
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return { x, y }
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: 30,
  height: 30,
  backgroundColor: "#fa377e",
  borderRadius: "50%",
}
