import React from 'react';
import RestBody from './RestBody';
import TopNav from './TopNav';

function RightBody(props) {
  const { doShrink } = props;
  return (
    <div className={`right-body ${doShrink && 'shrinked'}`}>
      <TopNav doShrink={doShrink} />
      <RestBody doShrink={doShrink} />
    </div>
  );
}

export default RightBody;
