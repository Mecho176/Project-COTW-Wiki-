import React from 'react';
import { Link } from 'react-router-dom';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '-'));
}

function slugSight(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function Score() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Score</h1>

      <p>
        Score is a parameter which reflects how proficient the player is with the respective{' '}
        <Link to="/weapons/list" className="text-green-800 hover:underline">weapon</Link>{' '}
        class. Currently, there are 4 different weapon class scores: Rifle score, Handgun score,
        Shotgun score and Bow score. Score is increased by harvesting animals killed with a weapon
        of the respective class. How much score is gained is affected by the Quick Kill bonus,
        <Link to="/animals/integrity" className="text-green-800 hover:underline"> Integrity bonus</Link>{' '}
        and <Link to="/harvest" className="text-green-800 hover:underline">Consecutive harvests</Link>, where
        each bonus will provide 25 score when at 100% (see{' '}
        <Link to="/animals/integrity" className="text-green-800 hover:underline">Integrity</Link> &amp;{' '}
        <Link to="/harvest" className="text-green-800 hover:underline">Harvest Screen</Link>). Therefore,
        the obtained score can lie anywhere between 0 and 75.
      </p>

      <p className="mt-4">
        Several items in the shop are locked until a certain class score is reached. Those items are
        detailed below. Other items, such as callers, don't have this requirement, but may have other
        requirements such as level or in game money.
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Rifle Score</h2>
        <p className="text-gray-700 mb-3">Rifle score can be increased by using any weapon that is a rifle class.</p>

        <h3 className="font-medium mt-3">Rifles</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Rifle</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Ranger .243')}`} className="text-green-800 hover:underline">Ranger .243</Link></td><td className="px-2 py-1">Default</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('.223 Docent')}`} className="text-green-800 hover:underline">.223 Docent</Link></td><td className="px-2 py-1">150</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('.270 Huntsman')}`} className="text-green-800 hover:underline">.270 Huntsman</Link></td><td className="px-2 py-1">450</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('.270 Stradivarius [1]')}`} className="text-green-800 hover:underline">.270 Stradivarius [1]</Link></td><td className="px-2 py-1">450</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('.270 Warden')}`} className="text-green-800 hover:underline">.270 Warden</Link></td><td className="px-2 py-1">0 [2]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Whitlock Model 86')}`} className="text-green-800 hover:underline">Whitlock Model 86</Link></td><td className="px-2 py-1">1000</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('7mm Regent Magnum')}`} className="text-green-800 hover:underline">7mm Regent Magnum</Link></td><td className="px-2 py-1">1500</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('7mm Empress Magnum')}`} className="text-green-800 hover:underline">7mm Empress Magnum</Link></td><td className="px-2 py-1">0 [2]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Coachmate Lever .45-70')}`} className="text-green-800 hover:underline">Coachmate Lever .45-70</Link></td><td className="px-2 py-1">2800</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('King 470DB [3]')}`} className="text-green-800 hover:underline">King 470DB [3]</Link></td><td className="px-2 py-1">5700</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Rifle Ammunition</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Ammunition</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.243 Soft-Point Bullet')}`} className="text-green-800 hover:underline">.243 Soft-Point Bullet</Link></td><td className="px-2 py-1">Default</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.243 Polymer-Tip Bullet')}`} className="text-green-800 hover:underline">.243 Polymer-Tip Bullet</Link></td><td className="px-2 py-1">50</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.223 Soft-Point Bullet')}`} className="text-green-800 hover:underline">.223 Soft-Point Bullet</Link></td><td className="px-2 py-1">0 [4]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.223 Polymer-Tip Bullet')}`} className="text-green-800 hover:underline">.223 Polymer-Tip Bullet</Link></td><td className="px-2 py-1">0 [4]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.270 Soft-Point Bullet')}`} className="text-green-800 hover:underline">.270 Soft-Point Bullet</Link></td><td className="px-2 py-1">0 [4]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.270 Polymer-Tip Bullet')}`} className="text-green-800 hover:underline">.270 Polymer-Tip Bullet</Link></td><td className="px-2 py-1">700</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.30-30 Hollow-Point Bullet')}`} className="text-green-800 hover:underline">.30-30 Hollow-Point Bullet</Link></td><td className="px-2 py-1">1000</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.30-30 Soft-Point Round Nose Bullet')}`} className="text-green-800 hover:underline">.30-30 Soft-Point Round Nose Bullet</Link></td><td className="px-2 py-1">1300</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('7mm Mag. Soft-Point Bullet')}`} className="text-green-800 hover:underline">7mm Mag. Soft-Point Bullet</Link></td><td className="px-2 py-1">0 [4]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('7mm Mag. Polymer-Tip Bullet')}`} className="text-green-800 hover:underline">7mm Mag. Polymer-Tip Bullet</Link></td><td className="px-2 py-1">0 [4]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.45-70 Hollow-Point Bullet')}`} className="text-green-800 hover:underline">.45-70 Hollow-Point Bullet</Link></td><td className="px-2 py-1">0 [5]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.45-70 Soft-Point Flat Nose Bullet')}`} className="text-green-800 hover:underline">.45-70 Soft-Point Flat Nose Bullet</Link></td><td className="px-2 py-1">0 [5]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.470 Nitro Express Soft Point Bullet [3]')}`} className="text-green-800 hover:underline">.470 Nitro Express Soft Point Bullet [3]</Link></td><td className="px-2 py-1">5700</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.470 Nitro Express Full Metal Jacket Bullet [3]')}`} className="text-green-800 hover:underline">.470 Nitro Express Full Metal Jacket Bullet [3]</Link></td><td className="px-2 py-1">6500</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Rifle Sights</h2>

        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Tru-Vision Tritium Sights Model</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model R234)')}`} className="text-green-800 hover:underline">R234</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('Ranger .243')}`} className="text-green-800 hover:underline">Ranger .243</Link>
              </td>
              <td className="px-2 py-1">100</td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model R223)')}`} className="text-green-800 hover:underline">R223</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('.223 Docent')}`} className="text-green-800 hover:underline">.223 Docent</Link>
              </td>
              <td className="px-2 py-1">250</td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model R270)')}`} className="text-green-800 hover:underline">R270</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('.270 Huntsman')}`} className="text-green-800 hover:underline">.270 Huntsman</Link>
              </td>
              <td className="px-2 py-1">850</td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model R30)')}`} className="text-green-800 hover:underline">R30</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('Whitlock Model 86')}`} className="text-green-800 hover:underline">Whitlock Model 86</Link>
              </td>
              <td className="px-2 py-1">1150</td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model R7)')}`} className="text-green-800 hover:underline">R7</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('7mm Regent Magnum')}`} className="text-green-800 hover:underline">7mm Regent Magnum</Link>
              </td>
              <td className="px-2 py-1">1900</td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model R4570)')}`} className="text-green-800 hover:underline">R4570</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('Coachmate Lever .45-70')}`} className="text-green-800 hover:underline">Coachmate Lever .45-70</Link>
              </td>
              <td className="px-2 py-1">3100</td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model R338)')}`} className="text-green-800 hover:underline">R338</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('Rangemaster 338')}`} className="text-green-800 hover:underline">Rangemaster 338</Link>
              </td>
              <td className="px-2 py-1">4800</td>
            </tr>
            <tr>
              <td className="px-2 py-1">
                <Link to={`/weapons/sights/${slugSight('Marksman Exakt Reflex Sight [3][6]')}`} className="text-green-800 hover:underline">Marksman Exakt Reflex Sight [3][6]</Link>
                {' '}for the{' '}
                <Link to={`/weapons/${slug('King 470DB [3]')}`} className="text-green-800 hover:underline">King 470DB[3]</Link>
              </td>
              <td className="px-2 py-1">6200</td>
            </tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Rifle Scopes</h3>
        <table className="table-auto w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Scope</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Ascent 1-4x24 Rifle Scope')}`} className="text-green-800 hover:underline">Ascent 1-4x24 Rifle Scope</Link></td><td className="px-2 py-1">Default</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Hyperion 4-8x42 Rifle Scope')}`} className="text-green-800 hover:underline">Hyperion 4-8x42 Rifle Scope</Link></td><td className="px-2 py-1">550</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Helios 4-8x32 Rifle Scope')}`} className="text-green-800 hover:underline">Helios 4-8x32 Rifle Scope</Link></td><td className="px-2 py-1">2500</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Argus 8-16x50 Rifle Scope')}`} className="text-green-800 hover:underline">Argus 8-16x50 Rifle Scope</Link></td><td className="px-2 py-1">3900</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Handgun Score</h2>
        <p className="text-gray-700 mb-3">Handgun score can be increased by using any weapon that is a handgun class.</p>

        <h3 className="font-medium mt-3">Handguns</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Handgun</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Focoso 357')}`} className="text-green-800 hover:underline">Focoso 357</Link></td><td className="px-2 py-1">Default</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('.44 Panther Magnum')}`} className="text-green-800 hover:underline">.44 Panther Magnum</Link></td><td className="px-2 py-1">850</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('.44 Wildcat Magnum')}`} className="text-green-800 hover:underline">.44 Wildcat Magnum</Link></td><td className="px-2 py-1">0 [2]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Rhino 454')}`} className="text-green-800 hover:underline">Rhino 454</Link></td><td className="px-2 py-1">3100</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Sundberg 454 [7]')}`} className="text-green-800 hover:underline">Sundberg 454 [7]</Link></td><td className="px-2 py-1">0 [2]</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Handgun Ammunition</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Ammunition</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.357 Jacketed Hollow-Point Bullet')}`} className="text-green-800 hover:underline">.357 Jacketed Hollow-Point Bullet</Link></td><td className="px-2 py-1">Default</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.357 Flat Nose Hard-Cast Bullet')}`} className="text-green-800 hover:underline">.357 Flat Nose Hard-Cast Bullet</Link></td><td className="px-2 py-1">450</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.44 Jacketed Hollow-Point Bullet')}`} className="text-green-800 hover:underline">.44 Jacketed Hollow-Point Bullet</Link></td><td className="px-2 py-1">0 [4]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.44 Flat Nose Hard-Cast Bullet')}`} className="text-green-800 hover:underline">.44 Flat Nose Hard-Cast Bullet</Link></td><td className="px-2 py-1">2500</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.454 Jacketed Hollow-Point Bullet')}`} className="text-green-800 hover:underline">.454 Jacketed Hollow-Point Bullet</Link></td><td className="px-2 py-1">0 [4]</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('.454 Flat Nose Hard-Cast Bullet')}`} className="text-green-800 hover:underline">.454 Flat Nose Hard-Cast Bullet</Link></td><td className="px-2 py-1">5300</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Handgun Sights</h2>

        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Tru-Vision Tritium Sights Model</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model H357)')}`} className="text-green-800 hover:underline">H357</Link>{' '}for the{' '}<Link to={`/weapons/${slug('Focoso 357')}`} className="text-green-800 hover:underline">Focoso 357</Link></td><td className="px-2 py-1">100</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model H44)')}`} className="text-green-800 hover:underline">H44</Link>{' '}for the{' '}<Link to={`/weapons/${slug('.44 Panther Magnum')}`} className="text-green-800 hover:underline">.44 Panther Magnum</Link></td><td className="px-2 py-1">1150</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model H454)')}`} className="text-green-800 hover:underline">H454</Link>{' '}for the{' '}<Link to={`/weapons/${slug('Rhino 454')}`} className="text-green-800 hover:underline">Rhino 454</Link></td><td className="px-2 py-1">3900</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Red Raptor Reflex Sight [6][8]')}`} className="text-green-800 hover:underline">Red Raptor Reflex Sight [6][8]</Link></td><td className="px-2 py-1">250</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Handgun Scopes</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Scope</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Goshawk Redeye 2-4x20 Handgun Scope')}`} className="text-green-800 hover:underline">Goshawk Redeye 2-4x20 Handgun Scope</Link></td><td className="px-2 py-1">1700</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Shotgun Score</h2>
        <p className="text-gray-700 mb-3">Shotgun score can be increased by using any weapon that is a shotgun class.</p>

        <h3 className="font-medium mt-3">Shotguns</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Shotgun</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Caversham Steward 12G')}`} className="text-green-800 hover:underline">Caversham Steward 12G</Link></td><td className="px-2 py-1">Default</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Cacciatore 12G')}`} className="text-green-800 hover:underline">Cacciatore 12G</Link></td><td className="px-2 py-1">1150</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Shotgun Ammunition</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Ammunition</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('12 GA Buckshot')}`} className="text-green-800 hover:underline">12 GA Buckshot</Link></td><td className="px-2 py-1">Default</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('12 GA Birdshot')}`} className="text-green-800 hover:underline">12 GA Birdshot</Link></td><td className="px-2 py-1">150</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('12 GA Slug')}`} className="text-green-800 hover:underline">12 GA Slug</Link></td><td className="px-2 py-1">3100</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Shotgun Sights</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Tru-Vision Tritium Sights Model</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model SOU12)')}`} className="text-green-800 hover:underline">SOU12</Link>{' '}for the{' '}<Link to={`/weapons/${slug('Caversham Steward 12G')}`} className="text-green-800 hover:underline">Caversham Steward 12G</Link></td><td className="px-2 py-1">550</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Tru-Vision Tritium (Model SPA12)')}`} className="text-green-800 hover:underline">SPA12</Link>{' '}for the{' '}<Link to={`/weapons/${slug('Cacciatore 12G')}`} className="text-green-800 hover:underline">Cacciatore 12G</Link></td><td className="px-2 py-1">1900</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Shotgun Scopes</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Scope</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Meridian 1-4x20 Shotgun Scope')}`} className="text-green-800 hover:underline">Meridian 1-4x20 Shotgun Scope</Link></td><td className="px-2 py-1">5300</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Bow Score</h2>
        <p className="text-gray-700 mb-3">Bow score can be increased by using any weapon that is a bow class.</p>

        <h3 className="font-medium mt-3">Bows</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Bow</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/${slug('Hawk Edge CB-70')}`} className="text-green-800 hover:underline">Hawk Edge CB-70</Link></td><td className="px-2 py-1">1300</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Arrows</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Arrow</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('300 gr. Small Game Point Arrow')}`} className="text-green-800 hover:underline">300 gr. Small Game Point Arrow</Link></td><td className="px-2 py-1">700</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/ammo/${encodeURIComponent('600 gr. Broadhead Arrow')}`} className="text-green-800 hover:underline">600 gr. Broadhead Arrow</Link></td><td className="px-2 py-1">3500</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-3">Bow Sights</h3>
        <table className="table-auto w-full text-sm border-collapse mb-4">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Sight</th>
              <th className="text-left px-2 py-1">Required Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Brightsight Single-Pin Sight')}`} className="text-green-800 hover:underline">Brightsight Single-Pin Sight</Link></td><td className="px-2 py-1">250</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Swift-Mark 3 Bow Sight')}`} className="text-green-800 hover:underline">Swift-Mark 3 Bow Sight</Link></td><td className="px-2 py-1">2200</td></tr>
            <tr><td className="px-2 py-1"><Link to={`/weapons/sights/${slugSight('Swift-Mark 5 Bow Sight')}`} className="text-green-800 hover:underline">Swift-Mark 5 Bow Sight</Link></td><td className="px-2 py-1">5300</td></tr>
          </tbody>
        </table>

        <h3 className="font-medium mt-4">Footnotes</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>May be missing some paid DLC items</li>
          <li>Locked, but 1 is in storage immediately</li>
          <li>Alternate version of a locked base weapon that is unlocked immediately</li>
          <li>Paid DLC</li>
          <li>Unlocked immediately because a weapon (that may be part of paid DLC) that uses it is unlocked immediately</li>
          <li>Unlocked immediately but is unusable until its weapon is unlocked</li>
          <li>This is a reflex sight, not a "tritium" sight like the others in the category</li>
          <li>Free alternate version of a base weapon</li>
          <li>Although this is in the handgun section, it can be applied to most weapons</li>
        </ul>
      </section>
    </div>
  );
}
