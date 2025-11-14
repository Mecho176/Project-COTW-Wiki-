import React from 'react';

import { ammo } from '../../../data/ammunition';

export default function AmmunitionPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Ammunition Comparison</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Damage</th>
              <th className="px-4 py-2 text-left">Effective Range</th>
              <th className="px-4 py-2 text-left">Suitable For</th>
              <th className="px-4 py-2 text-left">DLC</th>
            </tr>
          </thead>
          <tbody>
            {ammo.map((a, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2">{a.name}</td>
                <td className="px-4 py-2">{a.type}</td>
                <td className="px-4 py-2">{a.damage}</td>
                <td className="px-4 py-2">{a.effectiveRange}</td>
                <td className="px-4 py-2">{a.suitableFor.join(', ')}</td>
                <td className="px-4 py-2">
                  {a.dlc ? (
                    <span className="bg-green-800 text-white px-2 py-1 rounded text-sm">
                      DLC
                    </span>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}