import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- NOVA FUNÇÃO PARA O WHATSAPP (TESTAR A IA) ---
  const openWhatsApp = () => {
    const phoneNumber = "5521976675302"; // Seu número
    const message = encodeURIComponent("Olá! Estou no site da Luni e quero testar como a Inteligência Artificial funciona na prática! 🤖");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: "Infraestrutura", id: "infra" },
    { name: "Diferenciais", id: "diferenciais" },
    { name: "Estratégia", id: "consultoria" },
    { name: "Planos", id: "planos" },
    { name: "Contato", id: "contato" },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 bg-background/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center w-10">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-1 hover:text-primary-brand transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-xs lg:text-sm uppercase tracking-[0.2em] font-bold text-white/60 hover:text-primary-brand transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end w-auto md:w-auto">
            <button 
              onClick={openWhatsApp} 
              className="bg-primary-brand hover:bg-[#6A42DC] px-5 py-2 md:px-8 md:py-3 rounded-full text-white text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all shadow-lg shadow-primary-brand/20 active:scale-95"
            >
              TESTE AGORA
            </button>
          </div>

        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-[#0F1020] pt-24 px-6 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-8 text-center items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={`#${link.id}`} 
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-xl font-sora font-bold text-white/80 hover:text-primary-brand transition-colors w-full py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-[1px] bg-white/10 my-4" />
              <p className="text-white/40 text-xs uppercase tracking-widest">Luni Infraestrutura</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}