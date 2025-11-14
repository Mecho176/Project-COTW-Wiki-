import { useParams, Link } from 'react-router-dom';
import { weapons } from '../../../data/weapons';
import ammunition, { ammo as ammoMeta } from '../../../data/ammunition';

export default function WeaponDetail() {
  const { weaponId } = useParams();
  const weapon = weapons.find((w) => w.id === weaponId);

  if (!weapon) {
    return (
      <div className="max-w-3xl mx-auto p-6 mt-8">
        <Link to="/weapons/list" className="text-sm text-green-700 hover:underline">Back to list</Link>
        <h2 className="text-2xl font-semibold mt-4">Weapon not found</h2>
        <p className="text-gray-600 mt-2">No weapon with id "{weaponId}" exists in the data.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-green-800">{weapon.name}</h1>
        <Link to="/weapons/list" className="text-sm text-green-700 hover:underline">Back to list</Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {weapon.description && <p className="text-gray-700 mb-4">{weapon.description}</p>}

        {/* Divider & heading: visually separate description and ammo */}
        <div className="mt-4">
          <hr className="border-t border-gray-200 mb-3" />
          <div className="text-xs uppercase text-gray-500 tracking-wide mb-2">Compatible Ammunition</div>
        </div>
        <div className="mb-6">
          {(() => {
            const compatible = [];

            if (Array.isArray(weapon.compatibleAmmo) && weapon.compatibleAmmo.length > 0) {
              for (const item of weapon.compatibleAmmo) {
                if (!item) continue;
                if (typeof item === 'string') {
                  const ammoObj = ammunition.find((a) => a.id === item || a.name === item) || ammoMeta.find((a) => a.id === item || a.name === item) || null;
                  compatible.push({ id: item, name: ammoObj?.name || item, description: ammoObj?.description || null, images: ammoObj?.images || [] });
                } else if (typeof item === 'object') {
                  const id = item.id || item.name;
                  const ammoObj = ammunition.find((a) => a.id === id) || ammoMeta.find((a) => a.id === id) || null;
                  compatible.push({ id: id, name: item.name || ammoObj?.name || id, description: ammoObj?.description || null, images: ammoObj?.images || [] });
                }
              }
            } else {
              for (const a of ammunition) {
                if (Array.isArray(a.relatedIds) && a.relatedIds.includes(weapon.id)) compatible.push({ id: a.id, name: a.name, description: a.description, images: a.images || [] });
              }
              for (const a of ammoMeta) {
                if (Array.isArray(a.relatedIds) && a.relatedIds.includes(weapon.id)) compatible.push({ id: a.id || a.name, name: a.name || a.id, description: a.description || null, images: a.images || [] });
              }
            }

            if (compatible.length === 0) {
              return <div className="text-gray-600">No compatible ammunition listed.</div>;
            }

            return (
              <ul className="space-y-3">
                {compatible.map((c) => (
                  <li key={c.id || c.name} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      {c.images && c.images[0] ? (
                        <img src={c.images[0]} alt={c.name || c.id} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-sm text-gray-400">no image</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{c.name || c.id}</div>
                      {c.description && <div className="text-sm text-gray-600">{c.description}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            );
          })()}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-500">Type</div>
            <div className="text-lg">{weapon.type}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Magazine</div>
            <div className="text-lg">{weapon.magazine ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Accuracy</div>
            <div className="text-lg">{weapon.accuracy ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Recoil</div>
            <div className="text-lg">{weapon.recoil ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Reload</div>
            <div className="text-lg">{weapon.reload ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Hipshot</div>
            <div className="text-lg">{weapon.hipshot ?? '—'}</div>
          </div>
        </div>

        {weapon.notes && (
          <div className="mb-4">
            <div className="text-sm text-gray-500">Notes</div>
            <div className="text-gray-800">{weapon.notes}</div>
          </div>
        )}
        {weapon.references && weapon.references.length > 0 && (
          <div>
            <div className="text-sm text-gray-500">References</div>
            <ul className="list-disc list-inside text-blue-600">
              {weapon.references.map((r) => (
                <li key={r}>
                  <span className="hover:underline">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        
      </div>
    </div>
  );
}
