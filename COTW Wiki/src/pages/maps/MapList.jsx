import Card from '../../components/Card';
import { maps } from '../../data/maps';

export default function MapsList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">All Hunting Reserves</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {maps.map((map) => (
          <Card
            key={map.id}
            title={map.name}
            image={map.image}
            badge={map.dlc ? "DLC" : null}
            link={`/maps/${map.id}`}
          />
        ))}
      </div>
    </div>
  );
}