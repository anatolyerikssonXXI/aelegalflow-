"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Здравствуйте! Я юридический ассистент AE Legal Flow. Задайте ваш вопрос — отвечу бесплатно.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.answer }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Ошибка соединения. Попробуйте позже." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 bg-[#0d0d0d] border border-[#C9A84C]/40 shadow-2xl flex flex-col" style={{ height: "420px" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#C9A84C]/20 bg-black/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-wide">AE Legal Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white text-lg leading-none">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] text-sm leading-relaxed px-3 py-2 ${
                    m.role === "user"
                      ? "bg-[#C9A84C] text-black"
                      : "bg-white/5 text-gray-300 border border-white/10"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-3 py-2 text-gray-400 text-sm">
                  <span className="animate-pulse">···</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#C9A84C]/20 p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ваш вопрос..."
              className="flex-1 bg-white/5 border border-white/10 text-white text-sm px-3 py-2 outline-none focus:border-[#C9A84C]/50 placeholder-gray-600"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-[#C9A84C] text-black px-3 py-2 text-sm font-bold hover:bg-[#e0bc6a] transition-colors disabled:opacity-40"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#C9A84C] text-black flex items-center justify-center shadow-lg hover:bg-[#e0bc6a] transition-colors"
        aria-label="Открыть чат"
      >
        {open ? (
          <span className="text-xl font-bold">×</span>
        ) : (
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
