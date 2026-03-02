import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Users, LayoutDashboard, MessageSquare, Star, Zap, Check } from 'lucide-react';

export default function DifferenceSection() {
  return (
    <section id="diferenciais" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      
      {/* Brilho de fundo sutil para dar um ar premium e tecnológico */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-brand/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Título e Cabeçalho reformulados para MAIOR IMPACTO */}
      <div className="text-center mb-24 relative z-10 flex flex-col items-center">
        
        {/* 🚀 TAG "O PODER DA LUNI" AUMENTADA E MAIS DESTACADA */}
        <span className="inline-block py-2 px-6 md:py-2.5 md:px-8 rounded-full bg-primary-brand/15 border border-primary-brand/30 text-primary-brand font-extrabold text-sm md:text-base tracking-[0.25em] uppercase mb-8 shadow-[0_0_30px_rgba(91,46,255,0.3)] backdrop-blur-sm">
          O Poder da Luni
        </span>
        
        <h2 className="text-4xl md:text-6xl font-black font-sora text-white mb-6 tracking-tight leading-[1.1]">
          Não é apenas um sistema.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-brand to-tech-blue">É uma estrutura de lucro.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
          A Luni divide o seu salão em 3 pilares fundamentais, dando autonomia para a equipe, controle para o dono e a melhor experiência para o cliente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* Pilar 1: A IA */}
        <FeatureCard 
          icon={<Bot />}
          title="Recepcionista IA 24h"
          description="Sua agenda nunca mais ficará vazia por falta de resposta rápida. A Luni atende, negocia e agenda sozinha."
          list={["Responde clientes em 3 segundos", "Interpreta áudios e gírias locais", "Encontra brechas na agenda", "Confirmação automática de presença"]}
          highlight="Sua recepção no piloto automático."
          colorTheme="from-purple-500 to-indigo-600"
          shadowColor="shadow-purple-500/20"
          iconColor="text-purple-400"
          bgHover="hover:bg-purple-900/10"
          borderColor="group-hover:border-purple-500/30"
        />

        {/* Pilar 2: O Gestor */}
        <FeatureCard 
          icon={<LayoutDashboard />}
          title="Visão do Gestor (Dono)"
          description="O painel de controle absoluto. Saiba exatamente de onde vem o lucro e para onde vai a despesa do mês."
          list={["DRE e Fluxo de Caixa automático", "Ranking de serviços mais lucrativos", "Controle de comissões preciso", "Métricas de retenção de clientes"]}
          highlight="O gestor com controle total."
          colorTheme="from-tech-blue to-cyan-400"
          shadowColor="shadow-tech-blue/20"
          iconColor="text-tech-blue"
          bgHover="hover:bg-tech-blue/10"
          borderColor="group-hover:border-tech-blue/30"
        />

        {/* Pilar 3: O Profissional */}
        <FeatureCard 
          icon={<Users />}
          title="App do Profissional"
          description="Acabe com a dependência da recepção. Cada profissional gerencia sua própria cadeira pelo celular."
          list={["Login individual e seguro", "Visualização da própria agenda", "Adição de produtos (Ficha Química)", "Acompanhamento de metas diárias"]}
          highlight="Autonomia para sua equipe."
          colorTheme="from-highlight-pink to-rose-500"
          shadowColor="shadow-highlight-pink/20"
          iconColor="text-highlight-pink"
          bgHover="hover:bg-highlight-pink/10"
          borderColor="group-hover:border-highlight-pink/30"
        />
      </div>

      {/* Automações Secundárias (Tijolinhos de baixo) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 relative z-10">
        <SmallFeature 
          icon={<MessageSquare />}
          title="Lembretes Inteligentes"
          desc="Sistema anti-furo automático via WhatsApp que reduz as faltas em até 90%."
        />
        <SmallFeature 
          icon={<Star />}
          title="Marketing de Avaliações"
          desc="A IA pede avaliações 5 estrelas no Google automaticamente após o atendimento."
        />
        <SmallFeature 
          icon={<Zap />}
          title="Implantação Assistida"
          desc="Nós configuramos o robô e os serviços para você. Seu único trabalho é usar."
        />
      </div>
    </section>
  );
}

// 🎨 COMPONENTE DO CARD PRINCIPAL REFORMULADO
function FeatureCard({ icon, title, description, list, highlight, colorTheme, shadowColor, iconColor, bgHover, borderColor }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`bg-[#11121c] border border-white/5 p-8 rounded-[32px] flex flex-col h-full relative group overflow-hidden transition-all duration-500 ${bgHover} ${borderColor} shadow-2xl hover:${shadowColor}`}
    >
      {/* Linha Gradiente no Topo que aparece no Hover */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${colorTheme} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Luz difusa de fundo que acende no Hover */}
      <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${colorTheme} opacity-0 group-hover:opacity-10 blur-[90px] transition-opacity duration-700 rounded-full`} />

      <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/10 transition-colors relative z-10 ${iconColor}`}>
        {React.cloneElement(icon, { size: 32 })}
      </div>
      
      <h3 className="text-2xl font-black font-sora mb-4 text-white relative z-10 tracking-tight">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-8 font-inter relative z-10">{description}</p>
      
      <ul className="space-y-4 mb-10 flex-grow relative z-10">
        {list.map((item, i) => (
          <li key={i} className="text-sm text-white/70 flex items-start gap-3 font-inter">
            <Check className={`w-5 h-5 shrink-0 ${iconColor}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {highlight && (
        <div className={`mt-auto p-4 rounded-2xl bg-white/5 border border-white/5 text-xs font-bold uppercase tracking-widest text-center font-sora transition-colors group-hover:bg-white/10 ${iconColor}`}>
          {highlight}
        </div>
      )}
    </motion.div>
  );
}

// 🎨 COMPONENTE DO CARD PEQUENO REFORMULADO
function SmallFeature({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-3xl bg-[#11121c] border border-white/5 flex items-start gap-5 hover:border-white/10 hover:bg-white/[0.03] transition-colors group">
      <div className="p-3 rounded-xl bg-white/5 text-white/60 group-hover:text-growth-green group-hover:bg-growth-green/10 transition-colors shrink-0">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div>
        <h4 className="font-bold text-base mb-2 text-white font-sora">{title}</h4>
        <p className="text-sm text-white/40 leading-relaxed font-inter">{desc}</p>
      </div>
    </div>
  );
}