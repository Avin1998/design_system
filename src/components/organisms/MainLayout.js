import React from 'react';
import LeftSideNavBar from '../organisms/LeftSideNavBar';
import TopNavBar from '../organisms/TopNavBar';

export default function MainLayout({ children, ...props }) {
  return (
    <div className="min-h-screen bg-dark-bg" {...props}>
      <LeftSideNavBar />
      <TopNavBar />
      <main className="ml-20 pt-[70px] min-h-screen">
        {children}
      </main>
    </div>
  );
}