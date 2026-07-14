import Link from "next/link";

export default function About() {
  const chapters = [
    { yr: "2005 →", title: "Ishikawajima dealer", desc: "Started in the trade selling & servicing Japanese mini excavators in China." },
    { yr: "2010 →", title: "Yanmar & Bobcat", desc: "Added Yanmar and Bobcat dealerships. Deep repair & parts experience." },
    { yr: "2016 →", title: "Retail & rental yards", desc: "Owned physical stores and rental fleets across Changzhou, Nanning, Guizhou, Changsha." },
    { yr: "2025 →", title: "LEEZO · export-first", desc: "One-person export house sourcing China's leading mini excavator brands for overseas buyers." },
  ];

  const pillars = [
    { num: "01 · WHO", title: "One operator, not a company facade", desc: "LEEZO is a single-person export house. That means faster decisions, no sales script, and the person you message is the person who inspects your machine.", meta: "// OPC · China" },
    { num: "02 · HOW", title: "A trusted network of yards & dealers", desc: "Instead of holding stock, I work with a network of long-time trade friends — their yards, machines and parts are how I fulfill orders. Real people I've known for years.", meta: "// asset-light · relationship-heavy" },
    { num: "03 · WHY CHEAPER", title: "Dealer-quota channel, not rebrands", desc: "Chinese dealers buy out the smallest models to hit volume targets, then move them on cheaply. I know that channel — so you get genuine new units at wholesale prices.", meta: "// no rebadged unknowns" },
  ];

  const steps = [
    { no: "01", title: "Tell me the job", desc: "Message me on WhatsApp or the quote form. Job type, ground, tail-swing preference, budget.", tag: "same day reply" },
    { no: "02", title: "I recommend 2–3 machines", desc: "From what my network has ready. Honest trade-offs — not the highest-margin unit.", tag: "within 48 hours" },
    { no: "03", title: "Filmed inspection", desc: "Full walkaround, hydraulic test, engine start, undercarriage — sent to you before payment.", tag: "video proof" },
    { no: "04", title: "Deposit & final quote", desc: "30% deposit locks the machine. Final invoice lists ex-works price, shipping and clean-cert.", tag: "T/T · secured" },
    { no: "05", title: "Wash, pack, ship", desc: "Machine steam-cleaned to AU biosecurity spec, loaded into container, docs sent.", tag: "clean-cert included" },
    { no: "06", title: "Landed & supported", desc: "You get service kit, spare-part cross-reference sheet, and me on WhatsApp for questions.", tag: "90-day hyd. warranty" },
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
          <Link href="/journal" className="text-[rgba(255,255,255,0.52)] hover:text-[#E0913F]">TECH JOURNAL</Link>
          <Link href="/about" className="text-white hover:text-[#E0913F]">ABOUT</Link>
        </div>
      </div>

      {/* Profile Row */}
      <div className="grid md:grid-cols-5 p-6 border-b border-[rgba(255,255,255,0.09)] gap-8">
        <div className="md:col-span-1.5 border border-[rgba(255,255,255,0.09)] rounded-lg p-5 bg-[#161a14] flex flex-col items-center">
          <div className="w-full aspect-square bg-[#1c211a] border border-[rgba(255,255,255,0.09)] rounded-lg flex items-center justify-center relative mb-4">
            <svg className="opacity-40" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E0913F" strokeWidth="1">
              <circle cx="12" cy="9" r="4" /><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
            <span className="absolute bottom-2 left-3 font-mono text-[8px] text-[rgba(255,255,255,0.32)]">// [ YOUR PHOTO ]</span>
          </div>
          <div className="text-white font-semibold text-sm text-center mb-1">LEEZO</div>
          <div className="font-mono text-[10px] text-[#E0913F] tracking-widest text-center mb-4 uppercase">Founder · Operator</div>
          <div className="w-full font-mono text-[10px] text-[rgba(255,255,255,0.52)] space-y-1">
            <div className="flex justify-between py-1.5 border-b border-dotted border-[rgba(255,255,255,0.16)]"><span>YEARS IN TRADE</span><b className="text-white">20+</b></div>
            <div className="flex justify-between py-1.5 border-b border-dotted border-[rgba(255,255,255,0.16)]"><span>BASE</span><b className="text-white">China</b></div>
            <div className="flex justify-between py-1.5 border-b border-dotted border-[rgba(255,255,255,0.16)]"><span>SPEAKS</span><b className="text-white">EN · CN</b></div>
            <div className="flex justify-between py-1.5"><span>REPLIES</span><b className="text-white">Personally</b></div>
          </div>
        </div>

        <div className="md:col-span-3.5 flex flex-col justify-between">
          <div>
            <div className="font-mono text-[rgba(255,255,255,0.32)] text-xs tracking-widest mb-3">
              FILE 02 — <b>ABOUT LEEZO</b> · THE PERSON, THE NETWORK, THE PROCESS
            </div>
            <h1 className="text-white text-3xl font-semibold leading-tight tracking-tight mb-4">
              I'm not a factory. I'm not a portal. <span className="text-[#E0913F] underline decoration-1 underline-offset-4">I'm the guy you'd want to send to buy your machine in China.</span>
            </h1>
            <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed mb-3">
              Twenty years ago I started as a dealer for Ishikawajima, Yanmar and Bobcat mini excavators. I've fixed them, sold them, run them on my own sites and — for the last decade — watched China's mini excavator industry catch up in a way most Western buyers still don't quite believe.
            </p>
            <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed">
              Today I run LEEZO on my own, from an office in China, with a network of long-time trade friends who own yards, machines and parts stock across the country. When you buy through me, you're not paying for a brochure or a call centre. You're paying one person — who knows this equipment down to the seal kit — to find you a good machine and get it on a ship.
            </p>
          </div>
          <div className="font-mono text-[10px] text-[rgba(255,255,255,0.32)] tracking-wider mt-6 pt-4 border-t border-dashed border-[rgba(255,255,255,0.16)] uppercase">
            Ex-Dealer · <b className="text-[#E0913F]">Ishikawajima · Yanmar · Bobcat</b> · Now sourcing CN major brands
          </div>
        </div>
      </div>

      {/* Time Track */}
      <div className="p-6 border-b border-[rgba(255,255,255,0.09)]">
        <div className="font-mono text-[#E0913F] text-[10px] tracking-widest uppercase mb-1">// Track record</div>
        <h2 className="text-white text-xl font-semibold mb-6 tracking-tight">20 years, in four chapters</h2>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {chapters.map((c, i) => (
            <div key={i} className="relative pt-4">
              <div className="w-2.5 h-2.5 rounded-full border border-[#E0913F] bg-[#10130f] mb-3 absolute -top-1.5 left-0"></div>
              <div className="font-mono text-[#E0913F] text-xs font-semibold tracking-wider mb-1">{c.yr}</div>
              <h4 className="text-white text-xs font-semibold mb-2">{c.title}</h4>
              <p className="text-[rgba(255,255,255,0.52)] text-[11px] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Honest Network Section */}
      <div className="p-6 bg-[#161a14] border-b border-[rgba(255,255,255,0.09)]">
        <div className="font-mono text-[#E0913F] text-[10px] tracking-widest uppercase mb-1">// What LEEZO actually is</div>
        <h2 className="text-white text-xl font-semibold mb-1 tracking-tight">The honest business model</h2>
        <div className="font-mono text-[9px] text-[rgba(255,255,255,0.32)] mb-6">// STRAIGHT ANSWERS TO THE QUESTIONS SERIOUS BUYERS ASK</div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="border border-[rgba(255,255,255,0.09)] rounded-lg p-4 bg-[#10130f]">
              <div className="font-mono text-[#E0913F] text-[10px] tracking-wider mb-2">{p.num}</div>
              <h4 className="text-white font-semibold text-xs mb-2">{p.title}</h4>
              <p className="text-[rgba(255,255,255,0.52)] text-[11px] leading-relaxed mb-3">{p.desc}</p>
              <span className="font-mono text-[9px] text-[#6FA8C7] block">{p.meta}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div className="p-6">
        <div className="font-mono text-[#E0913F] text-[10px] tracking-widest uppercase mb-1">// How it works</div>
        <h2 className="text-white text-xl font-semibold mb-4 tracking-tight">From your first message to the machine on your truck</h2>
        <div className="border border-[rgba(255,255,255,0.09)] rounded-lg overflow-hidden bg-[#161a14]">
          {steps.map((s, i) => (
            <div key={i} className="grid grid-cols-5 p-4 items-center border-b border-[rgba(255,255,255,0.09)] last:border-0 hover:bg-[#1c211a] text-[rgba(255,255,255,0.52)]">
              <div className="font-mono text-[#E0913F] font-semibold text-sm">{s.no}</div>
              <div className="col-span-3">
                <div className="text-white font-semibold text-xs mb-1">{s.title}</div>
                <div className="text-[11px] leading-normal">{s.desc}</div>
              </div>
              <div className="font-mono text-[9px] text-[#6FA8C7] text-right">// {s.tag}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="p-8 text-center bg-[#161a14] border-t border-[rgba(255,255,255,0.09)]">
        <h3 className="text-white text-lg font-semibold mb-2">Start with a message, not a contract.</h3>
        <p className="text-[rgba(255,255,255,0.52)] text-xs leading-relaxed max-w-md mx-auto mb-4">
          Tell me what job you're doing — I'll tell you honestly whether one of these machines fits it. No obligation, no sales funnel. Just talk to the operator.
        </p>
        <div className="flex gap-2 justify-center font-mono">
          <button className="h-10 px-4 rounded bg-[#E0913F] text-[#14171b] text-xs font-semibold">REQUEST QUOTE →</button>
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