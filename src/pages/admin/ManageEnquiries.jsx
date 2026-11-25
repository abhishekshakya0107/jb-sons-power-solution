import { useEffect, useState } from 'react';
import { MessageSquareText, Eye, Send, CheckCheck } from 'lucide-react';

import { apiFetch } from '../../services/api';

function ManageEnquiries() {
  const [enquiries, setEnquiries] = useState([]);

  const loadEnquiries = async () => {
    const data = await apiFetch('/api/enquiries');
    setEnquiries(data);
  };

  useEffect(() => {
    loadEnquiries().catch((error) => {
      console.error('Unable to load enquiries:', error);
    });
  }, []);

  const handleStatusUpdate = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'New' ? 'Contacted' : currentStatus === 'Contacted' ? 'Quotation Sent' : 'Closed';

    try {
      await apiFetch(`/api/enquiries/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ status: nextStatus, notes: '' }),
      });
      await loadEnquiries();
    } catch (error) {
      console.error('Unable to update enquiry status:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Admin</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Manage Enquiries</h1>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111214]">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0d0d0f] text-[#d1d5db]">
                <tr>
                  <th className="px-4 py-4 font-semibold">Customer</th>
                  <th className="px-4 py-4 font-semibold">Phone</th>
                  <th className="px-4 py-4 font-semibold">Service</th>
                  <th className="px-4 py-4 font-semibold">Location</th>
                  <th className="px-4 py-4 font-semibold">Date</th>
                  <th className="px-4 py-4 font-semibold">Status</th>
                  <th className="px-4 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry._id} className="border-t border-white/10 text-[#d1d5db]">
                    <td className="px-4 py-4 font-medium text-white">{enquiry.fullName}</td>
                    <td className="px-4 py-4">{enquiry.mobileNumber}</td>
                    <td className="px-4 py-4">{enquiry.serviceRequired}</td>
                    <td className="px-4 py-4">{enquiry.city}</td>
                    <td className="px-4 py-4">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 px-2 py-1 text-xs font-semibold text-[#ff8c1a]">
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <button type="button" className="text-[#ff8c1a] hover:text-[#ff9d2e]"><Eye size={16} /></button>
                        <button type="button" className="text-[#d1d5db] hover:text-white"><MessageSquareText size={16} /></button>
                        <button type="button" onClick={() => handleStatusUpdate(enquiry._id, enquiry.status)} className="text-[#d1d5db] hover:text-white"><Send size={16} /></button>
                        <button type="button" className="text-[#d1d5db] hover:text-white"><CheckCheck size={16} /></button>
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

export default ManageEnquiries;
