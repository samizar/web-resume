'use client';
import React, { useState } from 'react';
import { Github, Linkedin, Globe, BookOpen, Package, Clipboard, PenLine } from 'lucide-react';
import NoteModal from '../NoteModal';

export default function Hero() {
  const [copySuccess, setCopySuccess] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('samabuzarifa@gmail.com');
    setCopySuccess('Copied!');
    setButtonClicked(true);

    setTimeout(() => {
      setCopySuccess('');
      setButtonClicked(false);
    }, 2000);
  };

  const handleWebsiteClick = () => {
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <div className="bg-[#FFD93D] border-b-4 border-black p-4 sm:p-8 mb-12 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-black mb-4 text-black">
          Sami Abuzarifa
        </h1>
        <p className="text-xl sm:text-2xl mb-6 text-black font-semibold">
          Product Marketing & Engineering
        </p>
        
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a 
              href="https://www.linkedin.com/in/samiazg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-white border-4 border-black rounded-md 
                       hover:bg-black hover:text-white transition-all duration-300 
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                       hover:translate-x-1 hover:-translate-y-1 text-black font-bold
                       text-sm sm:text-base">
              <Linkedin size={24} strokeWidth={2.5} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/samizar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                       hover:bg-black hover:text-white transition-all duration-300 
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                       hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <Github size={24} strokeWidth={2.5} />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://medium.com/@samizarifa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                       hover:bg-black hover:text-white transition-all duration-300 
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                       hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <BookOpen size={24} strokeWidth={2.5} />
              <span>Medium</span>
            </a>
            
            <a 
              href="https://www.npmjs.com/~azag" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                       hover:bg-black hover:text-white transition-all duration-300 
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                       hover:translate-x-1 hover:-translate-y-1 text-black font-bold">
              <Package size={24} strokeWidth={2.5} />
              <span>NPM</span>
            </a>
            
            <div 
              onClick={handleWebsiteClick} 
              className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                       cursor-pointer hover:bg-black hover:text-white transition-all duration-300 
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                       hover:translate-x-1 hover:-translate-y-1 text-black font-bold relative">
              <Globe size={24} strokeWidth={2.5} />
              <span>Website</span>
              {showTooltip && (
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 
                                text-xs font-bold text-white bg-red-500 border-2 border-black rounded
                                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                  You are already here!
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold">
              📍 Helsinki, Finland
            </div>
            
            <div className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold relative">
              📧 samabuzarifa@gmail.com
              <button 
                onClick={copyToClipboard} 
                className={`ml-2 p-1 rounded-md transition-all duration-300 
                           ${buttonClicked ? 'bg-green-500 text-white border-2 border-green-500' : 'bg-white border-2 border-black hover:bg-black hover:text-white'} 
                           shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                           hover:translate-x-1 hover:-translate-y-1`}>
                <Clipboard size={15} strokeWidth={1.5} />
              </button>
              {copySuccess && (
                <span className="absolute top-[-30px] left-0 px-2 py-1 text-xs bg-black text-white border-2 border-black rounded">
                  {copySuccess}
                </span>
              )}
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black rounded-md 
                       hover:bg-black hover:text-white transition-all duration-300 
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                       hover:translate-x-1 hover:-translate-y-1 text-black font-bold
                       relative animate-subtle-bounce group"
            >
              <div className="absolute -top-7 right-0 text-sm bg-black text-white px-3 py-1 rounded-full 
                              border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click me! 👋
              </div>
              <PenLine size={24} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Leave a Note</span>
            </button>
          </div>
        </div>
      </div>

      <NoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
