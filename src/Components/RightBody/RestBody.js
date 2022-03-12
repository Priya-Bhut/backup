import React from 'react';

function RestBody(props) {
  const { doShrink } = props;
  return <div className={`rest-body ${doShrink && 'body-shrinked'}`}>BODY</div>;
}

export default RestBody;
