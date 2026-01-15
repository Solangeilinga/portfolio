import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    duration = 0.6,
    className = ''
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const directions = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { x: 60, y: 0 },
        right: { x: -60, y: 0 },
        'up-left': { y: 60, x: 60 },
        'up-right': { y: 60, x: -60 },
        'down-left': { y: -60, x: 60 },
        'down-right': { y: -60, x: -60 }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0
            } : {}}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    );
}