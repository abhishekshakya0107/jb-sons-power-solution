import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const terms = [
  {
    title: 'Service scope',
    text:
      'Our quotations and proposals are based on the information available at the time of submission. Any changes in site conditions, design requirements, material availability, or regulatory requirements may affect final scope and cost.',
  },
  {
    title: 'Scheduling and execution',
    text:
      'We will make reasonable efforts to follow agreed schedules, but project timelines may vary depending on approvals, site access, weather, material procurement, or unforeseen technical constraints.',
  },
  {
    title: 'Payment terms',
    text:
      'Payment terms will be defined in the agreed quotation or contract. Outstanding balances may affect progress or completion timelines until cleared in accordance with the agreed schedule.',
  },
  {
    title: 'Warranties',
    text:
      'We provide workmanship and service standards in line with the agreed project scope. Product warranties from manufacturers remain subject to the respective supplier terms and conditions.',
  },
  {
    title: 'Liability',
    text:
      'JB & SONS POWER SOLUTIONS is committed to professional execution and safe delivery. Our liability is limited to the scope and terms explicitly set out in the project agreement, and we do not accept responsibility for indirect or consequential losses.',
  },
  {
    title: 'Governing law',
    text:
      'These terms are governed by the applicable laws of the jurisdiction where the services are performed, and any disputes shall be resolved through the appropriate legal channels in that jurisdiction.',
  },
];

function Terms() {
  return (
    <main className="bg-[#0b0b0c] text-white">
      <section className="border-b border-white/10 bg-[#0d0d0f]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">
            Terms & Conditions
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            Professional clarity, every step
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#d1d5db]">
            These terms define the way we deliver our electrical and contracting services, manage project expectations, and protect the interests of all parties involved.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Terms"
            title="Important project terms"
            subtitle="Please review these conditions carefully before proceeding with any quotation, project scope, or contract with our team."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {terms.map((term) => (
              <div key={term.title} className="rounded-2xl border border-white/10 bg-[#111214] p-6">
                <h2 className="text-xl font-bold text-white">{term.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#d1d5db]">{term.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

export default Terms;
