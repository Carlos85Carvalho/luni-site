import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────
// 🔧 CONFIGURE AQUI: cole a URL do seu webhook n8n
// Ex: "https://n8n.souluni.cloud/webhook/luni-chat"
// ─────────────────────────────────────────────────────────────────
const WEBHOOK_URL = "https://n8n.souluni.cloud/webhook/luni-chat";

const INITIAL_MESSAGE = {
  role: "assistant",
  content: "Olá! 👋 Sou a **Luni**, assistente virtual da Soul Luni.\n\nPosso te ajudar com dúvidas sobre planos, preços, como funciona o teste grátis e muito mais.\n\nComo posso te ajudar?",
};

const QUICK_OPTIONS = [
  "Como funciona o teste grátis?",
  "Quais são os planos?",
  "Como a Luni atende meus clientes?",
];

function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n- /g, "<br/>• ")
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}

export default function LuniChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Para o pulse depois de 6 segundos
  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) {
      setShowPulse(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: newMessages.slice(-10).map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Erro no servidor");

      const data = await res.json();
      const reply = data.reply || data.text || data.message || "Desculpe, não consegui processar sua pergunta.";

      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Desculpe, estou com dificuldades técnicas no momento. Entre em contato pelo WhatsApp! 💬",
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── JANELA DO CHAT ─────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: 90,
              right: 24,
              width: 360,
              maxHeight: "70vh",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              borderRadius: 20,
              overflow: "hidden",
              background: "#0A0B14",
              border: "1px solid #1E1F2E",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,229,153,0.08)",
            }}
          >
            {/* Header */}
            <div style={{
              background: "linear-gradient(135deg, #11121C, #0A0B14)",
              borderBottom: "1px solid #1E1F2E",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                overflow: "hidden", border: "2px solid #00E59940", flexShrink: 0,
              }}>
                <img src="/logo.png" alt="Luni" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
                  Luni IA
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00E599" }} />
                  <span style={{ color: "#00E599", fontSize: 10, fontFamily: "system-ui, sans-serif" }}>
                    Online agora
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#8B8FA8", fontSize: 18, padding: "4px 6px",
                  borderRadius: 6, transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#8B8FA8"}
              >✕</button>
            </div>

            {/* Mensagens */}
            <div style={{
              flex: 1, overflowY: "auto", padding: "16px 12px",
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                  gap: 6,
                }}>
                  {msg.role === "assistant" && (
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%",
                      overflow: "hidden", border: "1.5px solid #00E59940", flexShrink: 0,
                    }}>
                      <img src="/logo.png" alt="Luni" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></div>
                  )}
                  <div
                    style={{
                      maxWidth: "78%",
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, #00E599, #34d399)"
                        : "#11121C",
                      border: msg.role === "user" ? "none" : "1px solid #1E1F2E",
                      borderRadius: msg.role === "user"
                        ? "14px 14px 3px 14px"
                        : "3px 14px 14px 14px",
                      padding: "9px 12px",
                      color: msg.role === "user" ? "#000" : "#fff",
                      fontSize: 13,
                      lineHeight: 1.55,
                      fontFamily: "system-ui, sans-serif",
                    }}
                    dangerouslySetInnerHTML={{ __html: formatText(msg.content) }}
                  />
                </div>
              ))}

              {/* Quick options — só na primeira mensagem */}
              {messages.length === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                  {QUICK_OPTIONS.map(q => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      style={{
                        textAlign: "left",
                        background: "transparent",
                        border: "1px solid #1E1F2E",
                        borderRadius: 10,
                        padding: "7px 12px",
                        color: "#8B8FA8",
                        fontSize: 12,
                        cursor: "pointer",
                        fontFamily: "system-ui, sans-serif",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "#00E59960";
                        e.currentTarget.style.color = "#00E599";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "#1E1F2E";
                        e.currentTarget.style.color = "#8B8FA8";
                      }}
                    >{q}</button>
                  ))}
                </div>
              )}

              {/* Loading dots */}
              {loading && (
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: "50%",
                    overflow: "hidden", border: "1.5px solid #00E59940", flexShrink: 0,
                  }}>
                    <img src="/logo.png" alt="Luni" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></div>
                  <div style={{
                    background: "#11121C", border: "1px solid #1E1F2E",
                    borderRadius: "3px 14px 14px 14px",
                    padding: "10px 14px",
                    display: "flex", gap: 4, alignItems: "center",
                  }}>
                    {[0, 1, 2].map(d => (
                      <div key={d} style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "#00E599",
                        animation: "luniDot 1.2s infinite",
                        animationDelay: `${d * 0.2}s`,
                      }} />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{
              borderTop: "1px solid #1E1F2E",
              padding: "10px",
              flexShrink: 0,
              background: "#0A0B14",
            }}>
              <div style={{
                display: "flex", gap: 8, alignItems: "flex-end",
                background: "#11121C",
                border: "1px solid #1E1F2E",
                borderRadius: 12,
                padding: "6px 6px 6px 12px",
              }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="Digite sua dúvida..."
                  rows={1}
                  style={{
                    flex: 1, background: "transparent", border: "none",
                    outline: "none", color: "#fff", fontSize: 13,
                    lineHeight: 1.5, resize: "none",
                    fontFamily: "system-ui, sans-serif",
                    padding: "4px 0",
                  }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: input.trim() && !loading
                      ? "linear-gradient(135deg, #00E599, #34d399)"
                      : "#1E1F2E",
                    border: "none",
                    cursor: input.trim() && !loading ? "pointer" : "default",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 16,
                    transition: "all 0.2s",
                    color: input.trim() && !loading ? "#000" : "#8B8FA8",
                  }}
                >↑</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTÃO FLUTUANTE ────────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 9999,
      }}>
        {/* Balão de chamada — aparece quando fechado */}
        <AnimatePresence>
          {!open && showPulse && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              style={{
                position: "absolute", right: 64, bottom: 8,
                background: "#11121C",
                border: "1px solid #00E59940",
                borderRadius: "12px 12px 3px 12px",
                padding: "8px 12px",
                color: "#fff",
                fontSize: 12,
                whiteSpace: "nowrap",
                fontFamily: "system-ui, sans-serif",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
            >
              💬 Posso te ajudar com algo?
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <div style={{
            position: "absolute", inset: -4, borderRadius: "50%",
            background: "#00E59930",
            animation: "luniPulse 2s infinite",
          }} />
        )}

        {/* Botão principal */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: 58, height: 58, borderRadius: "50%",
            background: open ? "#1E1F2E" : "transparent",
            border: open ? "2px solid #1E1F2E" : "2px solid #00E599",
            cursor: "pointer", padding: 0, overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,229,153,0.4)",
            transition: "all 0.3s",
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {open
            ? <span style={{ fontSize: 22, color: "#fff", lineHeight: 1 }}>✕</span>
            : <img
                src="/logo.png"
                alt="Luni"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  transform: "scale(1.1)",
                  transformOrigin: "center 30%",
                  display: "block",
                }}
              />
          }
        </button>
      </div>

      <style>{`
        @keyframes luniDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes luniPulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  );
}