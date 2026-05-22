"use client"

import { useState } from "react"
import { t, type Lang } from "@/lib/translations"

type FormState = {
  name: string
  email: string
  phone: string
  preferredLang: string
  urgent: string
  type: string
  area: string
  message: string
}

export default function BookingForm({ lang }: { lang: Lang }) {
  const F = t[lang].booking.form

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    preferredLang: "",
    urgent: "normal",
    type: "short",
    area: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [bookedType, setBookedType] = useState<string>("short")
  const [errorMsg, setErrorMsg] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || F.errorDefault)
        setStatus("error")
      } else {
        setBookedType(form.type)
        setStatus("success")
        setForm({ name: "", email: "", phone: "", preferredLang: "", urgent: "normal", type: "short", area: "", message: "" })
      }
    } catch {
      setErrorMsg(F.errorNetwork)
      setStatus("error")
    }
  }

  const calendlyUrl = bookedType === "long"
    ? "https://calendly.com/anatolyeriksson/new-meeting"
    : "https://calendly.com/anatolyeriksson/30-minute-meeting"

  if (status === "success") {
    return (
      <div className="bg-[#111] border border-[#C9A84C]/30 p-8 flex flex-col items-center justify-center text-center min-h-[480px]">
        <div className="text-5xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-[#C9A84C] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
          {F.successTitle}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{F.successText}</p>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#C9A84C] text-black font-bold py-4 text-sm tracking-widest uppercase hover:bg-[#e0bc6a] transition-colors text-center mb-4 block"
        >
          {lang === "sv" ? "Välj tid →" : lang === "en" ? "Choose time →" : "Выбрать время →"}
        </a>
        <button
          onClick={() => setStatus("idle")}
          className="border border-white/20 text-gray-500 px-8 py-3 text-xs tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
        >
          {F.newBooking}
        </button>
      </div>
    )
  }

  return (
    <div className="bg-[#111] border border-[#C9A84C]/30 p-8">
      <h3 className="text-xl font-bold mb-6">{F.title}</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.typeLabel}</label>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-3 bg-[#1a1a1a] border border-white/10 px-4 py-3 cursor-pointer hover:border-[#C9A84C] transition-colors">
              <input
                type="radio"
                name="type"
                value="short"
                className="accent-[#C9A84C]"
                checked={form.type === "short"}
                onChange={handleChange}
              />
              <div>
                <div className="text-white text-sm font-medium">{F.shortTitle}</div>
                <div className="text-gray-500 text-xs">{F.shortDesc}</div>
              </div>
            </label>
            <label className="flex items-center gap-3 bg-[#1a1a1a] border border-white/10 px-4 py-3 cursor-pointer hover:border-[#C9A84C] transition-colors">
              <input
                type="radio"
                name="type"
                value="long"
                className="accent-[#C9A84C]"
                checked={form.type === "long"}
                onChange={handleChange}
              />
              <div>
                <div className="text-white text-sm font-medium">{F.longTitle}</div>
                <div className="text-gray-500 text-xs">{F.longDesc}</div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.areaLabel}</label>
          <select
            name="area"
            value={form.area}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-white/10 text-gray-400 px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors"
          >
            <option value="">{F.areaPlaceholder}</option>
            {F.areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.nameLabel}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={F.namePlaceholder}
            required
            className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder-gray-600 transition-colors"
          />
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.emailLabel}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder-gray-600 transition-colors"
          />
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.phoneLabel}</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={F.phonePlaceholder}
            className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder-gray-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.langLabel}</label>
            <select
              name="preferredLang"
              value={form.preferredLang}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/10 text-gray-400 px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors"
            >
              <option value="">—</option>
              {F.langs.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.urgentLabel}</label>
            <select
              name="urgent"
              value={form.urgent}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/10 text-gray-400 px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors"
            >
              <option value="normal">{F.urgentNormal}</option>
              <option value="urgent">{F.urgentUrgent}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">{F.messageLabel}</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={F.messagePlaceholder}
            rows={4}
            className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder-gray-600 transition-colors resize-none"
          />
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm text-center">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#C9A84C] text-black font-bold py-4 text-sm tracking-widest uppercase hover:bg-[#e0bc6a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? F.submitting : F.submit}
        </button>
      </form>
      <p className="text-gray-600 text-xs text-center mt-4">{F.confirm}</p>
    </div>
  )
}
