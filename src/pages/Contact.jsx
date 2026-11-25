import { useState } from 'react';
import { MapPin, Mail, Phone, Clock3, MessageCircle, Navigation } from 'lucide-react';

import { apiFetch } from '../services/api';
import { companyInfo } from '../data/dummyData';

const initialFormState = {
  fullName: '',
  mobileNumber: '',
  email: '',
  city: '',
  projectRequirement: '',
};

function Contact() {
  const [formState, setFormState] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
        body: JSON.stringify({
          ...formState,
          projectType: 'General Enquiry',
          serviceRequired: 'General Consultation',
        }),
      });
      setFormState(initialFormState);
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError.message || 'Unable to send your message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Contact</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">Contact JB & SONS</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <h2 className="text-2xl font-black uppercase text-white">Get in touch</h2>
            <div className="mt-8 space-y-6 text-[#d1d5db]">
              <div className="flex gap-4">
                <div className="mt-1 text-[#ff8c1a]"><Phone size={18} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">Phone</p>
                  <p className="mt-1 text-base">{companyInfo.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-[#ff8c1a]"><MessageCircle size={18} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">WhatsApp</p>
                  <p className="mt-1 text-base">{companyInfo.whatsapp}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-[#ff8c1a]"><Mail size={18} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">Email</p>
                  <p className="mt-1 text-base">{companyInfo.email}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-[#ff8c1a]"><MapPin size={18} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">Office Address</p>
                  <p className="mt-1 text-base">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-[#ff8c1a]"><Clock3 size={18} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">Working Hours</p>
                  <p className="mt-1 text-base">Mon-Sat: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${companyInfo.phone.replace(/\D/g, '')}`} className="inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-5 py-3 text-sm font-semibold text-[#111827]">
                Call Now
              </a>
              <a href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                WhatsApp Us
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                <Navigation size={16} className="mr-2" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            {submitted ? (
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <p className="text-2xl font-black uppercase text-white">Message Sent</p>
                  <p className="mt-4 text-[#d1d5db]">Thanks for contacting JB & SONS POWER SOLUTIONS. Our team will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Full Name</label>
                    <input name="fullName" value={formState.fullName} onChange={handleChange} type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Mobile Number</label>
                    <input name="mobileNumber" value={formState.mobileNumber} onChange={handleChange} type="tel" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your mobile" required />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Email</label>
                    <input name="email" value={formState.email} onChange={handleChange} type="email" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your email" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#d1d5db]">City / Location</label>
                    <input name="city" value={formState.city} onChange={handleChange} type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your city" required />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project Requirement</label>
                  <textarea name="projectRequirement" value={formState.projectRequirement} onChange={handleChange} rows="5" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Tell us about your project" required></textarea>
                </div>
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e] disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111214] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <div className="flex h-[360px] items-center justify-center rounded-xl border border-dashed border-white/15 bg-[#0d0d0f] text-[#d1d5db]">
            Google Maps Placeholder
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
