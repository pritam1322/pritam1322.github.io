"use client";

import React from "react";

const skills = {
  frontend: [
    { name: "JavaScript", color: "bg-orange-500", percent: "88%", icon: "JS" },
    { name: "TypeScript", color: "bg-blue-600", percent: "85%", icon: "TS" },
    { name: "React", color: "bg-cyan-500", percent: "92%", icon: "R" },
    { name: "Next.js", color: "bg-black", percent: "87%", icon: "N" },
    { name: "HTML5", color: "bg-yellow-500", percent: "95%", icon: "H" },
    { name: "CSS3", color: "bg-red-500", percent: "90%", icon: "C" },
  ],
  backend: [
    { name: "Node.js", color: "bg-green-600", percent: "85%", icon: "N" },
    { name: "Express", color: "bg-gray-800", percent: "80%", icon: "E" },
    { name: "Python", color: "bg-blue-700", percent: "78%", icon: "P" },
    { name: "Rest API", color: "bg-red-600", percent: "75%", icon: "R" },
    { name: "Apex", color: "bg-purple-600", percent: "75%", icon: "A" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white transition-opacity duration-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-inter font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="space-y-16">
            <SkillCategory title="Frontend Development" items={skills.frontend} />
            <SkillCategory title="Backend Development" items={skills.backend} />
            <div className="skill-category">
  <h3 className="text-2xl font-inter font-semibold text-gray-900 mb-8 text-center">Database &amp; Tools</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

    {/* MongoDB */}
    <div className="skill-item group bg-gray-50 hover:bg-purple-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
      <div className="w-12 h-12 mx-auto mb-3 bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        M
      </div>
      <h4 className="font-inter font-medium text-gray-900 mb-1">MongoDB</h4>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-700 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '82%' }}></div>
      </div>
    </div>

    {/* PostgreSQL */}
    <div className="skill-item group bg-gray-50 hover:bg-purple-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
      <div className="w-12 h-12 mx-auto mb-3 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        P
      </div>
      <h4 className="font-inter font-medium text-gray-900 mb-1">PostgreSQL</h4>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-800 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
      </div>
    </div>

    {/* Git */}
    <div className="skill-item group bg-gray-50 hover:bg-purple-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
      <div className="w-12 h-12 mx-auto mb-3 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        G
      </div>
      <h4 className="font-inter font-medium text-gray-900 mb-1">Git</h4>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '90%' }}></div>
      </div>
    </div>

    {/* Docker */}
    <div className="skill-item group bg-gray-50 hover:bg-purple-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
      <div className="w-12 h-12 mx-auto mb-3 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        D
      </div>
      <h4 className="font-inter font-medium text-gray-900 mb-1">Docker</h4>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '72%' }}></div>
      </div>
    </div>

    {/* AWS */}
    <div className="skill-item group bg-gray-50 hover:bg-purple-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
      <div className="w-12 h-12 mx-auto mb-3 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        A
      </div>
      <h4 className="font-inter font-medium text-gray-900 mb-1">AWS</h4>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-orange-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '68%' }}></div>
      </div>
    </div>


    {/* MySQL (Newly Added) */}
    <div className="skill-item group bg-gray-50 hover:bg-purple-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center">
      <div className="w-12 h-12 mx-auto mb-3 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
        M
      </div>
      <h4 className="font-inter font-medium text-gray-900 mb-1">MySQL</h4>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '100%' }}></div>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, items }: { title: string; items: any[] }) => (
  <div className="skill-category justify-center">
    <h3 className="text-2xl font-inter font-semibold text-gray-900 mb-8 text-center">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map((skill, idx) => (
        <div
          key={idx}
          className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
        >
          <div className={`w-12 h-12 mx-auto mb-3 ${skill.color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
            {skill.icon}
          </div>
          <h4 className="font-inter font-medium text-gray-900 mb-1">{skill.name}</h4>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`} style={{ width: skill.percent }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
