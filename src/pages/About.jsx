import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/dummyData';

function About() {
  return (
    <main className="bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Engineering trust. Powering performance."
          subtitle="We are committed to delivering dependable electrical systems with a disciplined approach to quality, safety and service."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <h2 className="text-2xl font-black uppercase text-white">Company story</h2>
            <p className="mt-5 text-base leading-8 text-[#d1d5db]">
              JB & SONS POWER SOLUTIONS was founded to bring professional, standards-driven electrical services to homes, businesses and industrial facilities. Over the years, we have grown by focusing on safety, reliability and clean execution.
            </p>
            <p className="mt-5 text-base leading-8 text-[#d1d5db]">
              Our team works closely with clients to understand project goals, site conditions and long-term performance expectations so each installation is practical and efficient.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <img src={companyInfo.aboutImage} alt="JB & SONS team at work" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6 text-center">
            <p className="text-4xl font-black text-[#ff8c1a]">10+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Years</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6 text-center">
            <p className="text-4xl font-black text-[#ff8c1a]">500+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Projects</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6 text-center">
            <p className="text-4xl font-black text-[#ff8c1a]">50+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Clients</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6 text-center">
            <p className="text-4xl font-black text-[#ff8c1a]">100%</p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Commitment</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8">
            <h2 className="text-2xl font-black uppercase text-white">Experience</h2>
            <p className="mt-4 text-base leading-8 text-[#d1d5db]">
              Our team combines technical knowledge with practical site experience to handle varying scale and complexity with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8">
            <h2 className="text-2xl font-black uppercase text-white">Team</h2>
            <p className="mt-4 text-base leading-8 text-[#d1d5db]">
              Skilled technicians, project coordinators and quality-focused supervisors oversee every aspect of delivery from planning to final testing.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8">
            <h2 className="text-2xl font-black uppercase text-white">Quality commitment</h2>
            <p className="mt-4 text-base leading-8 text-[#d1d5db]">
              We define quality through correct installation, dependable materials, clean workmanship and long-term operational reliability.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8">
            <h2 className="text-2xl font-black uppercase text-white">Safety commitment</h2>
            <p className="mt-4 text-base leading-8 text-[#d1d5db]">
              Every project is planned and executed with strict adherence to safe working practices, protective systems and inspection standards.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
