import { Plus, Pencil, Trash2, Power } from 'lucide-react';

const services = [
  { name: 'Residential Electrical Wiring', category: 'Residential', pricingType: 'Per Sq.Ft.', price: '₹120/sq.ft', status: 'Enabled' },
  { name: 'Commercial Electrical Installation', category: 'Commercial', pricingType: 'Starting From', price: '₹180/sq.ft', status: 'Enabled' },
  { name: 'Industrial Electrical Solutions', category: 'Industrial', pricingType: 'Custom Quote', price: 'Custom Quote', status: 'Disabled' },
];

function ManageServices() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Admin</p>
            <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Manage Services</h1>
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff8c1a] px-5 py-3 text-sm font-semibold text-[#111827]">
            <Plus size={16} />
            Add Service
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0d0d0f] text-[#d1d5db]">
                <tr>
                  <th className="px-4 py-4 font-semibold">Service</th>
                  <th className="px-4 py-4 font-semibold">Category</th>
                  <th className="px-4 py-4 font-semibold">Pricing Type</th>
                  <th className="px-4 py-4 font-semibold">Price</th>
                  <th className="px-4 py-4 font-semibold">Status</th>
                  <th className="px-4 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.name} className="border-t border-white/10 text-[#d1d5db]">
                    <td className="px-4 py-4 font-medium text-white">{service.name}</td>
                    <td className="px-4 py-4">{service.category}</td>
                    <td className="px-4 py-4">{service.pricingType}</td>
                    <td className="px-4 py-4">{service.price}</td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full border px-2 py-1 text-xs font-semibold ${service.status === 'Enabled' ? 'border-[#ff8c1a]/40 bg-[#ff8c1a]/10 text-[#ff8c1a]' : 'border-white/10 bg-white/5 text-[#d1d5db]'}`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <button type="button" className="text-[#ff8c1a] hover:text-[#ff9d2e]"><Pencil size={16} /></button>
                        <button type="button" className="text-[#d1d5db] hover:text-white"><Power size={16} /></button>
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

export default ManageServices;
