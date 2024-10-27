import React from 'react';
import { Github, Linkedin, Globe, BookOpen, Package } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-[#FFD93D] border-b-4 border-black p-8 mb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black mb-4 text-black">
          Sami Abuzarifa
        </h1>
        <p className="text-2xl mb-6 text-black font-semibold">
          Product Marketing & Engineering
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6">
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

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold">
            📍 Helsinki, Finland
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold">
            📧 samabuzarifa@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}