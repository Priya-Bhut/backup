import React from 'react';
import { Button } from 'react-bootstrap';

function SecondHeader() {
  return (
    <div className='secondHeader'>
      <h5>OKR</h5>
      <Button className='addDesignationButton brilCrmButton'>
        <i className='fa fa-plus-square' />
        <span className='m-l-10'>Add OKR</span>
      </Button>
    </div>
  );
}

export default SecondHeader;
