
import React from "react";


const error = (props) => (
  <>
    <h1>Error {props.type}</h1>
    <div>{props.children}</div>
  </>
);

export default error;