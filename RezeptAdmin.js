import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://donjols-rezept-api-production.up.railway.app"; 

export default function RezeptAdmin() {
  const [rezepte, setRezepte] = useState([]);
  const [newRezept, setNewRezept] = useState("");

  useEffect(() => {
    fetchRezepte();
  }, []);

  const fetchRezepte = async () => {
    const response = await axios.get(API_URL);
    setRezepte(response.data);
  };

  const addRezept = async () => {
    if (newRezept.trim() === "") return;
    await axios.post(API_URL, { name: newRezept });
    setNewRezept("");
    fetchRezepte();
  };

  const deleteRezept = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchRezepte();
  };

  return (
    <div>
      <h1>Rezeptverwaltung</h1>
      <input
        type="text"
        value={newRezept}
        onChange={(e) => setNewRezept(e.target.value)}
        placeholder="Neues Rezept"
      />
      <button onClick={addRezept}>Hinzufügen</button>

      <ul>
        {rezepte.map((rezept) => (
          <li key={rezept.id}>
            {rezept.name}
            <button onClick={() => deleteRezept(rezept.id)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
