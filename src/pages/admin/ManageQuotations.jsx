import { FileText, Save, Send, Plus } from 'lucide-react';

const quotations = [
  { customer: 'Rohit Khanna', project: 'Residential Wiring', workItem: 'Complete Electrical Work', amount: '₹85,000', status: 'Draft' },
  { customer: 'Mehak Arora', project: 'Office Fit-out', workItem: 'Lighting Installation', amount: '₹39,800', status: 'Sent' },
];

function ManageQuotations() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Admin</p>
            <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Quotation Management</h1>
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff8c1a] px-5 py-3 text-sm font-semibold text-[#111827]">
            <Plus size={16} />
            Create Quotation
          </button>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h2 className="text-xl font-bold text-white">Quotation Draft</h2>
            <div className="mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Customer</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="Rohit Khanna" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="Residential Wiring" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Work Item</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="Complete Electrical Work" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Description</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="3BHK house electrical package" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Quantity</label>
                  <input type="number" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue={1} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Unit</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue="Project" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Rate</label>
                  <input type="number" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue={85000} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Amount</label>
                  <input type="number" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none focus:border-[#ff8c1a]" defaultValue={85000} />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h2 className="text-xl font-bold text-white">Quotation Preview</h2>
            <div className="mt-6 space-y-4 text-sm text-[#d1d5db]">
              <div className="flex items-center justify-between"><span>Subtotal</span><span>₹85,000</span></div>
              <div className="flex items-center justify-between"><span>Material Cost</span><span>₹32,000</span></div>
              <div className="flex items-center justify-between"><span>Labour Cost</span><span>₹36,000</span></div>
              <div className="flex items-center justify-between"><span>Discount</span><span>₹0</span></div>
              <div className="flex items-center justify-between"><span>Tax</span><span>₹9,500</span></div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-base font-bold text-white"><span>Grand Total</span><span>₹85,000</span></div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"><Save size={16} /> Save Draft</button>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff8c1a] px-4 py-3 text-sm font-semibold text-[#111827]"><FileText size={16} /> Generate Quotation</button>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 px-4 py-3 text-sm font-semibold text-[#ff8c1a]"><Send size={16} /> Send Quotation</button>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0d0d0f] text-[#d1d5db]">
                <tr>
                  <th className="px-4 py-4 font-semibold">Customer</th>
                  <th className="px-4 py-4 font-semibold">Project</th>
                  <th className="px-4 py-4 font-semibold">Work Item</th>
                  <th className="px-4 py-4 font-semibold">Amount</th>
                  <th className="px-4 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((quote) => (
                  <tr key={quote.customer} className="border-t border-white/10 text-[#d1d5db]">
                    <td className="px-4 py-4 font-medium text-white">{quote.customer}</td>
                    <td className="px-4 py-4">{quote.project}</td>
                    <td className="px-4 py-4">{quote.workItem}</td>
                    <td className="px-4 py-4">{quote.amount}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 px-2 py-1 text-xs font-semibold text-[#ff8c1a]">{quote.status}</span>
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

export default ManageQuotations;
