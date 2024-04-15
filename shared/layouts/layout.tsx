"use client"
import AuthGuard from '@/guards/authGuard';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }
  

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default Layout;
