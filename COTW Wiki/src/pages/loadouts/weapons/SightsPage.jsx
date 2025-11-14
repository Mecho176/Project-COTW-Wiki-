import { sights } from '../../../data/sights';

export default function SightsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Sights & Optics</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Zoom Range</th>
              <th className="px-4 py-2 text-left">Weight</th>
              <th className="px-4 py-2 text-left">Compatible With</th>
              <th className="px-4 py-2 text-left">DLC</th>
            </tr>
          </thead>
          <tbody>
            {sights.map((sight, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2">{sight.name}</td>
                <td className="px-4 py-2">{sight.type}</td>
                <td className="px-4 py-2">{sight.zoomRange}</td>
                <td className="px-4 py-2">{sight.weight}</td>
                <td className="px-4 py-2">{sight.compatibleWith.join(', ')}</td>
                <td className="px-4 py-2">
                  {sight.dlc ? (
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
