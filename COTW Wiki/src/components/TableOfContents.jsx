import React, { useState } from 'react';

export default function TableOfContents({ mainMissionsId, sideMissionsId, sideMissions = [] }) {
  const [isOpen, setIsOpen] = useState(true);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white border border-gray-300 p-3 inline-block min-w-[300px] mb-8 font-sans rounded shadow-sm">
      <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
        <div className="flex items-center gap-2">
          {/* Hamburger/List Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="font-bold text-gray-800 text-sm">Contents</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-green-700 text-xs hover:underline"
        >
          [{isOpen ? 'hide' : 'show'}]
        </button>
      </div>

      {isOpen && (
        <ul className="text-green-700 text-sm space-y-1">
          <li>
            <span className="text-gray-500 mr-1">1.</span>
            <a href={`#${mainMissionsId}`} onClick={(e) => scrollToSection(e, mainMissionsId)} className="hover:underline hover:text-green-900">Main Missions</a>
          </li>
          <li>
            <span className="text-gray-500 mr-1">2.</span>
            <a href={`#${sideMissionsId}`} onClick={(e) => scrollToSection(e, sideMissionsId)} className="hover:underline hover:text-green-900">Side Missions</a>
            <ul className="ml-6 mt-1 space-y-1">
              {sideMissions.map((mission, index) => (
                <li key={index}>
                  <span className="text-gray-500 mr-1">2.{index + 1}.</span>
                  <a href={`#${mission.id}`} onClick={(e) => scrollToSection(e, mission.id)} className="hover:underline hover:text-green-900">{mission.label}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
}
