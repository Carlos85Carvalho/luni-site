import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button'; 
import CheckoutForm from './CheckoutForm'; // <--- IMPORTANTE: Importamos o formulário aqui

const plans = [
  {
    name: "Starter",
    price: "R$ 299",
    setup: "Setup único: R$ 900",
    features: [
      "Atendimento com IA",
      "1 Agenda Profissional",
      "CRM Administrativo",
      "CRM do Profissional",
      "Relatórios básicos",
      "Consultoria estratégica mensal",
      "Implantação assistida"
    ],
    highlight: false
  },
  {
    name: "Business",
    price: "R$ 597",
    setup: "Setup único: R$ 1.200",
    isPopular: true,
    features: [
      "Atendimento com IA",
      "Até 4 Agendas",
      "CRM Administrativo",
      "CRM do Profissional",
      "Relatórios avançados",
      "Lembretes automáticos",
      "Marketing de aniversário",
      "Consultoria estratégica mensal",
      "Implantação assistida"
    ],
    highlight: true
  },
  {
    name: "Elite",
    price: "R$ 899",
    setup: "Setup único: R$ 1.499",
    features: [
      "Atendimento com IA",
      "Até 9 Agendas",
      "CRM Administrativo",
      "CRM do Profissional",
      "Suporte prioritário",
      "Gestão de equipe avançada",
      "API para integrações",
      "Consultoria estratégica mensal",
      "Implantação assistida"
    ],
    highlight: false
  }
];

export default function PricingSection() {
  // ESTADO: Controla qual plano foi clicado. Se for null, o formulário está fechado.
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section id="planos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      
      {/* LÓGICA DO MODAL:
          Se houver um plano selecionado (selectedPlan não é null),
          mostra o componente CheckoutForm por cima de tudo.
      */}
      {selectedPlan && (
        <CheckoutForm 
          planoSelecionado={selectedPlan} 
          fecharFormulario={() => setSelectedPlan(null)} 
        />
      )}

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sora mb-6 text-white">
          Escolha a estrutura ideal para o seu crescimento.
        </h2>
        <p className="text-white/60">
          Todos os planos incluem consultoria estratégica mensal e implantação assistida.
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
            {/* Tag de Mais Vendido */}
            {plan.isPopular && (
              <span className="absolute -top-4 right-10 bg-gradient-to-r from-primary-brand to-tech-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-primary-brand/20">
                Mais Vendido
              </span>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold font-sora text-white/60 uppercase tracking-widest mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold font-sora text-transparent bg-clip-text bg-gradient-to-r from-primary-brand to-tech-blue">
                  {plan.price}
                </span>
                <span className="text-white/40">/mês</span>
              </div>
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

            <div className="mb-6 p-4 rounded-2xl bg-white/5 text-center text-xs font-bold text-growth-green uppercase border border-growth-green/20">
              {plan.setup}
            </div>

            {/* BOTÃO ATUALIZADO: Agora abre o formulário em vez do WhatsApp */}
            <Button 
              variant={plan.highlight ? 'primary' : 'secondary'} 
              className="w-full py-5 text-lg font-bold"
              onClick={() => setSelectedPlan(plan.name)}
            >
              ADQUIRIR AGORA
            </Button>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-12 text-center text-white/40 text-sm">
        *Todos os planos incluem acompanhamento estratégico e implementação assistida.
      </p>
    </section>
  );
}