import { Link } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

import { companyInfo } from '../data/dummyData';

function Footer() {
  const quickLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Estimate', to: '/estimate' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#ff8c1a]/50 bg-[#ff8c1a]/10 text-[#ff8c1a]">
                <span className="text-2xl leading-none">⚡</span>
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.18em] text-white">JB & SONS</div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#d1d5db]">POWER SOLUTIONS</div>
              </div>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-[#cfcfd3]">
              {companyInfo.tagline}
            </p>
            <p className="mt-3 max-w-xs text-xs font-medium uppercase tracking-[0.18em] text-[#ff8c1a]">
              {companyInfo.licensedTag}
            </p>
            <div className="mt-6 flex gap-3">
              <a href={companyInfo.socialLinks.instagram} aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d1d5db] transition-colors hover:border-[#ff8c1a] hover:text-[#ff8c1a]">
                <Globe size={16} />
              </a>
              <a href={companyInfo.socialLinks.facebook} aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d1d5db] transition-colors hover:border-[#ff8c1a] hover:text-[#ff8c1a]">
                <Globe size={16} />
              </a>
              <a href={companyInfo.socialLinks.youtube} aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d1d5db] transition-colors hover:border-[#ff8c1a] hover:text-[#ff8c1a]">
                <Globe size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8c1a]">Quick Links</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#d1d5db]">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white flex items-center gap-2">
                    <ArrowRight size={14} className="text-[#ff8c1a]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8c1a]">Services</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#d1d5db]">
              <li>Residential</li>
              <li>Commercial</li>
              <li>Industrial</li>
              <li>Maintenance</li>
              <li>Lighting & Panels</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8c1a]">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-[#d1d5db]">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-[#ff8c1a]" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[#ff8c1a]" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#ff8c1a]" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0d0d0f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-[#d1d5db] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 JB & SONS POWER SOLUTIONS. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
