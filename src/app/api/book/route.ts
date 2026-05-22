export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, preferredLang, urgent, type, area, message } = body

    if (!name || !email) {
      return Response.json({ error: "Имя и email обязательны" }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error("Telegram env vars missing")
      return Response.json({ error: "Ошибка конфигурации сервера" }, { status: 500 })
    }

    const isLong = type === "long"
    const isUrgent = urgent === "urgent"
    const typeLabel = isLong ? "Расширенная (40–60 мин)" : "Краткая (20–30 мин)"
    const basePrice = isLong ? 2500 : 1500
    const finalPrice = isUrgent ? Math.round(basePrice * 1.5) : basePrice
    const baseEur = isLong ? 230 : 140
    const finalEur = isUrgent ? Math.round(baseEur * 1.5) : baseEur
    const priceLabel = `${finalPrice.toLocaleString("sv-SE")} SEK (~${finalEur}€)${isUrgent ? " ⚡ срочно" : ""}`

    const now = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Stockholm",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const text = [
      "🔔 *НОВАЯ ЗАЯВКА — AE Legal Flow*",
      "",
      "━━━ 👤 КЛИЕНТ ━━━",
      `*Имя:*    ${name}`,
      `*Email:*  ${email}`,
      phone ? `*Тел:*    ${phone}` : null,
      preferredLang ? `*Язык:*   ${preferredLang}` : null,
      "",
      "━━━ 📋 УСЛУГА ━━━",
      `*Тип:*    ${typeLabel}`,
      `*Цена:*   ${priceLabel}`,
      "",
      "━━━ ⚖️ ДЕЛО ━━━",
      `*Область:* ${area || "не указана"}`,
      `*Вопрос:*  ${message || "не указан"}`,
      "",
      "━━━ ✅ ЧТО СДЕЛАТЬ ━━━",
      "☐ Отправить ссылку на оплату",
      "☐ Прислать Calendly ссылку",
      "☐ Подтвердить встречу",
      "",
      `🕐 ${now} (Stockholm)`,
    ].filter((l) => l !== null).join("\n")

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error("Telegram error:", err)
      return Response.json({ error: "Ошибка отправки уведомления" }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (e) {
    console.error("Book API error:", e)
    return Response.json({ error: "Внутренняя ошибка сервера" }, { status: 500 })
  }
}
