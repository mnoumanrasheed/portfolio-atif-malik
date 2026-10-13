import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex-grow pt-24 sm:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
