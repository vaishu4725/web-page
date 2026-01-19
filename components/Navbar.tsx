
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism h-20 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">Lumina AI</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
        <a href="#subjects" className="hover:text-indigo-600 transition-colors">Subjects</a>
        <a href="#demo" className="hover:text-indigo-600 transition-colors">Live Demo</a>
        <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">
          Log in
        </button>
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-indigo-200 transition-all">
          Sign up free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
