import Link from "next/link";

export default function Home() {
  const models = [
    { id: "01", name: "XCMG XE17U", class: "1.7t", engine: "Kubota opt.", tail: "Zero swing", depth: "2,490 mm", price: "A$24,900", compare: "Kubota U17 ≈ 38k" },
    { id: "02", name: "LiuGong 9016F", class: "1.6t", engine: "Yanmar opt.", tail: "Reduced", depth: "2,310 mm", price: "A$22,500", compare: "Yanmar Vio17 ≈ 34k" },
    { id: "03", name: "Shantui SE17sr", class: "1.7t", engine: "Kubota opt.", tail: "Zero swing", depth: "2,200 mm", price: "A$23,800", compare: "Kubota U17 ≈ 38k" },
    { id: "04", name: "Lovol FR18F", class: "1.8t", engine: "Yanmar opt.", tail: "Minimal", depth: "2,400 mm", price: "A$24,200", compare: "Yanmar Vio17 ≈ 35k" },
    { id: "05", name: "SDLG ER616H", class: "1.6t", engine: "Kubota opt.", tail: "Zero swing", depth: "2,300 mm", price: "A$21,900", compare: "Kubota U17 ≈ 36k" },
  ];

  return (
    <div className="max-w-6xl mx-auto my-8 border border-[rgba(255,255,255,0.09)] rounded-xl overflow-hidden bg-[#10130f]">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.09)] bg-[#161a14] font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-[#E0913F] font-semibold tracking-wider">◆ LEEZO</span>
          <span className="text-[rgba(255,255,255,0.32)] tracking-wider">leezomachinery.com · FIELD DOSSIER</span>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-white hover:text-[#E0913F]">MACHINES</Link>
          <Link href="/journal" className="text-[rgba(255,255,255,0.52)] hover:text-[#E0913F]">TECH JOURNAL</Link>
          <Link href="/about" className="text-[rgba(255,255,255,0.52)] hover:text-[#E0913F]">ABOUT</Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-5 border-b border-[rgba(255,255,255,0.09)]">
        <div className="md:col-span-3 p-8 border-r md:border-dashed border-[rgba(255,255,255,0.16)]">
          <div className="font-mono text-[rgba(255,255,255,0.32)] text-xs tracking-widest mb-4">
            FILE 00 — OVERVIEW · <b className="text-[#E0913F]">EST. 20 YRS IN TRADE</b>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-5 tracking-tight">
            The honest field guide to buying a <span className="text-[#E0913F] underline decoration-1 underline-offset-4">Chinese mini excavator.</span>
          </h1>
          <p className="text-[rgba(255,255,255,0.52)] text-sm leading-relaxed max-w-lg mb-6">
            1.5–1.8t machines from China's major brands — documented, inspected and exported by a 20-year industry hand. Half the price of Kubota or Yanmar, with the technical record to prove it's sound.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="h-10 px-5 rounded bg-[#E0913F] text-[#14171b] text-xs font-semibold tracking-wider font-mono">
              REQUEST QUOTE →
            </button>
            <button className="h-10 px-5 rounded border border-[rgba(255,255,255,0.16)] bg-transparent text-white text-xs font-semibold tracking-wider font-mono">
              ▶ INSPECTION FOOTAGE
            </button>
          </div>
        </div>
        <div className="md:col-span-2 p-6 flex flex-col justify-between bg-[repeating-linear-gradient(45deg,transparent_0_11px,rgba(255,255,255,0.015)_11px_12px)]">
          <div className="space-y-2 font-mono text-xs text-[rgba(255,255,255,0.52)]">
            <div className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)]">
              <span>CLASS</span>
              <b className="text-white">1.5 – 1.8 t</b>
            </div>
            <div className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)]">
              <span>VS KUBOTA / YANMAR</span>
              <b className="text-[#E0913F]">≈ −50%</b>
            </div>
            <div className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)]">
              <span>PARTS SPEC</span>
              <b className="text-white">Kubota-compatible</b>
            </div>
            <div className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)]">
              <span>HYDRAULIC WARRANTY</span>
              <b className="text-[#E0913F]">90 days</b>
            </div>
            <div className="flex justify-between py-2">
              <span>PRE-SHIP INSPECTION</span>
              <b className="text-white">Filmed</b>
            </div>
          </div>
          <div className="mt-4 font-mono text-[10px] text-[rgba(255,255,255,0.32)] tracking-wider leading-relaxed">
            SOURCED VIA DEALER-QUOTA CHANNEL<br />
            <span className="text-[#6FA8C7]">// genuine new units, not rebadged</span>
          </div>
        </div>
      </div>

      {/* Available Units Grid */}
      <div className="font-mono text-[#E0913F] text-[10px] tracking-widest uppercase p-6 pb-0">
        // Available units
      </div>
      <div className="p-6 grid gap-6 md:grid-cols-3 border-b border-[rgba(255,255,255,0.09)]">
        {models.map((m) => (
          <div key={m.id} className="border border-[rgba(255,255,255,0.09)] rounded-lg overflow-hidden bg-[#161a14]">
            <div className="h-28 bg-gradient-to-b from-[#1c211a] to-[#161a14] relative flex items-center justify-center border-b border-dashed border-[rgba(255,255,255,0.16)]">
              <span className="absolute top-2 left-3 font-mono text-[9px] text-[rgba(255,255,255,0.32)]">UNIT-{m.id}</span>
              <span className="absolute top-2 right-3 font-mono text-[9px] text-[#E0913F]">● IN STOCK</span>
              <svg className="opacity-40" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E0913F" strokeWidth="1">
                <path d="M3 18h10v-3H5l2-4h5l4 4v3h2" />
                <circle cx="6" cy="19" r="1.5" />
                <circle cx="11" cy="19" r="1.5" />
                <path d="M16 11l4-5" />
              </svg>
            </div>
            <div className="p-4">
              <div className="text-white font-semibold text-sm mb-3 flex justify-between items-baseline">
                <span>{m.name}</span>
                <i className="font-mono text-[10px] text-[rgba(255,255,255,0.32)] not-italic">{m.class}</i>
              </div>
              <div className="font-mono text-[10px] space-y-1 text-[rgba(255,255,255,0.52)] mb-4">
                <div className="flex justify-between"><span>ENGINE</span><b className="text-white">{m.engine}</b></div>
                <div className="flex justify-between"><span>TAIL SWING</span><b className="text-white">{m.tail}</b></div>
                <div className="flex justify-between"><span>DIG DEPTH</span><b className="text-white">{m.depth}</b></div>
              </div>
              <div className="pt-3 border-t border-dotted border-[rgba(255,255,255,0.16)] flex justify-between items-end">
                <div className="font-mono text-white text-base font-semibold">
                  {m.price}
                  <s className="block text-[10px] text-[rgba(255,255,255,0.32)] font-normal line-through tracking-tight mt-1">{m.compare}</s>
                </div>
                <Link href={`/machines/${m.name.toLowerCase().replace(/\s+/g, '-')}`} className="h-7 px-3 rounded border border-[rgba(224,145,63,0.4)] bg-transparent text-[#E0913F] text-[10px] font-semibold flex items-center justify-center font-mono">
                  DETAILS
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Honest Story Module */}
      <div className="p-8 bg-[#161a14]">
        <div className="font-mono text-[#E0913F] text-[10px] tracking-widest uppercase mb-2">// The honest version</div>
        <h2 className="text-white text-xl font-semibold mb-6 tracking-tight">Cheaper than the Japanese. Safer than the no-names.</h2>
        <div className="grid gap-6 md:grid-cols-3 text-xs md:text-sm">
          <div className="border-r border-[rgba(255,255,255,0.09)] pr-6 last:border-0 last:pr-0">
            <div className="font-mono text-[#E0913F] mb-3">01</div>
            <h3 className="text-white font-semibold mb-2 text-sm">Why it costs less</h3>
            <p className="text-[rgba(255,255,255,0.52)] leading-relaxed">
              Dealers buy out the smallest models to hit volume targets, then offload them. I know that channel — so these are genuine new units, not rebadged unknowns.
            </p>
          </div>
          <div className="border-r border-[rgba(255,255,255,0.09)] px-6 last:border-0 last:px-0">
            <div className="font-mono text-[#E0913F] mb-3">02</div>
            <h3 className="text-white font-semibold mb-2 text-sm">Parts you can get</h3>
            <p className="text-[rgba(255,255,255,0.52)] leading-relaxed">
              Filters, tracks and seals share Kubota/Yanmar specs — sourced from your local supplier. No waiting on slow parcels from China.
            </p>
          </div>
          <div className="px-6 last:border-0 last:px-0">
            <div className="font-mono text-[#E0913F] mb-3">03</div>
            <h3 className="text-white font-semibold mb-2 text-sm">Backed where it counts</h3>
            <p className="text-[rgba(255,255,255,0.52)] leading-relaxed">
              90-day warranty on major hydraulic parts, service kit supplied with the machine. Honest about what I cover — and it's more than the no-name sellers offer.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-6 py-4 border-t border-[rgba(255,255,255,0.09)] font-mono text-[10px] text-[rgba(255,255,255,0.32)]">
        <span>© 2026 LEEZO MACHINERY · SOURCING & EXPORT DOSSIER</span>
        <span>leezomachinery.com</span>
      </div>
    </div>
  );
}