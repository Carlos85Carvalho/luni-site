import React from 'react';

export default function Footer() {
  const socialLinks = [
    { 
      name: "WhatsApp", 
      icon: "/whatsapp-33.png", 
      // Link direto e limpo para o WhatsApp
      url: "https://wa.me/5521976675302?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Luni.", 
      size: "w-8"
    },
    { 
      name: "Instagram", 
      icon: "/instagram-40.png", 
      // LIMPEZA: Tirei o código "?igsh=..." que pode expirar. 
      // Agora é o link puro do perfil.
      url: "https://www.instagram.com/luni.atendimento/", 
      size: "w-8"
    },
    { 
      name: "LinkedIn", 
      icon: "/icons8-linkedin-48.png", 
      url: "#", 
      size: "w-8"
    },
    { 
      name: "Email", 
      icon: "/icons8-gmail-logo-48.png", 
      // Mantive o link que força o Gmail como você pediu.
      // Lembra: Ele abre o Gmail DO CLIENTE para enviar msg PARA VOCÊ.
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=lunisystem@gmail.com", 
      size: "w-8"
    }
  ];

  return (
    <footer id="contato" className="bg-[#0A0B14] pt-24 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* LOGO */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-brand to-tech-blue rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative h-24 w-[220px] md:h-32 md:w-[300px] bg-black rounded-[2rem] border border-white/10 ring-1 ring-white/5 overflow-hidden flex items-center justify-center">
              <img 
                src="/logo.luni.fundo.png" 
                alt="Luni Logo Central" 
                className="h-full w-auto object-center object-contain scale-150 group-hover:scale-125 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16 text-center md:text-left">
          
          {/* TEXTO ATUALIZADO */}
          <div className="space-y-6 max-w-md mx-auto md:mx-0">
            <div className="space-y-4">
              <p className="text-white/60 text-sm font-inter leading-relaxed">
                Infraestrutura inteligente para <span className="text-white font-bold">empresas</span> que querem crescer com base em dados reais e tecnologia de ponta.
              </p>
              
              <div className="pt-2 space-y-1 border-t border-white/5 mt-4 inline-block px-4 py-2 bg-white/[0.02] rounded-lg">
                <p className="text-primary-brand/80 text-[10px] font-bold uppercase tracking-widest mb-1">Responsável Legal</p>
                <p className="text-white/70 font-bold text-xs font-sora">GC Sistemas</p>
                <p className="text-white/50 text-xs font-inter font-medium">CNPJ: 30.285.186/0001-33</p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="flex flex-col gap-6 items-center md:items-end">
            <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
              Conecte-se
            </span>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-brand/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  title={social.name}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className={`${social.size} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all filter grayscale group-hover:grayscale-0`} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-sora">
            © 2026 LUNI — Infraestrutura Inteligente.
          </p>
        </div>

      </div>
    </footer>
  );
}