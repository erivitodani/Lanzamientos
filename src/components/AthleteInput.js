import React from 'react';

const AthleteInput = ({ athlete, onNameChange, onAddAttempt }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <input
        type="text"
        value={athlete.name}
        onChange={(e) => onNameChange(athlete.id, e.target.value)}
        placeholder="Nombre del atleta"
        className="w-full p-2 border rounded mb-2"
      />
      <button 
        onClick={() => onAddAttempt(athlete.id, prompt("Distancia:"), false)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Añadir intento
      </button>
    </div>
  );
};

export default AthleteInput;
