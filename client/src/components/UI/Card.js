import React from "react";
import { Card as Crd } from "semantic-ui-react";

const Card = props => {
  return (
    <div>
      <Crd> {props.childern} </Crd>
    </div>
  );
};

export default Card;
