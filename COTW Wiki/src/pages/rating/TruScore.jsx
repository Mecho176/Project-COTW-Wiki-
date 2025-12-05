import React from 'react';
import { Link } from 'react-router-dom';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '-'));
}

export default function TruScore() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold">TruScore / TruRACS</h1>

        <h2 className="mt-4 font-semibold">Description</h2>
        <p className="mt-2 text-gray-800">The TruRACS (True Random Antler Configuration System) introduces randomly generated antlers and horns with varying sizes and shapes within the same species of animals. According to the game developers, there are "1 Million possible antler configurations" for each species.</p>

        <p className="mt-3 text-gray-800">TruRACS was announced on the 15th of April, 2019 in a reveal stream on the official Twitch channel and implemented on the 7th of May 2019 for Whitetail Deer and Blacktail Deer. TruRACS is a constantly evolving system and new species are continuously added through free updates. The system is currently available for following 26 animals:</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="px-3 py-2 border">Animal</th>
                <th className="px-3 py-2 border">Introduction</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Whitetail Deer')}`} className="text-green-800 hover:underline">Whitetail Deer</Link></td><td className="px-3 py-2">07.05.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Blacktail Deer')}`} className="text-green-800 hover:underline">Blacktail Deer</Link></td><td className="px-3 py-2">07.05.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Roosevelt Elk')}`} className="text-green-800 hover:underline">Roosevelt Elk</Link></td><td className="px-3 py-2">03.06.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Grant Caribou')}`} className="text-green-800 hover:underline">Grant Caribou</Link>*</td><td className="px-3 py-2">25.06.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Mountain Reindeer')}`} className="text-green-800 hover:underline">Mountain Reindeer</Link></td><td className="px-3 py-2">25.06.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Moose')}`} className="text-green-800 hover:underline">Moose</Link></td><td className="px-3 py-2">01.08.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Roe Deer')}`} className="text-green-800 hover:underline">Roe Deer</Link></td><td className="px-3 py-2">18.09.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Fallow Deer')}`} className="text-green-800 hover:underline">Fallow Deer</Link></td><td className="px-3 py-2">07.11.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Iberian Mouflon')}`} className="text-green-800 hover:underline">Iberian Mouflon</Link>*</td><td className="px-3 py-2">10.12.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Beceite Ibex')}`} className="text-green-800 hover:underline">Beceite Ibex</Link>*</td><td className="px-3 py-2">10.12.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Gredos Ibex')}`} className="text-green-800 hover:underline">Gredos Ibex</Link>*</td><td className="px-3 py-2">10.12.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Ronda Ibex')}`} className="text-green-800 hover:underline">Ronda Ibex</Link>*</td><td className="px-3 py-2">10.12.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Southeastern Spanish Ibex')}`} className="text-green-800 hover:underline">Southeastern Spanish Ibex</Link>*</td><td className="px-3 py-2">10.12.2019</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Water Buffalo')}`} className="text-green-800 hover:underline">Water Buffalo</Link></td><td className="px-3 py-2">19.02.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Red Deer')}`} className="text-green-800 hover:underline">Red Deer</Link></td><td className="px-3 py-2">08.05.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Rocky Mountain Bighorn Sheep')}`} className="text-green-800 hover:underline">Rocky Mountain Bighorn Sheep</Link>*</td><td className="px-3 py-2">23.06.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Desert Bighorn Sheep')}`} className="text-green-800 hover:underline">Desert Bighorn Sheep</Link>*</td><td className="px-3 py-2">23.06.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Mountain Goat')}`} className="text-green-800 hover:underline">Mountain Goat</Link>*</td><td className="px-3 py-2">23.06.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Pronghorn')}`} className="text-green-800 hover:underline">Pronghorn</Link>*</td><td className="px-3 py-2">23.06.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Rocky Mountain Elk')}`} className="text-green-800 hover:underline">Rocky Mountain Elk</Link>*</td><td className="px-3 py-2">23.06.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Mule Deer')}`} className="text-green-800 hover:underline">Mule Deer</Link></td><td className="px-3 py-2">11.08.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Axis Deer')}`} className="text-green-800 hover:underline">Axis Deer</Link></td><td className="px-3 py-2">12.10.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Feral Goat')}`} className="text-green-800 hover:underline">Feral Goat</Link>*</td><td className="px-3 py-2">12.10.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Chamois')}`} className="text-green-800 hover:underline">Chamois</Link>*</td><td className="px-3 py-2">12.10.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Sika Deer')}`} className="text-green-800 hover:underline">Sika Deer</Link>*</td><td className="px-3 py-2">12.10.2020</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Blackbuck')}`} className="text-green-800 hover:underline">Blackbuck</Link></td><td className="px-3 py-2">30.03.2021</td></tr>
              <tr className="border-t"><td className="px-3 py-2"><Link to={`/animals/${slug('Lesser Kudu')}`} className="text-green-800 hover:underline">Lesser Kudu</Link></td><td className="px-3 py-2">07.12.2021</td></tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm text-gray-600">'*' marks animals that had TruRACS antlers/horns with their initial release.</p>

        <h2 className="mt-6 font-semibold">TruScore</h2>
        <p className="mt-2 text-gray-800">Alongside the TruRACS system, the TruScore system was implemented, providing a more accurate way of a Trophy Rating. The detailed trophy score calculation is shown on the <Link to="/harvest" className="text-green-800 hover:underline">harvest screen</Link>. Depending on the species, the animals score will be measured through a mix of various criteria. These include elements like:</p>

        <ul className="list-disc list-inside mt-2 text-gray-800">
          <li>Length of Beams</li>
          <li>Length of Tines</li>
          <li>Circumference of Beams</li>
          <li>Number of Tines</li>
          <li>Spread of Rack</li>
          <li>Symmetry</li>
        </ul>

        <p className="mt-3 text-gray-800">Depending on the species and their unique trophy, the number of criteria elements present in evaluating their TruScore will vary. Through the criteria listed above, players will be able to see in detail why an animal scored the way it did, contributing to the overall score of the harvest.</p>
      </div>
    </div>
  );
}
