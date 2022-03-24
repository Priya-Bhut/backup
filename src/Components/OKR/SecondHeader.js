import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Link, useParams } from 'react-router-dom';

function SecondHeader(props) {
  const { organisationUrl } = useParams() || {};
  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const { pathname } = useLocation();
  const liTags = [
    { text: 'Individual OKR', path: `/${organisationUrl}/OKR/IndividualOKR` },
    { text: 'Corporate OKR', path: `/${organisationUrl}/OKR/CorporateOKR` },
  ];
  const handleClick = (i) => {
    setIsActiveIndex(i);
  };
  useEffect(() => {
    if (pathname === `/${organisationUrl}/OKR/CorporateOKR`) {
      setIsActiveIndex(1);
    } else {
      setIsActiveIndex(0);
    }
  }, [pathname]);
  return (
    <div className='secondHeader'>
      <h5>OKR</h5>
      <div className='slideTab'>
        {liTags?.map(({ text, path }, index) => (
          <Link
            to={path}
            key={index}
            className={isActiveIndex === index && 'active'}
            onClick={() => handleClick(index)}
          >
            {text}
          </Link>
        ))}
      </div>

      <Button className='addDesignationButton brilCrmButton' onClick={() => props?.setIsNewOkr(true)}>
        <i className='fa fa-plus-square' />
        <span className='m-l-10'>Add OKR</span>
      </Button>
    </div>
  );
}

export default SecondHeader;
