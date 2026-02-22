import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Users, LayoutDashboard, MessageSquare, Star, Zap } from 'lucide-react';

export default function DifferenceSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary-brand font-bold text-xs tracking-[0.3em] uppercase">Diferenciais</span>
        <h2 className="text-3xl md:text-5xl font-bold font-sora text-white">Não é apenas um sistema. É uma estrutura.</h2>
        <p className="text-white/60 max-w-2xl mx-auto">A Luni organiza, automatiza e direciona o seu negócio com inteligência baseada em dados.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Atendimento IA */}
        <FeatureCard 
          icon={<Bot className="text-primary-brand" />}
          title="Atendimento com IA"
          description="Automação inteligente de mensagens e agendamentos no WhatsApp 24/7."
          list={["Resposta em 3 segundos", "Entende áudios e gírias", "Agenda automaticamente", "Confirma horários"]}
        />

        {/* CRM Administrativo */}
        <FeatureCard 
          icon={<LayoutDashboard className="text-tech-blue" />}
          title="CRM Administrativo"
          description="Visão 360° do seu negócio em tempo real. Controle total da sua empresa."
          list={["Gestão financeira completa", "Relatórios estratégicos", "Indicadores de desempenho", "Análise de faturamento"]}
          highlight="O gestor controla a sua empresa inteira."
        />

        {/* CRM Profissional */}
        <FeatureCard 
          icon={<Users className="text-pink-500" />} // Ajustei a cor aqui para rosa
          title="CRM do Profissional"
          description="Login individual separado. Cada profissional tem seu próprio ambiente."
          list={["Agenda pessoal exclusiva", "Gestão dos próprios clientes", "Relatórios individuais", "Controle de performance"]}
          highlight="O profissional gerencia sua própria operação."
        />
      </div>

      {/* Secondary Features Grid (A parte nova que faltava!) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <SmallFeature 
          icon={<MessageSquare className="w-5 h-5" />}
          title="Lembretes Inteligentes"
          desc="Sistema anti-furo que reduz faltas em até 90%."
        />
        <SmallFeature 
          icon={<Star className="w-5 h-5" />}
          title="Marketing Automático"
          desc="Pedido de avaliação 5 estrelas e reativação de clientes."
        />
        <SmallFeature 
          icon={<Zap className="w-5 h-5" />}
          title="Setup Assistido"
          desc="Configuramos tudo para você não perder tempo."
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, list, highlight }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-[#0F1020]/50 border border-white/5 p-8 rounded-[32px] flex flex-col h-full relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary-brand/30 transition-colors">
        {/* CloneElement é usado para injetar o tamanho no ícone */}
        {React.cloneElement(icon, { size: 28 })}
      </div>
      
      <h3 className="text-xl font-bold font-sora mb-3 text-white">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {list.map((item, i) => (
          <li key={i} className="text-xs text-white/70 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-primary-brand" />
            {item}
          </li>
        ))}
      </ul>

      {highlight && (
        <div className="mt-auto p-4 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest text-center">
          {highlight}
        </div>
      )}
    </motion.div>
  );
}

function SmallFeature({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors">
      <div className="p-2 rounded-lg bg-white/5 text-primary-brand">{icon}</div>
      <div>
        <h4 className="font-bold text-sm mb-1 text-white">{title}</h4>
        <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}