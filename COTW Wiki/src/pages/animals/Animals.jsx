import { Link } from 'react-router-dom';
import { animals } from '../../data/animals';
import { useState } from 'react';

export default function AnimalsListPage() {
    const [search, setSearch] = useState('');
    const [regionFilter, setRegionFilter] = useState('');

    const filteredAnimals = animals.filter(
        (animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase()) &&
            (!regionFilter || animal.habitat.toLowerCase().includes(regionFilter.toLowerCase()))
    );

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6 text-green-800">Animal Encyclopedia</h1>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
                <input
                    type="text"
                    placeholder="Search animal..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-3 sm:mb-0 focus:ring-2 focus:ring-green-600 outline-none w-full sm:w-1/2"
                />
                <input
                    type="text"
                    placeholder="Filter by region..."
                    value={regionFilter}
                    onChange={(e) => setRegionFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none w-full sm:w-1/2"
                />
            </div>

            {/* Animal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAnimals.map((animal) => (
                    <Link
                        key={animal.id}
                        to={`/animals/${encodeURIComponent(animal.name.replace(/\s+/g, '-'))}`}
                        className="block bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition transform"
                    >
                        <img
                            src={animal.image}
                            alt={animal.name}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-green-800 mb-2">
                                {animal.name}
                            </h2>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Class:</strong> {animal.class}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Habitat:</strong> {animal.habitat}
                            </p>
                            {animal.dlc && (
                                <span className="inline-block bg-green-800 text-white px-3 py-1 rounded text-xs mt-2">
                                    DLC
                                </span>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {filteredAnimals.length === 0 && (
                <p className="text-gray-500 mt-4">No animals found.</p>
            )}
        </div>
    );
}
