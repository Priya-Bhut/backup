import React from 'react';
import { Outlet } from 'react-router';
import SecondHeader from '../Components/OKR/SecondHeader';

export default function OKR() {
  return (
    <div>
      <SecondHeader />
      <Outlet />
    </div>
  );
}
