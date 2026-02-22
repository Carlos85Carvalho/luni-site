import React from 'react';
import { motion } from 'framer-motion';

export default function InfrastructureStats() {
  const stats = [
    { value: "24h", label: "IA ativa continuamente", desc: "Atendimento automatizado sem interrupções." },
    { value: "7/7", label: "Operação contínua", desc: "Funcionamento ativo todos os dias da semana." },
    { value: "1", label: "Gestão centralizada", desc: "Controle completo de sua empresa em um único ambiente administrativo." },
    { value: "2", label: "Ambientes independentes", desc: "CRM Administrativo + CRM do Profissional com acessos separados." }
  ];

  return (
    <section className="py-24 bg-[#0F1020] relative border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Título Institucional */}
        <div className="mb-16">
          <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] font-sora">
            Tecnologia que sustenta sua operação todos os dias
          </h2>
        </div>

        {/* Grid de Infraestrutura (4 colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 items-start">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 border-l border-white/5 last:border-r md:h-64 flex flex-col justify-start transition-all"
            >
              {/* Número Dominante com Glow no Hover */}
              <div className="relative mb-6">
                <span className="text-5xl md:text-6xl font-bold font-sora text-white transition-all duration-500 group-hover:text-primary-brand group-hover:drop-shadow-[0_0_25px_rgba(123,77,255,0.4)]">
                  {item.value}
                </span>
              </div>

              {/* Textos Estruturados */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white/90 font-sora tracking-tight uppercase">
                  {item.label}
                </h3>
                <p className="text-xs text-white/30 font-inter leading-relaxed max-w-[180px]">
                  {item.desc}
                </p>
              </div>

              {/* Linha de Progresso Sutil */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary-brand transition-all duration-700 group-hover:w-full opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}