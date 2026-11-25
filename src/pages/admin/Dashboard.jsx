import { useEffect, useState } from 'react';
import { Bell, Search, ArrowUpRight } from 'lucide-react';

import { apiFetch } from '../../services/api';

function Dashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalServices: 0,
    newEnquiries: 0,
    pendingQuotations: 0,
    completedProjects: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [enquiryData, servicesData, projectsData, quotationsData] = await Promise.all([
          apiFetch('/api/enquiries'),
          apiFetch('/api/services'),
          apiFetch('/api/projects'),
          apiFetch('/api/quotations'),
        ]);

        setEnquiries(enquiryData);
        setStats({
          totalProjects: projectsData.length,
          totalServices: servicesData.length,
          newEnquiries: enquiryData.filter((item) => item.status === 'New').length,
          pendingQuotations: quotationsData.filter((item) => item.status !== 'Approved').length,
          completedProjects: projectsData.filter((item) => item.featured).length,
        });
      } catch (error) {
        console.error('Unable to load dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  const cards = [
    { label: 'TOTAL PROJECTS', value: stats.totalProjects, highlight: '+12%' },
    { label: 'TOTAL SERVICES', value: stats.totalServices, highlight: '+2%' },
    { label: 'NEW ENQUIRIES', value: stats.newEnquiries, highlight: '+8%' },
    { label: 'PENDING QUOTATIONS', value: stats.pendingQuotations, highlight: '+4%' },
    { label: 'COMPLETED PROJECTS', value: stats.completedProjects, highlight: '+15%' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0c] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-[#111214] p-4 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d0f] px-4 py-3">
                <Search size={18} className="text-[#ff8c1a]" />
                <input type="text" placeholder="Search" className="w-full bg-transparent text-sm text-white placeholder-[#9ca3af] outline-none" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button type="button" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d0d0f] text-[#d1d5db]">
                <Bell size={18} />
              </button>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d0f] px-3 py-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff8c1a] text-sm font-bold text-[#111827]">AD</div>
                <div>
                  <p className="text-sm font-semibold text-white">Admin</p>
                  <p className="text-xs text-[#9ca3af]">Super admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {cards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/10 bg-[#111214] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d1d5db]">{card.label}</p>
                <span className="text-xs font-semibold text-[#ff8c1a]">{card.highlight}</span>
              </div>
              <p className="mt-6 text-3xl font-black text-white">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h3 className="text-lg font-bold text-white">Monthly Enquiries</h3>
            <div className="mt-6 h-48 rounded-xl bg-[#0d0d0f] p-4">
              <div className="flex h-full items-end gap-3">
                {[48, 60, 52, 74, 84, 90].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-md bg-[#ff8c1a]" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h3 className="text-lg font-bold text-white">Project Categories</h3>
            <div className="mt-6 space-y-4">
              {['Residential', 'Commercial', 'Industrial'].map((item, index) => (
                <div key={item}>
                  <div className="mb-2 flex items-center justify-between text-sm text-[#d1d5db]">
                    <span>{item}</span>
                    <span>{[55, 35, 10][index]}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#0d0d0f]">
                    <div className="h-2 rounded-full bg-[#ff8c1a]" style={{ width: `${[55, 35, 10][index]}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111214] p-6">
            <h3 className="text-lg font-bold text-white">Quotation Status</h3>
            <div className="mt-6 space-y-4">
              {['Draft', 'Sent', 'Approved'].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0d0d0f] p-3 text-sm text-[#d1d5db]">
                  <span>{item}</span>
                  <span className="font-semibold text-[#ff8c1a]">{[12, 8, 4][index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#111214] p-6">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Recent Enquiries</h3>
            <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff8c1a]">
              View all
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-[#d1d5db]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Customer</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Location</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.slice(0, 6).map((enquiry) => (
                  <tr key={enquiry._id || enquiry.id} className="border-t border-white/10 text-[#d1d5db]">
                    <td className="px-4 py-3 font-medium text-white">{enquiry.fullName}</td>
                    <td className="px-4 py-3">{enquiry.serviceRequired}</td>
                    <td className="px-4 py-3">{enquiry.city}</td>
                    <td className="px-4 py-3">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-[#ff8c1a]/40 bg-[#ff8c1a]/10 px-2 py-1 text-xs font-semibold text-[#ff8c1a]">
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button type="button" className="text-[#ff8c1a] hover:text-[#ff9d2e]">Open</button>
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

export default Dashboard;
