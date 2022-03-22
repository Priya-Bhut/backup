import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function SecondHeader(props) {
  const { organisationUrl } = useParams() || {};
  return (
    <div className='secondHeader'>
      <h5>OKR</h5>
      <div className='slideTab'>
        <Link to={`/${organisationUrl}/IndividualOKRs`}>
          <span className='OKRs'>Individual-OKRs</span>
        </Link>
        <Link to={`/${organisationUrl}/CorporateOKRs`}>
          <span className='OKRs'>Corporate-OKRs</span>
        </Link>
      </div>

      <Button className='addDesignationButton brilCrmButton' onClick={props?.addNewOkr}>
        <i className='fa fa-plus-square' />
        <span className='m-l-10'>Add OKR</span>
      </Button>
    </div>
  );
}

export default SecondHeader;
