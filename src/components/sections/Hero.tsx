'use client';
import React, { useState } from 'react';
import { Github, Linkedin, Globe, BookOpen, Package, Clipboard } from 'lucide-react';

export default function Hero() {
  const [copySuccess, setCopySuccess] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
    }, 2000); // Tooltip will disappear after 2 seconds
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
    
    {/* Update social links container */}
    <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
      {/* Update each social link's padding */}
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

        <div className="flex flex-wrap gap-4 items-center">
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
        </div>
      </div>
    </div>
  );
}
