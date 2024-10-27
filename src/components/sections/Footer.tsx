'use client';

import React from 'react';
import { Github, Linkedin, Globe, BookOpen, Package, Mail } from 'lucide-react';

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:samabuzarifa@gmail.com';
  };

  const iconStyles = "text-black stroke-2";

  return (
    <footer className="border-t-4 border-black bg-[#FFD93D] mt-20">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Contact Button */}
          <button 
            onClick={handleEmailClick}
            className="px-6 py-3 bg-white border-4 border-black rounded-md 
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                     hover:shadow-none hover:translate-x-1 hover:-translate-y-1 
                     transition-all duration-300 text-black font-bold
                     flex items-center gap-2"
          >
            <Mail size={24} strokeWidth={2.5} className="text-black" />
            <span className="text-black font-bold">Get in Touch</span>
          </button>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/samiazg/" 
               className="p-3 bg-white border-4 border-black rounded-md 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          hover:shadow-none hover:translate-x-1 hover:-translate-y-1 
                          hover:bg-black hover:text-white
                          transition-all duration-300">
              <Linkedin size={24} strokeWidth={2.5} className={iconStyles} />
            </a>
            <a href="https://github.com/samizar" 
               className="p-3 bg-white border-4 border-black rounded-md 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          hover:shadow-none hover:translate-x-1 hover:-translate-y-1 
                          hover:bg-black hover:text-white
                          transition-all duration-300">
              <Github size={24} strokeWidth={2.5} className={iconStyles} />
            </a>
            <a href="https://medium.com/@samizarifa" 
               className="p-3 bg-white border-4 border-black rounded-md 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          hover:shadow-none hover:translate-x-1 hover:-translate-y-1 
                          hover:bg-black hover:text-white
                          transition-all duration-300">
              <BookOpen size={24} strokeWidth={2.5} className={iconStyles} />
            </a>
            <a href="https://www.npmjs.com/~azag" 
               className="p-3 bg-white border-4 border-black rounded-md 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          hover:shadow-none hover:translate-x-1 hover:-translate-y-1 
                          hover:bg-black hover:text-white
                          transition-all duration-300">
              <Package size={24} strokeWidth={2.5} className={iconStyles} />
            </a>
            <a href="https://abuzarifa.com" 
               className="p-3 bg-white border-4 border-black rounded-md 
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          hover:shadow-none hover:translate-x-1 hover:-translate-y-1 
                          hover:bg-black hover:text-white
                          transition-all duration-300">
              <Globe size={24} strokeWidth={2.5} className={iconStyles} />
            </a>
          </div>

          <p className="text-black font-bold">© 2024 Sami Abuzarifa</p>
        </div>
      </div>
    </footer>
  );
}
