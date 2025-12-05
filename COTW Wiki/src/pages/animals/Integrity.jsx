import { Link } from 'react-router-dom';

export default function IntegrityPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Integrity</h1>

      <p className="mb-4 text-gray-800">
        Integrity is a Harvest Screen bonus that reflects how much of the animal's trophy you preserved when
        harvesting. Using ammunition that is significantly more powerful than needed can decrease the Integrity
        awarded, while using appropriately rated ammunition helps maximize Integrity. This page summarizes the
        animal class system and general ammunition guidance; for the original wording and full tables see the
        <a
          href="https://thehuntercotw.fandom.com/wiki/Integrity"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          fandom Integrity page
        </a>
        .
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Animal Classes (overview)</h2>
        <p className="mb-2 text-gray-700">
          Animals in the game are assigned a class rating (commonly 1–9). The class reflects the relative size and
          toughness of the animal — higher class numbers are larger or tougher species. Below is a concise,
          paraphrased overview with example species for each class.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Typical description / examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3 text-gray-800">Small birds and very small game (e.g., some grouse/ducks)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3 text-gray-800">Small mammals like rabbits, hares, and similar-sized species</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3 text-gray-800">Small-medium mammals and waterfowl (e.g., foxes, medium ducks)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3 text-gray-800">Medium mammals (e.g., large geese, smaller deer species)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3 text-gray-800">Medium-large deer and hoofed game</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">6</td>
                <td className="px-4 py-3 text-gray-800">Full-sized deer and similar animals often considered standard big game</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">7</td>
                <td className="px-4 py-3 text-gray-800">Larger ungulates and tougher game (e.g., moose-class species)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">8</td>
                <td className="px-4 py-3 text-gray-800">Very large ungulates and heavy-horn species</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">9</td>
                <td className="px-4 py-3 text-gray-800">Largest and toughest animals in the game</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ammunition guidance (paraphrased)</h2>
        <p className="mb-2 text-gray-700">
          Ammunition and weapon choices have recommended class ranges. As a general rule:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Choose ammunition whose recommended class meets or slightly exceeds the animal's class.</li>
          <li>Ammunition that is too weak may not produce a clean, ethical harvest.</li>
          <li>Ammunition that is far too powerful can reduce Integrity and therefore the Harvest bonus.</li>
        </ul>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border">Ammunition / Weapon (example)</th>
                <th className="px-4 py-2 border">Typical recommended classes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Small-calibre rifles / light shotgun loads</td>
                <td className="px-4 py-3 text-gray-800">Approx. classes 1–3 (small game and birds)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Medium rifles / heavier shotgun loads</td>
                <td className="px-4 py-3 text-gray-800">Approx. classes 3–5 (medium deer and similar)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">High-powered large-calibre rifles</td>
                <td className="px-4 py-3 text-gray-800">Approx. classes 6–9 (large elk, moose, bison and the largest game)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-gray-700">
          For precise weapon/ammunition recommendations and the original reference tables, view the full page on the
          fandom wiki:
          <a
            href="https://thehuntercotw.fandom.com/wiki/Integrity"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline ml-1"
          >
            https://thehuntercotw.fandom.com/wiki/Integrity
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-600">
        Note: This page provides a paraphrased summary and factual guidance. It does not reproduce the fandom page
        verbatim — visit the linked fandom page for the full, original content and detailed tables.
      </p>
    </div>
  );
}
