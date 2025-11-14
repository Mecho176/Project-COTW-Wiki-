import { useParams, Link } from 'react-router-dom';
import { animals } from '../../data/animals';

export default function AnimalDetailPage() {
  const { animalId } = useParams();
  // Decode and normalize the name
  const animalName = decodeURIComponent(animalId).replace(/-/g, ' ').toLowerCase();

  const animal = animals.find(
    (a) => a.name.toLowerCase() === animalName
  );

  if (!animal) return <div className="p-6">Animal not found.</div>;

  return (
    <div className="p-6">
      <Link
        to="/animals"
        className="text-green-800 hover:underline mb-4 inline-block"
      >
        ← Back to Animals List
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-green-800">{animal.name}</h1>

      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      <div className="bg-white shadow rounded-2xl p-6 space-y-3">
        <p><strong>Class:</strong> {animal.class}</p>
        <p><strong>Difficulty:</strong> {animal.difficulty}</p>
        <p><strong>Habitat:</strong> {animal.habitat}</p>
        <p><strong>Trophy Score:</strong> {animal.trophyScore}</p>
        <p><strong>Behavior:</strong> {animal.behavior}</p>

        {animal.dlc && (
          <p className="text-green-800 font-semibold">Requires DLC</p>
        )}
      </div>
    </div>
  );
}
