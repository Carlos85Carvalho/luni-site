import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CalendarDays, Rocket, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import CheckoutFormTeste from './CheckoutFormTeste';

export default function TesteGratis() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [planoEscolhido, setPlanoEscolhido] = useState('Studio (Até 3 agendas)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const abrirFormulario = () => {
    setIsLoading(true);
    // Pequeno delay para feedback visual antes de abrir o modal
    setTimeout(() => {
      setIsLoading(false);
      setIsFormOpen(true);
    }, 300);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 relative overflow-hidden bg-[#0A0B14]">

      {/* BACKGROUND PREMIUM (Grid + Orbs Luminosos) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00E599]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-brand/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER DA PÁGINA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <Zap size={16} className="text-[#00E599]" />
            <span>O Risco Fica Com A Gente</span>
          </div>

          {/* Título sem <br> forçado — max-width controla a quebra */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-sora text-white mb-6 tracking-tight max-w-4xl mx-auto">
            Como funciona o seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] via-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(0,229,153,0.3)]">
              Teste de 7 Dias?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed font-light">
            Sem letras miúdas ou surpresas no cartão. Veja a linha do tempo exata de como a Luni entra na sua operação e gera lucro antes de qualquer cobrança.
          </p>
        </motion.div>

        {/* OS 3 PASSOS */}
        <div className="relative mb-20">

          {/* LINHA CONECTORA HORIZONTAL — só desktop */}
          <div className="hidden lg:block absolute top-[88px] left-[calc(33.33%-40px)] right-[calc(33.33%-40px)] h-px z-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {/* Pontos nas extremidades */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-brand/60" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/60" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* PASSO 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative bg-white/[0.02] border border-white/[0.05] p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Número de fundo com animação de opacidade no hover */}
              <div className="absolute -right-4 -bottom-10 text-[180px] font-black text-white/[0.03] group-hover:text-white/[0.06] select-none pointer-events-none font-sora transition-all duration-700 group-hover:scale-110">1</div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-brand/30 to-primary-brand/5 border border-primary-brand/20 text-primary-brand rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(106,66,220,0.2)]">
                  <Rocket size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cadastro (Hoje)</h3>
                <p className="text-base text-white/60 leading-relaxed">
                  <strong>Você não paga nada hoje.</strong> Pelo nosso App, você cria sua conta, cadastra seus serviços e o sistema treina a sua IA instantaneamente, pronta para uso.
                </p>
              </div>
            </motion.div>

            {/* PASSO 2 — DESTAQUE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group relative bg-gradient-to-b from-[#00E599]/10 to-transparent border border-[#00E599]/30 p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-2xl shadow-[0_0_50px_rgba(0,229,153,0.15)] 
                         transform lg:-translate-y-6 
                         scale-[1.02] lg:scale-100"
            >
              <div className="absolute top-0 right-10 bg-gradient-to-r from-[#00E599] to-emerald-400 text-black text-[11px] font-extrabold px-4 py-1.5 rounded-b-xl uppercase tracking-widest shadow-[0_0_20px_rgba(0,229,153,0.4)]">
                Teste Ativo
              </div>

              <div className="absolute -right-4 -bottom-10 text-[180px] font-black text-[#00E599]/[0.05] group-hover:text-[#00E599]/[0.10] select-none pointer-events-none font-sora transition-all duration-700 group-hover:scale-110">2</div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00E599]/30 to-[#00E599]/5 border border-[#00E599]/30 text-[#00E599] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,229,153,0.3)]">
                  <CalendarDays size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Uso Livre{' '}
                  <span className="whitespace-nowrap">(Dias 1 a 7)</span>
                </h3>
                <p className="text-base text-white/70 leading-relaxed">
                  A Luni assume o atendimento, respondendo e agendando sozinha. Você avalia o impacto no seu faturamento na prática, <strong>totalmente de graça.</strong>
                </p>
              </div>
            </motion.div>

            {/* PASSO 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="group relative bg-white/[0.02] border border-white/[0.05] p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="absolute -right-4 -bottom-10 text-[180px] font-black text-white/[0.03] group-hover:text-white/[0.06] select-none pointer-events-none font-sora transition-all duration-700 group-hover:scale-110">3</div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-blue-500/5 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">A Decisão (Dia 8)</h3>
                <p className="text-base text-white/60 leading-relaxed">
                  No 8º dia você acerta apenas a <strong>Taxa de Implantação</strong> (em até 10x sem juros). A sua primeira mensalidade só será cobrada <strong>30 dias depois</strong> disso.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* GARANTIA PREMIUM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-20 backdrop-blur-lg"
        >
          <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-primary-brand/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Ícone com pulse no glow */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-primary-brand/20 animate-ping opacity-40" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-primary-brand/30 to-transparent border border-primary-brand/30 text-primary-brand rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(106,66,220,0.3)]">
              <ShieldCheck size={40} />
            </div>
          </div>

          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-2xl font-bold text-white mb-3 font-sora">Sem Cartão de Crédito Agora</h4>
            <p className="text-base text-white/60 leading-relaxed max-w-3xl">
              Inicie o seu teste agora mesmo sem precisar colocar dados de pagamento. Se você não quiser continuar após os 7 dias, é só não efetuar o pagamento da implantação.
            </p>
            {/* "Não existe risco." em destaque */}
            <p className="mt-3 text-base font-bold text-white">
              Não existe risco.
            </p>
          </div>
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10 flex flex-col items-center relative z-10"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-sora">
            Tudo pronto para automatizar sua recepção?
          </h2>

          {/* Divisor decorativo */}
          <div className="flex items-center gap-3 mb-10 opacity-30">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white" />
            <Zap size={14} className="text-[#00E599]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white" />
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00E599] to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            <button
              onClick={abrirFormulario}
              disabled={isLoading}
              aria-label="Começar teste grátis no Plano Studio"
              className="relative flex items-center gap-4 bg-gradient-to-r from-[#00E599] to-emerald-400 text-black px-12 py-6 rounded-2xl font-extrabold transition-all transform hover:-translate-y-1 text-lg uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <>
                  {/* Spinner de loading */}
                  <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Carregando...
                </>
              ) : (
                <>
                  <Rocket size={24} />
                  COMEÇAR MEU TESTE GRÁTIS
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Legenda com opacidade mais visível */}
          <p className="mt-6 text-sm text-white/55 font-medium tracking-wide">
            Iniciando no Plano Studio (Até 3 Profissionais)
          </p>
        </motion.div>

      </div>

      {/* MODAL DO FORMULÁRIO */}
      {isFormOpen && (
        <CheckoutFormTeste
          planoSelecionado={planoEscolhido}
          fecharFormulario={() => setIsFormOpen(false)}
        />
      )}

    </div>
  );
}