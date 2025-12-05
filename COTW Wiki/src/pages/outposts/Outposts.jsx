import React from 'react';
import { Link } from 'react-router-dom';

export default function OutpostsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-800">Outposts</h1>

      <div className="mt-4 mb-6 text-gray-700 bg-gray-50 p-4 rounded">
        <p>
          <Link to="/outposts" className="text-green-800 hover:underline">Outposts</Link> are located in each region. After visited and claimed via activation of the flag pole, they can be fast traveled to via the map.
        </p>

        <p>
          At an <Link to="/outposts" className="text-green-800 hover:underline">outpost</Link>, the player can use the cabin to rest, which changes the time in-game and the locker ("cache") can be used to purchase equipment and access storage. <Link to="/outposts" className="text-green-800 hover:underline">Outposts</Link> are also where the player may retrieve the <Link to="/atv" className="text-green-800 hover:underline">Saber 4x4</Link>.
        </p>

        <p className="mt-2"><Link to="/tents" className="text-green-800 hover:underline">Tents</Link> function as mobile <Link to="/outposts" className="text-green-800 hover:underline">outposts</Link>.</p>

        <p className="mt-2">Each map has its own <Link to="/outposts" className="text-green-800 hover:underline">outpost</Link> design.</p>
      </div>
    </div>
  );
}
