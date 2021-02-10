import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, title, category, theme, backgroundColor }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`} style={{background: `${backgroundColor}`}}>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card
          key={card.id}
          backPage={card.backPage}
          backgroundColor={card.backgroundColor}
          {...card}
          isSelected={card.id === selectedId}
        />
      ))}
    </ul>
  );
}
