import { motion } from "framer-motion";
import React, { useEffect } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4, //higher mass slower | lower mass a bit quicker
      damping: 8, //higher number slower | lower number quicker
      when: "beforeChildren",
      staggerChildren: 0.4, //for setting children variant delay time
      //when ဆိုတဲံ့ orchestration property က သူ့ရဲ့ကလေးတွေဆီမှာဘယ်ချိန်ကျပေါ်စေချင်လဲဆိုတာမှာသုံးတယ်
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order"
    >
      <h2>
        Thank you for your order{" "}
        <span role="img" aria-label="">
          😍
        </span>
      </h2>

      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
