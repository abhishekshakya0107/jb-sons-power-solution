import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/dummyData';

const filters = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'PANELS', 'LIGHTING'];

function Projects() {
  return (
    <main className="bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Recent Projects"
          subtitle="Explore recent electrical work delivered for residential, commercial and industrial clients."
          centered
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${filter === 'ALL' ? 'border-[#ff8c1a] bg-[#ff8c1a]/10 text-[#ff8c1a]' : 'border-white/10 bg-white/5 text-[#d1d5db] hover:border-[#ff8c1a]/60 hover:text-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
