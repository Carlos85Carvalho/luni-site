import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 🟢 Mudamos para HashRouter
import Header from './Header';
import Hero from './Hero';
import InfrastructureStats from './InfrastructureStats'; 
import DifferenceSection from './DifferenceSection';
import StrategicConsulting from './StrategicConsulting';
import PricingSection from './PricingSection';
import Footer from './Footer';
import TermosDeUso from './TermosDeUso'; 

// Criamos um componente para a Home para organizar o código
const Home = () => (
  <>
    <main className="relative z-10 flex flex-col">
      {/* Seção 1: Impacto e Headline */}
      <Hero />

      {/* Seção 2: Infraestrutura Ativa (ID: infra) */}
      <InfrastructureStats /> 

      {/* Conteúdo Sequencial com Espaçamento Premium */}
      <div className="flex flex-col space-y-24 md:space-y-40 pb-32">
        
        {/* Seção 3: Diferenciais Técnicos (ID: diferenciais) */}
        <DifferenceSection />
        
        {/* Seção 4: Consultoria Baseada em Dados (ID: consultoria) */}
        <StrategicConsulting />
        
        {/* Seção 5: Tabela de Preços (ID: planos) */}
        <PricingSection />
        
      </div>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-background text-white selection:bg-primary-brand/30 overflow-x-hidden bg-circuit font-inter">
        
        {/* Header fixo - ele aparece em todas as páginas */}
        <Header />

        <Routes>
          {/* Rota da Página Inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota dos Termos de Uso */}
          <Route path="/termos" element={<TermosDeUso />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;