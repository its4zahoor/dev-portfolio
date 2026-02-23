import Head from 'next/head';
import Image from 'next/image';

const resumeSrc = '/Abdul_Zahoor_Resume.pdf';
const curentYear = new Date().getFullYear();

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800 font-sans'>
      <Head>
        <title>
          Full Stack Expert Abdul Zahoor | React & Next.js Specialist
        </title>
      </Head>

      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold text-slate-800'>
              Abdul Zahoor
            </h1>
            <div className='flex space-x-6'>
              <a
                href='#about'
                className='text-slate-600 hover:text-slate-900 transition-colors'
              >
                About
              </a>
              <a
                href='#experience'
                className='text-slate-600 hover:text-slate-900 transition-colors'
              >
                Experience
              </a>
              <a
                href='#skills'
                className='text-slate-600 hover:text-slate-900 transition-colors'
              >
                Skills
              </a>
              <a
                href='#resume'
                className='text-slate-600 hover:text-slate-900 transition-colors'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center min-h-screen text-center p-6 pt-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-8'>
            <div className='w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden'>
              <Image
                src='/Abdul_Zahoor.jpg'
                alt='Profile Picture'
                width={128}
                height={128}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight'>
            Abdul Zahoor
          </h1>
          <p className='text-xl md:text-2xl text-slate-600 mb-4 font-medium'>
            Full Stack Developer
          </p>
          <p className='text-lg text-slate-500 mb-4 max-w-2xl mx-auto'>
            Crafting exceptional user experiences with modern web technologies.
            Specialized in React, Next.js, and full-stack development.
          </p>
          <p className='text-xs text-slate-500 mb-8'>
            I&apos;m a developer with extensive frontend experience, passionate
            about building scalable and efficient web applications with
            cutting-edge technologies.
          </p>
          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            <a
              href='mailto:its4zahoor@gmail.com'
              className='px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 flex items-center gap-2'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
              Get in Touch
            </a>
            <a
              href='https://github.com/its4zahoor'
              className='px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center gap-2'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                  clipRule='evenodd'
                />
              </svg>
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/its4zahoor'
              className='px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center gap-2'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                  clipRule='evenodd'
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-slate-800 mb-4'>
              Technical Skills
            </h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              Proficient in modern web technologies with a focus on creating
              scalable, maintainable applications.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100'>
              <h3 className='text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2'>
                <svg
                  className='w-6 h-6 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                Frontend
              </h3>
              <div className='space-y-2 text-slate-700'>
                <p>React.js, Next.js, TypeScript</p>
                <p>Tailwind CSS, Material-UI</p>
                <p>Redux, Storybook</p>
                <p>HTML5, CSS3, JavaScript</p>
              </div>
            </div>

            <div className='bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-100'>
              <h3 className='text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2'>
                <svg
                  className='w-6 h-6 text-emerald-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
                  />
                </svg>
                Backend
              </h3>
              <div className='space-y-2 text-slate-700'>
                <p>Node.js, Express.js</p>
                <p>MongoDB, MySQL</p>
                <p>RESTful APIs</p>
                <p>WebRTC, Socket.io</p>
              </div>
            </div>

            <div className='bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-100'>
              <h3 className='text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2'>
                <svg
                  className='w-6 h-6 text-amber-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                Tools & DevOps
              </h3>
              <div className='space-y-2 text-slate-700'>
                <p>Git, GitHub</p>
                <p>Webpack, Vite.js</p>
                <p>Docker, CI/CD</p>
                <p>Figma, Jira</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id='experience' className='py-20 px-6 bg-slate-50'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-slate-800 mb-4'>
              Professional Experience
            </h2>
            <p className='text-lg text-slate-600'>
              A journey of continuous learning and growth in software
              development.
            </p>
          </div>

          <div className='space-y-8'>
            <div className='bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                <h3 className='text-2xl font-semibold text-slate-800'>
                  Senior Frontend Engineer
                </h3>
                <span className='text-slate-500 font-medium'>
                  2020 - Present
                </span>
              </div>
              <p className='text-lg text-blue-600 font-medium mb-4'>
                Rafay Systems
              </p>
              <ul className='space-y-2 text-slate-700'>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Led UI revamp efforts and implemented best practices for
                    component architecture
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Integrated Storybook for comprehensive component
                    documentation and testing
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Enhanced application performance through code splitting and
                    memoization techniques
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Implemented Vite.js to significantly improve build times and
                    development experience
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                <h3 className='text-2xl font-semibold text-slate-800'>
                  Freelance Full-Stack Developer
                </h3>
                <span className='text-slate-500 font-medium'>2024</span>
              </div>
              <p className='text-lg text-emerald-600 font-medium mb-4'>
                Khubaib Foundation
              </p>
              <ul className='space-y-2 text-slate-700'>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Developed comprehensive website and Content Management
                    System (CMS)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Designed and implemented UI based on Figma designs using
                    Next.js and Material-UI
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Built a robust blog system for event tracking and content
                    management
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                <h3 className='text-2xl font-semibold text-slate-800'>
                  Frontend Developer
                </h3>
                <span className='text-slate-500 font-medium'>2020</span>
              </div>
              <p className='text-lg text-purple-600 font-medium mb-4'>DCAO</p>
              <ul className='space-y-2 text-slate-700'>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Developed dynamic kiosk portal for COVID monitoring and data
                    visualization
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Implemented WebRTC, MQTT, and Socket.io for real-time
                    communications
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Collaborated with backend developers to streamline API
                    integration and data flow
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                <h3 className='text-2xl font-semibold text-slate-800'>
                  Junior Software Engineer
                </h3>
                <span className='text-slate-500 font-medium'>2018 - 2020</span>
              </div>
              <p className='text-lg text-amber-600 font-medium mb-4'>
                DevUp Technologies
              </p>
              <ul className='space-y-2 text-slate-700'>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Developed web applications and Windows Forms applications
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Created reusable React templates for faster project setup
                    and development
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0'></span>
                  <span>
                    Automated tool generation for database schemas and
                    development workflows
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Awards Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-slate-800 mb-4'>
              Education & Recognition
            </h2>
            <p className='text-lg text-slate-600'>
              Academic excellence and professional achievements.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200'>
              <h3 className='text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2'>
                <svg
                  className='w-6 h-6 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 14l9-5-9-5-9 5 9 5z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                  />
                </svg>
                Education
              </h3>
              <div className='space-y-3'>
                <div>
                  <h4 className='text-lg font-semibold text-slate-800'>
                    B.S. Computer Science
                  </h4>
                  <p className='text-slate-600'>Air University, Pakistan</p>
                  <p className='text-sm text-slate-500'>2014 - 2018</p>
                </div>
                <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
                  <p className='text-yellow-800 font-medium'>
                    🏆 Gold Medalist
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-xl border border-slate-200'>
              <h3 className='text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2'>
                <svg
                  className='w-6 h-6 text-emerald-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                  />
                </svg>
                Awards & Recognition
              </h3>
              <div className='space-y-3'>
                <div className='bg-emerald-50 border border-emerald-200 rounded-lg p-4'>
                  <h4 className='text-lg font-semibold text-emerald-800'>
                    Rafay Hackathon 2023
                  </h4>
                  <p className='text-emerald-700'>🥈 Runners Up</p>
                </div>
                <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                  <h4 className='text-lg font-semibold text-blue-800'>
                    Senior Frontend Engineer
                  </h4>
                  <p className='text-blue-700'>
                    5+ years of professional experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id='resume' className='py-20 px-6 bg-slate-50'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-slate-800 mb-4'>Resume</h2>
          <p className='text-lg text-slate-600 mb-8'>
            Download my detailed resume or view it online.
          </p>

          <div className='mb-8'>
            <a
              href={resumeSrc}
              download
              className='inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 font-medium'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              Download Resume
            </a>
          </div>

          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <iframe
              src={resumeSrc}
              className='w-full h-96 md:h-[600px]'
              title='Resume PDF'
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-slate-800 text-white py-12 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='text-2xl font-semibold mb-4'>Abdul Zahoor</h3>
          <p className='text-slate-300 mb-6'>
            Full Stack Expert passionatly creating GenAI products and building
            scalable web applications.
          </p>
          <div className='flex justify-center space-x-6 mb-6'>
            <a
              href='mailto:its4zahoor@gmail.com'
              className='text-slate-300 hover:text-white transition-colors'
            >
              Email
            </a>
            <a
              href='https://github.com/its4zahoor'
              className='text-slate-300 hover:text-white transition-colors'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/its4zahoor'
              className='text-slate-300 hover:text-white transition-colors'
            >
              LinkedIn
            </a>
          </div>
          <p className='text-slate-400 text-sm'>
            © 2025 - {curentYear} Abdul Zahoor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
