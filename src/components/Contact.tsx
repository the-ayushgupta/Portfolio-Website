import { Mail, Phone, Github, Linkedin, ExternalLink, Download, MapPin } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayushgupta2004.ag@gmail.com',
      href: 'mailto:ayushgupta2004.ag@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+91) 9177705446',
      href: 'tel:+919177705446',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vijayawada, Andhra Pradesh, India',
      href: '#',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/the-ayushgupta',
      label: 'Check out my repositories',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ayush-gupta-77aa28253/',
      label: 'Connect with me professionally',
    },
    {
      name: 'LeetCode',
      icon: ExternalLink,
      href: 'https://leetcode.com',
      label: 'View my problem-solving skills',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-darkbg dark:to-darksurface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -mt-48"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a tech conversation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className="group animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${method.color} dark:from-neon-500 dark:to-neon-600 rounded-xl p-8 text-white dark:text-black shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full`}>
                  <Icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{method.label}</h3>
                  <p className="text-white/90 dark:text-black/80 text-sm break-all">{method.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="bg-white dark:bg-darksurface rounded-2xl p-8 md:p-12 shadow-lg dark:shadow-neon-500/10 border border-slate-200 dark:border-slate-700/50 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">Connect With Me</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-primary-50 dark:hover:bg-darksurface/50 transition-all duration-300 group"
                >
                  <div className="p-4 rounded-lg bg-primary-100 dark:bg-neon-500/20 text-primary-600 dark:text-neon-500 group-hover:bg-primary-600 dark:group-hover:bg-neon-500 group-hover:text-white dark:group-hover:text-black transition-all duration-300 group-hover:shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">{link.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{link.label}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700/50 pt-8">
            <div className="text-center mb-8">
              <p className="text-slate-600 dark:text-slate-400 mb-6">Download my resume to learn more about my experience and skills</p>
              <a
                href="https://drive.google.com/file/d/1v3w3Y4o2bxLVsYKAdKlA3ZdfwCHspWLg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 inline-flex text-lg px-8 py-4"
              >
                <Download className="w-6 h-6" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-600 dark:from-neon-500 to-accent-500 dark:to-neon-600 rounded-2xl p-8 md:p-12 text-white dark:text-black text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg text-primary-100 dark:text-black/80 mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:ayushgupta2004.ag@gmail.com"
            className="inline-block px-8 py-3 rounded-lg bg-white dark:bg-darkbg text-primary-600 dark:text-neon-500 font-semibold hover:bg-primary-50 dark:hover:bg-darksurface transition-all duration-300 hover:shadow-lg"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
