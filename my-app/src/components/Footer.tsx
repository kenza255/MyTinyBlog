import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="col-span-2">
            <h2 className="text-white text-lg font-semibold mb-4">À propos de mon blog  </h2>
            <p className="text-gray-400">
              Je  te partages mes astuces pour trouver ton alternance ! 
            </p>
          </div>

          {/* Liens réseaux */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Liens utils</h2>
            <ul className="space-y-2">
              <li><a href="/articles" className="hover:text-white">Articles</a></li>

              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Mes réseaux</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Github className="h-5 w-5" />
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
            © {new Date().getFullYear()} My Tiny Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;