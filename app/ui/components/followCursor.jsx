"use client"

import { frame, motion, useMotionValue, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"

export default function FollowCursor() {
    const ref = useRef(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div ref={ref} style={{ ...ball, x, y }} className="fixed" />
}


export function useFollowPointer(ref) {
    const xPoint = useMotionValue(0)
    const yPoint = useMotionValue(0)
    const x = useSpring(xPoint)
    const y = useSpring(yPoint)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current

            frame.read(() => {
                xPoint.set(
                    clientX - element.offsetLeft - element.offsetWidth / 2
                )
                yPoint.set(
                    clientY - element.offsetTop - element.offsetHeight / 2
                )
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 30,
    height: 30,
    backgroundColor: "#243aff",
    borderRadius: "50%",
}
