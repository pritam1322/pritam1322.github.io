// app/components/HeroSection.tsx

'use client';

import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-blue-400 font-inter text-lg font-medium tracking-wide animate-fade-in-up">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-inter font-bold text-white leading-tight animate-fade-in-up delay-200">
                Pritam Jathar
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 animate-fade-in-up delay-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-light text-gray-300 animate-fade-in-up delay-600">
              Software Developer
            </h2>

            <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-800">
              Crafting digital experiences with clean code and creative solutions.
              Passionate about building scalable applications that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-1000">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-inter font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in-up delay-1200">
              {[
                { label: 'GitHub', href: 'https://github.com/pritam1322', iconPath: 'M12 0c-6.626...' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pritam-jathar-25a08417a/', iconPath: 'M20.447 20.452h-3.554...' },
                { label: 'Twitter', href: 'https://x.com/Pritamjathar94', iconPath: 'M23.953 4.57a10...' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={link.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-inter font-medium shadow-lg animate-bounce">
              Available for work
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
