import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  onNewArticle: () => void;
}

export function Layout({ children, onNewArticle }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onNewArticle={onNewArticle} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}