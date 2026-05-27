import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CloudBanking from './components/CloudBanking';
import EfficientBanking from './components/EfficientBanking';
import DigitalBanking from './components/DigitalBanking';
import Insights from './components/Insights';
import CtaSection from './components/CtaSection';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <CloudBanking />
        <EfficientBanking />
        <DigitalBanking />
        <CtaSection />
        <Insights />
      </main>
    </div>
  );
}

export default App;
