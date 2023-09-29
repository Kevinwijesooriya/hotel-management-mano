import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Views/HouseKeeping/Common/Header';

const HouseKeeping = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HouseKeeping