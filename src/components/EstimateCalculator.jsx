import { useMemo, useState } from 'react';

const projectTypeConfig = {
  Residential: { base: 120, roomMultiplier: 1500, fanRate: 1200, lightRate: 850, switchRate: 500, socketRate: 550, acRate: 1800, geyserRate: 1700 },
  Commercial: { base: 180, roomMultiplier: 1800, fanRate: 1500, lightRate: 900, switchRate: 550, socketRate: 650, acRate: 2000, geyserRate: 0 },
  Industrial: { base: 240, roomMultiplier: 2500, fanRate: 1800, lightRate: 1100, switchRate: 650, socketRate: 700, acRate: 2400, geyserRate: 0 },
};

const workTypeMap = {
  Wiring: 1,
  Lighting: 0.9,
  'Panel Installation': 1.3,
  Maintenance: 0.65,
  'Complete Electrical Work': 1.6,
  Other: 1,
};

function EstimateCalculator() {
  const [projectType, setProjectType] = useState('Residential');
  const [workType, setWorkType] = useState('Wiring');
  const [area, setArea] = useState(1200);
  const [rooms, setRooms] = useState(3);
  const [fans, setFans] = useState(4);
  const [lights, setLights] = useState(8);
  const [switches, setSwitches] = useState(12);
  const [sockets, setSockets] = useState(10);
  const [acPoints, setAcPoints] = useState(2);
  const [geyserPoints, setGeyserPoints] = useState(1);

  const estimate = useMemo(() => {
    const config = projectTypeConfig[projectType];
    const workMultiplier = workTypeMap[workType] || 1;

    const baseValue = area * config.base;
    const roomCost = rooms * config.roomMultiplier;
    const fanCost = fans * config.fanRate;
    const lightCost = lights * config.lightRate;
    const switchCost = switches * config.switchRate;
    const socketCost = sockets * config.socketRate;
    const acCost = acPoints * config.acRate;
    const geyserCost = geyserPoints * config.geyserRate;

    const subtotal = ((baseValue + roomCost + fanCost + lightCost + switchCost + socketCost + acCost + geyserCost) * workMultiplier);
    const low = Math.round(subtotal * 0.93);
    const high = Math.round(subtotal * 1.12);

    return { low, high, subtotal };
  }, [projectType, workType, area, rooms, fans, lights, switches, sockets, acPoints, geyserPoints]);

  return (
    <section className="rounded-2xl border border-white/10 bg-[#111214] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8c1a]">Quick estimate</p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Get an instant estimate</h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Project Type</label>
            <div className="grid gap-3 sm:grid-cols-3">
              {Object.keys(projectTypeConfig).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setProjectType(option)}
                  className={`rounded-md border px-4 py-3 text-sm font-medium transition ${projectType === option ? 'border-[#ff8c1a] bg-[#ff8c1a]/10 text-[#ff8c1a]' : 'border-white/10 bg-[#0d0d0f] text-[#d1d5db] hover:border-[#ff8c1a]/50'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Work Type</label>
            <select
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]"
            >
              {Object.keys(workTypeMap).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Approximate Area</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value) || 0)}
                className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Number of Rooms</label>
              <input
                type="number"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value) || 0)}
                className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Number of Fans</label>
              <input type="number" value={fans} onChange={(e) => setFans(Number(e.target.value) || 0)} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Number of Lights</label>
              <input type="number" value={lights} onChange={(e) => setLights(Number(e.target.value) || 0)} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Number of Switches</label>
              <input type="number" value={switches} onChange={(e) => setSwitches(Number(e.target.value) || 0)} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Number of Sockets</label>
              <input type="number" value={sockets} onChange={(e) => setSockets(Number(e.target.value) || 0)} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">AC Points</label>
              <input type="number" value={acPoints} onChange={(e) => setAcPoints(Number(e.target.value) || 0)} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#d1d5db]">Geyser Points</label>
              <input type="number" value={geyserPoints} onChange={(e) => setGeyserPoints(Number(e.target.value) || 0)} className="w-full rounded-md border border-white/10 bg-[#0d0d0f] px-4 py-3 text-white outline-none transition focus:border-[#ff8c1a]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-[#ff8c1a]/30 bg-[#0d0d0f] p-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff8c1a]">Your Estimated Project Cost</p>
            <p className="mt-5 text-3xl font-black text-white sm:text-4xl">₹{estimate.low.toLocaleString('en-IN')} – ₹{estimate.high.toLocaleString('en-IN')}</p>
            <p className="mt-5 text-sm leading-6 text-[#cfcfd3]">
              This is an approximate estimate. Final pricing may vary depending on site inspection, material selection, design and project requirements.
            </p>
          </div>

          <button type="button" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-[#ff8c1a] px-6 py-3 text-sm font-semibold text-[#111827] transition-transform hover:-translate-y-0.5 hover:bg-[#ff9d2e]">
            Request Final Quotation
          </button>
        </div>
      </div>
    </section>
  );
}

export default EstimateCalculator;
