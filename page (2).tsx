import Link from "next/link";

export default function MachineDetail() {
  const spec = {
    name: "XCMG XE17U",
    class: "1.7t class",
    tagline: "XCMG · 1.7 tonne class",
    subtitle: "Zero tail swing mini excavator — landscaping, fencing, trenching & tight-access work.",
    price: "A$24,900",
    compare: "Kubota U17 ≈ A$38,000",
    save: "you save ≈ 35%",
    specs: [
      { name: "Operating weight", val: "1,750 kg" },
      { name: "Engine", val: "Kubota D902 / Yanmar opt." },
      { name: "Rated power", val: "11.8 kW / 15.8 HP" },
      { name: "Bucket capacity", val: "0.04 m³" },
      { name: "Max dig depth", val: "2,490 mm" },
      { name: "Max dig reach", val: "4,080 mm" },
      { name: "Tail swing", val: "Zero tail swing" },
      { name: "Track width", val: "990–1,300 mm retractable" },
      { name: "Travel speed", val: "2.4 / 4.2 km/h" },
      { name: "Emission standard", val: "EPA Tier 4 / Euro Stage V" },
    ]
  };

  return (
    <div className="max-w-6xl mx-auto my-8 border border-[rgba(255,255,255,0.09)] rounded-xl overflow-hidden bg-[#10130f]">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.09)] bg-[#161a14] font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-[#E0913F] font-semibold tracking-wider">◆ LEEZO</span>
          <span className="text-[rgba(255,255,255,0.32)] tracking-wider">leezomachinery.com · FIELD DOSSIER</span>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-[rgba(255,255,255,0.52)] hover:text-[#E0913F]">MACHINES</Link>
          <Link href="/journal" className="text-[rgba(255,255,255,0.52)] hover:text-[#E0913F]">TECH JOURNAL</Link>
          <Link href="/about" className="text-[rgba(255,255,255,0.52)] hover:text-[#E0913F]">ABOUT</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-6 py-3 font-mono text-[10px] text-[rgba(255,255,255,0.32)] border-b border-[rgba(255,255,255,0.09)] tracking-wider">
        MACHINES / 1.5–1.8T CLASS / <b className="text-[#E0913F]">UNIT-01 · {spec.name}</b>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 border-b border-[rgba(255,255,255,0.09)]">
        {/* Left: Media Gallery */}
        <div className="p-6 border-r md:border-dashed border-[rgba(255,255,255,0.16)] flex flex-col justify-between">
          <div className="h-64 bg-gradient-to-b from-[#1c211a] to-[#161a14] border border-[rgba(255,255,255,0.09)] rounded-lg relative flex items-center justify-center mb-4">
            <span className="absolute bottom-3 left-4 font-mono text-[10px] text-[rgba(255,255,255,0.32)]">// [ YOUR FOOTAGE ] inspection & walkaround</span>
            <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(0,0,0,0.4)] flex items-center justify-center cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#E0913F">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="h-14 bg-[#1c211a] border border-[#E0913F] rounded flex items-center justify-center font-mono text-[9px] text-[#E0913F] cursor-pointer">PHOTO 01</div>
            <div className="h-14 bg-[#1c211a] border border-[rgba(255,255,255,0.09)] rounded flex items-center justify-center font-mono text-[9px] text-[rgba(255,255,255,0.32)] cursor-pointer">SIDE</div>
            <div className="h-14 bg-[#1c211a] border border-[rgba(255,255,255,0.09)] rounded flex items-center justify-center font-mono text-[9px] text-[rgba(255,255,255,0.32)] cursor-pointer">CAB</div>
            <div className="h-14 bg-[#1c211a] border border-[rgba(255,255,255,0.09)] rounded flex items-center justify-center font-mono text-[9px] text-[rgba(255,255,255,0.32)] cursor-pointer">▶ TEST</div>
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] text-[#E0913F] tracking-widest uppercase mb-2">{spec.tagline}</div>
            <h1 className="text-white text-3xl font-semibold mb-2 tracking-tight">{spec.name}</h1>
            <p className="text-[rgba(255,255,255,0.52)] text-sm mb-6 leading-relaxed">{spec.subtitle}</p>

            <div className="border border-[rgba(255,255,255,0.09)] rounded-lg bg-[#161a14] p-4 mb-6">
              <div className="font-mono text-white text-2xl font-semibold tracking-tight">
                {spec.price} <span className="text-xs text-[rgba(255,255,255,0.32)] font-normal">+ GST, ex-works quote</span>
              </div>
              <div className="font-mono text-xs text-[rgba(255,255,255,0.52)] mt-2">
                vs <s>{spec.compare}</s> &nbsp;<b className="text-[#7FB069]">{spec.save}</b>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 h-11 rounded bg-[#E0913F] text-[#14171b] text-xs font-semibold tracking-wider font-mono">
              REQUEST QUOTE →
            </button>
            <button className="h-11 px-4 rounded border border-[rgba(127,176,105,0.5)] bg-transparent text-[#7FB069] text-xs font-semibold tracking-wider font-mono">
              ● WhatsApp
            </button>
          </div>

          <div>
            <div className="font-mono text-[9px] text-[rgba(255,255,255,0.32)] tracking-wider mb-2">CONFIGURATIONS AVAILABLE</div>
            <div className="flex flex-wrap gap-1.5">
              {["Standard", "Cabin + A/C", "Canopy", "Extra buckets", "Hyd. thumb", "Rubber / steel track"].map((chip, idx) => (
                <span key={idx} className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${idx === 0 ? "border-[#E0913F] text-[#E0913F] bg-[rgba(224,145,63,0.1)]" : "border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.52)]"}`}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="p-6 border-b border-[rgba(255,255,255,0.09)]">
        <div className="font-mono text-[#E0913F] text-[10px] tracking-widest uppercase mb-4">
          // Specifications <span className="border border-[rgba(111,168,199,0.4)] text-[#6FA8C7] rounded px-1 text-[8px] tracking-normal ml-1">DRAFT — VERIFY</span>
        </div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-1">
          {spec.specs.map((item, idx) => (
            <div key={idx} className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)] font-mono text-xs">
              <span className="text-[rgba(255,255,255,0.52)]">{item.name}</span>
              <b className="text-white font-semibold">{item.val}</b>
            </div>
          ))}
        </div>
      </div>

      {/* Operator Notes */}
      <div className="p-6 border-b border-[rgba(255,255,255,0.09)] bg-[#161a14]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full border border-[#E0913F] flex items-center justify-center text-[#E0913F] font-mono text-sm font-semibold">L</div>
          <div>
            <b className="text-white text-xs block">From the operator's seat — LEEZO</b>
            <span className="font-mono text-[9px] text-[rgba(255,255,255,0.32)] tracking-wider">20 YRS IN CHINESE MINI EXCAVATORS</span>
          </div>
        </div>
        <p className="text-[rgba(255,255,255,0.52)] text-sm leading-relaxed italic">
          "The XE17U is the safe first pick in this class. Zero tail swing means you can work hard against a fence line without clipping anything, and XCMG's hydraulics on this frame are smoother than most of its Chinese rivals. Spec the Kubota engine if you can — parts are everywhere. I'd skip the steel tracks unless you're on rock."
        </p>
      </div>

      {/* Assurance cards */}
      <div className="p-6 grid md:grid-cols-2 gap-6">
        <div className="border-r md:border-dashed border-[rgba(255,255,255,0.09)] pr-6 last:border-0 last:pr-0">
          <div className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
            <svg className="stroke-[#7FB069]" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
              <path d="M3 7h13l-2 4H5z" />
              <circle cx="7" cy="17" r="1.5" />
              <circle cx="14" cy="17" r="1.5" />
            </svg>
            Parts you can actually get
          </div>
          <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed">
            Filters, tracks, seals and service parts share Kubota/Yanmar specs — buy them from your local supplier. <span className="text-[#6FA8C7] font-mono">// no waiting on parcels from China</span>
          </p>
        </div>
        <div className="px-6 last:border-0 last:px-0">
          <div className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
            <svg className="stroke-[#7FB069]" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
              <path d="M12 3l8 4v6c0 4-3 7-8 8-5-1-8-4-8-8V7z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            90-day major-part warranty
          </div>
          <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed">
            Hydraulic components covered for 90 days, service kit supplied alongside the machine. <span className="text-[#6FA8C7] font-mono">// honest about what's covered</span>
          </p>
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