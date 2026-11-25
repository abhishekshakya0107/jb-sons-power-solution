import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Clock3, Zap, BadgeCheck } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import { services, projects, testimonials, companyInfo } from '../data/dummyData';

const trustItems = [
  'Licensed Professionals',
  'Quality Materials',
  'Safety First',
  'Transparent Pricing',
  'On-Time Delivery',
];

const categoryCards = [
  {
    title: 'Residential',
    description: 'Safe and reliable electrical solutions for homes.',
    services: ['Wiring', 'Lighting', 'Fans & Appliances', 'Safety upgrades'],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Commercial',
    description: 'Electrical infrastructure for offices, shops and commercial buildings.',
    services: ['Office fit-outs', 'Panel systems', 'Emergency backup', 'Maintenance'],
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Industrial',
    description: 'Heavy-duty electrical solutions for industrial facilities.',
    services: ['Panel installation', 'Load balancing', 'Power distribution', 'Safety systems'],
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
  },
];

const featureList = [
  { number: '01', title: 'Experienced Professionals', description: 'A skilled team with practical expertise across residential, commercial and industrial projects.' },
  { number: '02', title: 'Quality Materials', description: 'Only trusted components, tested fittings and standards-driven implementation.' },
  { number: '03', title: 'Safety First', description: 'Every job follows disciplined safety processes, inspections and verification.' },
  { number: '04', title: 'Transparent Pricing', description: 'Clear pricing structures and no hidden surprises from quote to completion.' },
  { number: '05', title: 'On-Time Completion', description: 'Project schedules are planned carefully and monitored for steady delivery.' },
  { number: '06', title: 'After-Service Support', description: 'Ongoing support and maintenance to keep systems dependable over time.' },
];

const processSteps = [
  { number: '01', title: 'Site Inspection', icon: ShieldCheck },
  { number: '02', title: 'Requirement Analysis', icon: BadgeCheck },
  { number: '03', title: 'Quotation', icon: Zap },
  { number: '04', title: 'Professional Execution', icon: Clock3 },
  { number: '05', title: 'Testing & Handover', icon: Check },
];

function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0d0d0f]">
        <img
          src={companyInfo.heroImage}
          alt="Electrical contractor working on industrial installation"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,140,26,0.18),transparent_28%),linear-gradient(90deg,rgba(10,10,11,0.88),rgba(10,10,11,0.68))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">
              PROFESSIONAL ELECTRICAL CONTRACTOR
            </p>
            <h1 className="mt-7 text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Powering homes, businesses & industries
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e8e8ea]">
              Reliable electrical installation, maintenance and project solutions built around safety, quality and performance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/get-quote" className="inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3.5 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]">
                Get a Free Quote
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#ff8c1a] hover:text-[#ff8c1a]">
                View Our Projects
              </Link>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-3xl font-black text-[#ff8c1a]">10+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d1d5db]">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#ff8c1a]">500+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d1d5db]">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#ff8c1a]">50+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d1d5db]">Commercial Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#ff8c1a]">24/7</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d1d5db]">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0c0c0d]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 text-sm text-[#d1d5db] sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-[#ff8c1a]"><Check size={16} /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0b0b0c] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Our Electrical Services"
            subtitle="Complete electrical solutions for residential, commercial and industrial requirements."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0f] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialized sectors"
            title="Built for every setting"
            subtitle="Trusted electrical systems for homes, offices, retail spaces, factories and mission-critical operations."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {categoryCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
                <img src={card.image} alt={card.title} className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#cfcfd3]">{card.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-[#d1d5db]">
                    {card.services.map((service) => (
                      <li key={service} className="flex items-center gap-2">
                        <span className="text-[#ff8c1a]">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff8c1a] hover:text-[#ff9d2e]">
                    Explore
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0c] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why JB & SONS"
            title="Why JB & SONS?"
            subtitle="We combine technical execution, safety discipline and responsive service to deliver dependable electrical outcomes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureList.map((feature) => (
              <div key={feature.number} className="rounded-2xl border border-white/10 bg-[#111214] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-black text-[#ff8c1a]">{feature.number}</p>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#cfcfd3]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0f] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Our Recent Projects"
            subtitle="A selection of recent jobs completed across residential, commercial and industrial environments."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0c] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="Simple, disciplined workflow"
            subtitle="We keep every project structured, transparent and professional from inspection to handover."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.number} className="relative rounded-2xl border border-white/10 bg-[#111214] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 text-[#ff8c1a]">
                  <step.icon size={20} />
                </div>
                <p className="mt-5 text-3xl font-black text-[#ff8c1a]">{step.number}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0f] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            subtitle="Trusted by homeowners, businesses and industrial clients across the region."
          />
          <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} review={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0c] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">About us</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Engineering trust. Powering performance.</h2>
              <p className="mt-5 text-base leading-8 text-[#d1d5db]">
                JB & SONS POWER SOLUTIONS is a professional contracting company specialising in reliable electrical design, installation and maintenance for residential, commercial and industrial needs. We focus on safety, long-term performance and disciplined execution.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[#0d0d0f] p-5">
                  <p className="text-3xl font-black text-[#ff8c1a]">10+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Years Experience</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d0d0f] p-5">
                  <p className="text-3xl font-black text-[#ff8c1a]">500+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Projects Delivered</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d0d0f] p-5">
                  <p className="text-3xl font-black text-[#ff8c1a]">50+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Clients Served</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d0d0f] p-5">
                  <p className="text-3xl font-black text-[#ff8c1a]">100%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d1d5db]">Commitment</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
              <img src={companyInfo.aboutImage} alt="JB & SONS electrical team at site" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <div className="bg-[#0b0b0c] pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </div>
    </main>
  );
}

export default Home;
