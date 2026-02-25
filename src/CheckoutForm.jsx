import React, { useState } from 'react';

export default function CheckoutForm({ planoSelecionado, fecharFormulario }) {
  const [loading, setLoading] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [erros, setErros] = useState({});
  const [qrCodeBase64, setQrCodeBase64] = useState(null); // NOVO: Guarda a imagem do QR Code
  
  const [dados, setDados] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    consultor: '',
    razaoSocial: '',
    nomeFantasia: '',
    cpfCnpj: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
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
    if (name === 'cpfCnpj' && erros.cpfCnpj) setErros({ ...erros, cpfCnpj: false });
  };

  const validarDocumento = () => {
    const numeros = dados.cpfCnpj.replace(/\D/g, '');
    if (numeros.length !== 11 && numeros.length !== 14 && numeros.length > 0) {
      setErros({ ...erros, cpfCnpj: true });
    } else {
      setErros({ ...erros, cpfCnpj: false });
    }
  };

  const handleCepBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length !== 8) return;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setDados(prev => ({
          ...prev, logradouro: data.logradouro, bairro: data.bairro, cidade: data.localidade, estado: data.uf
        }));
        document.getElementsByName('numero')[0]?.focus();
      }
    } catch (err) {
      console.error("Erro ao buscar CEP:", err);
    }
  };

  const handleCheckboxChange = (dia) => {
    setDados(prev => {
      const dias = prev.diasFechados.includes(dia)
        ? prev.diasFechados.filter(d => d !== dia) 
        : [...prev.diasFechados, dia]; 
      return { ...prev, diasFechados: dias };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!termosAceitos) return alert("⚠️ É obrigatório ler e aceitar os Termos e Condições de Uso.");
    
    const numerosDoc = dados.cpfCnpj.replace(/\D/g, '');
    if (numerosDoc.length !== 11 && numerosDoc.length !== 14) {
      setErros({ ...erros, cpfCnpj: true });
      return alert("⚠️ Por favor, verifique o número do CPF ou CNPJ.");
    }

    setLoading(true);

    try {
      let ipUsuario = '0.0.0.0';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ipUsuario = ipData.ip;
      } catch (ipError) {}

      const webhookURL = "https://n8n.souluni.cloud/webhook/luni/novo-contrato";

      const pacoteFinal = {
        ...dados,
        plano: planoSelecionado,
        consultor: dados.consultor || 'Venda Orgânica (Site)',
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
        
        // 🚨 A MÁGICA ACONTECE AQUI:
        // Se o n8n devolver o base64, nós mostramos o QR Code na tela!
        if (respostaN8n.base64) {
          setQrCodeBase64(respostaN8n.base64);
        } 
        else if (respostaN8n.invoiceUrl) {
          window.location.href = respostaN8n.invoiceUrl;
        } else {
          alert("Cadastro realizado! Verifique seu WhatsApp.");
          fecharFormulario();
        }
      } else {
        alert("Erro no servidor. Tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  };

  // 🎨 TELA DE SUCESSO E QR CODE
  if (qrCodeBase64) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0A0B14] flex justify-center items-center p-4">
        <div className="bg-[#11121c] p-8 rounded-3xl max-w-md w-full text-center border border-[#00E599]/30 shadow-[0_0_50px_rgba(0,229,153,0.1)]">
          <h2 className="text-3xl font-bold text-white mb-2 font-sora">Tudo Pronto! 🎉</h2>
          <p className="text-white/70 mb-6 text-sm">Seu sistema foi criado. Para a Luni começar a trabalhar, aponte o WhatsApp do seu salão para o QR Code abaixo:</p>
          
          <div className="bg-white p-4 rounded-2xl inline-block mb-6">
             <img src={qrCodeBase64} alt="QR Code WhatsApp" className="w-56 h-56 object-contain" />
          </div>

          <div className="bg-[#00E599]/10 border border-[#00E599]/20 p-4 rounded-xl mb-6">
            <p className="text-xs text-[#00E599] font-bold">⚠️ FATURA DE ATIVAÇÃO ENVIADA</p>
            <p className="text-[11px] text-gray-400 mt-1">Verifique seu e-mail e WhatsApp para realizar o pagamento e liberar seu acesso ao painel.</p>
          </div>

          <button onClick={fecharFormulario} className="w-full bg-[#00E599] hover:bg-[#00E599]/90 text-black font-extrabold py-4 rounded-xl transition-all uppercase tracking-wider">
            Concluir e Fechar
          </button>
        </div>
      </div>
    );
  }

  // TELA DO FORMULÁRIO NORMAL (Pode manter o resto igual estava)
  return (
    <div className="fixed inset-0 z-50 bg-[#0A0B14] overflow-y-auto">
      <div className="min-h-screen py-12 px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-4xl bg-[#11121c] border border-white/10 p-6 md:p-10 rounded-3xl relative shadow-2xl">
          
          <button onClick={fecharFormulario} className="absolute top-6 right-6 text-white/40 hover:text-white flex items-center gap-2 transition-colors">✕ Cancelar</button>

          <div className="text-center mb-12 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-sora">Finalizar Contratação</h2>
            <p className="text-white/60 text-lg">Plano <span className="text-[#00E599] font-bold uppercase">{planoSelecionado}</span></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-[#00E599] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Dados do Responsável
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="label-text">Nome Completo</label><input required name="nome" type="text" className="input-field" onChange={handleChange} /></div>
                <div>
                  <label className="label-text">WhatsApp (Recepcionista / Robô)</label>
                  <input required name="whatsapp" type="tel" className="input-field" placeholder="Ex: (11) 90000-0000" onChange={handleChange} />
                  <p className="text-[10px] text-white/40 mt-1 ml-1">*O número que a Luni irá usar para atender seus clientes.</p>
                </div>
                <div><label className="label-text">E-mail</label><input required name="email" type="email" className="input-field" onChange={handleChange} /></div>
                <div><label className="label-text">Consultor (Opcional)</label><input name="consultor" type="text" className="input-field" onChange={handleChange} /></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-[#00E599] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                Dados da Empresa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                <div className="md:col-span-3"><label className="label-text">Razão Social</label><input required name="razaoSocial" type="text" className="input-field" onChange={handleChange} /></div>
                <div className="md:col-span-3"><label className="label-text">Nome Fantasia</label><input required name="nomeFantasia" type="text" className="input-field" onChange={handleChange} /></div>
                
                <div className="md:col-span-2 relative">
                  <label className="label-text flex justify-between">
                    CPF ou CNPJ {erros.cpfCnpj && <span className="text-red-500 text-[10px] font-bold">Inválido!</span>}
                  </label>
                  <input required name="cpfCnpj" type="text" className={`input-field pr-10 ${erros.cpfCnpj ? 'border-red-500 bg-red-500/5' : ''}`} onChange={handleChange} onBlur={validarDocumento} placeholder="Apenas números"/>
                  {erros.cpfCnpj && <div className="absolute right-3 top-[34px] text-red-500 font-bold select-none">❌</div>}
                </div>

                <div className="md:col-span-2"><label className="label-text">Ramo</label><input required name="ramo" type="text" className="input-field" onChange={handleChange} /></div>
                <div className="md:col-span-2"><label className="label-text">Qtd. Profissionais</label><input required name="qtdProfissionais" type="number" className="input-field" onChange={handleChange} /></div>
                <div className="md:col-span-2"><label className="label-text">CEP</label><input required name="cep" type="text" className="input-field" placeholder="00000-000" onBlur={handleCepBlur} onChange={handleChange} /></div>
                <div className="md:col-span-3"><label className="label-text">Endereço / Logradouro</label><input required name="logradouro" value={dados.logradouro} type="text" className="input-field" onChange={handleChange} /></div>
                <div className="md:col-span-1"><label className="label-text">Nº</label><input required name="numero" type="text" className="input-field" onChange={handleChange} /></div>
                <div className="md:col-span-2"><label className="label-text">Bairro</label><input required name="bairro" value={dados.bairro} type="text" className="input-field" onChange={handleChange} /></div>
                <div className="md:col-span-3"><label className="label-text">Cidade</label><input required name="cidade" value={dados.cidade} type="text" className="input-field" onChange={handleChange} /></div>
                <div className="md:col-span-1"><label className="label-text">UF</label><input required name="estado" value={dados.estado} type="text" className="input-field" onChange={handleChange} /></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-[#00E599] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                Funcionamento
              </h3>
              <div className="space-y-6">
                <div><label className="label-text">Horário de Atendimento</label><input required name="horarioAtendimento" type="text" className="input-field" placeholder="Ex: Seg a Sex 09h às 19h" onChange={handleChange} /></div>
                <div>
                  <label className="label-text mb-3 block">Dias que o salão <span className="text-red-400">NÃO</span> abre:</label>
                  <div className="flex flex-wrap gap-3">
                    {diasSemana.map(dia => (
                      <label key={dia} className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer border transition-all select-none ${dados.diasFechados.includes(dia) ? 'bg-red-500/20 border-red-500 text-white' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}`}>
                        <input type="checkbox" className="hidden" checked={dados.diasFechados.includes(dia)} onChange={() => handleCheckboxChange(dia)} />
                        <span className="text-sm font-medium">{dia}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold border-b border-white/10 pb-4 flex items-center gap-2">
                <span className="bg-[#00E599] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span>
                Sua Recepcionista Virtual
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="label-text">Nome da Recepcionista</label><input required name="nomeBot" type="text" className="input-field" placeholder="Ex: Luni" onChange={handleChange} /></div>
                <div>
                  <label className="label-text">Tom de Voz</label>
                  <select name="tomBot" className="input-field" onChange={handleChange}>
                    <option>Simpática e acolhedora</option>
                    <option>Profissional e sério</option>
                    <option>Informal e próxima</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00E599]/5 to-transparent p-6 md:p-8 rounded-2xl border border-[#00E599]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="label-text">Forma de Pagamento</label>
                  <select name="formaPagamento" className="input-field" onChange={handleChange} value={dados.formaPagamento}>
                    <option value="PIX">Pix (Liberação Imediata)</option>
                    <option value="CREDIT_CARD">Cartão de Crédito</option>
                    <option value="BOLETO">Boleto Bancário</option>
                  </select>
                </div>
                {dados.formaPagamento === 'CREDIT_CARD' && (
                  <div>
                    <label className="label-text">Parcelamento</label>
                    <select name="parcelas" className="input-field" onChange={handleChange}>
                      {[...Array(10)].map((_, i) => <option key={i+1} value={i+1}>{i+1}x</option>)}
                    </select>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label className={`flex items-start gap-4 p-5 rounded-xl cursor-pointer border transition-all ${termosAceitos ? 'bg-[#00E599]/10 border-[#00E599]/30' : 'bg-black/20 border-white/10'}`}>
                  <input type="checkbox" className="mt-1" checked={termosAceitos} onChange={(e) => setTermosAceitos(e.target.checked)} />
                  <span className="text-sm text-gray-400">Li e concordo com os <a href="#/termos" target="_blank" className="text-[#00E599] font-bold underline">Termos e Condições de Uso</a> da Luni IA.</span>
                </label>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-[#00E599] hover:bg-[#00E599]/90 text-black font-extrabold py-5 text-lg rounded-xl transition-all uppercase tracking-wider">
                {loading ? 'Processando Contrato...' : 'Gerar Pagamento e Acessar 🚀'}
              </button>
            </div>

          </form>
        </div>
      </div>
      <style>{`
        .label-text { display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.5); margin-bottom: 0.35rem; font-weight: 700; }
        .input-field { width: 100%; background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.5rem; padding: 0.875rem; color: white; outline: none; transition: all 0.2s; font-size: 1rem; }
        .input-field:focus { border-color: #00E599; background-color: rgba(0, 229, 153, 0.05); }
        select.input-field option { background-color: #11121c; color: #ffffff; padding: 10px; }
      `}</style>
    </div>
  );
}