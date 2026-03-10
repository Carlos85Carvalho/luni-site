import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import InfrastructureStats from './InfrastructureStats'; 
import DifferenceSection from './DifferenceSection';
import StrategicConsulting from './StrategicConsulting';
import PricingSection from './PricingSection';
import Footer from './Footer';
import TermosDeUso from './TermosDeUso'; 
import TesteGratis from './TesteGratis';
import LuniChatWidget from './LuniChatWidget'; // 🟢 WIDGET FLUTUANTE

const Home = () => (
  <>
    <main className="relative z-10 flex flex-col">
      <Hero />
      <InfrastructureStats /> 
      <div className="flex flex-col space-y-24 md:space-y-40 pb-32">
        <DifferenceSection />
        <StrategicConsulting />
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
        
        <Header />

        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/termos"       element={<TermosDeUso />} />
          <Route path="/teste-gratis" element={<TesteGratis />} />
        </Routes>

        {/* 🟢 Widget flutuante — aparece em TODAS as páginas */}
        <LuniChatWidget />
        
      </div>
    </Router>
  );
}

export default App;