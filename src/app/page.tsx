// src/app/page.tsx
import React from 'react'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Footer from '@/components/sections/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <div className="max-w-4xl mx-auto px-4">
        <Skills />
        <Experience />
      </div>
      <Footer />
    </main>
  )
}