export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, type, area, message } = body

    if (!name || !email) {
      return Response.json({ error: "Имя и email обязательны" }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error("Telegram env vars missing")
      return Response.json({ error: "Ошибка конфигурации сервера" }, { status: 500 })
    }

    const typeLabel = type === "long" ? "40–60 мин (расширенная)" : "20–30 мин (краткая)"

    const text = [
      "📩 *Новая заявка на консультацию*",
      "",
      `👤 *Имя:* ${name}`,
      `📧 *Email:* ${email}`,
      `⏱ *Тип:* ${typeLabel}`,
      `⚖️ *Область:* ${area || "не указана"}`,
      `💬 *Вопрос:* ${message || "не указан"}`,
    ].join("\n")

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
