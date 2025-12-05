import React from 'react';
import { Link } from 'react-router-dom';

export default function HarvestScreen() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Harvest Screen</h1>

      <p className="text-gray-700 mb-4">
        The harvest screen will be displayed after the activation of a dead animal (via clicking [E]/(X)). The harvest
        screen will display various informations about the animal as well as ballistic reports for the hunt of it.
      </p>

      <p className="text-gray-700 mb-4">
        An harvested animal will provide a particular amount of <Link to="/Score" className="text-green-800 hover:underline">XP</Link> and <Link to="/cash" className="text-green-800 hover:underline">cash</Link> as well as <Link to="/rating/score" className="text-green-800 hover:underline">weapon score</Link>, depending on the species and the <Link to="/rating" className="text-green-800 hover:underline">kill score</Link>.
      </p>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Information in the harvest screen</h2>

        <h3 className="font-medium mt-3">General Information</h3>
        <p className="text-gray-700 mt-2">
          Harvest Screen General
          <br />
          The general information part of the harvest screen contains info about the animal gender, its weight, its fur
          color, how long the animal has been tracked, how difficult the animal is to shoot and what kind of trophy the
          species bears.
        </p>

        <h3 className="font-medium mt-4">Score-influencing information</h3>
        <p className="text-gray-700 mt-2 font-semibold">Harvcheck</p>
        <p className="text-gray-700 mt-1">This part of the harvest screen shows information which influence the obtained score for the game. Influencing factors are indicated with the Harvest Check. To pass the Harvest Check you must complete 4 items:</p>

        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li className="mt-1"><strong>You must hit a vital organ</strong> — Vital organs are the brain, heart, lungs, liver, cervical spine, thoracic spine. Note: to pass the vital organ check on the spine you must hit the spine itself, not a vertebrae.</li>
          <li className="mt-1"><strong>You must use the right ammunition for the animal class.</strong></li>
          <li className="mt-1"><strong>You must kill the animal in 2 or less shots.</strong></li>
          <li className="mt-1"><strong>You must not shoot the trophy organ.</strong></li>
        </ul>

        <p className="text-gray-600 mt-3 text-sm">
          Quick Kill and Consecutive Harvest were removed from the trophy scoring prior to and with the Scoring 2.0 release. They now only count toward your harvest reward of money and <Link to="/experience" className="text-green-800 hover:underline">XP</Link>.
        </p>

        <h3 className="font-medium mt-4">Trophy rating</h3>
        <p className="text-gray-700 mt-2">A score based on the size of an animal's "trophy" such as antlers or tusks.</p>
      
        <hr className="my-4" />

        <h3 className="font-medium mt-2">Quick Kill Bonus</h3>
        <p className="text-gray-700 mt-1">
          A modifier based on the time it took for an animal to die from the shot. The shorter the time, the better the
          score will be. In order to achieve 100% Quick Kill Bonus, the animal must drop in 8 seconds or less.
        </p>

        <h3 className="font-medium mt-3"><Link to="/animals/integrity" className="text-green-800 hover:underline">Integrity</Link> Bonus</h3>
        <p className="text-gray-700 mt-1">
          A modifier based on how well the caliber or ammo type of the shot corresponded to the size and type of animal.
          Shooting an animal with the most ethically suitable ammunition will improve your score.
        </p>

        <h3 className="font-medium mt-3">Consecutive Harvests</h3>
        <p className="text-gray-700 mt-1">
          A modifier based on how consistently the player harvested downed animals. Harvesting all animals which were
          hit will improve the money reward.
        </p>

        <h3 className="font-medium mt-3">Score</h3>
        <p className="text-gray-700 mt-1">
          The total score for the harvest, which is displayed in leaderboards and affects the amount of XP and cash reward.
        </p>

        <h3 className="font-medium mt-4">Information about the placed shots</h3>
        <p className="text-gray-700 mt-2 font-semibold">Harvest Screen Shot Placement</p>
        <p className="text-gray-700 mt-1">The player can cycle through all the shots that impacted the animal to see more details such as the percentage of total damage done by the shot or organs and bones that were hit. Also displayed are the used weapon, ammunition, shot distance and the obtained <Link to="/rating/score" className="text-green-800 hover:underline">weapon score</Link>. In <Link to="/multiplayer" className="text-blue-600 underline">multiplayer</Link>, the name of each shooting player is also shown.</p>

        <h3 className="font-medium mt-4">Taxidermization</h3>
        <p className="text-gray-700 mt-1">Taxidermization allows the player to save the harvested animal for display in a Hunting Lodge. The animal can be either taxidermized directly via selection of Taxidermize or saved for later taxidermization via selection of Save Harvest. This allows saving harvests for display even if the player is short on cash.</p>
      </div>
    </div>
  );
}
