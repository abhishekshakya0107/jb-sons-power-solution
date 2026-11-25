import EstimateCalculator from '../components/EstimateCalculator';

function Estimate() {
  return (
    <main className="bg-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Estimate</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">Instant cost estimation</h1>
        </div>
        <EstimateCalculator />
      </div>
    </main>
  );
}

export default Estimate;
