import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Button from './Button'; 
import CheckoutForm from './CheckoutForm';

const plans = [
  {
    name: "Studio",
    price: "R$ 349,90",
    description: "Até 3 agendas",
    setupInfo: "Taxa de implantação igual a 1 mensalidade",
    features: [
      "Atendimento com IA",
      "CRM Administrativo",
      "CRM do Profissional",
      "Relatórios financeiros",
      "Lembretes automáticos",
      "Consultoria estratégica mensal",
      "Implantação assistida"
    ],
    highlight: false
  },
  {
    name: "Salão PRO",
    price: "R$ 597,90",
    description: "4 a 9 agendas",
    setupInfo: "Taxa de implantação igual a 1 mensalidade",
    isPopular: true,
    features: [
      "Atendimento com IA",
      "CRM Administrativo",
      "CRM do Profissional",
      "Relatórios financeiros",
      "Lembretes automáticos",
      "Consultoria estratégica mensal",
      "Implantação assistida"
    ],
    highlight: true
  },
  {
    name: "Alta Performance",
    price: "R$ 799,99",
    description: "10 a 15 agendas",
    setupInfo: "Taxa de implantação igual a 1 mensalidade",
    features: [
      "Atendimento com IA",
      "CRM Administrativo",
      "CRM do Profissional",
      "Relatórios financeiros",
      "Lembretes automáticos",
      "Consultoria estratégica mensal",
      "Implantação assistida"
    ],
    highlight: false
  }
];

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section id="planos" className="pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      
      {selectedPlan && (
        <CheckoutForm 
          planoSelecionado={selectedPlan} 
          fecharFormulario={() => setSelectedPlan(null)} 
        />
      )}

      {/* 🚀 AQUI ESTÁ O NOVO TÍTULO COM ALTO IMPACTO B2B */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black font-sora mb-6 text-white tracking-tight leading-[1.1]">
          O mesmo poder em todos os planos.<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-brand to-tech-blue">
            Invista conforme você cresce.
          </span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-inter">
          Nós não bloqueamos recursos. Você leva a <strong className="text-white">Inteligência Artificial e a Gestão completa</strong> desde o primeiro dia. O que muda é apenas a quantidade de cadeiras (agendas) da sua operação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-10 rounded-[40px] border flex flex-col relative ${
              plan.highlight 
              ? 'bg-primary-brand/5 border-primary-brand/30 ring-1 ring-primary-brand/20' 
              : 'bg-secondary-bg border-white/5'
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-4 right-10 bg-gradient-to-r from-primary-brand to-tech-blue px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-primary-brand/20 flex items-center gap-1.5">
                <Sparkles size={12} />
                Mais Escolhido
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold font-sora text-white/60 uppercase tracking-widest mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold font-sora text-transparent bg-clip-text bg-gradient-to-r from-primary-brand to-tech-blue">
                  {plan.price}
                </span>
                <span className="text-white/40 font-medium">/mês</span>
              </div>
              <div className="inline-block px-4 py-1.5 rounded-xl bg-white/5 text-white/80 text-sm font-medium border border-white/5">
                {plan.description}
              </div>
            </div>

            <div className="mb-8 p-4 rounded-2xl bg-growth-green/10 text-center border border-growth-green/20">
              <p className="text-xs font-bold text-growth-green uppercase tracking-wider mb-1">
                + Implantação Assistida
              </p>
              <p className="text-[11px] text-white/60">
                {plan.setupInfo}
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <Check className="w-5 h-5 text-growth-green shrink-0 mt-0.5" />
                  <span className={feature.includes("Consultoria") || feature.includes("Implantação") ? "font-bold text-white" : ""}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.highlight ? 'primary' : 'secondary'} 
              className={`w-full py-5 text-base font-bold tracking-wide ${plan.highlight ? 'shadow-[0_0_30px_rgba(91,46,255,0.3)]' : ''}`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              ADQUIRIR O {plan.name.toUpperCase()}
            </Button>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-16 text-center text-white/40 text-sm">
        Precisa de um plano personalizado para mais de 15 profissionais? <br className="md:hidden" />
        <a href="https://wa.me/5522981242946" target="_blank" rel="noopener noreferrer" className="text-primary-brand hover:underline font-bold ml-1">
          Fale com um consultor no WhatsApp.
        </a>
      </p>
    </section>
  );
}