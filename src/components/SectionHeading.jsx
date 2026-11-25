function SectionHeading({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff8c1a]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-[#cfcfd3]">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
