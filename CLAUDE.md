# AE Legal Flow — Project Context

## Что это за проект
Юридический онлайн-сервис Анатолия Эрикссона (Швеция).
Специализация: миграционное право, шведское право, европейское право.
Целевая аудитория: русскоязычные в Швеции/Европе.

**Бизнес-модель: максимальная автоматизация.**
- Большинство услуг → онлайн, без встреч
- Оплата сначала → потом доступ к услуге (paywall-first)
- Сложные кейсы → встреча с отдельным прайсом
- AI-бот консультирует 24/7 бесплатно → конвертирует в платную услугу

## Стек
- **Framework:** Next.js 15 (App Router), TypeScript
- **UI:** Tailwind CSS + shadcn/ui + radix-ui
- **AI:** Anthropic SDK → claude-sonnet-4-6 (чат-ассистент + RAG)
- **RAG:** knowledge base в `src/lib/knowledge/` (markdown файлы)
- **Нотификации:** Telegram Bot API (заявки с формы)
- **Деплой:** Vercel Hobby (бесплатно) ✅ LIVE
- **Бронирование:** Calendly → calendly.com/anatolyeriksson ✅
- **MCP (Claude Code):** telegram-bot MCP подключён локально

## Структура проекта
```
src/
  app/
    page.tsx              ← главная страница
    api/chat/route.ts     ← AI-чат (Anthropic SDK + RAG)
    api/book/route.ts     ← форма бронирования → Telegram
    api/pay/              ← [будущее] платёжный API
    privacy/ cookies/ terms/
  components/
    BookingForm.tsx        ← форма записи на консультацию
    ChatWidget.tsx         ← AI-чат виджет
    ui/                    ← shadcn компоненты
  lib/
    translations.ts        ← ВСЕ тексты (ru/en/sv) — НЕ хардкодить
    rag.ts                 ← [строим] RAG retrieval логика
    utils.ts
    knowledge/             ← база знаний для RAG (markdown)
      01_utlanningslagen.md
      02_migrationsverket_lagar.md
      03_ordlista.md
      04_flyktingkonventionen.md     ← [добавить]
      05_echr_europakonventionen.md  ← [добавить]
      06_eu_stadgan.md               ← [добавить] EU Charter of Fundamental Rights
      07_eu_fordrag.md               ← [добавить] TEU + TFEU
      08_dublin_regulation.md        ← [добавить]
      09_cases_anatoly.md            ← [добавить] личные кейсы
      10_strasbourg_case.md          ← [добавить] ECHR кейс Анатолия
```

## Бизнес-план и автоматизация

### Услуги (онлайн-first, оплата до получения)

| Услуга | Формат | Цена | Статус |
|--------|--------|------|--------|
| Краткая консультация | 20-30 мин онлайн | ~500 SEK | ✅ на сайте |
| Расширенная консультация | 40-60 мин онлайн | ~900 SEK | ✅ на сайте |
| Письменный юридический анализ | документ онлайн | отдельно | 🔧 добавить |
| Составление жалобы/апелляции | документ онлайн | отдельно | 🔧 добавить |
| Проверка документов | онлайн | отдельно | 🔧 добавить |
| Сложный кейс / представительство | встреча | договорная | 🔧 добавить |

### Поток клиента (автоматизированный)
```
Клиент приходит на сайт
  → AI-бот отвечает на базовые вопросы (RAG по законам) — БЕСПЛАТНО
  → Бот говорит: "Для вашего случая нужна консультация"
  → Клиент нажимает "Записаться"
  → Выбирает услугу → ОПЛАТА (Stripe/Swish)
  → После оплаты: получает ссылку на Calendly/встречу
  → Консультация проходит
  → Telegram-уведомление юристу
```

### Что нужно построить для автоматизации
1. **Платёжная система** — Stripe или Swish (шведский)
2. **Calendly интеграция** — автоматическое бронирование после оплаты
3. **Личный кабинет** (опционально) — статус заявки, документы
4. **Email-нотификации** — подтверждение клиенту + юристу

## RAG — Knowledge Base

### Как работает
1. Клиент задаёт вопрос в чат
2. `rag.ts` ищет релевантные куски из knowledge базы (keyword matching)
3. Топ-3 релевантных чанка вставляются в system prompt
4. Claude отвечает, опираясь на реальные законы — без галлюцинаций

### Документы в базе (план)
- Utlänningslagen 2005:716 ✅
- Migrationsverket — полный список законов ✅
- Ordlista (терминология) ✅
- 1951 Flyktingkonventionen (Genèvekonventionen) — нужно добавить
- ECHR / Europakonventionen (EKMR) — нужно добавить
- EU Stadgan om grundläggande rättigheter — нужно добавить
- TEU + TFEU (EU-fördragen) — нужно добавить
- Dublin Regulation EU 604/2013 — нужно добавить
- Анатолия личные кейсы — нужно добавить
- ECHR кейс Анатолия — нужно добавить

## Ключевые правила

### Тексты — ТОЛЬКО через translations.ts
Никогда не хардкодить тексты. Все строки → `translations.ts` → `t[lang].xxx`.
Три языка обязательно: `ru` | `en` | `sv`.

### Дизайн-система
- Золотой акцент: `#C9A84C`
- Фон: тёмный (black/near-black)
- Стекло-эффекты: `backdrop-blur + bg-black/70 + border-white/10`
- Шрифт заголовков: Playfair Display (serif)
- Анимации: `tw-animate-css` классы

### ENV переменные (.env.local)
- `ANTHROPIC_API_KEY` ✅ — уже есть
- `TELEGRAM_BOT_TOKEN` ⚠️ — нужно добавить
- `TELEGRAM_CHAT_ID` ⚠️ — нужно добавить
- `STRIPE_SECRET_KEY` 🔜 — для платёжной системы

### Запуск
```bash
cd ~/Desktop/aelegalflow
npm run dev          # localhost:3000
npm run build        # проверка перед деплоем
```

## Что сделано ✅

### Сайт и деплой
- Полный лендинг (hero, услуги, FAQ, о нас, форма бронирования, прайсинг, отзывы)
- Мультиязычность RU/EN/SV (все тексты через `translations.ts`)
- Стеклянный nav, золотые акценты (#C9A84C), анимации, Playfair Display
- **Деплой на Vercel** → aelegalflow-8tnu.vercel.app ✅

### AI-чат (RAG система)
- `src/lib/rag.ts` — keyword retrieval, TOP-4 чанка в контекст
- `src/app/api/chat/route.ts` — Anthropic claude-sonnet-4-6 + RAG
- System prompt с конверсионными правилами (бесплатно vs платная консультация)
- **Knowledge base: 11 файлов:**
  - 01 Utlänningslagen, 02 Migrationsverket, 03 Ordlista
  - 04 Flyktingkonventionen, 05 ECHR, 06 EU Stadgan
  - 07 EU Fördrag (TEU+TFEU), 08 Dublin Regulation
  - 09 Кейсы AE, 10 Биография юриста, 11 Human Rights KB

### Бронирование
- Форма → `api/book/route.ts` → Telegram уведомление с деталями клиента
- После успешной отправки → кнопка "Выбрать время" → Calendly
- **Calendly:** calendly.com/anatolyeriksson (30 мин + 60 мин, Google Meet) ✅
- ENV: `TELEGRAM_BOT_TOKEN` ✅, `TELEGRAM_CHAT_ID` ✅

### SEO
- `opengraph-image.tsx` — динамическая OG картинка 1200×630
- `sitemap.ts` — автоматический sitemap.xml
- `robots.ts` — robots.txt с disallow /api/
- JSON-LD schema (LegalService, schema.org)
- ~30 keywords: RU/EN/SV, русскоязычные из РФ/UA/BY/LV, asylum seekers

## Бэклог 🔧
- [ ] Домен aelegalflow.se — купить + подключить в Vercel
- [ ] Stripe — платёжная система (Wise рекомендован для вывода)
- [ ] n8n — автоматизация: форма → Stripe → Calendly → email без ручного труда
- [ ] Личные кейсы Анатолия в knowledge base (09_cases_ae.md расширить)
- [ ] Email-нотификации клиенту после бронирования
- [ ] Telegram-канал для русскоязычных в Швеции (контент-воронка)

## Архитектура автоматизации (цель)
```
Клиент → сайт → AI-бот (RAG, бесплатно)
  → "нужна консультация" → форма → Stripe (оплата)
  → n8n: подтверждение email + Calendly ссылка автоматом
  → встреча в Google Meet
  → Telegram уведомление юристу
  → follow-up email автоматом
Участие юриста = только сама консультация
```

## Юрист: Анатолий Эрикссон
- Два LL.M. (Рига + Стокгольм)
- Практика: ЕСПЧ/Strasbourg, Migrationsverket, апелляции, миграционные суды
- Языки: RU, EN, SV
- Email: anatolyeriksson@gmail.com
