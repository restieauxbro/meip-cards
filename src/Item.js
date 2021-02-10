import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const { category, title, backPage, backgroundColor } = items.find((item) => item.id === id);
  function createMarkup() {
    return { __html: backPage }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`} >
          
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
            style={{background: `${backgroundColor}`}}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate dangerouslySetInnerHTML={createMarkup()}>
            
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
