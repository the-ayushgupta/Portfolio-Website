import { useEffect, useRef, useState } from 'react';
import { Award, Code, Brain, Zap } from 'lucide-react';

interface StatCard {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  color: string;
}

export default function About() {
  const [counts, setCounts] = useState({
    cgpa: 0,
    problems: 0,
    rating: 0,
    projects: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const target = { cgpa: 8.88, problems: 700, rating: 1684, projects: 4 };
    const duration = 1500;
    const start = Date.now();

    const interval = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);

      setCounts({
        cgpa: Math.floor(progress * target.cgpa * 100) / 100,
        problems: Math.floor(progress * target.problems),
        rating: Math.floor(progress * target.rating),
        projects: Math.floor(progress * target.projects),
      });

      if (progress === 1) clearInterval(interval);
    }, 20);
  };

  const statCards: StatCard[] = [
    { icon: Award, value: `${counts.cgpa.toFixed(2)}`, label: 'CGPA', color: 'from-primary-600 to-primary-400 dark:from-neon-500 dark:to-neon-400' },
    { icon: Code, value: `${counts.problems}+`, label: 'Problems Solved', color: 'from-accent-500 to-accent-400 dark:from-neon-400 dark:to-neon-300' },
    { icon: Zap, value: `${counts.rating}`, label: 'Highest Rating', color: 'from-emerald-600 to-emerald-400 dark:from-neon-600 dark:to-neon-500' },
    { icon: Brain, value: `${counts.projects}+`, label: 'Major Projects', color: 'from-orange-600 to-orange-400 dark:from-neon-500 dark:to-neon-400' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-darksurface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -mr-48"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate developer and competitive programmer crafting elegant solutions to complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              I'm a Computer Science student at Vellore Institute of Technology (VIT-AP) with a strong foundation in
              full-stack development and competitive programming. My journey has been driven by curiosity and a passion
              for solving challenging problems.
            </p>
            <p className="text-slate-700 leading-relaxed">
              With expertise spanning from web development to cybersecurity, I've contributed to various innovative
              projects including organizing India's first AI music concert "Harmony Unleashed" and creating challenging
              CTF problems. My competitive programming background has honed my algorithmic thinking and problem-solving
              skills.
            </p>
            <p className="text-slate-700 leading-relaxed">
              I'm particularly interested in building scalable systems, exploring new technologies, and contributing to
              open-source projects. When I'm not coding, you can find me solving LeetCode problems or staying updated
              with the latest in tech.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300 shadow-lg animate-slideUp`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 opacity-80" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-primary-50 dark:bg-darksurface/50 rounded-2xl p-8 md:p-12 border border-primary-200 dark:border-slate-700/50">
          <h3 className="mb-6 text-primary-900">Education</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-600 pl-6 py-2">
              <h4 className="font-semibold text-lg mb-1">Bachelor of Technology in Computer Science</h4>
              <p className="text-slate-600">Vellore Institute of Technology, Andhra Pradesh, India</p>
              <p className="text-sm text-slate-500 mt-2">Sep 2022 – Sep 2026 | CGPA: 8.88</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
