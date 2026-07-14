import Link from "next/link";

export default function Journal() {
  const posts = [
    { id: "014", category: "Buying Guide", title: "XCMG XE17U vs Kubota U17 — which one actually earns you money?", desc: "Same class, half the price. But is it really the same machine? A hands-on comparison of hydraulics, cabin, resale and the parts you'll actually need to replace in the first 500 hours.", readTime: "14 MIN", date: "JUL 08 2026" },
    { id: "013", category: "Brand Review", title: "Shantui SE17sr: the honest 6-month verdict from a rental yard", desc: "How Shantui's zero-tail-swing performs in real mud and rocky conditions, and why the pilot controls surprised us.", readTime: "10 MIN", date: "JUL 04 2026" },
    { id: "012", category: "Fault & Fix", title: "Slow boom lift on 1.7t machines — 5 things to check before you panic", desc: "Don't buy a new hydraulic pump just yet. Walk through our step-by-step pressure drift troubleshooting guide.", readTime: "6 MIN", date: "JUN 27 2026" },
    { id: "011", category: "Maintenance", title: "Which filters cross-reference with Kubota / Yanmar (and which don't)", desc: "A complete list of part numbers you can source from your local parts store to keep your Chinese mini running smoothly.", readTime: "8 MIN", date: "JUN 20 2026" },
  ];

  const faults = [
    { code: "FL-001", sym: "Boom lifts slowly under load", cause: "Main relief pressure drift; pilot filter", sev: "Medium" },
    { code: "FL-007", sym: "Track tension loose on one side", cause: "Grease cylinder leak / idler wear", sev: "Low" },
    { code: "FL-014", sym: "Swing motor whine at start-up", cause: "Cold hydraulic oil; check oil grade", sev: "Low" },
    { code: "FL-022", sym: "Engine starts, dies after 5 sec", cause: "Fuel solenoid or air in line", sev: "Medium" },
    { code: "FL-031", sym: "Grinding sound from swing bearing", cause: "Grease starvation; possible race damage", sev: "High" },
  ];

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
          <Link href="/journal" className="text-white hover:text-[#E0913F]">TECH JOURNAL</Link>
          <Link href="/about" className="text-[rgba(255,255,255,0.52)] hover:text-[#E0913F]">ABOUT</Link>
        </div>
      </div>

      {/* Hero */}
      <div className="grid md:grid-cols-5 border-b border-[rgba(255,255,255,0.09)]">
        <div className="md:col-span-3 p-8 border-r md:border-dashed border-[rgba(255,255,255,0.16)]">
          <div className="font-mono text-[rgba(255,255,255,0.32)] text-xs tracking-widest mb-4">
            FILE 01 — <b>TECH JOURNAL & FAULT LIBRARY</b> · UPDATED WEEKLY
          </div>
          <h1 className="text-white text-3xl font-semibold leading-tight mb-4 tracking-tight">
            20 years of notes on Chinese mini excavators — <span className="text-[#E0913F] underline decoration-1 underline-offset-4">written down, so you don't have to learn the hard way.</span>
          </h1>
          <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed">
            Buying guides, brand comparisons, common faults and honest reviews of the machines I actually source and ship. No brochures, no fluff — the kind of thing you'd hear from a mate who's fixed a hundred of these.
          </p>
        </div>
        <div className="md:col-span-2 p-6 flex flex-col justify-between bg-[repeating-linear-gradient(45deg,transparent_0_11px,rgba(255,255,255,0.015)_11px_12px)] font-mono text-xs">
          <div>
            <div className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)]">
              <span>ARTICLES PUBLISHED</span>
              <b className="text-[#E0913F]">42</b>
            </div>
            <div className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)]">
              <span>FAULT ENTRIES</span>
              <b className="text-[#E0913F]">86</b>
            </div>
            <div className="flex justify-between py-2 border-b border-dotted border-[rgba(255,255,255,0.16)]">
              <span>BRANDS COVERED</span>
              <b className="text-white">5 major CN</b>
            </div>
            <div className="flex justify-between py-2">
              <span>LANGUAGE</span>
              <b className="text-white">EN · plain</b>
            </div>
          </div>
          <div className="text-[10px] text-[rgba(255,255,255,0.32)] tracking-wider mt-4">
            // LAST UPDATE — 11 JUL 2026
          </div>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="p-4 border-b border-[rgba(255,255,255,0.09)] bg-[#161a14] flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px] h-9 bg-[#10130f] border border-[rgba(255,255,255,0.09)] rounded px-3 flex items-center gap-2 font-mono text-xs text-[rgba(255,255,255,0.32)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          Search brand, model, symptom...
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {["All", "Buying Guide", "Brand Review", "Fault & Fix", "Maintenance"].map((f, i) => (
            <span key={i} className={`font-mono text-[10px] px-3 py-1 rounded-full border cursor-pointer ${i === 0 ? "border-[#E0913F] text-[#E0913F] bg-[rgba(224,145,63,0.1)]" : "border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.52)]"}`}>
              {f.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Featured + Side List */}
      <div className="p-6 grid md:grid-cols-5 gap-6 border-b border-[rgba(255,255,255,0.09)]">
        <div className="md:col-span-3 border border-[rgba(255,255,255,0.09)] rounded-lg overflow-hidden bg-[#161a14]">
          <div className="h-44 bg-gradient-to-b from-[#1c211a] to-[#161a14] relative border-b border-dashed border-[rgba(255,255,255,0.16)] flex items-center justify-center">
            <span className="absolute top-2 left-3 font-mono text-[9.5px] text-[#E0913F]">◆ FEATURED · JOURNAL-014</span>
            <span className="absolute top-2 right-3 font-mono text-[9px] text-[rgba(255,255,255,0.32)]">14 MIN READ</span>
            <svg className="opacity-40" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#E0913F" strokeWidth="0.8">
              <path d="M3 18h10v-3H5l2-4h5l4 4v3h2" />
              <circle cx="6" cy="19" r="1.5" />
              <circle cx="11" cy="19" r="1.5" />
              <path d="M16 11l4-5" />
            </svg>
          </div>
          <div className="p-4">
            <span className="font-mono text-[9.5px] text-[#E0913F] tracking-widest uppercase mb-2 block">◆ {posts[0].category}</span>
            <h3 className="text-white text-lg font-semibold mb-2 leading-snug">{posts[0].title}</h3>
            <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed mb-4">{posts[0].desc}</p>
            <div className="flex justify-between items-center font-mono text-[10px] text-[rgba(255,255,255,0.32)] pt-3 border-t border-dotted border-[rgba(255,255,255,0.16)]">
              <span>BY LEEZO · {posts[0].date}</span>
              <span className="text-[#E0913F] cursor-pointer">READ →</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3">
          {posts.slice(1).map((p, i) => (
            <div key={i} className="border border-[rgba(255,255,255,0.09)] rounded-lg p-3 bg-[#161a14] cursor-pointer hover:border-[#E0913F]">
              <div className="font-mono text-[9px] text-[#6FA8C7] tracking-wider uppercase mb-1">{p.category}</div>
              <h4 className="text-white text-xs font-semibold leading-snug mb-2">{p.title}</h4>
              <div className="font-mono text-[9.5px] text-[rgba(255,255,255,0.32)] tracking-wider">
                {p.readTime} · {p.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fault Library */}
      <div className="p-6 border-b border-[rgba(255,255,255,0.09)]">
        <div className="font-mono text-[#E0913F] text-[10px] tracking-widest uppercase mb-1">// Fault library</div>
        <h2 className="text-white text-xl font-semibold mb-4 tracking-tight">Common faults on 1.5–1.8t Chinese mini excavators</h2>
        <div className="border border-[rgba(255,255,255,0.09)] rounded-lg bg-[#161a14] overflow-hidden text-xs">
          <div className="grid grid-cols-5 p-3 bg-[#1c211a] font-mono text-[10px] text-[rgba(255,255,255,0.32)] tracking-wider uppercase border-b border-[rgba(255,255,255,0.09)]">
            <div>Code</div>
            <div className="col-span-2">Symptom</div>
            <div>Likely Cause</div>
            <div className="text-right">Severity</div>
          </div>
          {faults.map((f, i) => (
            <div key={i} className="grid grid-cols-5 p-3 items-center border-b border-[rgba(255,255,255,0.09)] last:border-0 hover:bg-[#1c211a] text-[rgba(255,255,255,0.52)] cursor-pointer">
              <div className="font-mono text-[#E0913F] font-semibold">{f.code}</div>
              <div className="col-span-2 text-white font-medium">{f.sym}</div>
              <div>{f.cause}</div>
              <div className="text-right">
                <span className={`font-mono text-[9.5px] px-2 py-0.5 rounded-full ${f.sev === "High" ? "text-[#E06B5C] bg-[rgba(224,107,92,0.1)]" : f.sev === "Medium" ? "text-[#D9A441] bg-[rgba(217,164,65,0.1)]" : "text-[#7FB069] bg-[rgba(127,176,105,0.1)]"}`}>
                  ● {f.sev}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="p-8 text-center bg-[#161a14]">
        <h3 className="text-white text-lg font-semibold mb-2">Can't find your fault? Ask the operator.</h3>
        <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed max-w-md mx-auto mb-4">
          I read every message myself. Send a short clip or a photo of the machine and the symptom — I'll usually know within a reply what you're looking at.
        </p>
        <div className="flex gap-2 justify-center font-mono">
          <button className="h-10 px-4 rounded bg-[#E0913F] text-[#14171b] text-xs font-semibold">REQUEST QUOTE</button>
          <button className="h-10 px-4 rounded border border-[rgba(255,255,255,0.16)] bg-transparent text-white text-xs font-semibold">● WhatsApp me</button>
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