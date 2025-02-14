import React, { useEffect, useState } from 'react';

function App() {
  const [rezepte, setRezepte] = useState([]);  // Zustand für die Rezepte
  const [loading, setLoading] = useState(true);  // Zustand für das Laden der Daten
  const [error, setError] = useState('');  // Zustand für Fehler

  // URL deiner API
  const apiUrl = 'https://donjols-rezept-api-production.up.railway.app/rezepte';

  // Wenn die Komponente geladen wird, Rezepte von der API holen
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der Rezepte');
        }
        return response.json();
      })
      .then((data) => {
        setRezepte(data);  // Rezepte im Zustand speichern
        setLoading(false);  // Laden abgeschlossen
      })
      .catch((err) => {
        setError(err.message);  // Fehler im Zustand speichern
        setLoading(false);  // Laden abgeschlossen
      });
  }, []);  // Nur einmal bei der Initialisierung der Komponente

  // Wenn Daten noch geladen werden, Ladeanzeige anzeigen
  if (loading) {
    return <div>Loading...</div>;
  }

  // Falls ein Fehler auftritt, diesen anzeigen
  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className="App">
      <h1>Meine Rezepte</h1>
      {rezepte.length === 0 ? (
        <p>Keine Rezepte gefunden.</p>  // Wenn keine Rezepte vorhanden sind
      ) : (
        <ul>
          {rezepte.map((rezept) => (
            <li key={rezept.id}>
              <h2>{rezept.name}</h2>
              <p>{rezept.beschreibung}</p>
              <p><strong>Kategorie:</strong> {rezept.category}</p>
              <p><strong>Zutaten:</strong> {rezept.zutaten}</p>
              <p><strong>Extra Infos:</strong> {rezept.extra_infos}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
