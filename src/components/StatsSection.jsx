function StatsSection() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Commercial Clients' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-white/10 bg-[#111214] p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <p className="text-3xl font-black text-[#ff8c1a] sm:text-4xl">{stat.value}</p>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#d1d5db]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
