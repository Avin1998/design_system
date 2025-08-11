import React from 'react';
import LeftSideNavBar from './LeftSideNavBar';
import TopNavBar from './TopNavBar';

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white" {...props}>
      <LeftSideNavBar />
      <TopNavBar />
      <main className="ml-20 mt-[70px] container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;