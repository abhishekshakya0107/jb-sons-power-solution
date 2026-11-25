import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { services } from '../data/dummyData';

function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <main className="bg-[#0b0b0c] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-black uppercase text-white">Service not found</h1>
          <Link to="/services" className="mt-6 inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827]">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff8c1a] hover:text-[#ff9d2e]">
          <ArrowLeft size={16} />
          Back to Services
        </Link>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#111214] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">{service.category}</p>
              <h1 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">{service.name}</h1>
              <p className="mt-5 text-base leading-8 text-[#d1d5db]">{service.description}</p>

              <div className="mt-8 rounded-xl border border-[#ff8c1a]/30 bg-[#ff8c1a]/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">Starting from</p>
                <p className="mt-2 text-3xl font-black text-white">{service.startingPrice}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-white">What’s included</h2>
                <ul className="mt-4 space-y-3 text-[#d1d5db]">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-[#ff8c1a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/get-quote" className="mt-8 inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]">
                Request a Quote
              </Link>
            </div>

            <div className="bg-[#0d0d0f] p-8 sm:p-10">
              <div className="rounded-2xl border border-white/10 bg-[#111214] p-6">
                <h2 className="text-xl font-bold text-white">Why choose this service?</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[#d1d5db]">
                  <p>Our team designs and installs systems that balance performance, material quality and long-term reliability.</p>
                  <p>Each project follows proper planning, site evaluation and safety-first execution for consistent results.</p>
                  <p>We provide practical recommendations that align with your property type, usage pattern and budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServiceDetails;
