import Image from 'next/image';

const resumeSrc = '/Abdul_Zahoor_Resume.pdf';
const currentYear = new Date().getFullYear();

const services = [
  'Build SaaS dashboards from scratch',
  'Fix slow React apps and improve frontend performance',
  'Clean and scale messy codebases',
  'Convert Figma designs into production-ready UI',
];

const focusAreas = [
  'SaaS Dashboards',
  'Performance Optimization',
  'Next.js Applications',
];

const projects = [
  {
    title: 'SaaS Platform UI Modernization',
    company: 'Rafay Systems',
    summary:
      'Led dashboard-focused frontend improvements for a production SaaS platform used by enterprise teams.',
    results: [
      'Improved maintainability with stronger component architecture and reusable UI patterns',
      'Reduced friction in development by introducing Storybook and a faster Vite-based workflow',
      'Optimized rendering and bundle strategy for complex, data-heavy screens',
    ],
    accent: 'from-amber-100 via-orange-50 to-white',
  },
  {
    title: 'Content Platform & CMS',
    company: 'Khubaib Foundation',
    summary:
      'Built a production-ready website and CMS experience with a polished UI and structured content workflows.',
    results: [
      'Translated Figma designs into a responsive Next.js interface',
      'Created a blog and content publishing system for ongoing updates and event tracking',
      'Delivered a cleaner admin and content experience for non-technical users',
    ],
    accent: 'from-emerald-100 via-teal-50 to-white',
  },
  {
    title: 'Real-Time Monitoring Portal',
    company: 'DCAO',
    summary:
      'Developed a live monitoring interface for COVID-related kiosk and reporting workflows.',
    results: [
      'Built a dashboard experience around real-time data flows and status updates',
      'Integrated WebRTC, MQTT, and Socket.io for live communication features',
      'Worked closely with backend teams to keep API integrations reliable and responsive',
    ],
    accent: 'from-sky-100 via-cyan-50 to-white',
  },
];

const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Rafay Systems',
    period: '2020 - Present',
    points: [
      'Built and improved React interfaces for a complex SaaS product with dashboard-heavy workflows.',
      'Led UI revamps, component standardization, and frontend performance improvements.',
      'Worked across product teams to ship scalable interfaces for enterprise use cases.',
    ],
  },
  {
    role: 'Full-Stack Developer (Volunteer)',
    company: 'Khubaib Foundation',
    period: '2024',
    points: [
      'Delivered a website and CMS using modern frontend patterns and backend integrations.',
      'Handled product thinking, implementation, and UI delivery from design to production.',
      'Added content workflows that made updates easier for the organization team.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'DCAO',
    period: '2020',
    points: [
      'Built a real-time portal for monitoring and visualization.',
      'Implemented interactive frontend features for data-heavy operational screens.',
      'Collaborated tightly with backend engineers on real-time integrations and delivery.',
    ],
  },
];

const stackGroups = [
  {
    title: 'Frontend Consulting',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'Storybook',
    ],
  },
  {
    title: 'Backend Support',
    items: [
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Node.js',
      'Express.js',
      'REST APIs',
    ],
  },
  {
    title: 'Delivery & Scale',
    items: ['Performance Optimization', 'Vite', 'Docker', 'CI/CD', 'GitHub', 'Figma to UI'],
  },
];

export default function Home() {
  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_32%),linear-gradient(180deg,_#fffdf8_0%,_#fff7ed_38%,_#f8fafc_100%)] text-slate-900'>
      <nav className='sticky top-0 z-50 border-b border-orange-100 bg-white/85 backdrop-blur-xl'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
          <a href='#top' className='text-lg font-semibold tracking-tight text-slate-900'>
            Abdul Zahoor
          </a>
          <div className='hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex'>
            <a href='#projects' className='hover:text-slate-900'>
              Projects
            </a>
            <a href='#services' className='hover:text-slate-900'>
              Services
            </a>
            <a href='#experience' className='hover:text-slate-900'>
              Experience
            </a>
            <a href='#contact' className='hover:text-slate-900'>
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main id='top'>
        <section className='px-6 pb-16 pt-16 md:pb-24 md:pt-24'>
          <div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]'>
            <div>
              <p className='mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-700'>
                Available for remote React consulting
              </p>
              <h1 className='max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl'>
                React Consultant for SaaS Dashboards & High-Performance Web Apps
              </h1>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl'>
                I help startups build fast, scalable, and clean React applications with a strong focus on
                dashboards, frontend architecture, and shipping polished product experiences.
              </p>

              <div className='mt-8 flex flex-wrap gap-3'>
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm'
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className='mt-10 flex flex-wrap gap-4'>
                <a
                  href='#projects'
                  className='rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800'
                >
                  View Projects
                </a>
                <a
                  href='mailto:its4zahoor@gmail.com'
                  className='rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-950'
                >
                  Hire Me
                </a>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute -left-4 top-10 h-24 w-24 rounded-full bg-orange-200/60 blur-2xl' />
              <div className='absolute -right-2 bottom-12 h-32 w-32 rounded-full bg-sky-200/70 blur-3xl' />
              <div className='relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-2xl shadow-orange-100'>
                <div className='flex items-center gap-4'>
                  <div className='h-20 w-20 overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-100 to-amber-50'>
                    <Image
                      src='/Abdul_Zahoor.jpg'
                      alt='Abdul Zahoor'
                      width={80}
                      height={80}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div>
                    <p className='text-xl font-bold text-slate-950'>Abdul Zahoor</p>
                    <p className='text-sm font-medium text-slate-600'>
                      React consultant with full-stack delivery experience
                    </p>
                  </div>
                </div>

                <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-2xl bg-slate-950 p-5 text-white'>
                    <p className='text-sm uppercase tracking-[0.2em] text-slate-300'>Primary Focus</p>
                    <p className='mt-2 text-lg font-semibold'>SaaS dashboards that feel fast and easy to use</p>
                  </div>
                  <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
                    <p className='text-sm uppercase tracking-[0.2em] text-slate-500'>Backend Fit</p>
                    <p className='mt-2 text-lg font-semibold text-slate-900'>
                      FastAPI, Python, and PostgreSQL for APIs behind the UI
                    </p>
                  </div>
                </div>

                <div className='mt-4 rounded-2xl border border-orange-100 bg-orange-50 p-5'>
                  <p className='text-sm font-semibold uppercase tracking-[0.2em] text-orange-700'>What clients get</p>
                  <p className='mt-2 text-base text-slate-700'>
                    Clear communication, thoughtful architecture, and production-ready frontend work that supports
                    product growth instead of slowing it down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='px-6 pb-8'>
          <div className='mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm md:grid-cols-3'>
            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
              <p className='text-sm font-semibold uppercase tracking-[0.22em] text-slate-500'>Consulting Angle</p>
              <p className='mt-3 text-lg font-semibold text-slate-900'>
                Product-minded React delivery for startups and SaaS teams
              </p>
            </div>
            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
              <p className='text-sm font-semibold uppercase tracking-[0.22em] text-slate-500'>Technical Strength</p>
              <p className='mt-3 text-lg font-semibold text-slate-900'>
                Frontend performance, reusable UI systems, and scalable app structure
              </p>
            </div>
            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
              <p className='text-sm font-semibold uppercase tracking-[0.22em] text-slate-500'>Full-Stack Support</p>
              <p className='mt-3 text-lg font-semibold text-slate-900'>
                FastAPI, Python, and PostgreSQL when the dashboard needs a reliable backend too
              </p>
            </div>
          </div>
        </section>

        <section id='projects' className='px-6 py-20'>
          <div className='mx-auto max-w-6xl'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-orange-700'>Selected Work</p>
              <h2 className='mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl'>
                Projects framed around outcomes, not just tech stacks
              </h2>
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                The work below highlights the kind of client problems I can help solve: dashboard UX, performance,
                maintainability, and shipping clean interfaces backed by practical engineering choices.
              </p>
            </div>

            <div className='mt-12 grid gap-6 lg:grid-cols-3'>
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`rounded-[2rem] border border-slate-200 bg-gradient-to-br ${project.accent} p-8 shadow-sm`}
                >
                  <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>{project.company}</p>
                  <h3 className='mt-3 text-2xl font-bold tracking-tight text-slate-950'>{project.title}</h3>
                  <p className='mt-4 text-base leading-7 text-slate-700'>{project.summary}</p>
                  <ul className='mt-6 space-y-3'>
                    {project.results.map((result) => (
                      <li key={result} className='flex gap-3 text-sm leading-6 text-slate-700'>
                        <span className='mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-orange-500' />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='services' className='px-6 py-20'>
          <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-orange-700'>How I Can Help</p>
              <h2 className='mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl'>
                A sharper pitch for clients who need React work done well
              </h2>
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                This site now leads with consulting value: where I’m strongest, what problems I solve, and how I
                support product teams beyond just writing components.
              </p>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              {services.map((service) => (
                <div key={service} className='rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm'>
                  <p className='text-lg font-semibold text-slate-900'>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='experience' className='px-6 py-20'>
          <div className='mx-auto max-w-6xl'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.3em] text-orange-700'>Experience</p>
              <h2 className='mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl'>
                Frontend depth with practical backend support
              </h2>
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                My strongest edge is React and SaaS UI delivery, and I also work comfortably with backend APIs and
                data-driven systems when products need end-to-end execution.
              </p>
            </div>

            <div className='mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
              <div className='space-y-6'>
                {experience.map((item) => (
                  <article key={item.role} className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm'>
                    <div className='flex flex-col gap-3 md:flex-row md:items-start md:justify-between'>
                      <div>
                        <h3 className='text-2xl font-bold tracking-tight text-slate-950'>{item.role}</h3>
                        <p className='mt-1 text-base font-semibold text-orange-700'>{item.company}</p>
                      </div>
                      <p className='text-sm font-medium uppercase tracking-[0.18em] text-slate-500'>{item.period}</p>
                    </div>
                    <ul className='mt-6 space-y-3'>
                      {item.points.map((point) => (
                        <li key={point} className='flex gap-3 text-sm leading-6 text-slate-700'>
                          <span className='mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-slate-900' />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <aside className='rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm'>
                <p className='text-sm font-semibold uppercase tracking-[0.3em] text-orange-300'>Skills & Stack</p>
                <h3 className='mt-3 text-3xl font-black tracking-tight'>What I bring to client work</h3>
                <div className='mt-8 space-y-8'>
                  {stackGroups.map((group) => (
                    <div key={group.title}>
                      <p className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-400'>{group.title}</p>
                      <div className='mt-4 flex flex-wrap gap-2'>
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-100'
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5'>
                  <p className='text-sm font-semibold uppercase tracking-[0.2em] text-orange-300'>Also worth noting</p>
                  <p className='mt-3 text-sm leading-7 text-slate-300'>
                    When a dashboard needs backend help, I can support API design and implementation with FastAPI,
                    Python, and PostgreSQL so frontend and data workflows stay aligned.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id='contact' className='px-6 pb-24 pt-10'>
          <div className='mx-auto max-w-6xl rounded-[2.25rem] border border-orange-200 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-10 text-slate-950 shadow-xl shadow-orange-200/50'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-900/70'>Available for remote work</p>
            <h2 className='mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl'>
              If you need a React consultant for a SaaS product, let&apos;s talk.
            </h2>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-900/80'>
              I can help with new dashboard builds, frontend cleanup, performance bottlenecks, and shipping polished
              product UI without unnecessary complexity.
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>
              <a
                href='mailto:its4zahoor@gmail.com'
                className='rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800'
              >
                Email: its4zahoor@gmail.com
              </a>
              <a
                href='https://www.linkedin.com/in/its4zahoor'
                className='rounded-xl border border-slate-900/20 bg-white/60 px-6 py-3 font-semibold text-slate-900 transition hover:bg-white'
              >
                Connect on LinkedIn
              </a>
              <a
                href={resumeSrc}
                download
                className='rounded-xl border border-slate-900/20 bg-white/60 px-6 py-3 font-semibold text-slate-900 transition hover:bg-white'
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t border-slate-200 bg-white/70 px-6 py-10'>
        <div className='mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between'>
          <p>
            Abdul Zahoor | React Consultant for SaaS Dashboards & High-Performance Web Apps
          </p>
          <div className='flex gap-5'>
            <a href='mailto:its4zahoor@gmail.com' className='hover:text-slate-950'>
              Email
            </a>
            <a href='https://github.com/its4zahoor' className='hover:text-slate-950'>
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/its4zahoor' className='hover:text-slate-950'>
              LinkedIn
            </a>
          </div>
          <p>© {currentYear} Abdul Zahoor</p>
        </div>
      </footer>
    </div>
  );
}
