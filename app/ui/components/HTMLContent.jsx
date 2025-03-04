"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function HTMLContent({ onValueChange }) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 });

        // Atualiza o estado sempre que `rounded` muda
        const unsubscribe = rounded.on("change", (value) => {
            onValueChange?.(value);
        });

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, []);

    return <motion.pre style={text}>{rounded}</motion.pre>;
}

/**
 * ==============   Styles   ================
 */

const text = {
    fontSize: 84,
    color: "#4ff0b7",
};
