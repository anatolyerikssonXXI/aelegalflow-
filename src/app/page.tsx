"use client"
import { useState } from "react"
import BookingForm from "@/components/BookingForm"
import ChatWidget from "@/components/ChatWidget"
import { t, Lang } from "@/lib/translations"

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru")
  const T = t[lang]
  return (
    <main className="min-h-screen text-white font-sans">

      {/* Navigation — floating glass pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max">
        <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3">
            <svg width="40" height="28" viewBox="0 0 52 36" fill="none">
              <line x1="2" y1="34" x2="13" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="24" y1="34" x2="13" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="30" y1="2" x2="30" y2="34" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="30" y1="2" x2="50" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="30" y1="34" x2="50" y2="34" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="2" y1="20" x2="50" y2="20" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="text-sm font-bold tracking-wider" style={{fontFamily: "var(--font-playfair)"}}>AE Legal Flow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-400 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors duration-300">{T.nav.services}</a>
            <a href="#faq" className="text-gray-400 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors duration-300">{T.nav.faq}</a>
            <a href="#about" className="text-gray-400 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors duration-300">{T.nav.about}</a>
          </div>
          <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
            {(["ru", "en", "sv"] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${lang === l ? "bg-[#C9A84C] text-black" : "text-gray-400 hover:text-white"}`}>
                {l}
              </button>
            ))}
          </div>
          <a href="#book" className="group flex items-center gap-0 bg-[#C9A84C] text-black font-bold pl-5 pr-1.5 py-1.5 rounded-full text-xs tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#e0bc6a] active:scale-[0.97]">
            {T.nav.book}
            <span className="ml-3 w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              →
            </span>
          </a>
        </div>
      </nav>

      {/* HERO — Pantheon */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/gabriella-clare-marino-riwK6iSwcRk-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-fade-up animate-fade-up-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-10">
              <span className="w-1 h-1 rounded-full bg-[#C9A84C] animate-pulse"></span>
              {T.hero.badge}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 animate-fade-up animate-fade-up-2" style={{fontFamily: "var(--font-playfair)"}}>
            {T.hero.h1a}<br/>
            <span className="italic font-normal text-[#C9A84C]">{T.hero.h1b}<br/>{T.hero.h1c}</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-xl mx-auto animate-fade-up animate-fade-up-3">
            {T.hero.sub.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br/>}</span>)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-fade-up-4">
            <a href="#book" className="group flex items-center justify-center gap-0 bg-[#C9A84C] text-black font-bold pl-8 pr-2 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#e0bc6a] active:scale-[0.97]">
              {T.hero.cta}
              <span className="ml-4 w-9 h-9 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                →
              </span>
            </a>
            <a href="#services" className="flex items-center justify-center border border-white/20 text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:border-[#C9A84C]/60 hover:text-[#C9A84C] transition-all duration-500">
              {T.hero.more}
            </a>
          </div>
        </div>

        {/* Stats bar at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur border-t border-[#C9A84C]/20">
          <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/10 py-6">
            {T.stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div className="text-2xl font-bold text-[#C9A84C]">{s.num}</div>
                <div className="text-gray-400 text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS SECTION — Expertise */}
      <section
        className="relative py-32 px-8"
        style={{
          backgroundImage: "url('/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">— {T.expertise.badge} —</p>
          <h2 className="text-5xl font-bold mb-6" style={{fontFamily: "var(--font-playfair)"}}>
            {T.expertise.h2a}<br/>
            <span className="italic font-light text-[#C9A84C]">{T.expertise.h2b}</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {T.expertise.sub}
          </p>
        </div>
      </section>

      {/* SERVICES — Columns */}
      <section
        id="services"
        className="relative py-28 px-8"
        style={{
          backgroundImage: "url('/mathew-schwartz-yor604PqtXM-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— {T.services.badge} —</p>
            <h2 className="text-5xl font-bold" style={{fontFamily: "var(--font-playfair)"}}>{T.services.h2}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {T.services.items.map((s) => (
              <div key={s.num} className="p-1.5 rounded-[1.5rem] bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/40 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-black/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-8 h-full flex flex-col">
                  <div className="text-[#C9A84C]/20 text-5xl font-bold mb-4 group-hover:text-[#C9A84C]/50 transition-colors duration-500" style={{fontFamily: "var(--font-playfair)"}}>{s.num}</div>
                  <h3 className="text-xl font-bold mb-3" style={{fontFamily: "var(--font-playfair)"}}>{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {s.items.map((item) => (
                      <li key={item} className="text-gray-500 flex items-center gap-3 text-sm group-hover:text-gray-400 transition-colors duration-300">
                        <span className="w-1 h-1 bg-[#C9A84C] rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#book" className="group/btn flex items-center gap-0 text-[#C9A84C] text-xs tracking-widest uppercase mt-auto">
                    {T.services.book}
                    <span className="ml-2 w-5 h-5 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[10px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px transition-transform duration-500">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — Cour d'Appel */}
      <section
        className="relative py-28 px-8"
        style={{
          backgroundImage: "url('/jametlene-reskp-731R9d4C3b0-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— {T.whyus.badge} —</p>
            <h2 className="text-5xl font-bold" style={{fontFamily: "var(--font-playfair)"}}>
              {T.whyus.h2a}<br/>
              <span className="italic font-light text-[#C9A84C]">{T.whyus.h2b}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {T.whyus.items.map((item) => (
              <div key={item.title} className="p-1.5 rounded-[1.5rem] bg-white/[0.03] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-all duration-700 group">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-8 text-center h-full">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{fontFamily: "var(--font-playfair)"}}>{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section
        id="book"
        className="relative py-28 px-8"
        style={{
          backgroundImage: "url('/maarten-van-den-heuvel-_pc8aMbI9UQ-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left text */}
          <div className="pt-4">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">— {T.booking.badge} —</p>
            <h2 className="text-5xl font-bold mb-6" style={{fontFamily: "var(--font-playfair)"}}>
              {T.booking.h2a}<br/>
              <span className="italic font-light text-[#C9A84C]">{T.booking.h2b}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {T.booking.sub}
            </p>
            <div className="space-y-6">
              {T.booking.types.map((item) => (
                <div key={item.title} className="flex gap-4 border border-white/10 p-5">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-gray-500 text-sm mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <BookingForm lang={lang} />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-28 px-8 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— {T.pricing.badge} —</p>
            <h2 className="text-5xl font-bold mb-4" style={{fontFamily: "var(--font-playfair)"}}>{T.pricing.h2}</h2>
            <p className="text-gray-500 text-sm">{T.pricing.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {T.pricing.consultations.map((p) => (
              <div key={p.title} className={`p-1.5 rounded-[1.5rem] ${p.featured ? "bg-[#C9A84C]/10 border border-[#C9A84C]/50" : "bg-white/[0.03] border border-white/10"}`}>
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-black/60 p-7 h-full flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                  {p.featured && <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-3">{T.pricing.popular}</span>}
                  <h3 className="text-lg font-bold mb-1" style={{fontFamily: "var(--font-playfair)"}}>{p.title}</h3>
                  <p className="text-gray-600 text-xs mb-5">{p.time}</p>
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-white">{p.price}</span>
                    <span className="text-gray-500 text-sm ml-2">{p.eur}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.desc}</p>
                  <a href="#book" className="mt-6 group flex items-center gap-0 text-[#C9A84C] text-xs tracking-widest uppercase">
                    {T.pricing.book}
                    <span className="ml-2 w-5 h-5 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform duration-500">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-1.5 rounded-[1.5rem] bg-white/[0.03] border border-white/10">
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-black/60 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-3">{T.pricing.special}</p>
                <div className="space-y-4">
                  {T.pricing.specials.map((s) => (
                    <div key={s.title} className="flex justify-between items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="text-white text-sm font-semibold">{s.title}</p>
                        <p className="text-gray-600 text-xs mt-0.5">{s.desc}</p>
                      </div>
                      <span className="text-[#C9A84C] text-xs whitespace-nowrap">{s.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-1.5 rounded-[1.5rem] bg-white/[0.03] border border-white/10">
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-black/60 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase mb-3">{T.pricing.packages}</p>
                <div className="space-y-4">
                  {T.pricing.fullPackages.map((s) => (
                    <div key={s.title} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <p className="text-gray-400 text-sm">{s.title}</p>
                      <span className="text-[#C9A84C] text-xs whitespace-nowrap">{s.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative py-28 px-8 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— {T.reviews.badge} —</p>
            <h2 className="text-5xl font-bold" style={{fontFamily: "var(--font-playfair)"}}>
              {T.reviews.h2a} <span className="text-[#C9A84C]">{T.reviews.h2b}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {T.reviews.items.map((r, i) => (
              <div key={i} className="p-1.5 rounded-[1.5rem] bg-white/[0.03] border border-white/10">
                <div className="bg-[#0a0a0a] rounded-[1.1rem] p-6 h-full flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-white text-sm">{r.name}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{r.country}</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-500 uppercase tracking-wider shrink-0">
                      {r.lang === "ru" ? "RU" : r.lang === "sv" ? "SV" : "EN"}
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({length: r.stars}).map((_, si) => (
                      <svg key={si} className="w-3.5 h-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative py-28 px-8"
        style={{
          backgroundImage: "url('/aaron-burden-CKlHKtCJZKk-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— {T.faq.badge} —</p>
          <h2 className="text-5xl font-bold mb-16" style={{fontFamily: "var(--font-playfair)"}}>{T.faq.h2}</h2>
          <div className="space-y-0">
            {T.faq.items.map((f) => (
              <div key={f.q} className="border-t border-white/10 py-8">
                <h3 className="font-bold text-lg mb-3">{f.q}</h3>
                <p className="text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
            <div className="border-t border-white/10"></div>
          </div>
        </div>
      </section>

      {/* QUOTE — Pantheon fountain */}
      <section
        className="relative py-36 px-8"
        style={{
          backgroundImage: "url('/gloria-cretu-iek_zWEB0Fw-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[#C9A84C] text-5xl mb-6 font-serif">"</div>
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic" style={{fontFamily: "var(--font-playfair)"}}>
            {T.quote}
          </blockquote>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">— AE Legal Flow</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-8 relative border-t border-white/5"
        style={{
          backgroundImage: "url('/justice-statue.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="w-full aspect-[3/4]">
            </div>
          </div>
          {/* Bio */}
          <div className="relative z-10">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">— {T.about.badge} —</p>
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: "var(--font-playfair)"}}>{T.about.h2}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{T.about.bio}</p>
            <div className="space-y-4 mb-8">
              {T.about.degrees.map((d, i) => (
                <div key={i} className={`border-l-2 ${i < 2 ? "border-[#C9A84C]" : "border-[#C9A84C]/50"} pl-4`}>
                  <p className="text-white font-semibold">{d.title}</p>
                  <p className="text-gray-500 text-sm">{d.place}</p>
                </div>
              ))}
            </div>
            <a href="#book" className="group flex items-center gap-0 bg-[#C9A84C] text-black font-bold pl-7 pr-2 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#e0bc6a] active:scale-[0.97] w-fit">
              {T.about.cta}
              <span className="ml-3 w-7 h-7 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-700">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="py-32 px-8 bg-[#080808] border-t border-white/[0.04] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.5em] uppercase mb-8">AE Legal Flow</p>
          <div className="relative">
            <h2
              className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.88] tracking-tight text-white"
              style={{fontFamily: "var(--font-playfair)"}}
            >
              <span className="block">{T.manifesto.line1}</span>
              <span className="block text-[#C9A84C]">{T.manifesto.line2}</span>
            </h2>
          </div>
          <p className="mt-10 text-gray-400 text-lg tracking-wide">{T.manifesto.sub}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-[#050505] border-t border-[#C9A84C]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-snug"
            style={{fontFamily: "var(--font-playfair)"}}
          >
            {T.cta.h2}
          </h2>
          <p className="text-gray-500 mb-10">{T.cta.sub}</p>
          <a href="#book" className="group inline-flex items-center gap-0 bg-[#C9A84C] text-black font-bold pl-8 pr-2 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#e0bc6a] active:scale-[0.97]">
            {T.cta.btn}
            <span className="ml-4 w-9 h-9 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">→</span>
          </a>
        </div>
      </section>

      <ChatWidget />

      {/* Footer */}
      <footer className="py-14 px-8 bg-[#030303] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10 border-b border-white/[0.06]">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <svg width="44" height="30" viewBox="0 0 52 36" fill="none">
                <line x1="2" y1="34" x2="13" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="24" y1="34" x2="13" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="30" y1="2" x2="30" y2="34" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="30" y1="2" x2="50" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="30" y1="34" x2="50" y2="34" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="2" y1="20" x2="50" y2="20" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="font-bold tracking-wider block leading-none text-base" style={{fontFamily: "var(--font-playfair)"}}>AE Legal Flow</span>
                <span className="text-[9px] tracking-[0.35em] text-gray-500 uppercase">Law Consulting</span>
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-wrap gap-6 text-[11px] tracking-[0.2em] uppercase text-gray-500">
              <a href="#" className="hover:text-[#C9A84C] transition-colors duration-300">{T.footer.privacy}</a>
              <a href="#" className="hover:text-[#C9A84C] transition-colors duration-300">{T.footer.terms}</a>
              <a href="#" className="hover:text-[#C9A84C] transition-colors duration-300">{T.footer.cookies}</a>
            </div>
            {/* Telegram */}
            <p className="text-gray-600 text-sm">{T.footer.telegram}</p>
          </div>
          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-6">
            <p className="text-gray-700 text-xs">{T.footer.copy} · {T.footer.rights}</p>
            <p className="text-gray-700 text-[10px] tracking-widest uppercase">Any problem — we have a solution</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
