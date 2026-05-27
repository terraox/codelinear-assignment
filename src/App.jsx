import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CloudBanking from './components/CloudBanking';
import EfficientBanking from './components/EfficientBanking';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <CloudBanking />
        <EfficientBanking />
      </main>
    </div>
  );
}

export default App;
