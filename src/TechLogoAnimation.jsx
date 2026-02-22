import React from 'react';
import { motion } from 'framer-motion';

export default function TechLogoAnimation() {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      
      {/* --- EFEITOS DE FUNDO (Mantivemos para dar profundidade) --- */}
      <div className="absolute w-72 h-72 bg-primary-brand/20 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute w-72 h-72 bg-tech-blue/10 blur-[80px] rounded-full translate-x-20 -translate-y-20 animate-pulse delay-700" />
      
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
        
        {/* --- ANÉIS GIRATÓRIOS (Mantivemos a tecnologia) --- */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0 }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute border-2 border-white/5 rounded-full"
            style={{
              width: `${100 - i * 15}%`,
              height: `${100 - i * 15}%`,
              borderStyle: i === 1 ? 'dashed' : 'solid',
              borderColor: i === 0 ? 'rgba(123, 77, 255, 0.2)' : i === 1 ? 'rgba(79, 140, 255, 0.2)' : 'rgba(255, 77, 166, 0.2)'
            }}
          />
        ))}

        {/* --- PONTOS FLUTUANTES (Detalhes extras) --- */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.75,
            }}
            className="absolute w-3 h-3 bg-primary-brand rounded-full shadow-[0_0_15px_rgba(123,77,255,0.8)]"
            style={{
              top: i === 0 || i === 3 ? '15%' : '85%',
              left: i === 0 || i === 1 ? '15%' : '85%',
            }}
          />
        ))}

        {/* --- O CENTRO: VÍDEO LUNI --- */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary-brand via-highlight-pink to-tech-blue p-[2px] shadow-[0_0_60px_rgba(123,77,255,0.5)] overflow-hidden"
        >
          {/* Container interno para mascarar o vídeo em círculo */}
          <div className="w-full h-full rounded-full bg-secondary-brand overflow-hidden flex items-center justify-center relative">
            
            {/* O VÍDEO AQUI */}
            <video
              src="/luni.mp4"
              autoPlay
              loop
              muted
              playsInline // Importante para funcionar no iPhone sem abrir tela cheia
              className="w-full h-full object-cover scale-110" // scale-110 remove qualquer borda preta indesejada
            />
            
            {/* Uma leve camada de brilho por cima do vídeo para integrar com o site */}
            <div className="absolute inset-0 bg-primary-brand/10 mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}