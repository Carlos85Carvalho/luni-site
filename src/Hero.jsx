import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 🟢 Importamos a navegação
import TechLogoAnimation from './TechLogoAnimation';

export default function Hero() {
  
  const navigate = useNavigate(); // 🟢 Iniciamos o navegador

  // Função para ir para a página do teste grátis
  const goToTrialPage = () => {
    window.scrollTo(0, 0); // Garante que a nova página abra no topo
    navigate('/teste-gratis');
  };

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Esquerdo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sora leading-[1.1] text-white">
            Infraestrutura inteligente para <span className="text-gradient">sua empresa</span> crescer.
          </h1>

          <p className="text-lg md:text-xl text-white/50 font-inter max-w-xl leading-relaxed mx-auto lg:mx-0">
            A Luni integra atendimento com IA, CRM completo e consultoria estratégica mensal para transformar seus dados em resultados reais.
          </p>

          <div className="flex flex-col items-center lg:items-start pt-4 w-full">
            <button 
              onClick={goToTrialPage} // 🟢 Chama a função de mudar de página
              className="px-8 py-4 rounded-2xl bg-primary-brand text-white font-bold font-sora flex items-center justify-center lg:justify-start gap-3 hover:scale-105 transition-all shadow-lg shadow-primary-brand/20 group hover:bg-[#6A42DC] w-full md:w-auto"
            >
              <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              TENHA A LUNI POR 7 DIAS GRÁTIS
            </button>
            
            <p className="mt-4 text-xs md:text-sm text-white/50 font-medium text-center lg:text-left">
              Descubra um mundo de possibilidades na palma da sua mão.
            </p>
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