import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      {/* Router Outlet */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;