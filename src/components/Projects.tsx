import { Github, ExternalLink, Code, Database, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  github: string;
  demo?: string;
  gradient: string;
  icon: React.ComponentType<any>;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Food Delivery App',
      description: 'Full-stack mobile and web application for food ordering and delivery',
      fullDescription:
        'Built a comprehensive food delivery platform using Flutter, JavaScript, Node.js, Express, and MongoDB. Designed as a monolithic system with 20% scalability improvement and 15% performance enhancement. Developed RESTful APIs for CRUD operations supporting account creation, menu browsing, and order management.',
      tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/the-ayushgupta/FoodApe.git',
      gradient: 'from-orange-500 to-red-500 dark:from-neon-500 dark:to-neon-600',
      icon: Code,
    },
    {
      id: 2,
      title: 'Interactive White Board',
      description: 'Real-time collaborative drawing and annotation tool',
      fullDescription:
        'Created a fully-featured whiteboard application using Vanilla JavaScript, HTML, and CSS. Features include multiple pencil colors, eraser tool, sticky notes, image support, and the ability to download boards. Implemented robust Undo/Redo functionality using array-based stack implementation with position tracking for efficient state management.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
      github: 'https://github.com/the-ayushgupta/WhiteBoard.git',
      demo: 'https://the-ayushgupta.github.io/WhiteBoard/',
      gradient: 'from-sky-500 to-cyan-500 dark:from-neon-400 dark:to-neon-500',
      icon: Zap,
    },
    {
      id: 3,
      title: 'Recruitment Tracking System',
      description: 'Enterprise-grade recruitment and candidate management platform',
      fullDescription:
        'Built a Salesforce-based recruitment application featuring 3 custom objects (Candidate, Job Position, Interview) with automated workflows and approval processes. Implemented 2 Apex triggers and 4 classes following trigger-handler pattern for efficient candidate status updates. Created Lightning Web Component (LWC) dashboard with REST API integration via Named Credentials for real-time candidate pipeline tracking.',
      tags: ['Salesforce', 'Apex', 'LWC', 'REST API', 'Lightning'],
      github: 'https://github.com/the-ayushgupta/Recruitment-Candidate-Tracking-System.git',
      gradient: 'from-emerald-500 to-teal-500 dark:from-neon-500 dark:to-neon-400',
      icon: Database,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-primary-50 to-slate-50 dark:from-darkbg dark:via-darkbg dark:to-darkbg relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 -mt-48"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing full-stack applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-slideUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-64 relative mb-6 rounded-xl overflow-hidden shadow-lg">
                <div className={`bg-gradient-to-br ${project.gradient} w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-300`}></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 group-hover:text-white/40 transition-all duration-300">
                    <project.icon className="w-32 h-32 mx-auto mb-4" />
                    <p className="text-center font-semibold text-lg">{project.title}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <p className="text-white text-sm">{project.fullDescription}</p>
                </div>
              </div>

              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 rounded-full bg-primary-100 dark:bg-neon-500/20 text-primary-700 dark:text-neon-400 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-neon-500 text-white dark:text-black font-semibold hover:bg-slate-800 dark:hover:bg-neon-600 transition-all duration-300 hover:shadow-lg flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 dark:bg-neon-500/30 text-white dark:text-neon-400 font-semibold hover:bg-primary-700 dark:hover:bg-neon-500/50 transition-all duration-300 hover:shadow-lg flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-darksurface rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700/50 shadow-lg dark:shadow-neon-500/10">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Project Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <h4 className="font-semibold text-primary-600 mb-2">Scalable Architecture</h4>
              <p className="text-slate-600 text-sm">
                Designed systems with scalability in mind, achieving 20% improvement in application performance.
              </p>
            </div>
            <div className="border-l-4 border-accent-500 pl-6">
              <h4 className="font-semibold text-accent-600 mb-2">Best Practices</h4>
              <p className="text-slate-600 text-sm">
                Follow SOLID principles, design patterns, and MVC architecture for maintainable code.
              </p>
            </div>
            <div className="border-l-4 border-emerald-600 pl-6">
              <h4 className="font-semibold text-emerald-600 mb-2">Full-Stack Expertise</h4>
              <p className="text-slate-600 text-sm">
                End-to-end development from frontend UI to backend APIs and database design.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h4 className="font-semibold text-orange-600 mb-2">User-Centric Design</h4>
              <p className="text-slate-600 text-sm">
                Focus on intuitive interfaces, smooth interactions, and excellent user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
