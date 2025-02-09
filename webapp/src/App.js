import React, { useEffect, useState } from 'react';

function App() {
  const [rezepte, setRezepte] = useState([]); // Zustand für die Rezepte
  const [error, setError] = useState(''); // Zustand für Fehler

  useEffect(() => {
    // URL deiner API auf Railway
    const apiUrl = 'https://donjols-rezept-api-production.up.railway.app';

    // Hole die Daten mit fetch
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der Daten');
        }
        return response.json();
      })
      .then((data) => {
        setRezepte(data); // Daten speichern
      })
      .catch((err) => {
        setError(err.message); // Fehler anzeigen
      });
  }, []); // Effekt läuft nur einmal beim Start der App

  return (
    <div className="App">
      <h1>Meine Rezepte</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Zeige Fehler, falls vorhanden */}
      <ul>
        {rezepte.length === 0 ? (
          <li>Keine Rezepte gefunden oder Ladefehler.</li>
        ) : (
          rezepte.map((rezept, index) => (
            <li key={index}>{rezept.name}</li> // Zeige jedes Rezept an
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
