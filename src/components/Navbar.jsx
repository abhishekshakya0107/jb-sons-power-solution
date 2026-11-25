import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Estimate', to: '/estimate' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${scrolled ? 'bg-[#0d0d0f]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.25)]' : 'bg-[#0d0d0f]'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="JB & SONS POWER SOLUTIONS home">
          <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#ff8c1a]/50 bg-[#ff8c1a]/10 text-[#ff8c1a]">
            <Zap size={20} fill="currentColor" />
          </div>
          <div className="leading-none">
            <div className="text-base font-black tracking-[0.18em] text-white sm:text-lg">JB & SONS</div>
            <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#d1d5db]">POWER SOLUTIONS</div>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>`text-sm font-medium transition-colors ${isActive ? 'text-[#ff8c1a]' : 'text-[#d1d5db] hover:text-white'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Link
            to="/get-quote"
            className="hidden items-center justify-center rounded-md bg-[#ff8c1a] px-5 py-2.5 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e] lg:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0d0d0f] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `rounded-md px-3 py-3 text-base font-medium transition-colors ${isActive ? 'bg-[#ff8c1a]/10 text-[#ff8c1a]' : 'text-white hover:bg-white/5'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-[#ff8c1a] px-5 py-3 text-sm font-semibold text-[#111827]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
