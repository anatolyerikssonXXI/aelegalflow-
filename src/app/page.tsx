import BookingForm from "@/components/BookingForm"
import ChatWidget from "@/components/ChatWidget"

export default function Home() {
  return (
    <main className="min-h-screen text-white font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-3">
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
              {/* A — two diagonal lines */}
              <line x1="2" y1="34" x2="13" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="24" y1="34" x2="13" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              {/* E — vertical + top + bottom horizontals */}
              <line x1="30" y1="2" x2="30" y2="34" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="30" y1="2" x2="50" y2="2" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <line x1="30" y1="34" x2="50" y2="34" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              {/* Red crossbar through both A and E */}
              <line x1="2" y1="20" x2="50" y2="20" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <div>
              <span className="text-lg font-bold tracking-wider block leading-none" style={{fontFamily: "var(--font-playfair)"}}>AE Legal Flow</span>
              <span className="text-[9px] tracking-[0.35em] text-gray-400 uppercase">Law Consulting</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-gray-300 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors">Услуги</a>
            <a href="#book" className="text-gray-300 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors">Записаться</a>
            <a href="#faq" className="text-gray-300 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors">FAQ</a>
            <a href="#book" className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black px-6 py-2 text-xs tracking-widest uppercase transition-all">
              Онлайн запись
            </a>
          </div>
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
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-8">— Юридические консультации онлайн —</p>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6" style={{fontFamily: "var(--font-playfair)"}}>
            Решаем ваши<br/>
            <span className="italic font-normal text-[#C9A84C]">юридические проблемы</span>
          </h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Профессиональная помощь для русскоязычных мигрантов в Швеции.<br/>
            Миграционное · Шведское · Европейское право
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="bg-[#C9A84C] text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#e0bc6a] transition-colors">
              Записаться на консультацию
            </a>
            <a href="#services" className="border border-white/40 text-white px-10 py-4 text-sm tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
              Узнать больше
            </a>
          </div>
        </div>

        {/* Stats bar at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur border-t border-[#C9A84C]/20">
          <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/10 py-6">
            {[
              { num: "500+", label: "Клиентов" },
              { num: "15", label: "Стран СНГ" },
              { num: "24/7", label: "AI-ассистент" },
            ].map((s) => (
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
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">— Наша экспертиза —</p>
          <h2 className="text-5xl font-bold mb-6" style={{fontFamily: "var(--font-playfair)"}}>
            Глубокое знание<br/>
            <span className="italic font-light text-[#C9A84C]">шведского и европейского права</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Годы практики в миграционном праве Швеции, EU директивах и защите прав русскоязычных мигрантов.
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
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— Что мы делаем —</p>
            <h2 className="text-5xl font-bold" style={{fontFamily: "var(--font-playfair)"}}>Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Миграционное право",
                items: ["ВНЖ и ПМЖ", "Рабочие визы", "Гражданство Швеции", "Воссоединение семьи", "Апелляции отказов"],
              },
              {
                num: "02",
                title: "Шведское право",
                items: ["Трудовые споры", "Жилищные вопросы", "Семейное право", "Защита прав", "Уголовное право"],
              },
              {
                num: "03",
                title: "Европейское право",
                items: ["Бизнес в ЕС", "EU директивы", "Международные контракты", "Права граждан ЕС", "Налогообложение"],
              },
            ].map((s) => (
              <div key={s.num} className="border border-[#C9A84C]/30 bg-black/60 backdrop-blur p-8 hover:border-[#C9A84C] transition-colors group">
                <div className="text-[#C9A84C]/30 text-5xl font-bold mb-4 group-hover:text-[#C9A84C]/60 transition-colors">{s.num}</div>
                <h3 className="text-xl font-bold mb-5">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center gap-3 text-sm">
                      <span className="w-1 h-1 bg-[#C9A84C] rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#book" className="mt-8 block text-[#C9A84C] text-xs tracking-widest uppercase hover:text-white transition-colors">
                  Записаться →
                </a>
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
        <div className="absolute inset-0 bg-black/82"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— Почему выбирают нас —</p>
            <h2 className="text-5xl font-bold" style={{fontFamily: "var(--font-playfair)"}}>
              Ваши интересы —<br/>
              <span className="italic font-light text-[#C9A84C]">наш приоритет</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚖️",
                title: "Реальный опыт",
                desc: "Годы практики в шведских и европейских судах. Знаем систему изнутри — от первичной подачи до апелляции.",
              },
              {
                icon: "🌍",
                title: "На вашем языке",
                desc: "Консультируем на русском. Никаких языковых барьеров — объясняем сложное просто.",
              },
              {
                icon: "🔒",
                title: "Полная конфиденциальность",
                desc: "Адвокатская тайна. Ваша ситуация остаётся только между нами.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 border border-[#C9A84C]/20 bg-black/40 backdrop-blur hover:border-[#C9A84C]/60 transition-colors">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{fontFamily: "var(--font-playfair)"}}>{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
        <div className="absolute inset-0 bg-black/88"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left text */}
          <div className="pt-4">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">— Онлайн запись —</p>
            <h2 className="text-5xl font-bold mb-6" style={{fontFamily: "var(--font-playfair)"}}>
              Запишитесь<br/>
              <span className="italic font-light text-[#C9A84C]">на консультацию</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Выберите удобный формат, опишите вашу ситуацию — и мы свяжемся с вами для подтверждения времени.
            </p>

            <div className="space-y-6">
              {[
                { icon: "⏱", title: "20–30 минут", desc: "Краткая консультация — ответ на конкретный вопрос" },
                { icon: "📋", title: "40–60 минут", desc: "Расширенная консультация — детальный анализ ситуации" },
              ].map((t) => (
                <div key={t.title} className="flex gap-4 border border-white/10 p-5">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className="font-bold text-white">{t.title}</div>
                    <div className="text-gray-500 text-sm mt-1">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <BookingForm />
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
        <div className="absolute inset-0 bg-black/87"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">— Вопросы —</p>
          <h2 className="text-5xl font-bold mb-16" style={{fontFamily: "var(--font-playfair)"}}>FAQ</h2>
          <div className="space-y-0">
            {[
              { q: "Как проходит онлайн консультация?", a: "Через Zoom или Google Meet. После записи вы получите ссылку на встречу и сможете задать все вопросы голосом или в чате." },
              { q: "Что делать если отказали в ВНЖ или визе?", a: "Большинство отказов можно обжаловать. Мы подготовим апелляцию с сильной аргументацией и сопроводим в суде." },
              { q: "Работаете с клиентами из СНГ?", a: "Да, работаем с клиентами из всех 15 республик. Консультации полностью на русском языке онлайн." },
              { q: "Какова стоимость консультации?", a: "Стоимость зависит от типа консультации. Свяжитесь с нами для уточнения актуальных цен." },
            ].map((f) => (
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
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[#C9A84C] text-5xl mb-6 font-serif">"</div>
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic" style={{fontFamily: "var(--font-playfair)"}}>
            Закон защищает тех, кто знает свои права
          </blockquote>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase">— AE Legal Flow</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-8 relative border-t border-white/5"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="w-full aspect-[3/4] bg-[#1a1a1a] border border-[#C9A84C]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-gray-600 text-sm">Добавьте ваше фото</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 border border-[#C9A84C] p-4 bg-[#0d0d0d]">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase">LL.M. · LL.M.</p>
            </div>
          </div>
          {/* Bio */}
          <div className="relative z-10">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">— О юристе —</p>
            <h2 className="text-4xl font-bold mb-6" style={{fontFamily: "var(--font-playfair)"}}>
              Анатолий Эрикссон
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Юрист с двумя магистерскими степенями и практикой в двух странах — помогаю русскоязычным мигрантам защищать свои права в Швеции и Европе.
            </p>
            <div className="space-y-4 mb-8">
              <div className="border-l-2 border-[#C9A84C] pl-4">
                <p className="text-white font-semibold">Магистр гражданского и гуманитарного права</p>
                <p className="text-gray-500 text-sm">Рига, Латвия · Балтийский регион</p>
              </div>
              <div className="border-l-2 border-[#C9A84C] pl-4">
                <p className="text-white font-semibold">Магистр европейского и международного права</p>
                <p className="text-gray-500 text-sm">Стокгольм, Швеция · Шведское право</p>
              </div>
            </div>
            <a href="#book" className="inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#C9A84C] hover:text-black transition-all">
              Записаться на консультацию →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-transparent border-t border-[#C9A84C]/20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2" style={{fontFamily: "var(--font-playfair)"}}>Готовы помочь прямо сейчас</h2>
            <p className="text-gray-500">Онлайн консультация — быстро и удобно</p>
          </div>
          <a href="#book" className="border border-[#C9A84C] text-[#C9A84C] font-bold px-10 py-5 text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-black transition-all whitespace-nowrap">
            Записаться →
          </a>
        </div>
      </section>

      <ChatWidget />

      {/* Footer */}
      <footer className="py-10 px-8 bg-transparent border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
          <p className="text-gray-600 text-sm">© 2026 AE Legal Flow · Sverige · Все права защищены</p>
          <p className="text-gray-600 text-sm">Telegram: @aelegalflow</p>
        </div>
      </footer>

    </main>
  )
}
