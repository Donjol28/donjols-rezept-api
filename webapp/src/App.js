import React, { useState } from 'react';

function App() {
  const [newRezept, setNewRezept] = useState({
    name: '',
    beschreibung: '',
    category: '',
    zutaten: '',
    extra_infos: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRezept({ ...newRezept, [name]: value });
  };

  const addRezept = () => {
    const apiUrl = 'https://donjols-rezept-api-production.up.railway.app/rezepte';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRezept),
    })
      .then(response => response.json())
      .then(data => console.log('Rezept hinzugefügt:', data))
      .catch(error => console.error('Fehler:', error));
  };

  return (
    <div className="App">
      <h1>Rezept hinzufügen</h1>
      <input
        type="text"
        name="name"
        value={newRezept.name}
        onChange={handleInputChange}
        placeholder="Name des Rezepts"
      />
      <input
        type="text"
        name="category"
        value={newRezept.category}
        onChange={handleInputChange}
        placeholder="Kategorie"
      />
      <textarea
        name="beschreibung"
        value={newRezept.beschreibung}
        onChange={handleInputChange}
        placeholder="Beschreibung"
      />
      <textarea
        name="zutaten"
        value={newRezept.zutaten}
        onChange={handleInputChange}
        placeholder="Zutaten"
      />
      <textarea
        name="extra_infos"
        value={newRezept.extra_infos}
        onChange={handleInputChange}
        placeholder="Extra Infos"
      />
      <button onClick={addRezept}>Hinzufügen</button>
    </div>
  );
}

export default App;
