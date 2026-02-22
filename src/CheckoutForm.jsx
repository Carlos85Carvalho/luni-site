import React, { useState } from 'react';

export default function CheckoutForm({ planoSelecionado, fecharFormulario }) {
  const [loading, setLoading] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);
  
  // Estado para guardar todos os dados do formulário
  const [dados, setDados] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    consultor: '', // CAMPO: Consultor
    razaoSocial: '',
    nomeFantasia: '',
    cpfCnpj: '',
    endereco: '',
    cidadeEstado: '',
    ramo: '',
    qtdProfissionais: '',
    horarioAtendimento: '',
    diasFechados: [],
    nomeBot: '',
    tomBot: 'Simpática e acolhedora',
    usaEmojis: 'Sim',
    formaPagamento: 'PIX',
    parcelas: '1'
  });

  const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const handleCheckboxChange = (dia) => {
    setDados(prev => {
      const dias = prev.diasFechados.includes(dia)
        ? prev.diasFechados.filter(d => d !== dia) 
        : [...prev.diasFechados, dia]; 
      return { ...prev, diasFechados: dias };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // BLOQUEIO LEGAL: OBRIGATÓRIO ACEITAR OS TERMOS
    if (!termosAceitos) {
      return alert("⚠️ É obrigatório ler e aceitar os Termos e Condições de Uso para prosseguir.");
    }

    setLoading(true);

    try {
      // CAPTURA DE IP INVISÍVEL
      let ipUsuario = '0.0.0.0';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ipUsuario = ipData.ip;
      } catch (e) {
        console.log("Aviso: Não foi possível capturar o IP.");
      }

      // Seu Webhook de Produção do n8n
      const webhookURL = "https://n8n.souluni.cloud/webhook/luni/novo-contrato";

      const pacoteFinal = {
        ...dados,
        plano: planoSelecionado,
        consultor: dados.consultor || 'Venda Orgânica (Site)', // Registra se veio sem consultor
        // DADOS LEGAIS DO CONTRATO
        termos_aceitos: true,
        ip_aceite: ipUsuario,
        data_aceite: new Date().toISOString()
      };

      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pacoteFinal)
      });

      if (response.ok) {
        const respostaN8n = await response.json();
        
        if (respostaN8n.link_pagamento) {
          window.location.href = respostaN8n.link_pagamento;
        } else {
          alert("Cadastro realizado com sucesso! Verifique seu WhatsApp.");
          fecharFormulario();
        }
      } else {
        alert("Erro ao processar o servidor. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0B14] overflow-y-auto">
      <div className="min-h-screen py-12 px-4 md:px-8 flex justify-center">
        
        <div className="w-full max-w-4xl bg-[#11121c] border border-white/10 p-6 md:p-10 rounded-3xl relative shadow-2xl">
          
          <button 
            onClick={fecharFormulario}
            className="absolute top-6 right-6 text-white/40 hover:text-white flex items-center gap-2 transition-colors"
          >
            ✕ Cancelar
          </button>

          <div className="text-center mb-12 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-sora">Finalizar Contratação</h2>
            <p className="text-white/60 text-lg">
              Você está adquirindo o plano <span className="text-primary-brand font-bold uppercase">{planoSelecionado}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* SEÇÃO 1: DADOS DO RESPONSÁVEL */}
            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-primary-brand text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Dados do Responsável
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-text">Nome Completo</label>
                  <input required name="nome" type="text" className="input-field" placeholder="Ex: Maria Silva" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">WhatsApp (com DDD)</label>
                  <input required name="whatsapp" type="tel" className="input-field" placeholder="Ex: 22999999999" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">E-mail</label>
                  <input required name="email" type="email" className="input-field" placeholder="Ex: contato@email.com" onChange={handleChange} />
                </div>
                {/* CAMPO: CONSULTOR */}
                <div>
                  <label className="label-text flex justify-between">
                    <span>Código do Consultor</span>
                    <span className="text-white/30 text-[10px] normal-case">(Opcional)</span>
                  </label>
                  <input name="consultor" type="text" className="input-field placeholder:text-white/20" placeholder="Ex: Nome do Vendedor" onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* SEÇÃO 2: DADOS DA EMPRESA */}
            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-primary-brand text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                Dados da Empresa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-text">Razão Social</label>
                  <input required name="razaoSocial" type="text" className="input-field" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">Nome Fantasia</label>
                  <input required name="nomeFantasia" type="text" className="input-field" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">CPF ou CNPJ</label>
                  <input required name="cpfCnpj" type="text" className="input-field" placeholder="Apenas números" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">Ramo de Atuação</label>
                  <input required name="ramo" type="text" className="input-field" placeholder="Ex: Salão de Beleza" onChange={handleChange} />
                </div>
                <div className="md:col-span-2">
                  <label className="label-text">Endereço Completo</label>
                  <input required name="endereco" type="text" className="input-field" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">Cidade e Estado</label>
                  <input required name="cidadeEstado" type="text" className="input-field" placeholder="Ex: Rio de Janeiro - RJ" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">Qtd. Profissionais</label>
                  <input required name="qtdProfissionais" type="number" className="input-field" onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* SEÇÃO 3: FUNCIONAMENTO */}
            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-primary-brand text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                Funcionamento
              </h3>
              <div>
                <label className="label-text">Horário de Atendimento</label>
                <input required name="horarioAtendimento" type="text" className="input-field" placeholder="Ex: Seg a Sex 09h às 19h" onChange={handleChange} />
              </div>
              <div>
                <label className="label-text mb-3 block">Dias que o salão <span className="text-red-400">NÃO</span> abre:</label>
                <div className="flex flex-wrap gap-3">
                  {diasSemana.map(dia => (
                    <label key={dia} className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer border transition-all select-none
                      ${dados.diasFechados.includes(dia) 
                        ? 'bg-red-500/20 border-red-500 text-white' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}
                    `}>
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={dados.diasFechados.includes(dia)}
                        onChange={() => handleCheckboxChange(dia)}
                      />
                      <span className="text-sm font-medium">{dia}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* SEÇÃO 4: PERSONALIZAÇÃO DA IA */}
            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-primary-brand text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span>
                Sua Recepcionista Virtual
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-text">Nome da Recepcionista</label>
                  <input required name="nomeBot" type="text" className="input-field" placeholder="Ex: Luni, Ana, Julia" onChange={handleChange} />
                </div>
                <div>
                  <label className="label-text">Tom de Voz</label>
                  <select name="tomBot" className="input-field cursor-pointer" onChange={handleChange}>
                    <option>Simpática e acolhedora</option>
                    <option>Profissional e sério</option>
                    <option>Informal e próxima</option>
                  </select>
                </div>
                <div>
                  <label className="label-text">Usar Emojis?</label>
                  <select name="usaEmojis" className="input-field cursor-pointer" onChange={handleChange}>
                    <option value="Sim">Sim 😍</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SEÇÃO 5: PAGAMENTO E CONTRATO */}
            <div className="bg-gradient-to-br from-primary-brand/5 to-transparent p-6 md:p-8 rounded-2xl border border-primary-brand/20">
              <h3 className="text-xl text-white font-bold mb-6 flex items-center gap-2">
                <span className="bg-primary-brand text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">5</span>
                Pagamento do Setup
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="label-text">Forma de Pagamento</label>
                  <select 
                    name="formaPagamento" 
                    className="input-field cursor-pointer" 
                    onChange={handleChange}
                    value={dados.formaPagamento}
                  >
                    <option value="PIX">Pix (Liberação Imediata)</option>
                    <option value="CREDIT_CARD">Cartão de Crédito</option>
                    <option value="BOLETO">Boleto Bancário</option>
                  </select>
                </div>

                {dados.formaPagamento === 'CREDIT_CARD' && (
                  <div>
                    <label className="label-text">Parcelamento</label>
                    <select name="parcelas" className="input-field cursor-pointer" onChange={handleChange}>
                      <option value="1">À vista</option>
                      <option value="2">2x</option>
                      <option value="3">3x</option>
                      <option value="4">4x</option>
                      <option value="5">5x</option>
                      <option value="6">6x</option>
                      <option value="7">7x</option>
                      <option value="8">8x</option>
                      <option value="9">9x</option>
                      <option value="10">10x</option>
                    </select>
                  </div>
                )}
              </div>

              {/* CAIXA DE TERMOS DE ACEITE (LINK EXTERNO) */}
              <div className="mb-6">
                <label className={`flex items-start gap-4 p-5 rounded-xl cursor-pointer border transition-all ${termosAceitos ? 'bg-primary-brand/10 border-primary-brand/30' : 'bg-black/20 border-white/10 hover:bg-white/5'}`}>
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border-2 border-gray-500 rounded bg-[#18181b] checked:bg-primary-brand checked:border-primary-brand transition-all cursor-pointer"
                      checked={termosAceitos}
                      onChange={(e) => setTermosAceitos(e.target.checked)}
                    />
                    <svg className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 leading-relaxed">
                    Li e concordo com os{' '}
                    <a 
                      href="/termos" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary-brand font-bold hover:underline"
                      onClick={(e) => e.stopPropagation()} 
                    >
                      Termos e Condições de Uso
                    </a>
                    {' '}da Luni IA, declarando ter plenos poderes legais para representar a empresa contratante.
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary-brand hover:bg-primary-brand/90 text-black font-extrabold py-5 text-lg rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-primary-brand/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
              >
                {loading ? 'Processando Contrato...' : 'Gerar Pagamento e Acessar 🚀'}
              </button>

            </div>

          </form>
        </div>
      </div>

      {/* CSS Embutido */}
      <style>{`
        .label-text { display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.5); margin-bottom: 0.35rem; font-weight: 700; }
        .input-field { width: 100%; background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.5rem; padding: 0.875rem; color: white; outline: none; transition: all 0.2s; font-size: 1rem; }
        .input-field:focus { border-color: #00E599; background-color: rgba(0, 229, 153, 0.05); }
        .input-field option { background-color: #0A0B14; color: white; padding: 10px; }
        .text-primary-brand { color: #00E599; }
        .bg-primary-brand { background-color: #00E599; }
        .border-primary-brand { border-color: #00E599; }
      `}</style>
    </div>
  );
}