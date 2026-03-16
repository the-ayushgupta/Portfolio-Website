import { Code, Heart, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy dark:bg-darkbg text-slate-300 dark:text-slate-400 py-12 border-t border-slate-700 dark:border-slate-700/50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-primary-400 dark:text-neon-500" />
              <span className="font-bold text-white dark:text-neon-500">Ayush Gupta</span>
            </div>
            <p className="text-sm text-slate-400">
              Full-stack developer passionate about creating elegant solutions to complex problems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#experience" className="hover:text-primary-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-primary-400 transition-colors">Achievements</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/the-ayushgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-700 hover:bg-primary-600 dark:bg-slate-700/50 dark:hover:bg-neon-500 transition-colors hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-gupta-77aa28253/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-700 hover:bg-primary-600 dark:bg-slate-700/50 dark:hover:bg-neon-500 transition-colors hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ayushgupta2004.ag@gmail.com"
                className="p-2 rounded-lg bg-slate-700 hover:bg-primary-600 transition-colors hover:shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 dark:text-slate-500">
              © {currentYear} Ayush Gupta. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
              Designed with <Heart className="w-4 h-4 text-primary-400 dark:text-neon-500" /> and built with
              <Code className="w-4 h-4 text-primary-400 dark:text-neon-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
