import React from 'react';
import { Link, useParams } from 'react-router-dom';

function AllMyOKRsHeader() {
  const { organisationUrl } = useParams() || {};
  return (
    <div className='secondHeader'>
      <div className='slideTab'>
        <Link to={`/${organisationUrl}/IndividualOKRs`}>
          <span className='OKRs'>Individual-OKRs</span>
        </Link>
        <Link to={`/${organisationUrl}/CorporateOKRs`}>
          <span className='OKRs'>Corporate-OKRs</span>
        </Link>
      </div>
    </div>
  );
}

export default AllMyOKRsHeader;
