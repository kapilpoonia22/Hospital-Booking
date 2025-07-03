import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '40px' }}>{children}</div>
    </>
  );
};

export default Layout;
