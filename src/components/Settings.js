function Settings({ setMode, setBackground }) {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <div>
          <label>Mode de jeu :</label>
          <select onChange={(e) => setMode(parseInt(e.target.value))}>
            <option value={4}>4 cartes</option>
            <option value={16}>16 cartes</option>
            <option value={32}>32 cartes</option>
          </select>
        </div>
        <div>
          <label>Changer le fond :</label>
          <input
            type="color"
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>
      </div>
    );
  }
  
  export default Settings;
  