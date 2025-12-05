import React from 'react';
import { Link } from 'react-router-dom';

export default function Cash() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Cash</h1>

      <div className="bg-white rounded-lg shadow p-4 text-gray-700">
        <p>
          Cash is the in-game currency that is used to buy <Link to="/weapons" state={{ from: '/cash' }} className="text-green-800 hover:underline">weapons</Link> and equipment. It can be earned by harvesting <Link to="/animals" state={{ from: '/cash' }} className="text-green-800 hover:underline">animals</Link> or completing <Link to="/missions" state={{ from: '/cash' }} className="text-green-800 hover:underline">missions and challenges</Link>.
        </p>

        <p className="mt-3">
          Certain factors come into play when determining the amount of money received for harvesting an animal. <Link to="/animals/integrity" state={{ from: '/cash' }} className="text-green-800 hover:underline">Integrity</Link> and the <Link to="/animals" state={{ from: '/cash' }} className="text-green-800 hover:underline">animals</Link>{' '}
          <Link to="/rating" state={{ from: '/cash' }} className="text-green-800 hover:underline">rating</Link> affect the amount of cash one may receive.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 text-gray-700 mt-6">
        <h2 className="text-lg font-semibold mb-2">Earning Cash as a Beginner</h2>
        <p>
          The best way to earn cash in this game is to <Link to="/animals/Canada-Goose" state={{ from: '/cash' }} className="text-green-800 hover:underline">Canada Goose</Link> hunt. For this you will need the <Link to="/dlc" state={{ from: '/cash' }} className="text-green-800 hover:underline">Wild Goose Chase Gear DLC</Link> to access goose decoys and a proper <Link to="/groundblinds" state={{ from: '/cash' }} className="text-green-800 hover:underline">groundblind</Link>. If you do not have this DLC, then you can go to a
          multiplayer server and hunt <Link to="/animals/Puma" state={{ from: '/cash' }} className="text-green-800 hover:underline">Pumas</Link> or <Link to="/animals/Mountain-Lion" state={{ from: '/cash' }} className="text-green-800 hover:underline">Mountain Lions</Link>. They are a class 5 animal, so you can use the starter
          weapon, <Link to="/weapons" state={{ from: '/cash' }} className="text-green-800 hover:underline">Ranger .243</Link> preferably with <Link to="/weapons/ammo" state={{ from: '/cash' }} className="text-green-800 hover:underline">.243 Polymer-Tip Bullet</Link>. They each give between 1000-1700 cash per harvest
          if you pass the harvest check. <Link to="/animals/Merriam-Turkey" state={{ from: '/cash' }} className="text-green-800 hover:underline">Merriam Turkey</Link> give 1000-1300 cash, and are easy and fun to hunt. Hunting
          <Link to="/animals/Pronghorn" state={{ from: '/cash' }} className="text-green-800 hover:underline">Pronghorn</Link> is a very good way because there are a lot of them and they calm down quickly after shooting, so you can
          easily kill many of them. It is best to shoot the highest ranking male and then finish the females.
        </p>

        <h3 className="text-md font-semibold mt-4">Tips</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>To get a lot of money, you need to hit the vital organs, not the head.</li>
          <li>Use ammunition appropriate to the type of animal.</li>
          <li>Males give more money than females.</li>
          <li>Birds are easy to kill and are a good way to break out of the bottom.</li>
          <li>The faster the animal dies, the better the score and more cash.</li>
        </ul>
      </div>
    </div>
  );
}
