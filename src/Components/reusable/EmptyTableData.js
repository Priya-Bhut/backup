import React, { useEffect, useState } from 'react';
// import leaveCss from "../leave/leave.module.css";

const EmptyTableData = ({ dataAvailabel, label }) => {
  const [hasNoData, setHasNoData] = useState(false);
  useEffect(() => {
    if (dataAvailabel === false) {
      setTimeout(() => {
        setHasNoData(true);
      }, 5000);
    }
  }, [dataAvailabel]);
  return (
    <div className='noDataFound'>
      {hasNoData === false ? (
        <div className='no-data-indicate-page'>
          <div className='dot-type-loader' />
        </div>
      ) : (
        <h4>{label}</h4>
      )}
    </div>
  );
};

export default EmptyTableData;
