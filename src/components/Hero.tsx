import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const roles = ['Full-Stack Developer', 'Problem Solver', 'CTF Expert', 'Tech Innovator'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping && displayedRole.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      }, 80);
    } else if (isTyping && displayedRole.length === currentRole.length) {
      timeout = setTimeout(() => setIsTyping(false), 2000);
    } else if (!isTyping && displayedRole.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
      }, 50);
    } else if (!isTyping && displayedRole.length === 0) {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isTyping, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-50 dark:bg-darkbg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-slate-50 to-accent-50 opacity-60 dark:from-darkbg dark:via-darkbg dark:to-darkbg dark:opacity-100"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-neon-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200 dark:bg-neon-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-neon-500/20 text-primary-700 dark:text-neon-400 font-semibold text-sm mb-4">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="mb-4 text-slate-900 dark:text-white">
              Hi, I'm <span className="text-gradient">Ayush Gupta</span>
            </h1>

            <div className="h-12 mb-6 flex items-center">
              <span className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-neon-500">
                {displayedRole}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
              CSE Student at VIT-AP with a passion for building scalable applications and solving complex problems.
              Specialized in full-stack development, competitive programming, and cybersecurity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://drive.google.com/file/d/1v3w3Y4o2bxLVsYKAdKlA3ZdfwCHspWLg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/the-ayushgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-darksurface text-slate-700 dark:text-neon-400 hover:bg-primary-600 dark:hover:bg-neon-500 hover:text-white dark:hover:text-black transition-all duration-300 hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-gupta-77aa28253/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-darksurface text-slate-700 dark:text-neon-400 hover:bg-primary-600 dark:hover:bg-neon-500 hover:text-white dark:hover:text-black transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-darksurface text-slate-700 dark:text-neon-400 hover:bg-primary-600 dark:hover:bg-neon-500 hover:text-white dark:hover:text-black transition-all duration-300 hover:shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center animate-slideInRight">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 dark:from-neon-500 to-accent-500 dark:to-neon-600 rounded-3xl transform rotate-6 opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 dark:from-neon-500 to-accent-400 dark:to-neon-400 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl dark:shadow-neon-500/50">
                <div className="relative w-full h-full bg-gradient-to-br from-primary-600 dark:from-neon-600 via-primary-700 dark:via-neon-500 to-navy dark:to-darkbg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-4">AG</div>
                    <p className="text-primary-100 dark:text-neon-400 font-semibold">Full-Stack Developer</p>
                  </div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white dark:bg-neon-500 opacity-5 dark:opacity-10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-300 dark:bg-neon-400 opacity-10 dark:opacity-5 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary-600 dark:text-neon-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
