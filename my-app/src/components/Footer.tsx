import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="col-span-2">
            <h2 className="text-white text-lg font-semibold mb-4">À propos de moi </h2>
            <p className="text-gray-400">
              A modern blog platform sharing insights and stories about technology,
              development, and digital culture.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/articles" className="hover:text-white">Articles</a></li>
              <li><a href="/categories" className="hover:text-white">Categories</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Connect</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Blog Title. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;