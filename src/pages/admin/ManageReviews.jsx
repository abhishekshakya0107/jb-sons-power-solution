import { Plus, Pencil, Trash2, Eye } from 'lucide-react';

const reviews = [
  { customer: 'Amit Verma', projectType: 'Residential Wiring', rating: 5, status: 'Published', date: 'March 2026' },
  { customer: 'Sonal Gupta', projectType: 'Commercial Installation', rating: 5, status: 'Draft', date: 'February 2026' },
  { customer: 'Rajesh Mishra', projectType: 'Industrial Panels', rating: 5, status: 'Published', date: 'January 2026' },
];

function ManageReviews() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Admin</p>
            <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Manage Reviews</h1>
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff8c1a] px-5 py-3 text-sm font-semibold text-[#111827]">
            <Plus size={16} />
            Add Review
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0d0d0f] text-[#d1d5db]">
                <tr>
                  <th className="px-4 py-4 font-semibold">Customer Name</th>
                  <th className="px-4 py-4 font-semibold">Project Type</th>
                  <th className="px-4 py-4 font-semibold">Rating</th>
                  <th className="px-4 py-4 font-semibold">Date</th>
                  <th className="px-4 py-4 font-semibold">Status</th>
                  <th className="px-4 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.customer} className="border-t border-white/10 text-[#d1d5db]">
                    <td className="px-4 py-4 font-medium text-white">{review.customer}</td>
                    <td className="px-4 py-4">{review.projectType}</td>
                    <td className="px-4 py-4">{'⭐'.repeat(review.rating)}</td>
                    <td className="px-4 py-4">{review.date}</td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full border px-2 py-1 text-xs font-semibold ${review.status === 'Published' ? 'border-[#ff8c1a]/40 bg-[#ff8c1a]/10 text-[#ff8c1a]' : 'border-white/10 bg-white/5 text-[#d1d5db]'}`}>
                        {review.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <button type="button" className="text-[#ff8c1a] hover:text-[#ff9d2e]"><Eye size={16} /></button>
                        <button type="button" className="text-[#d1d5db] hover:text-white"><Pencil size={16} /></button>
                        <button type="button" className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageReviews;
