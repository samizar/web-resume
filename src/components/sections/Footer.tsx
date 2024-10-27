'use client';

import React from 'react';
import { Github, Linkedin, Globe, BookOpen, Package, Mail } from 'lucide-react';

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:samabuzarifa@gmail.com';
  };

  return (
    <footer className="border-t-4 border-black bg-[#FFD93D] mt-20">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Contact Button */}
          <button 
            onClick={handleEmailClick}
            className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-md 
                     hover:bg-black hover:text-white transition-all duration-300 
                     shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                     hover:translate-x-1 hover:-translate-y-1 text-black font-semibold text-sm w-auto"
          >
            <Mail size={15} strokeWidth={2} />
            <span>Get in Touch</span>
          </button>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/samiazg/" 
               className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-semibold text-sm">
              <Linkedin size={15} strokeWidth={2} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/samizar" 
               className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-semibold text-sm">
              <Github size={15} strokeWidth={2} />
              <span>GitHub</span>
            </a>
            <a href="https://medium.com/@samizarifa" 
               className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-semibold text-sm">
              <BookOpen size={15} strokeWidth={2} />
              <span>Medium</span>
            </a>
            <a href="https://www.npmjs.com/~azag" 
               className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-semibold text-sm">
              <Package size={15} strokeWidth={2} />
              <span>NPM</span>
            </a>
            <a href="https://abuzarifa.com" 
               className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-black rounded-md 
                          hover:bg-black hover:text-white transition-all duration-300 
                          shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                          hover:translate-x-1 hover:-translate-y-1 text-black font-semibold text-sm">
              <Globe size={15} strokeWidth={2} />
              <span>Website</span>
            </a>
          </div>

          <p className="text-black font-semibold text-sm">© 2024 Sami Abuzarifa</p>
        </div>
      </div>
    </footer>
  );
}
