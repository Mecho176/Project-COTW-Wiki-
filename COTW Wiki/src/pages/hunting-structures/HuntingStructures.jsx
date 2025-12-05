import React from 'react';
import { Link } from 'react-router-dom';

export default function HuntingStructures() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Hunting Structures</h1>

      <div className="bg-white rounded-lg shadow p-4 text-gray-700">
        <p>
          Hunting Structures can be found and built at specific locations out in the reserve. There are two types of
          hunting structures: ground blinds and hunting towers.
        </p>

        <p className="mt-3">
          Hunting structures help conceal the player from animals' senses and are placed at opportune locations with
          open areas and wide fields of view where they allow the player to survey a large area for game, making them
          ideal for lure hunting.
        </p>

        <p className="mt-3">
          These structures can protect you from animal attacks. Even animals like the <Link to="/animals/Cape-Buffalo" state={{ from: '/hunting-structures' }} className="text-green-800 hover:underline">Cape Buffalo</Link> and the <Link to="/animals/Water-Buffalo" state={{ from: '/hunting-structures' }} className="text-green-800 hover:underline">Water Buffalo</Link> won't deal damage to a player inside the structure.
        </p>

        <p className="mt-3">
          Each map has its own design for hunting structures.
        </p>
      </div>
    </div>
  );
}
