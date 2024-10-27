'use client';

import React from 'react';
import { Github, Linkedin, Globe, BookOpen, Package, Mail } from 'lucide-react';

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:samabuzarifa@gmail.com';
  };

  return (
    <footer className="border-t-4 border-black bg-[#FFD93D] mt-20">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Contact Button */}
          <button 
            onClick={handleEmailClick}
            className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                     hover:bg-black hover:text-white transition-all duration-300 
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                     hover:translate-x-1 hover:-translate-y-1 text-black font-bold w-auto"
          >
            <Mail size={24} strokeWidth={2.5} />
            <span>Get in Touch</span>
          </button>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/samiazg/" 
               className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <Linkedin size={24} strokeWidth={2.5} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/samizar" 
               className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <Github size={24} strokeWidth={2.5} />
              <span>GitHub</span>
            </a>
            <a href="https://medium.com/@samizarifa" 
               className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <BookOpen size={24} strokeWidth={2.5} />
              <span>Medium</span>
            </a>
            <a href="https://www.npmjs.com/~azag" 
               className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <Package size={24} strokeWidth={2.5} />
              <span>NPM</span>
            </a>
            <a href="https://abuzarifa.com" 
               className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <Globe size={24} strokeWidth={2.5} />
              <span>Website</span>
            </a>
          </div>

          <p className="text-black font-bold">© 2024 Sami Abuzarifa</p>
        </div>
      </div>
    </footer>
  );
}