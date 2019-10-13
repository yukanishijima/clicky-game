import React from "react";
import "./style.css";

function Card(props) {
  return (
    <>
      <div className="image-card" data-id={props.id} onClick={() => props.cardClick(props.id)}>
        <img alt={props.name} src={props.image} data-clicked={props.clicked} />
      </div>
    </>
  );
};

export default Card;