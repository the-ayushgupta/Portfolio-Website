import { Trophy, Code, Award, Zap } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  details?: string[];
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Code-A-Thon Champion',
      subtitle: '1st Position',
      description: 'Secured first position in the Code-A-Thon competition among NULL Chapter members',
      icon: Trophy,
      gradient: 'from-yellow-500 to-orange-500',
      details: [
        'Demonstrated proficiency in Java programming',
        'Showcased advanced algorithm design skills',
        'Delivered optimized solution under time constraints',
      ],
    },
    {
      id: 2,
      title: 'LeetCode Excellence',
      subtitle: '10 Badges | 600+ Problems',
      description: 'Solved over 600 technical problems with highest contest rating of 1684',
      icon: Code,
      gradient: 'from-orange-500 to-red-500',
      details: [
        'Achieved 1684 highest contest rating',
        'Earned 10 badges for specialized problem-solving',
        'Consistent problem-solving across multiple topics',
      ],
    },
    {
      id: 3,
      title: 'Oracle Certification',
      subtitle: 'Java Foundation Associate',
      description: 'Oracle Java Foundation Associate Certification - July 2025',
      icon: Award,
      gradient: 'from-red-500 to-pink-500',
      details: [
        'Comprehensive Java fundamentals knowledge',
        'Industry-recognized certification',
        'Verified technical competency',
      ],
    },
    {
      id: 4,
      title: 'Academic Excellence',
      subtitle: '8.88 CGPA',
      description: 'Maintained consistent academic performance throughout university studies',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      details: [
        'Strong foundation in Data Structures and Algorithms',
        'Excellence in Database Management Systems',
        'Proficiency in Computer Networks and Operating Systems',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 bg-white dark:bg-darkbg relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -mb-48 -mr-48"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Achievements & Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognition of technical excellence and professional accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.id}
                className="group animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${achievement.gradient} dark:from-neon-500 dark:to-neon-600 rounded-xl p-8 mb-4 text-white dark:text-black shadow-lg group-hover:shadow-2xl transition-all duration-300 h-32 flex items-center justify-between`}>
                  <div>
                    <p className="text-sm font-semibold opacity-90 mb-1">ACHIEVEMENT</p>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <p className="text-white/80 dark:text-black/70 text-sm mt-1">{achievement.subtitle}</p>
                  </div>
                  <IconComponent className="w-16 h-16 opacity-30 group-hover:opacity-50 transition-all" />
                </div>

                <div className="card-glass p-6">
                  <p className="text-slate-700 mb-4">{achievement.description}</p>
                  {achievement.details && (
                    <ul className="space-y-2">
                      {achievement.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex gap-3 text-sm text-slate-600">
                          <span className="text-primary-600 font-bold flex-shrink-0">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-slate-900">Continuous Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'DSA', value: 'Expert' },
              { label: 'Competitive Programming', value: 'Advanced' },
              { label: 'Web Development', value: 'Expert' },
              { label: 'Cybersecurity', value: 'Proficient' },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 dark:from-neon-500/10 to-accent-50 dark:to-neon-500/5 rounded-lg p-6 border border-primary-200 dark:border-neon-500/30 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 font-semibold">{skill.label}</p>
                <p className="text-primary-600 dark:text-neon-500 font-bold text-lg">{skill.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
