function QuoteForm() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <h2 className="text-2xl font-black uppercase tracking-tight text-white">Request a Quote</h2>
      <form className="mt-6 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Full Name</label>
            <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Mobile Number</label>
            <input type="tel" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Enter phone number" />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Email</label>
            <input type="email" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Enter email address" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">City / Location</label>
            <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="City or locality" />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project Type</label>
            <select className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Service Required</label>
            <select className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]">
              <option>Electrical Wiring</option>
              <option>Lighting Installation</option>
              <option>Panel Installation</option>
            </select>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Approximate Area</label>
            <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="e.g., 1200 sq.ft" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Preferred Date</label>
            <input type="date" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project Requirement</label>
          <textarea rows="5" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Describe your project requirements"></textarea>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Additional Notes</label>
          <textarea rows="4" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Any additional information"></textarea>
        </div>
        <button type="button" className="inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]">
          Submit Quote Request
        </button>
      </form>
    </section>
  );
}

export default QuoteForm;
