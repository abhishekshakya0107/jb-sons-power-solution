import { MapPin, Mail, Phone, Clock3 } from 'lucide-react';
import { companyInfo } from '../data/dummyData';

function ContactSection() {
  return (
    <section className="bg-[#0c0c0d] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8c1a]">Contact us</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Talk to our team</h2>
            <div className="mt-8 space-y-5 text-[#d1d5db]">
              <div className="flex gap-4">
                <div className="mt-1 text-[#ff8c1a]"><Phone size={18} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">Phone</p>
                  <p className="mt-1 text-base">{companyInfo.phone}</p>
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
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff8c1a]">Address</p>
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
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Full Name</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Mobile Number</label>
                  <input type="tel" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your mobile" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Email</label>
                  <input type="email" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your email" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#d1d5db]">City / Location</label>
                  <input type="text" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Your city" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project Requirement</label>
                <textarea rows="5" className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" placeholder="Tell us about your project"></textarea>
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
