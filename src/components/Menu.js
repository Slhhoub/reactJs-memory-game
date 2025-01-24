function Menu({ setCurrentPage }) {
    return (
      <div className="menu">
        <button onClick={() => setCurrentPage('game')}>Jeu</button>
        <button onClick={() => setCurrentPage('settings')}>Paramètres</button>
        <button onClick={() => setCurrentPage('history')}>Historique</button>
      </div>
    );
  }
  
  export default Menu;
  