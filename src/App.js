import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Settings from "./components/Settings";
import History from "./components/History";
import Menu from "./components/Menu";
import './components/Styles.css';

function App() {
  const [mode, setMode] = useState(4); // Nombre de cartes
  const [background, setBackground] = useState("#ffffff"); // Couleur de fond
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []); // Historique des parties
  const [currentPage, setCurrentPage] = useState('game'); // Page actuelle (jeu, paramètres, historique)

  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, [background]);

  // Sauvegarde d'une partie dans l'historique
  const saveHistory = (details) => {
    const newHistory = [...history, details];
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };


  return (
    <div className="App" >
      <h1>Memory Game - ReactJs (Schhoub)</h1>

      <Menu setCurrentPage={setCurrentPage} />

      {currentPage === 'game' && <Cards mode={mode} saveHistory={saveHistory} />}
      {currentPage === 'settings' && <Settings setMode={setMode} setBackground={setBackground} />}
      {currentPage === 'history' && <History history={history} />}
    </div>
  );
}

export default App;
