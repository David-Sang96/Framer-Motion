import { motion, useCycle } from "framer-motion";
import React from "react";

const loaderVariant = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationThree: {
    x: [30, -30, 30, -30, 30],
    y: [0, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1,
        ease: "easeOut",
      },
      y: {
        yoyo: Infinity,
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree"
  );
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()} style={{ cursor: "pointer" }}>
        Let the ball bounce
      </div>
    </>
  );
};

export default Loader;
