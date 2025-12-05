import React from 'react';
import { Link } from 'react-router-dom';

export default function NeedZones() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Need Zones</h1>

      <p className="mb-4 text-gray-700">Need zones are areas of the map where animals go to eat, sleep or drink. They will return to their need zones during specific times on a daily basis, as long as there is no hunting pressure in the area. Spotting an animal will reveal the need zone on the map. Investigating tracks within a need zone will also reveal it on the map. The more tracks you investigate, the more information will be presented on the map. In combination with the skill Track Knowledge, a need zone also reveals how many animals used it.</p>

      <p className="mb-2 font-semibold">Three different need zones can be found:</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li><strong>Drinking zones</strong> — places where animals gather to drink (lakes, rivers, ponds).</li>
        <li><strong>Feeding zones</strong> — grazing or browsing areas where animals feed on vegetation.</li>
        <li><strong>Resting zones</strong> — sheltered areas where animals rest and bed down.</li>
      </ul>

      <p className="mt-6 text-gray-700">For more on tracking and how to use need zones strategically, see the <Link to="/lures/callers/names" className="text-green-800 hover:underline">Callers</Link> guidance or browse individual <Link to="/animals" className="text-green-800 hover:underline">animal pages</Link> for species-specific behaviour.</p>
    </div>
  );
}
