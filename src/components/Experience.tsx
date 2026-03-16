import { Briefcase, Music } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  icon: React.ComponentType<any>;
  achievements: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Technical Team Member',
      company: 'NULL CHAPTER, VIJAYAWADA',
      period: 'Aug 2023 – Aug 2024',
      icon: Briefcase,
      achievements: [
        'CTF Problem Creation: Designed 2 challenging Capture The Flag (CTF) problems focusing on OWASP Top 10 vulnerabilities and insecure design patterns',
        'Contest Enhancement: Improved overall contest difficulty and enhanced participant learning outcomes through well-crafted security challenges, demonstrating expertise in cybersecurity',
        'Harmony Unleashed Organization: Coordinated development of 10 AI-generated musical compositions and orchestrated India\'s first AI Music Concert (hosted by VIT-AP)',
        'Event Success: Successfully managed event logistics and attracted over 200 attendees, showcasing innovation in bridging technology with creative arts',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-white dark:bg-darkbg relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional journey in technology, cybersecurity, and event innovation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={index}
                className="mb-8 last:mb-0 animate-slideUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute left-0 top-0 p-3 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg text-white shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="card-glass p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">{exp.title}</h3>
                      <p className="text-primary-600 font-semibold">{exp.company}</p>
                      <p className="text-sm text-slate-500 mt-2">{exp.period}</p>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex gap-3 text-slate-700">
                          <span className="text-primary-600 font-bold flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-darksurface dark:to-darksurface rounded-2xl p-8 md:p-12 border border-primary-200 dark:border-slate-700/50">
          <h3 className="mb-6 text-slate-900">Key Competencies Developed</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary-600 mb-3">Cybersecurity & Vulnerability Assessment</h4>
              <p className="text-slate-600 text-sm">Deep understanding of OWASP vulnerabilities, insecure design patterns, and secure coding practices.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-3">Project Coordination & Leadership</h4>
              <p className="text-slate-600 text-sm">Experience managing cross-functional teams, organizing large-scale events, and delivering complex projects.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-3">Innovation & Problem Solving</h4>
              <p className="text-slate-600 text-sm">Demonstrated ability to create challenging scenarios, design effective learning experiences, and innovate within constraints.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-3">Technical Excellence</h4>
              <p className="text-slate-600 text-sm">Proven expertise in security challenges, system design, and delivering technically complex initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
