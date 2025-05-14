import React from 'react';

const ClassificationTable = ({ athletes }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Clasificación</h2>
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Mejor intento</th>
            </tr>
          </thead>
          <tbody>
            {athletes.map(athlete => (
              <tr key={athlete.id} className="border-t">
                <td className="p-3">{athlete.name || 'Sin nombre'}</td>
                <td className="p-3">
                  {Math.max(...athlete.attempts, 0)} metros
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassificationTable;
