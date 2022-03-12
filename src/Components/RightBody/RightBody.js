import React from 'react';
import TopNavbar from '../TopNavbar';
import RestBody from './RestBody';

function RightBody(props) {
  const { doShrink } = props;
  return (
    <div className={`right-body ${doShrink && 'shrinked'}`}>
      <TopNavbar doShrink={doShrink} />
      <RestBody doShrink={doShrink} />
    </div>
  );
}

export default RightBody;
