import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 mt-10">
      <h1 className="text-5xl font-bold text-green-800 mb-6">Welcome to Hunter Wiki</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore all the hunting reserves, maps, subregions, and recommended loadouts.
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full max-w-3xl mx-auto mt-6 space-y-4 sm:space-y-0">
        <Link
          to="/maps"
          className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Explore Reserves
        </Link>

        <Link
          to="/weapons/list"
          className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Weapons
        </Link>
      </div>
    </div>
  );
}