import { Plus, Pencil, Trash2, Eye, Upload } from 'lucide-react';

const projects = [
  { name: 'Modern Residential Wiring', category: 'Residential', location: 'Kanpur', featured: true, status: 'Published' },
  { name: 'Commercial Office Electrical Installation', category: 'Commercial', location: 'Lucknow', featured: true, status: 'Published' },
  { name: 'Industrial Panel Installation', category: 'Industrial', location: 'Haridwar', featured: false, status: 'Draft' },
];

function ManageProjects() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Admin</p>
            <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Manage Projects</h1>
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff8c1a] px-5 py-3 text-sm font-semibold text-[#111827]">
            <Plus size={16} />
            Add Project
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
              <div className="h-52 bg-[linear-gradient(135deg,#ff8c1a,#1a1a1d)]" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                  <span className="rounded-full border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff8c1a]">
                    {project.category}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#d1d5db]">{project.location}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-[#d1d5db]">
                  <span>{project.status}</span>
                  <span>{project.featured ? 'Featured' : 'Standard'}</span>
                </div>
                <div className="mt-5 flex gap-3">
                  <button type="button" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white"><Eye size={14} /> View</button>
                  <button type="button" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white"><Pencil size={14} /> Edit</button>
                  <button type="button" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white"><Upload size={14} /> Publish</button>
                  <button type="button" className="inline-flex items-center gap-2 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300"><Trash2 size={14} /> Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageProjects;
