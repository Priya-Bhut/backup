import React from "react";
import RestBody from "./restBody";
import TopNav from "./topNav";

function RightBody(props) {
  const { doShrink } = props;
  return (
    <div className={`right-body ${doShrink ? "shrinked" : null}`}>
      <TopNav doShrink={doShrink} />
      <RestBody doShrink={doShrink} />
    </div>
  );
}

export default RightBody;
