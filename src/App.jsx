import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CloudBanking from './components/CloudBanking';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <CloudBanking />
      </main>
    </div>
  );
}

export default App;
