import React from 'react';

const NoDataIndicatePage = (props) => {
  const { icon, content } = props || {};
  return (
    <div className='no-data-indicate-content'>
      <i className={icon}></i>
      <h5>{content}</h5>
    </div>
  );
};

export default NoDataIndicatePage;
