import Head from 'next/head';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-red-700 via-purple-700 to-purple-900 text-white font-sans'>
      <Head>
        <title>Abdul Zahoor | Portfolio</title>
      </Head>

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center h-screen text-center p-6'>
        <h1 className='text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg'>
          Abdul Zahoor
        </h1>
        <p className='mt-4 text-lg md:text-2xl text-gray-100'>
          Senior Software Engineer | Frontend & Fullstack Developer
        </p>
        <div className='mt-6 flex space-x-6'>
          <a
            href='mailto:its4zahoor@gmail.com'
            className='text-yellow-300 hover:underline'
          >
            Email
          </a>
          <a
            href='https://github.com/its4zahoor'
            className='text-yellow-300 hover:underline'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/its4zahoor'
            className='text-yellow-300 hover:underline'
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-16 px-8 text-center bg-white text-gray-900 rounded-t-3xl shadow-lg'>
        <h2 className='text-5xl font-bold mb-8 text-pink-600'>Skills</h2>
        <p className='text-gray-700 text-lg'>
          JavaScript, TypeScript, Node.js, MongoDB, MySQL, React.js, Next.js,
          Redux, Tailwind CSS, MUI, Storybook, Git, Webpack, Vite.js
        </p>
      </section>

      {/* Work Experience Section */}
      <section className='py-16 px-8 text-center bg-gray-100 text-gray-900'>
        <h2 className='text-5xl font-bold mb-8 text-purple-700'>
          Work Experience
        </h2>
        <div className='text-left max-w-3xl mx-auto space-y-6'>
          <div>
            <h3 className='text-3xl font-semibold'>
              Senior Frontend Engineer - Rafay Systems (2020 - Present)
            </h3>
            <ul className='list-disc list-inside text-gray-700 mt-2'>
              <li>
                Collaborated with designers, product managers, and backend
                developers.
              </li>
              <li>Led UI revamp efforts and implemented best UI practices.</li>
              <li>Integrated Storybook for better component documentation.</li>
              <li>
                Enhanced performance using code splitting and memoization.
              </li>
              <li>Implemented Vite.js to improve build times.</li>
            </ul>
          </div>
          <div>
            <h3 className='text-3xl font-semibold'>
              Freelance Full-Stack Developer - Khubaib Foundation (2024)
            </h3>
            <ul className='list-disc list-inside text-gray-700 mt-2'>
              <li>
                Developed main website and Content Management System (CMS).
              </li>
              <li>
                Designed UI based on Figma and built using Next.js and
                Material-UI.
              </li>
              <li>Implemented a blog system for event tracking.</li>
            </ul>
          </div>
          <div>
            <h3 className='text-3xl font-semibold'>
              Frontend Developer - DCAO (2020)
            </h3>
            <ul className='list-disc list-inside text-gray-700 mt-2'>
              <li>Developed dynamic kiosk portal for COVID monitoring.</li>
              <li>
                Implemented WebRTC, MQTT, and Socket.io for real-time
                communications.
              </li>
              <li>
                Collaborated with backend developers to streamline API requests.
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-3xl font-semibold'>
              Junior Software Engineer - DevUp Technologies (2018 - 2020)
            </h3>
            <ul className='list-disc list-inside text-gray-700 mt-2'>
              <li>Developed web and Windows Forms applications.</li>
              <li>Created React templates for faster project setup.</li>
              <li>Automated tool generation for database schemas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Awards Section */}
      <section className='py-16 px-8 text-center bg-white text-gray-900 rounded-b-3xl shadow-lg'>
        <h2 className='text-5xl font-bold mb-8 text-red-500'>
          Education & Awards
        </h2>
        <p className='text-gray-700 text-lg'>
          B.S. in Computer Science - Air University, Pakistan (2014-2018) | Gold
          Medalist
        </p>
        <p className='text-gray-700 text-lg'>
          Runners Up - Rafay Hackathon 2023
        </p>
      </section>

      {/* Resume Section */}
      <section className='py-16 px-8 text-center bg-gray-800 text-white'>
        <h2 className='text-5xl font-bold mb-8 text-yellow-400'>Resume</h2>
        <a
          href='/Abdul_Zahoor_Resume_2501.pdf'
          download
          className='px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-lg shadow-lg'
        >
          Download Resume
        </a>
        <div className='mt-4'>
          <iframe
            src='/Abdul_Zahoor_Resume_2501.pdf'
            className='w-full h-96 rounded-lg shadow-lg'
            title='Resume PDF'
          ></iframe>
        </div>
      </section>
    </div>
  );
}
