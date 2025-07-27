import React from 'react';
import LeftSideNavBar from '../organisms/LeftSideNavBar';
import TopNavBar from '../organisms/TopNavBar';
import './MainLayout.css';

export default function MainLayout({ children, ...props }) {
  return (
    <div className="main-layout" {...props}>
      <LeftSideNavBar />
      <TopNavBar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}