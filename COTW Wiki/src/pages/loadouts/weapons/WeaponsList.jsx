import { Link, useNavigate } from 'react-router-dom';
import { weapons } from '../../../data/weapons';

export default function WeaponsList() {
  const navigate = useNavigate();

  function goRandom() {
    if (!Array.isArray(weapons) || weapons.length === 0) return;
    const idx = Math.floor(Math.random() * weapons.length);
    const w = weapons[idx];
    if (w && w.id) navigate(`/weapons/${w.id}`);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-green-800">All Weapons</h2>
        <div className="flex items-center space-x-3">
          <button onClick={goRandom} className="text-sm text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded">Random weapon</button>
          <Link to="/" className="text-sm text-green-700 hover:underline">Home</Link>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y">
          {weapons.map((w) => (
            <li key={w.id} className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg text-gray-800">
                    <Link to={`/weapons/${w.id}`} className="text-green-800 hover:underline">
                      {w.name}
                    </Link>
                  </div>
                  <div className="text-sm text-gray-600">
                    {/* Primary ammo: prefer weapon.compatibleAmmo objects */}
                    {(() => {
                      const ca = Array.isArray(w.compatibleAmmo) && w.compatibleAmmo.length > 0 ? w.compatibleAmmo[0] : null;
                      if (!ca) return 'Ammo: —';
                      if (typeof ca === 'string') return `Ammo: ${ca}`;
                      return `Ammo: ${ca.name || ca.id}`;
                    })()}
                  </div>
                </div>
                <div className="text-sm text-gray-500">{w.type}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
