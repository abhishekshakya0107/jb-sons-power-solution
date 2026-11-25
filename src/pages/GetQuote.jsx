import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { apiFetch } from '../services/api';

const initialFormState = {
  fullName: '',
  mobileNumber: '',
  email: '',
  city: '',
  projectType: 'Residential',
  serviceRequired: 'Residential Electrical Wiring',
  approximateArea: '',
  preferredDate: '',
  projectRequirement: '',
  additionalNotes: '',
};

function GetQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await apiFetch('/api/enquiries', {
        method: 'POST',
        body: JSON.stringify(formState),
      });
      setFormState(initialFormState);
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError.message || 'Unable to submit your enquiry right now');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Quotation Request</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">Get a quote</h1>
        </div>

        {submitted ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-[#ff8c1a]/30 bg-[#111214] p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <CheckCircle2 size={52} className="mx-auto text-[#ff8c1a]" />
            <h2 className="mt-6 text-3xl font-black uppercase text-white">Thank You!</h2>
            <p className="mt-4 text-base leading-7 text-[#d1d5db]">
              Your enquiry has been received. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Full Name</label>
                  <input name="fullName" value={formState.fullName} onChange={handleChange} type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Mobile Number</label>
                  <input name="mobileNumber" value={formState.mobileNumber} onChange={handleChange} type="tel" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your mobile number" required />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Email</label>
                  <input name="email" value={formState.email} onChange={handleChange} type="email" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your email address" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">City / Location</label>
                  <input name="city" value={formState.city} onChange={handleChange} type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your city" required />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project Type</label>
                  <select name="projectType" value={formState.projectType} onChange={handleChange} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Service Required</label>
                  <select name="serviceRequired" value={formState.serviceRequired} onChange={handleChange} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]">
                    <option>Residential Electrical Wiring</option>
                    <option>Commercial Electrical Installation</option>
                    <option>Industrial Electrical Solutions</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Approximate Area</label>
                  <input name="approximateArea" value={formState.approximateArea} onChange={handleChange} type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="e.g. 1500 sq.ft" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Preferred Date</label>
                  <input name="preferredDate" value={formState.preferredDate} onChange={handleChange} type="date" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project Requirement</label>
                <textarea name="projectRequirement" value={formState.projectRequirement} onChange={handleChange} rows="5" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Describe your project requirements" required />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Additional Notes</label>
                <textarea name="additionalNotes" value={formState.additionalNotes} onChange={handleChange} rows="4" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Any additional notes or requirements" />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e] disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}

export default GetQuote;
