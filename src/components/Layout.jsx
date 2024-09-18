import React from 'react';
import Navbar from './Navbar';
// import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-[1797px] justify-center mx-auto my-0">
      <main className="flex-grow px-[20px]">
        {children}
      </main>
      <Navbar />
    </div>
  );
};

export default Layout;