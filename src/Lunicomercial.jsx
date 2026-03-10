import { useState, useRef, useEffect } from "react";

const KNOWLEDGE_BASE = `
# LUNI IA — BASE DE CONHECIMENTO COMERCIAL COMPLETA

## SOBRE A LUNI
A Luni é uma recepcionista virtual com inteligência artificial para salões de beleza, clínicas estéticas e espaços de bem-estar. Ela atende clientes via WhatsApp automaticamente, 24h por dia, 7 dias por semana — agendando, confirmando, enviando lembretes e pedindo avaliações no Google, tudo sem intervenção humana. Além da IA de atendimento, a Luni oferece um app de gestão completo para o salão.

## PLANOS E PREÇOS

### Plano Studio — R$ 349,90/mês
- Até 3 agendas de profissionais simultâneas
- Taxa de implantação = R$ 349,90 (1 mensalidade), parcelável em até 10x sem juros
- Ideal para profissionais autônomos e salões pequenos
- Inclui TODOS os recursos do app

### Plano Salão PRO — R$ 597,90/mês ⭐ Mais Escolhido
- De 4 a 9 agendas simultâneas
- Taxa de implantação = R$ 597,90 (1 mensalidade), parcelável em até 10x sem juros
- Ideal para salões de médio porte
- Inclui TODOS os recursos do app

### Plano Alta Performance — R$ 799,99/mês
- De 10 a 15 agendas simultâneas
- Taxa de implantação = R$ 799,99 (1 mensalidade), parcelável em até 10x sem juros
- Ideal para salões grandes
- Inclui TODOS os recursos do app

### Recursos inclusos em TODOS os planos:
- Atendimento com IA via WhatsApp (24/7)
- CRM Administrativo completo
- CRM do Profissional (acesso separado por profissional)
- Relatórios financeiros
- Lembretes automáticos
- Consultoria estratégica mensal
- Implantação assistida pela equipe Luni

## TAXA DE IMPLANTAÇÃO
- Equivale a 1 mensalidade do plano escolhido
- Cobrada uma única vez no Dia 8 do teste
- Parcelável em até 10x sem juros no cartão de crédito
- Cobre toda a configuração, treinamento da IA e suporte de onboarding

## MENSALIDADE
- Cobrada mensalmente a partir de 30 dias após o pagamento da implantação
- Recorrente no mesmo método de pagamento escolhido

## TESTE GRÁTIS — 7 DIAS
- O cliente usa a Luni por 7 dias completamente de graça
- Não precisa colocar cartão no momento do cadastro
- No Dia 8, decide se quer continuar e acerta a Taxa de Implantação
- Se não quiser continuar, simplesmente não paga — sem burocracia, sem ligação, sem pressão

## FLUXO REAL DE CADASTRO E ATIVAÇÃO
1. Cliente preenche o formulário no site (sem cartão, sem cobrança)
2. O sistema gera automaticamente o QR Code do WhatsApp logo após o envio
3. Cliente escaneia o QR Code e conecta o WhatsApp do salão na mesma hora
4. Recebe o acesso ao app Luni
5. Dentro do app, cadastra os serviços (nome, duração, valor) e os profissionais
6. A Luni já começa a atender no WhatsApp imediatamente
7. No Dia 8, acerta a taxa de implantação para continuar

### ATENÇÃO: o cadastro SEMPRE deve ser feito com uma conta Google. É obrigatório.

## O QUE TEM NO APP — FUNCIONALIDADES COMPLETAS

### Dashboard
- Visão geral do negócio em tempo real
- Indicadores financeiros, de agenda e de performance consolidados

### Sistema de Agenda Inteligente
- Agendamento completo com visualização por profissional
- Lembretes automáticos em 3 momentos: 24h antes, 2h antes e 24h após o atendimento
- Facilidade para cancelar e remarcar direto pelo aplicativo
- Técnica de Tempo de Pausa para Químicas: quando um serviço tem tempo de espera (ex: coloração, hidratação), o sistema detecta a pausa e encaixa automaticamente outro agendamento dentro desse intervalo — sem desperdício de agenda

### Atendimento com IA via WhatsApp (24/7)
- Recepcionista virtual respondendo e agendando o tempo todo
- Verificação de disponibilidade em tempo real por profissional
- Após o atendimento: envia automaticamente o link do Google Meu Negócio para avaliação 5 estrelas

### Controle Financeiro Completo
- Controle de despesas da empresa
- Controle de estoque qualitativo — o estoque reduz automaticamente conforme os produtos são utilizados nos serviços
- Cadastro de fornecedores
- PDV (Ponto de Venda) integrado
- Controle de comissões de cada profissional
- Relatórios financeiros detalhados por período

### CRM — Carteira de Clientes
- Ficha de anamnese individual de cada cliente
- Histórico completo de serviços realizados por cliente
- Relatório de top clientes do mês e do ano
- Lembrete automático para clientes perdidos: dispara após 45 dias sem retorno
- Lembrete automático de aniversário dos clientes

### Gestão de Profissionais
- Acesso separado para cada profissional cadastrado (login individual)
- Agenda individual por profissional
- Controle financeiro individual — finanças separadas por profissional
- Relatório de performance de cada profissional

### Relatórios
- Relatórios financeiros completos da empresa
- Relatório de serviços por período
- Performance por profissional
- Top clientes do mês e do ano
- Controle de estoque com alertas

## REQUISITOS TÉCNICOS
- Cadastro obrigatório com conta Google
- Número de WhatsApp ativo e exclusivo para o salão
- O número não pode estar conectado ao WhatsApp Web em outro dispositivo durante a implantação
- Recomendado: chip exclusivo para o negócio
- Celular com bateria e internet estável para manter a conexão

## SUPORTE
- WhatsApp de suporte: resposta em até 2h (Seg a Sex, 9h–18h)
- E-mail: suporte@luni.com.br (resposta em até 24h)
- Vídeos tutoriais: app.luni.com.br/ajuda
- Chat Luni Suporte dentro do painel: disponível 24h

## OBJEÇÕES COMUNS E RESPOSTAS

### "É muito caro"
Uma recepcionista presencial custa entre R$1.800 e R$2.500/mês com encargos — e só atende no horário comercial. A Luni Studio sai por R$349,90 e trabalha 24/7, nunca falta, nunca atrasa. Só os agendamentos recuperados fora do horário comercial já pagam o investimento.

### "Tenho medo de perder o toque humano"
A Luni é configurada com a personalidade do seu salão — nome escolhido por você, tom de voz, emojis. Seus clientes vão sentir que estão falando com a recepcionista do salão. E qualquer momento você pode assumir a conversa manualmente.

### "E se a IA errar?"
A Luni só agenda com base nos dados que você cadastrou — serviços, horários, profissionais. Ela não inventa disponibilidade. E com a técnica de Tempo de Pausa, ela até otimiza os horários de químicas automaticamente.

### "Não tenho tempo para configurar"
O cadastro leva menos de 30 minutos da sua parte. O QR Code já é gerado na hora. Nossa equipe te acompanha em cada passo. E o teste de 7 dias é justamente para você ver funcionando sem nenhum compromisso financeiro.

### "Já tentei chatbot e não funcionou"
A Luni não é um chatbot de menu. É uma IA com linguagem natural treinada para o mercado de beleza. Ela entende "quero marcar uma escova pra sexta à tarde" e já verifica a disponibilidade de cada profissional em tempo real.

### "Meus clientes são mais velhos e não vão usar"
O cliente não precisa aprender nada novo — ele já usa WhatsApp. É exatamente o mesmo app que ele já tem no celular. A experiência é natural.

## DIFERENCIAIS COMPETITIVOS
- Especializada em beleza e estética — não é solução genérica
- Funciona no WhatsApp — clientes não precisam baixar nada
- Técnica de Tempo de Pausa para químicas (exclusiva)
- Lembrete para cliente perdido após 45 dias (recuperação automática)
- Estoque que reduz sozinho com o uso dos produtos
- Acesso separado por profissional com agenda e financeiro individuais
- Consultoria estratégica mensal inclusa em todos os planos
- Conta Google obrigatória garante segurança e backup

## PÚBLICO-ALVO IDEAL
- Salões de beleza (cabelo, unhas, estética)
- Barbearias
- Clínicas de estética
- Spas e espaços de bem-estar
- Profissionais autônomos de beleza
- Redes de salões

## FLUXO DE VENDA IDEAL
1. Cliente vê o site e clica em "Teste Grátis"
2. Preenche o formulário (sem cartão, com conta Google)
3. QR Code gerado automaticamente — conecta WhatsApp na hora
4. Acessa o app e cadastra serviços e profissionais
5. Usa a Luni por 7 dias vendo resultados reais
6. No Dia 8, paga a taxa de implantação (1 mensalidade, até 10x)
7. Mensalidade começa 30 dias depois
`;

const SYSTEM_PROMPT = `Você é a Luni Comercial, uma assistente de vendas e suporte especializada nos produtos e serviços da Luni IA.

Sua personalidade:
- Simpática, direta e confiante
- Especialista em argumentação de vendas para o mercado de beleza
- Fala em português brasileiro natural, sem ser robótica
- Usa emojis com moderação para deixar a conversa mais leve
- Nunca inventa informações — se não souber, diz claramente

Sua base de conhecimento:
${KNOWLEDGE_BASE}

Suas responsabilidades:
1. Responder dúvidas sobre planos, preços e funcionalidades
2. Ajudar consultores a contornar objeções de clientes
3. Explicar o processo de implantação passo a passo
4. Fornecer argumentos de venda baseados nos diferenciais da Luni
5. Orientar sobre suporte técnico e configuração

Sempre seja precisa e baseada nas informações acima. Se uma pergunta for além do seu conhecimento, sugira entrar em contato com o suporte.`;

export default function LuniComercial() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Olá! 👋 Sou a **Luni Comercial**, sua assistente especializada em tudo sobre a Luni IA.\n\nPosso te ajudar com:\n- 💰 Planos e preços\n- 🚀 Processo de implantação\n- 💬 Como contornar objeções\n- ⚙️ Dúvidas técnicas\n- 📋 Argumentos de venda\n\nComo posso te ajudar hoje?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickQuestions = [
    "Quais são os planos disponíveis?",
    "Como funciona o teste grátis?",
    "Como contornar objeção de preço?",
    "Qual o processo de implantação?",
  ];

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      const reply = data.content?.map(b => b.text || "").join("") || "Desculpe, não consegui processar sua pergunta.";

      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "❌ Erro de conexão. Tente novamente." }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n- /g, '<br/>• ')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0B14",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* Grid background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />
      {/* Orb */}
      <div style={{
        position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 300, background: "radial-gradient(ellipse, #00E59915 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* HEADER */}
      <div style={{
        position: "relative", zIndex: 10,
        borderBottom: "1px solid #1E1F2E",
        background: "#0A0B14ee",
        backdropFilter: "blur(12px)",
        padding: "16px 24px",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 12,
          background: "linear-gradient(135deg, #00E59930, #00E59910)",
          border: "1px solid #00E59940",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20,
        }}>🤖</div>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Luni Comercial</div>
          <div style={{ color: "#00E599", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00E599", display: "inline-block" }} />
            Assistente com RAG ativo
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {["Planos", "Implantação", "Vendas"].map(tag => (
            <span key={tag} style={{
              padding: "3px 10px", borderRadius: 20,
              background: "#ffffff08", border: "1px solid #ffffff15",
              color: "#8B8FA8", fontSize: 11,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* MESSAGES */}
      <div style={{
        flex: 1, overflowY: "auto", padding: "24px 24px 0",
        position: "relative", zIndex: 10,
        maxWidth: 800, width: "100%", margin: "0 auto",
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            marginBottom: 16,
          }}>
            {msg.role === "assistant" && (
              <div style={{
                width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                background: "linear-gradient(135deg, #00E59930, #00E59910)",
                border: "1px solid #00E59940",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, marginRight: 10, marginTop: 2,
              }}>🤖</div>
            )}
            <div style={{
              maxWidth: "75%",
              background: msg.role === "user"
                ? "linear-gradient(135deg, #00E599, #34d399)"
                : "#11121C",
              border: msg.role === "user" ? "none" : "1px solid #1E1F2E",
              borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
              padding: "12px 16px",
              color: msg.role === "user" ? "#000" : "#fff",
              fontSize: 14,
              lineHeight: 1.6,
            }}
              dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
            />
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10,
              background: "linear-gradient(135deg, #00E59930, #00E59910)",
              border: "1px solid #00E59940",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
            }}>🤖</div>
            <div style={{
              background: "#11121C", border: "1px solid #1E1F2E",
              borderRadius: "4px 18px 18px 18px", padding: "14px 18px",
              display: "flex", gap: 5, alignItems: "center",
            }}>
              {[0, 1, 2].map(d => (
                <div key={d} style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#00E599",
                  animation: "bounce 1.2s infinite",
                  animationDelay: `${d * 0.2}s`,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* QUICK QUESTIONS */}
      {messages.length <= 1 && (
        <div style={{
          padding: "16px 24px 0", maxWidth: 800, width: "100%", margin: "0 auto",
          position: "relative", zIndex: 10,
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {quickQuestions.map(q => (
              <button key={q} onClick={() => sendMessage(q)} style={{
                padding: "8px 14px", borderRadius: 20,
                background: "#ffffff06", border: "1px solid #1E1F2E",
                color: "#8B8FA8", fontSize: 12, cursor: "pointer",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.target.style.borderColor = "#00E59960"; e.target.style.color = "#00E599"; }}
                onMouseLeave={e => { e.target.style.borderColor = "#1E1F2E"; e.target.style.color = "#8B8FA8"; }}
              >{q}</button>
            ))}
          </div>
        </div>
      )}

      {/* INPUT */}
      <div style={{
        padding: "16px 24px 24px", maxWidth: 800, width: "100%",
        margin: "0 auto", position: "relative", zIndex: 10,
      }}>
        <div style={{
          display: "flex", gap: 10, alignItems: "flex-end",
          background: "#11121C", border: "1px solid #1E1F2E",
          borderRadius: 16, padding: "8px 8px 8px 16px",
          transition: "border-color 0.2s",
        }}
          onFocus={() => { }}
        >
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
            placeholder="Pergunte sobre planos, implantação, objeções de venda..."
            rows={1}
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              color: "#fff", fontSize: 14, lineHeight: 1.5, resize: "none",
              fontFamily: "inherit", padding: "6px 0",
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: input.trim() && !loading ? "linear-gradient(135deg, #00E599, #34d399)" : "#1E1F2E",
              border: "none", cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, transition: "all 0.2s",
            }}
          >
            {loading ? "⏳" : "↑"}
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: 8, color: "#ffffff25", fontSize: 11 }}>
          Enter para enviar  •  Shift+Enter para nova linha
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #1E1F2E; border-radius: 2px; }
      `}</style>
    </div>
  );
}