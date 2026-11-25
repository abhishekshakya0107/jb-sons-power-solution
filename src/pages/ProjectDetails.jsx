import { ArrowLeft, CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import { projects } from '../data/dummyData';

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <main className="bg-[#0b0b0c] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-black uppercase text-white">Project not found</h1>
          <Link to="/projects" className="mt-6 inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827]">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff8c1a] hover:text-[#ff9d2e]">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111214] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <img src={project.cover} alt={project.name} className="h-[380px] w-full object-cover" />
          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">{project.category}</p>
              <h1 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">{project.name}</h1>
              <p className="mt-5 text-base leading-8 text-[#d1d5db]">{project.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d0f] p-4 text-[#d1d5db]">
                  <MapPin size={18} className="text-[#ff8c1a]" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d0f] p-4 text-[#d1d5db]">
                  <CalendarDays size={18} className="text-[#ff8c1a]" />
                  <span>{project.completionDate}</span>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-white">Scope of Work</h2>
                <ul className="mt-4 space-y-3 text-[#d1d5db]">
                  {project.servicesProvided.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-[#ff8c1a]" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] p-6">
                <h2 className="text-xl font-bold text-white">Services Provided</h2>
                <ul className="mt-4 space-y-3 text-sm text-[#d1d5db]">
                  {project.servicesProvided.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#ff8c1a]" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/get-quote"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]"
              >
                Request Similar Project Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">Project Gallery</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <img key={index} src={image} alt={`${project.name} gallery ${index + 1}`} className="h-64 w-full rounded-xl object-cover" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
