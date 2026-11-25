import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#111214] shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full border border-[#ff8c1a]/40 bg-[#0d0d0f]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff8c1a]">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-[#cfcfd3]">
          <MapPin size={14} className="text-[#ff8c1a]" />
          {project.location}
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-[#cfcfd3]">{project.description}</p>

        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff8c1a] transition-colors hover:text-[#ff9d2e]"
        >
          View Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
