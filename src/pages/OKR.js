import React, { useState } from 'react';
import OKRView from '../Components/OKR/OKRView';
import SecondHeader from '../Components/OKR/SecondHeader';

export default function OKR(props) {
  const [isNewOkr, setIsNewOkr] = useState(false);
  return (
    <div>
      <SecondHeader setIsNewOkr={setIsNewOkr} handleAlert={props?.handleAlert} />
      <OKRView isNewOkr={isNewOkr} handleAlert={props?.handleAlert} setIsNewOkr={setIsNewOkr} />
    </div>
  );
}
