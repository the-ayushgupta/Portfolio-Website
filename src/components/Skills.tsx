import { Code2, Database, Cloud, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Java', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'TypeScript'],
    },
    {
      title: 'Frontend & Backend',
      icon: Code2,
      skills: ['React', 'Node.js', 'Express', 'REST APIs', 'Apex', 'Lightning Web Components'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Salesforce'],
    },
    {
      title: 'Tools & Cloud',
      icon: Cloud,
      skills: ['Git', 'AWS', 'VS Code', 'Docker', 'Hoppscotch', 'Tableau'],
    },
    {
      title: 'Concepts & Methodologies',
      icon: Wrench,
      skills: ['SOLID Principles', 'Design Patterns', 'MVC Architecture', 'Microservices', 'DSA'],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-primary-50 dark:from-darksurface dark:to-darkbg relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-10 -mb-48 -ml-48"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive technical skillset covering full-stack development, databases, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="card-glass p-8 group hover:scale-105 transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary-600 dark:bg-neon-500 text-white dark:text-black group-hover:shadow-lg group-hover:shadow-primary-600/50 dark:group-hover:shadow-neon-500/50 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge hover:bg-primary-100 hover:border-primary-400 transition-all duration-300 cursor-default hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary-600 dark:from-neon-500 to-accent-500 dark:to-neon-600 rounded-2xl p-8 md:p-12 text-white dark:text-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">20+</h4>
              <p className="text-primary-100 dark:text-black/80">Technical Skills Mastered</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Multiple</h4>
              <p className="text-primary-100 dark:text-black/80">Full-Stack Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Fast</h4>
              <p className="text-primary-100 dark:text-black/80">Learner & Problem Solver</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
