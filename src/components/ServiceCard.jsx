import { ArrowRight, Building2, Factory, Home, Zap, ShieldCheck, LampDesk, Fan, Shield, SunMedium, Wrench, Settings2, PanelTop } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  home: Home,
  building2: Building2,
  factory: Factory,
  panelTop: PanelTop,
  shieldCheck: ShieldCheck,
  lampDesk: LampDesk,
  fan: Fan,
  shield: Shield,
  zap: Zap,
  sunMedium: SunMedium,
  wrench: Wrench,
  settings2: Settings2,
};

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Zap;

  return (
    <article className="group rounded-xl border border-white/10 bg-[#111214] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8c1a]/70 hover:shadow-[0_20px_50px_rgba(255,140,26,0.15)]">
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#ff8c1a]/30 bg-[#ff8c1a]/10 text-[#ff8c1a]">
          <Icon size={24} />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d1d5db]">
          {service.category}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">{service.name}</h3>
      <p className="mt-3 text-sm leading-6 text-[#cfcfd3]">{service.description}</p>

      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-sm font-medium text-[#ff8c1a]">Starting from {service.startingPrice}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#ff8c1a]">
          View Service
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
