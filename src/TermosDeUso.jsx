import React from 'react';

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-[#0A0B14] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-[#11121c] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        
        {/* CABEÇALHO DO DOCUMENTO */}
        <div className="border-b border-white/10 pb-8 mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white mb-2">Termos e Condições de Uso</h1>
          <p className="text-[#00E599] font-semibold text-lg mb-4 text-primary-brand">LUNI - Plataforma de Automação Inteligente</p>
          <div className="text-sm text-gray-400 space-y-1">
            <p><strong>Versão:</strong> 1.1</p>
            <p><strong>Vigente a partir de:</strong> 22/02/2026</p>
            <p><strong>Empresa:</strong> GC SISTEMAS LTDA</p>
            <p><strong>CNPJ:</strong> 30.285.186/0001-33</p>
          </div>
        </div>

        {/* CORPO DO DOCUMENTO */}
        <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base text-justify">
          
          <div className="bg-[#00E599]/10 border border-[#00E599]/30 p-5 rounded-xl text-center">
            <p className="font-bold text-white">
              Ao clicar em "LI E ACEITO OS TERMOS" na tela de contratação, você concorda integralmente com todas as disposições abaixo. Leia atentamente antes de prosseguir.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. QUEM SOMOS</h2>
            <p className="mb-2"><strong>1.1</strong> A LUNI IA é uma plataforma SaaS de automação inteligente para salões de beleza, desenvolvida e operada por GC SISTEMAS LTDA, inscrita no CNPJ nº 30.285.186/0001-33.</p>
            <p className="mb-2"><strong>1.2</strong> Estes Termos regulam o acesso e uso de todos os recursos da plataforma, incluindo recepcionista digital, CRM, automação de lembretes, relatórios e consultoria via Inteligência Artificial.</p>
            <p><strong>1.3</strong> A contratação é destinada exclusivamente a pessoas jurídicas. Ao aceitar estes Termos, você declara possuir plenos poderes para representar a empresa contratante.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. O QUE VOCÊ CONTRATA</h2>
            <p className="mb-2"><strong>2.1</strong> A LUNI concede ao CONTRATANTE uma licença de uso limitada, onerosa, não exclusiva, intransferível e revogável da plataforma, pelo período contratado.</p>
            <p className="mb-2"><strong>2.2</strong> Não há cessão de propriedade intelectual, código-fonte, fluxos operacionais, metodologias ou qualquer know-how da plataforma.</p>
            <p><strong>2.3</strong> A LUNI poderá implementar melhorias, atualizações e ajustes técnicos a qualquer tempo, visando aprimorar a experiência e a segurança do serviço.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. PRAZO, FIDELIDADE E REAJUSTE</h2>
            <p className="mb-2"><strong>3.1</strong> A contratação entra em vigor na data do aceite eletrônico e possui prazo mínimo de fidelidade de 3 (três) meses, contados da data de ativação do serviço.</p>
            <p className="mb-2"><strong>3.2</strong> Durante o período de fidelidade, o cancelamento não desobriga o pagamento das mensalidades remanescentes do trimestre contratado.</p>
            <p className="mb-2"><strong>3.3</strong> Após o período de fidelidade, o serviço se renova automaticamente por períodos mensais. O cancelamento deve ser solicitado com antecedência mínima de 30 (trinta) dias.</p>
            <p className="mb-2"><strong>3.4</strong> Os valores serão reajustados anualmente no mês de aniversário do contrato, com base na variação acumulada do IGPM/FGV ou IPCA/IBGE, o que for maior.</p>
            <p><strong>3.5</strong> Alterações de preço fora do reajuste anual serão comunicadas com 30 dias de antecedência, com direito a cancelamento sem penalidade caso o CONTRATANTE não concorde.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. DISPONIBILIDADE E NÍVEL DE SERVIÇO</h2>
            <p className="mb-2"><strong>4.1</strong> A LUNI compromete-se a manter disponibilidade mínima de 95% da plataforma, medida mensalmente, excluindo-se manutenções programadas e indisponibilidades causadas por terceiros.</p>
            <p className="mb-2"><strong>4.2</strong> Manutenções programadas serão comunicadas com antecedência mínima de 24 horas.</p>
            <p className="mb-2"><strong>4.3</strong> Indisponibilidades causadas por provedores externos, APIs de mensageria (WhatsApp), serviços de inteligência artificial ou falhas de Internet não serão computadas no cálculo de disponibilidade.</p>
            <p><strong>4.4</strong> Em caso de indisponibilidade superior a 72 horas consecutivas por falha exclusiva da LUNI, o CONTRATANTE terá direito a crédito equivalente a 1 (uma) mensalidade na próxima fatura.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. SERVIÇOS DE TERCEIROS</h2>
            <p className="mb-2"><strong>5.1</strong> A plataforma opera com integrações essenciais a terceiros, incluindo provedores de infraestrutura, APIs de mensageria (WhatsApp), serviços de inteligência artificial, gateways de pagamento e ferramentas de monitoramento.</p>
            <p className="mb-2"><strong>5.2</strong> Alterações, bloqueios, limitações ou encerramentos promovidos por esses terceiros não configuram falha contratual da LUNI.</p>
            <p><strong>5.3</strong> A LUNI não possui ingerência sobre políticas, decisões ou restrições impostas por plataformas externas.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. SUAS RESPONSABILIDADES</h2>
            <p className="mb-2"><strong>6.1</strong> Ao usar a plataforma, você assume responsabilidade integral por:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Todo conteúdo das mensagens enviadas por meio da plataforma;</li>
              <li>Legalidade das comunicações realizadas;</li>
              <li>Obtenção de consentimento dos destinatários conforme a LGPD;</li>
              <li>Cumprimento das políticas das plataformas integradas, especialmente o WhatsApp;</li>
              <li>Uso adequado e seguro das credenciais de acesso;</li>
              <li>Atos praticados por colaboradores e terceiros autorizados por você.</li>
            </ul>
            <p><strong>6.2</strong> Eventual bloqueio ou penalidade aplicada por terceiros em decorrência do uso é de sua responsabilidade exclusiva.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. O QUE NÃO É PERMITIDO</h2>
            <p className="mb-2"><strong>7.1</strong> É expressamente proibido:</p>
            <ul className="list-disc pl-6 mb-2 space-y-1">
              <li>Enviar spam ou mensagens em massa sem consentimento prévio;</li>
              <li>Transmitir conteúdo ilícito, difamatório, discriminatório ou que viole direitos de terceiros;</li>
              <li>Usar a plataforma para cobrança abusiva, assédio ou comunicação vexatória;</li>
              <li>Compartilhar credenciais de acesso com terceiros não autorizados;</li>
              <li>Tentar acessar áreas restritas ou realizar engenharia reversa;</li>
              <li>Gerar volumes de mensagens que excedam os limites das APIs integradas;</li>
              <li>Praticar qualquer ato que possa causar bloqueio da infraestrutura compartilhada.</li>
            </ul>
            <p><strong>7.2</strong> A violação de qualquer item acima autoriza a LUNI a suspender ou encerrar o acesso imediatamente, sem reembolso.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. PROPRIEDADE INTELECTUAL</h2>
            <p className="mb-2"><strong>8.1</strong> Todo código, arquitetura, fluxos operacionais, prompts, relatórios, metodologias e modelo de negócio da LUNI são protegidos por direitos autorais e segredo empresarial.</p>
            <p className="mb-2"><strong>8.2</strong> Fica expressamente vedado a engenharia reversa, reprodução da lógica operacional ou criação de solução similar com base no conhecimento obtido.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p className="mb-2"><strong>9.1</strong> A responsabilidade máxima da LUNI em qualquer situação fica limitada ao valor pago pelo CONTRATANTE nos 3 (três) meses anteriores ao evento.</p>
            <p className="mb-2"><strong>9.2</strong> A LUNI não se responsabiliza por lucros cessantes, perda de receita, perda de clientela, danos indiretos ou interrupção de atividades.</p>
            <p><strong>9.3</strong> Esta limitação não se aplica em casos de dolo comprovado.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. SUSPENSÃO E ENCERRAMENTO</h2>
            <p className="mb-2"><strong>10.1</strong> A LUNI poderá suspender ou encerrar o acesso imediatamente em caso de violação destes Termos, inadimplência superior a 5 dias úteis ou contestação de pagamento (chargeback).</p>
            <p><strong>10.2</strong> A rescisão por justa causa não gera direito a reembolso nem exime das obrigações do período de fidelidade.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. CANCELAMENTO E SEUS DADOS</h2>
            <p className="mb-2"><strong>11.1</strong> O cancelamento deve ser solicitado formalmente pelo canal oficial da plataforma com antecedência mínima de 30 dias.</p>
            <p className="mb-2"><strong>11.2</strong> Não há reembolso de valores já pagos, exceto em caso de rescisão por falha exclusiva da LUNI.</p>
            <p><strong>11.3</strong> Após o encerramento, seus dados ficam disponíveis por 90 (noventa) dias para exportação. Decorrido esse prazo, poderão ser excluídos ou anonimizados.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. PROTEÇÃO DE DADOS (LGPD)</h2>
            <p className="mb-2"><strong>12.1</strong> As partes se comprometem com a Lei nº 13.709/2018 (LGPD).</p>
            <p className="mb-2"><strong>12.2</strong> Você é o Controlador dos dados inseridos na plataforma. A LUNI atua como Operadora, processando dados conforme suas instruções.</p>
            <p className="mb-2"><strong>12.3</strong> Você declara possuir base legal válida para todos os dados inseridos na plataforma, responsabilizando-se por sua obtenção e legitimidade.</p>
            <p><strong>12.4</strong> A LUNI adota medidas técnicas e administrativas razoáveis de proteção e notificará o CONTRATANTE em prazo razoável em caso de incidente de segurança.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. ACEITE ELETRÔNICO E PROVA DIGITAL</h2>
            <p className="mb-2"><strong>13.1</strong> O clique no botão 'LI E ACEITO OS TERMOS' no momento da contratação registra automaticamente a data, hora, endereço IP, identificador de sessão e e-mail cadastrado.</p>
            <p><strong>13.2</strong> Esse registro constitui prova válida, eficaz e juridicamente admissível da concordância contratual, nos termos da legislação brasileira vigente.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">14. FORO</h2>
            <p><strong>14.1</strong> Fica eleito o foro da comarca da sede da LUNI para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
          </section>

        </div>

        {/* RODAPÉ DO DOCUMENTO */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
          <p>© 2026 LUNI IA - GC SISTEMAS LTDA - CNPJ: 30.285.186/0001-33</p>
          <p>Teresópolis, RJ - Brasil</p>
        </div>
      </div>

      <style>{`
        .text-primary-brand { color: #00E599; }
      `}</style>
    </div>
  );
}