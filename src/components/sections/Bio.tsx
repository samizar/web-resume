'use client';
import React from 'react';

export default function Bio() {
  return (
    <section className="mb-12">
      <div className="mb-8 flex items-center gap-3">
        <svg 
          className="w-8 h-8 text-black transition-transform duration-500 hover:rotate-180" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <h2 className="text-3xl font-black text-black">About Me</h2>
      </div>
      
      <div className="p-6 bg-orange-50 border-4 border-black rounded-lg 
                    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                    hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
                    hover:translate-x-1 hover:-translate-y-1 
                    transition-all duration-300">
        <p className="text-lg text-gray-800 leading-relaxed">
          I&apos;m a product-focused entrepreneur and engineer with over a decade of experience 
          building and scaling tech products. My journey spans from founding successful 
          startups to leading product marketing initiatives across Asia and Europe. 
          I&apos;m passionate about combining technical expertise with marketing strategy 
          to create impactful digital solutions.
        </p>
      </div>
    </section>
  );
}
