'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <section id="about" className="py-20 bg-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-inter font-bold text-gray-900 mb-4">About</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Passionate developer crafting digital solutions with precision and creativity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-inter font-semibold text-gray-900">
                  Building the Future, One Line at a Time
                </h3>
                <p className="text-lg text-gray-600 font-inter leading-relaxed">
                  I&apos;m a Software developer with 3 years of experience creating scalable web applications.
                  My passion lies in transforming complex problems into elegant, user-friendly solutions.
                </p>
                <p className="text-lg text-gray-600 font-inter leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source,
                  or enjoying a good cup of coffee while planning my next project.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-3xl font-inter font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600 font-inter">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-3xl font-inter font-bold text-purple-600 mb-2">3</div>
                  <div className="text-gray-600 font-inter">Years Experience</div>
                </div>
              </div>

              {/* What I Do */}
              <div className="space-y-4">
                <h4 className="text-xl font-inter font-semibold text-gray-900">What I Do</h4>
                <div className="space-y-3">
                  {[
                    { color: 'green', label: 'Full-Stack Web Development' },
                    { color: 'green', label: 'Salesforce Developer' },
                    { color: 'green', label: 'API Development & Integration' },
                    { color: 'green', label: 'Database Design & Optimization' },
                  ].map(({ color, label }) => (
                    <div key={label} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${color}-500 rounded-full`} />
                      <span className="text-gray-600 font-inter">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <a
                  href="https://app.rezi.ai/s/pisrgzjJDzXRMTUOyBEX"
                  download
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Download Resume
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Main Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                    alt="Professional headshot"
                    width={1080}
                    height={384}
                    className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-full p-4 border border-gray-200">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Secondary Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1484981138541-3d074aa97716"
                    alt="Coffee workspace"
                    width={1080}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-inter text-center px-4">
                  &quot;Great code starts with great coffee&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
