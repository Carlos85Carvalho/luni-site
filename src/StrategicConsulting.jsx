import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Fingerprint, Lightbulb, Activity } from 'lucide-react';

export default function StrategicConsulting() {
  const steps = [
    { id: "01", title: "Análise de Desempenho", desc: "Levantamento completo de faturamento, retenção, agenda e performance da equipe.", status: "Dados processados", icon: <BarChart3 className="text-primary-brand" size={20} /> },
    { id: "02", title: "Identificação de Gargalos", desc: "Detectamos onde a sua empresa está perdendo faturamento e oportunidades.", status: "Oportunidades mapeadas", icon: <Fingerprint className="text-tech-blue" size={20} /> },
    { id: "03", title: "Estratégia Personalizada", desc: "Criamos um plano prático para aumentar faturamento e retenção no mês seguinte.", status: "Plano gerado", icon: <Lightbulb className="text-highlight-pink" size={20} /> },
    { id: "04", title: "Acompanhamento Contínuo", desc: "Monitoramos os resultados e ajustamos a estratégia conforme os dados evoluem.", status: "Monitorando crescimento", icon: <Activity className="text-growth-green" size={20} /> }
  ];

  return (
    <section id="consultoria" className="py-32 px-6 md:px-12 bg-[#0C0E1A] relative overflow-hidden">
      {/* Visual de fundo: Glow e Circuito */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-circuit" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LADO ESQUERDO: AUTORIDADE */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold font-sora leading-tight text-white">
              Seus dados definem sua <span className="text-gradient">próxima estratégia.</span> Todos os meses.
            </h2>
            <div className="space-y-4 text-xl text-white/50 font-inter max-w-lg">
              <p>A Luni não entrega apenas relatórios.</p>
              <p>Analisamos seu desempenho, identificamos gargalos e criamos um plano estratégico personalizado para o mês seguinte.</p>
            </div>
          </div>
          <p className="text-primary-brand font-bold tracking-widest uppercase text-xs border-l-2 border-primary-brand pl-4">
            “Dados sem ação não geram crescimento.”
          </p>
        </div>

        {/* LADO DIREITO: FLUXO ESTRATÉGICO VISUAL */}
        <div className="relative">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Linha Conectora Neon Sutil */}
            <div className="absolute left-[54px] top-24 bottom-24 w-[1px] bg-gradient-to-b from-primary-brand/40 via-tech-blue/40 to-growth-green/40 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex gap-8 items-start group"
                >
                  {/* Módulo do Sistema */}
                  <div className="relative z-10 w-11 h-11 shrink-0 rounded-xl bg-[#0C0E1A] border border-white/10 flex items-center justify-center shadow-2xl transition-all group-hover:border-primary-brand/50">
                    {step.icon}
                    {/* Ponto de Conexão Pulsante */}
                    <div className="absolute -left-[14px] w-2 h-2 bg-white/20 rounded-full hidden md:block">
                      <div className="absolute inset-0 bg-white/40 rounded-full animate-ping" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white font-sora">{step.title}</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-inter max-w-xs">
                      {step.desc}
                    </p>
                    {/* Indicador de Status Ativo */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="w-1 h-1 rounded-full bg-growth-green animate-pulse" />
                      <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-growth-green/70">
                        Status: {step.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DESTAQUE PRINCIPAL (SELO PREMIUM) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-24 max-w-3xl mx-auto px-6"
      >
        <div className="relative p-[1px] rounded-[32px] bg-gradient-to-r from-primary-brand/40 via-tech-blue/40 to-highlight-pink/40">
          <div className="bg-[#0C0E1A] rounded-[31px] py-12 px-6 text-center space-y-5 shadow-2xl">
            <h3 className="text-xl md:text-3xl font-bold font-sora text-white tracking-tight uppercase">
              Consultoria Estratégica Mensal Inclusa
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.3em]">
              <span>Sem custo adicional</span>
              <span className="hidden md:block opacity-20">•</span>
              <span>Sem upsell</span>
              <span className="hidden md:block opacity-20">•</span>
              <span>Estrutura Luni</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}