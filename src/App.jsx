import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 flex flex-col selection:bg-accent-blue/30 selection:text-white">
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="glass-toast"
      />
      {/* Translucent Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Divider line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Divider line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        {/* About Me Section */}
        <About />

        {/* Divider line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-dark-card border-t border-white/5 py-8 text-center text-xs text-gray-500 font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p>© {new Date().getFullYear()} Pablo Harrod | Dev. All rights reserved.</p>
          <p className="text-[10px] text-gray-600">
            Powered by React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

