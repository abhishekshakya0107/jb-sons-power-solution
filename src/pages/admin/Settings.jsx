import { Save } from 'lucide-react';

function Settings() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Admin</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Settings</h1>
        </div>

        <div className="space-y-8">
          <section className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h2 className="text-xl font-bold text-white">Company Information</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Company Name</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="JB & SONS POWER SOLUTIONS" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Phone</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="+91 88876 76271" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Email</label>
                <input type="email" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="jbsonsgstn@gmail.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Address</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="Fatehgarh Cantt, Farrukhabad, Uttar Pradesh 209601" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h2 className="text-xl font-bold text-white">Business Information</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Working Hours</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="Mon-Sat: 8:00 AM - 8:00 PM" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Service Areas</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="Kanpur, Lucknow, Haridwar" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Emergency Contact</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="+91 88876 76271" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h2 className="text-xl font-bold text-white">Social Media</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Instagram</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="#" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Facebook</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="#" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">YouTube</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="#" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h2 className="text-xl font-bold text-white">Website</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Hero Image</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="https://images.unsplash.com/..." />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Logo</label>
                <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="JB & SONS" />
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827]">
              <Save size={16} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
