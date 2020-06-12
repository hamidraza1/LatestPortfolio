import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const cardsContainer = (props) => {
  const images = [
    "../images/project1.jpg",
    "../images/project1.jpg",
    "../images/project1.jpg",
  ];
  return (
    <motion.div
      className=" flex flex-row overflow-x-auto disable-scrollbars -mx-2"
      initial={{ scale: 0, rotation: -180 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Card images={images} />
    </motion.div>
  );
};

export default cardsContainer;
