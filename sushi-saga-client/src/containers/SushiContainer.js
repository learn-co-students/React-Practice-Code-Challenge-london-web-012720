import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((sushiPiece, index) => (
          <Sushi
            sushi={sushiPiece}
            key={index}
            onSushiEaten={props.onSushiEaten}
            eatenSushi={props.eatenSushi}
          />
        ))}
        <MoreButton handleMoreSushi={props.handleMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
