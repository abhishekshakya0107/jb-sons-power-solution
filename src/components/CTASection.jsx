import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="bg-[#111214] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#ff8c1a]/30 bg-gradient-to-r from-[#111214] to-[#1c1c1e] p-8 shadow-[0_20px_50px_rgba(255,140,26,0.1)] sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Need a reliable partner?</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Let’s build a safer, stronger electrical system.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/get-quote"
                className="inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#ff8c1a] hover:text-[#ff8c1a]"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
