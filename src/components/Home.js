import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const buttonVariant = {
  hover: {
    // scale: [1,1.1,1,1.1,1,1.1,1],
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      // yoyo: 10,
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    //duration can only be used if type is tween
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2 animate={{ fontSize: 50, color: "#ff2994", x: 100, y: -100 }}>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
