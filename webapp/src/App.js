import React, { useEffect, useState } from 'react';

function App() {
  const [rezepte, setRezepte] = useState([]);  // Zustand für die Rezepte
  const [loading, setLoading] = useState(true);  // Zustand für das Laden der Daten
  const [error, setError] = useState('');  // Zustand für Fehler

  // Die API URL für die Rezept-Abfrage
  const apiUrl = 'https://donjols-rezept-api-production.up.railway.app/rezepte';

  useEffect(() => {
    // Hole die Rezeptdaten von der API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der Daten');
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
  }, []);  // Nur einmal bei der ersten Laden des Components

  if (loading) {
    return <div>Loading...</div>;  // Ladeanzeige während des Abrufens
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;  // Fehleranzeige
  }

  return (
    <div className="App">
      <h1>Rezeptübersicht</h1>
      {rezepte.length === 0 ? (
        <p>Keine Rezepte gefunden.</p>  // Wenn keine Rezepte da sind
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
