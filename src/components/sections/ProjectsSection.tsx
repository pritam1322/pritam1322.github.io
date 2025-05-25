'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';

const categories = ['all', 'web', 'mobile', 'design'];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('web'); // default active tab

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-inter">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn px-6 py-3 font-inter font-medium rounded-lg transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-blue-100'
                }`}
              >
                {cat === 'all'
                  ? 'All Projects'
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          className="inline-flex items-center px-3 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-inter rounded-lg hover:bg-white/30 transition-all duration-300"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.code}
                          className="inline-flex items-center px-3 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-inter rounded-lg hover:bg-white/30 transition-all duration-300"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-inter">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-inter mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-inter rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
