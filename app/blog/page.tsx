import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Abdul Zahoor',
  description:
    'Articles and notes from Abdul Zahoor on React consulting, SaaS dashboards, performance, and product delivery. Coming soon.',
};

export default function BlogPage() {
  return (
    <main className='min-h-screen bg-slate-50 px-6 py-16 text-slate-900 md:py-24'>
      <div className='mx-auto max-w-4xl'>
        <Link
          href='/'
          className='inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:border-blue-300'
        >
          Back to Home
        </Link>

        <section className='mt-8 rounded-[2rem] border border-blue-100 bg-white p-10 shadow-sm md:p-14'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-blue-700'>Blog</p>
          <h1 className='mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl'>
            Blog is coming soon
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
            I&apos;ll be publishing practical notes on React consulting, SaaS dashboard architecture, frontend
            performance, and shipping cleaner product UI.
          </p>
          <p className='mt-4 text-base leading-7 text-slate-500'>
            For now, if you&apos;re hiring for a React or dashboard-heavy project, email me at{' '}
            <a href='mailto:its4zahoor@gmail.com' className='font-semibold text-slate-900 underline underline-offset-4'>
              its4zahoor@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
