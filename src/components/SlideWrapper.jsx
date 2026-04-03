import { motion } from "framer-motion";

const MotionDiv = motion.div;

const slideVariants = {
  enter: (dir) => ({
    x: dir === 0 ? 0 : dir > 0 ? 40 : -40,
    y: dir === 0 ? 20 : 10,
    opacity: 0,
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -40 : 40,
    y: -8,
    opacity: 0,
  }),
};

export function SlideWrapper({ children, direction }) {
  return (
    <MotionDiv
      layout={false}
      className="pointer-events-auto absolute inset-0 flex min-h-0 w-full items-center justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-24 presentation-scale"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full max-w-6xl text-left">{children}</div>
    </MotionDiv>
  );
}
