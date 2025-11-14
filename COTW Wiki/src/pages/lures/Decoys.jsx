import { useState } from 'react';
import { decoys } from '../../data/decoys';

export default function DecoysPage() {
  const [search, setSearch] = useState('');

  const filtered = decoys.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Decoys</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search decoy..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      <div className="space-y-6">
        {filtered.map((d, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              {d.name}
              {d.dlc && (
                <span className="ml-2 inline-block bg-green-800 text-white px-2 py-1 rounded text-sm">
                  DLC
                </span>
              )}
            </h2>
            <p className="text-gray-700 mb-2">{d.description}</p>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Target:</strong> {d.target.join(', ')}</li>
              <li><strong>Group size:</strong> {d.groupSize}</li>
              <li><strong>Attraction strength:</strong> {d.attractionStrength}</li>
              <li><strong>Range:</strong> {d.range}</li>
              <li><strong>Weight:</strong> {d.weight}</li>
            </ul>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500">No decoys found.</p>
        )}
      </div>
    </div>
  );
}