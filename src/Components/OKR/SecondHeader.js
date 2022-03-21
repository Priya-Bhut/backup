import React from 'react';
import { Button } from 'react-bootstrap';

function SecondHeader(props) {
  return (
    <div className='secondHeader'>
      <h5>OKR</h5>
      <div className='slideTab'>
        <div className='IndividualOKRs'>Individual-OKRs</div>
        <div className='CorporateOKRs'>Corporate-OKRs</div>
      </div>

      <Button className='addDesignationButton brilCrmButton' onClick={props?.addNewOkr}>
        <i className='fa fa-plus-square' />
        <span className='m-l-10'>Add OKR</span>
      </Button>
    </div>
  );
}

export default SecondHeader;
