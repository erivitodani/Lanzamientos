import React, { useState, useEffect } from 'react';
import AthleteInput from './components/AthleteInput';
import ClassificationTable from './components/ClassificationTable';
import PhaseController from './components/PhaseController';
import AddAthleteButton from './components/AddAthleteButton';

const App = () => {
  const [athletes, setAthletes] = useState([]);
  const [phase, setPhase] = useState('initial');

  // [Aquí pega TODAS tus funciones originales: handleNameChange, addAttempt, addAthlete, etc.]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">LanzApp Custom</h1>
      
      <PhaseController phase={phase} onPhaseChange={setPhase} />
      
      {phase === 'initial' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {athletes.map(athlete => (
              <AthleteInput
                key={athlete.id}
                athlete={athlete}
                onNameChange={handleNameChange}
                onAddAttempt={addAttempt}
              />
            ))}
          </div>
          <AddAthleteButton onAddAthlete={addAthlete} />
        </>
      )}

      <ClassificationTable athletes={phase === 'final' ? top8Athletes : athletes} />
    </div>
  );
};

export default App;
