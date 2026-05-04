"use client"

import { useState } from "react"

type FormState = {
  name: string
  email: string
  type: string
  area: string
  message: string
}

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    type: "short",
    area: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
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
        setErrorMsg(data.error || "Что-то пошло не так")
        setStatus("error")
      } else {
        setStatus("success")
        setForm({ name: "", email: "", type: "short", area: "", message: "" })
      }
    } catch {
      setErrorMsg("Нет соединения с сервером")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#111] border border-[#C9A84C]/30 p-8 flex flex-col items-center justify-center text-center min-h-[480px]">
        <div className="text-5xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-[#C9A84C] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
          Заявка отправлена!
        </h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Мы получили вашу заявку и свяжемся с вами<br />в течение 24 часов для подтверждения.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#C9A84C] hover:text-black transition-colors"
        >
          Новая запись
        </button>
      </div>
    )
  }

  return (
    <div className="bg-[#111] border border-[#C9A84C]/30 p-8">
      <h3 className="text-xl font-bold mb-6">Заполните форму</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Тип консультации</label>
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
                <div className="text-white text-sm font-medium">20–30 мин</div>
                <div className="text-gray-500 text-xs">Краткая</div>
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
                <div className="text-white text-sm font-medium">40–60 мин</div>
                <div className="text-gray-500 text-xs">Расширенная</div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Область права</label>
          <select
            name="area"
            value={form.area}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-white/10 text-gray-400 px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors"
          >
            <option value="">Выберите...</option>
            <option value="Миграционное право">Миграционное право</option>
            <option value="Шведское право">Шведское право</option>
            <option value="Европейское право">Европейское право</option>
            <option value="Другое">Другое</option>
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Имя</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
            className="w-full bg-[#1a1a1a] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder-gray-600 transition-colors"
          />
        </div>

        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Email</label>
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
          <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">Описание вопроса</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Кратко опишите вашу ситуацию..."
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
          {status === "loading" ? "Отправляем..." : "Записаться →"}
        </button>
      </form>
      <p className="text-gray-600 text-xs text-center mt-4">Подтверждение придёт на email в течение 24 часов</p>
    </div>
  )
}
