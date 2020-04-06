import React, { Fragment } from "react";

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={(e) => props.onSushiEaten(props.sushi)}>
        {/* Tell me if this sushi has been eaten! */
        props.eatenSushi.includes(props.sushi) ? null : (
          <img src={props.sushi.img_url} width="100%" alt="sushi" />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
