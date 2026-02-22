import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import TechLogoAnimation from './TechLogoAnimation';

export default function Hero() {
  
  const openWhatsApp = () => {
    const phoneNumber = "5521976675302"; 
    const message = encodeURIComponent("Olá! Gostaria de testar a plataforma Luni.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Esquerdo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto lg:mx-0">
            <span className="text-primary-brand">✨</span>
            <span className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest font-sora">
              Implantação assistida + Consultoria
            </span>
          </div>

          {/* HEADLINE ATUALIZADA */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sora leading-[1.1] text-white">
            Infraestrutura inteligente para <span className="text-gradient">sua empresa</span> crescer.
          </h1>

          {/* Subtexto Ajustado */}
          <p className="text-lg md:text-xl text-white/50 font-inter max-w-xl leading-relaxed mx-auto lg:mx-0">
            A Luni integra atendimento com IA, CRM completo e consultoria estratégica mensal para transformar seus dados em resultados reais.
          </p>

          <div className="flex justify-center lg:justify-start pt-4">
            <button 
              onClick={openWhatsApp}
              className="px-8 py-4 rounded-2xl bg-primary-brand text-white font-bold font-sora flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-primary-brand/20 group hover:bg-[#6A42DC]"
            >
              <Rocket size={20} className="group-hover:rotate-12 transition-transform" />
              TESTE AGORA
            </button>
          </div>
        </motion.div>

        {/* Lado Direito */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center order-1 lg:order-2 py-10 lg:py-0"
        >
          <div className="absolute w-[300px] h-[300px] bg-primary-brand/20 blur-[100px] rounded-full animate-pulse" />
          <TechLogoAnimation /> 
        </motion.div>
      </div>
    </section>
  );
}