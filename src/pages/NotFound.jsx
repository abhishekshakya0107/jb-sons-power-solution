import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="bg-[#0b0b0c] py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff8c1a]">404</p>
        <h1 className="mt-5 text-5xl font-black uppercase tracking-tight text-white sm:text-6xl">Power Lost?</h1>
        <p className="mt-5 text-lg leading-8 text-[#d1d5db]">
          The page you're looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
