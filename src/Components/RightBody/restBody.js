import React from "react";

function RestBody(props) {
  const { doShrink } = props;
  return <div className={`rest-body ${doShrink ? "shrinked" : null}`}></div>;
}

export default RestBody;
