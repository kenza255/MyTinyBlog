import React from 'react';
import { Menu, PlusCircle } from 'lucide-react';

interface HeaderProps { // fct pour créer un nouvel article
  onNewArticle: () => void;
}
export function Header({onNewArticle}: 
  HeaderProps)
{
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <h1 className="ml-4 text-xl font-bold text-gray-900">My Tiny Blog</h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/articles" className="text-gray-600 hover:text-gray-900">
              Articles
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* New Article Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onNewArticle}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <PlusCircle className="w-5 h-5" />
              Nouvel article
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
