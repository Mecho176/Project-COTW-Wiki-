import { useParams, Link, useLocation } from 'react-router-dom';
import { animals } from '../../data/animals';

export default function AnimalDetailPage() {
  const { animalId } = useParams();
  const location = useLocation();
  // Normalize route id and match against a slugified animal name so
  // hyphenated names (e.g. "Green-winged Teal") resolve correctly.
  const requestedId = decodeURIComponent(animalId).toLowerCase();

  const slug = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

  const animal = animals.find((a) => slug(a.name) === requestedId);

  if (!animal) return <div className="p-6">Animal not found.</div>;

  const backTo = (location && location.state && location.state.from) ? location.state.from : '/animals';
  let backLabel = '← Back to Animals List';
  if (backTo.startsWith('/visibility')) backLabel = '← Back to Visibility';
  else if (backTo.startsWith('/hunting-structures')) backLabel = '← Back to Hunting Structures';
  else if (backTo.startsWith('/cash')) backLabel = '← Back to Cash';
  else if (backTo.startsWith('/lures/decoys')) backLabel = '← Back to Decoys';
  else if (backTo.startsWith('/lures/callers')) backLabel = '← Back to Callers';

  return (
    <div className="p-6">
      <Link to={backTo} className="text-green-800 hover:underline mb-4 inline-block">
        {backLabel}
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-green-800">{animal.name}</h1>

      <img
        src={animal.image}
        alt={animal.name}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      <div className="bg-white shadow rounded-2xl p-6 space-y-3">
        {animal.description && (
          <p className="text-gray-700 mb-3">{animal.description}</p>
        )}
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
