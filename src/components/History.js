function History({ history }) {
    return (
      <div className="history">
        <h2>Historique</h2>
        {history.length === 0 ? (
          <p>Aucune partie jouée</p>
        ) : (
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <p>Mode : {item.mode} cartes</p>
                <p>Temps : {item.time}s</p>
                <p>Date : {new Date(item.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default History;
  