import { Link } from 'react-router-dom';
import { weapons } from '../../../data/weapons';

export default function WeaponsList() {
  const typeOrder = ['Rifle', 'Handgun', 'Shotgun', 'Bow'];
  const allTypes = Array.from(new Set(weapons.map((w) => w.type)));
  const types = [
    ...typeOrder.filter((t) => allTypes.includes(t)),
    ...allTypes.filter((t) => !typeOrder.includes(t)),
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-green-800">All Weapons</h2>
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-sm text-green-700 hover:underline">Home</Link>
        </div>
      </div>

      <div className="mb-6 text-gray-700 bg-gray-50 p-4 rounded">
        <p>
          Weapons are used to hunt. I suggest to spend real money on the game.
        </p>
        <p className="mt-2">
          Currently, 4 different weapon classes are available: rifles, handguns, shotguns, and bows (including crossbows). Each class of weapons has unique traits and <Link to="/weapons/ammo" className="text-green-800 hover:underline">Ammunition</Link>, thus requires a different game style.
        </p>
        <p className="mt-2">
          Many of the weapons have variants, which are essentially the same weapon with a different aesthetic.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {types.map((type) => {
          const items = weapons.filter((w) => w.type === type);
          if (!items.length) return null;
          return (
            <section key={type} className="border-t">
              <div className="px-4 py-3 bg-gray-50">
                <h3 className="text-lg font-semibold text-green-800">{type}</h3>
                {type === 'Rifle' && (
                  <p className="mt-2 text-gray-700">
                    Rifles are the favorite option for many hunters. Provided with scopes, they can be very effective in long-range shooting. From the <Link to={`/weapons/.223_Docent`} className="text-green-800 hover:underline">.223 Docent</Link> for hunting <Link to="/animals/Red-Fox" className="text-green-800 hover:underline">foxes</Link> and <Link to="/animals/Coyote" className="text-green-800 hover:underline">coyotes</Link> to the powerful <Link to={`/weapons/Rangemaster_338`} className="text-green-800 hover:underline">Rangemaster 338</Link> for <Link to="/animals/Moose" className="text-green-800 hover:underline">Moose</Link> and <Link to="/animals/European-Bison" className="text-green-800 hover:underline">European Bison</Link>.
                  </p>
                )}
                {type === 'Handgun' && (
                  <p className="mt-2 text-gray-700">
                    Handguns can be used as a backup weapon, protection against an angry animal, or as the primary weapon choice. Combined with hard cast projectiles they can be used effectively against any animal the player encounters.
                  </p>
                )}
                {type === 'Shotgun' && (
                  <p className="mt-2 text-gray-700">
                    Shotguns are useful tools for hunting small to medium game. Whilst they have a considerably lower range than rifles, their spread makes it easier to hit vital parts if the shot was placed poorly. However, one has also to consider the lower penetration of shotgun pellets. They're mostly used to hunt ducks and geese, or to stop angry animals charging towards the hunter.
                  </p>
                )}
                {type === 'Bow' && (
                  <p className="mt-2 text-gray-700">
                    Bows are the option for players that like stalking and sneaking up on animals. While their penetration is excellent, they lack the range and accuracy of rifles.
                  </p>
                )}
              </div>

              <ul className="divide-y">
                {items.map((w) => (
                  <li key={w.id} className="px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg text-gray-800">
                          <Link to={`/weapons/${w.id}`} className="text-green-800 hover:underline">
                            {w.name}
                          </Link>
                        </div>
                        {/* Show short description unless it's the generic import note */}
                        {(() => {
                          const desc = typeof w.description === 'string' ? w.description.trim() : '';
                          if (!desc) return <div className="text-sm text-gray-600"></div>;
                          if (/imported from wiki/i.test(desc)) return <div className="text-sm text-gray-600"></div>;
                          return <div className="text-sm text-gray-600">{desc}</div>;
                        })()}
                      </div>
                      <div className="text-sm text-gray-500">{w.type}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {type === 'Rifle' && (
                <div className="px-4 py-4">
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-700">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-3 py-2">Weapon</th>
                          <th className="px-3 py-2">Weapon Class</th>
                          <th className="px-3 py-2">Accuracy*</th>
                          <th className="px-3 py-2">Recoil</th>
                          <th className="px-3 py-2">Reload Speed*</th>
                          <th className="px-3 py-2">Hipshot</th>
                          <th className="px-3 py-2">Magazine Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/.223_Docent`} className="text-green-800 hover:underline">.223 Docent</Link></td>
                          <td className="px-3 py-2">2-4</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">28</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Ranger_.243`} className="text-green-800 hover:underline">Ranger .243</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">78</td>
                          <td className="px-3 py-2">46</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">76</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/.270_Huntsman`} className="text-green-800 hover:underline">.270 Huntsman</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">55</td>
                          <td className="px-3 py-2">64</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">67</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/7mm_Regent_Magnum`} className="text-green-800 hover:underline">7mm Regent Magnum</Link></td>
                          <td className="px-3 py-2">4-9</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">81</td>
                          <td className="px-3 py-2">48</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Rangemaster_338`} className="text-green-800 hover:underline">Rangemaster 338</Link></td>
                          <td className="px-3 py-2">7-9</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">81</td>
                          <td className="px-3 py-2">29</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Whitlock_Model_86`} className="text-green-800 hover:underline">Whitlock Model 86</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">78</td>
                          <td className="px-3 py-2">46</td>
                          <td className="px-3 py-2">57</td>
                          <td className="px-3 py-2">76</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Coachmate_Lever_.45-70`} className="text-green-800 hover:underline">Coachmate Lever .45-70</Link></td>
                          <td className="px-3 py-2">4-9</td>
                          <td className="px-3 py-2">55</td>
                          <td className="px-3 py-2">64</td>
                          <td className="px-3 py-2">57</td>
                          <td className="px-3 py-2">67</td>
                          <td className="px-3 py-2">3</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Virant_.22LR`} className="text-green-800 hover:underline">Virant .22LR</Link></td>
                          <td className="px-3 py-2">1</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">10</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/King_470DB`} className="text-green-800 hover:underline">King 470DB</Link></td>
                          <td className="px-3 py-2">9</td>
                          <td className="px-3 py-2">55</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">12</td>
                          <td className="px-3 py-2">2</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Solokhin_MN1890`} className="text-green-800 hover:underline">Solokhin MN1890</Link></td>
                          <td className="px-3 py-2">3-7</td>
                          <td className="px-3 py-2">64</td>
                          <td className="px-3 py-2">58</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">72</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/.300_Canning_Magnum`} className="text-green-800 hover:underline">.300 Canning Magnum</Link></td>
                          <td className="px-3 py-2">7-9</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">90</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">35</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Vásquez_Cyclone_.45`} className="text-green-800 hover:underline">Vásquez Cyclone .45</Link></td>
                          <td className="px-3 py-2">2-4</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">7</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Eckers_.30-06`} className="text-green-800 hover:underline">Eckers .30-06</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">35</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Mårtensson_6.5mm`} className="text-green-800 hover:underline">Mårtensson 6.5mm</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">70</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">67</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Hudzik_.50_Caplock`} className="text-green-800 hover:underline">Hudzik .50 Caplock</Link></td>
                          <td className="px-3 py-2">3-8</td>
                          <td className="px-3 py-2">25</td>
                          <td className="px-3 py-2">70</td>
                          <td className="px-3 py-2">5</td>
                          <td className="px-3 py-2">15</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/M1_Iwaniec`} className="text-green-800 hover:underline">M1 Iwaniec</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">35</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/F.L._Sporter_.303`} className="text-green-800 hover:underline">F.L. Sporter .303</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">55</td>
                          <td className="px-3 py-2">64</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">67</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Kullman_.22H`} className="text-green-800 hover:underline">Kullman .22H</Link></td>
                          <td className="px-3 py-2">1-2</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">20</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/ZARZA-10_.308`} className="text-green-800 hover:underline">ZARZA-10 .308</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">45</td>
                          <td className="px-3 py-2">75</td>
                          <td className="px-3 py-2">59</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/ZARZA-15_.223`} className="text-green-800 hover:underline">ZARZA-15 .223</Link></td>
                          <td className="px-3 py-2">2-4</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">25</td>
                          <td className="px-3 py-2">59</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/ZARZA-15_.22LR`} className="text-green-800 hover:underline">ZARZA-15 .22LR</Link></td>
                          <td className="px-3 py-2">1</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">8</td>
                          <td className="px-3 py-2">59</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Curman_.50_Inline`} className="text-green-800 hover:underline">Curman .50 Inline</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">30</td>
                          <td className="px-3 py-2">70</td>
                          <td className="px-3 py-2">5</td>
                          <td className="px-3 py-2">15</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Tsurugi_LRR_.338`} className="text-green-800 hover:underline">Tsurugi LRR .338</Link></td>
                          <td className="px-3 py-2">7-9</td>
                          <td className="px-3 py-2">38</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">12</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Malmer_7mm_Magnum`} className="text-green-800 hover:underline">Malmer 7mm Magnum</Link></td>
                          <td className="px-3 py-2">4-9</td>
                          <td className="px-3 py-2">35</td>
                          <td className="px-3 py-2">85</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">25</td>
                          <td className="px-3 py-2">3</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Olsson_Model_23_.308`} className="text-green-800 hover:underline">Olsson Model 23 .308</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">79</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">27</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Zagan_Varminter_.22-250`} className="text-green-800 hover:underline">Zagan Varminter .22-250</Link></td>
                          <td className="px-3 py-2">2-4</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">30</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Moradi_Model_1894`} className="text-green-800 hover:underline">Moradi Model 1894</Link></td>
                          <td className="px-3 py-2">3-8</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">43</td>
                          <td className="px-3 py-2">57</td>
                          <td className="px-3 py-2">76</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Arzyna_.300_Mag_Tactical`} className="text-green-800 hover:underline">Arzyna .300 Mag Tactical</Link></td>
                          <td className="px-3 py-2">7-9</td>
                          <td className="px-3 py-2">90</td>
                          <td className="px-3 py-2">75</td>
                          <td className="px-3 py-2">59</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Gandhare_Rifle`} className="text-green-800 hover:underline">Gandhare Rifle</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">30</td>
                          <td className="px-3 py-2">70</td>
                          <td className="px-3 py-2">70</td>
                          <td className="px-3 py-2">15</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Vallgarda_.375`} className="text-green-800 hover:underline">Vallgarda .375</Link></td>
                          <td className="px-3 py-2">7-9</td>
                          <td className="px-3 py-2">95</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">45</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Johansson_.450`} className="text-green-800 hover:underline">Johansson .450</Link></td>
                          <td className="px-3 py-2">4-7</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">30</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Fors_Elite_.300`} className="text-green-800 hover:underline">Fors Elite .300</Link></td>
                          <td className="px-3 py-2">3-6</td>
                          <td className="px-3 py-2">85</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Hansson_.30-06`} className="text-green-800 hover:underline">Hansson .30-06</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">43</td>
                          <td className="px-3 py-2">78</td>
                          <td className="px-3 py-2">55</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Perry_.308`} className="text-green-800 hover:underline">Perry .308</Link></td>
                          <td className="px-3 py-2">4-8</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">75</td>
                          <td className="px-3 py-2">59</td>
                          <td className="px-3 py-2">65</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Quist_Reaper_7.62x39`} className="text-green-800 hover:underline">Quist Reaper 7.62x39</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">85</td>
                          <td className="px-3 py-2">43</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">55</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Laperriere_Outrider_.30-30`} className="text-green-800 hover:underline">Laperriere Outrider .30-30</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">44</td>
                          <td className="px-3 py-2">58</td>
                          <td className="px-3 py-2">78</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Anantha_Action_.22_Mag`} className="text-green-800 hover:underline">Anantha Action .22 Mag</Link></td>
                          <td className="px-3 py-2">1-2</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">15</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">10</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Frost_.257`} className="text-green-800 hover:underline">Frost .257</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">35</td>
                          <td className="px-3 py-2">75</td>
                          <td className="px-3 py-2">52</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 px-4">* Higher value is better.</p>
                </div>
              )}
              {type === 'Shotgun' && (
                <div className="px-4 py-4">
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-700">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-3 py-2">Weapon</th>
                          <th className="px-3 py-2">Weapon Class</th>
                          <th className="px-3 py-2">Accuracy*</th>
                          <th className="px-3 py-2">Recoil</th>
                          <th className="px-3 py-2">Reload Speed*</th>
                          <th className="px-3 py-2">Hipshot</th>
                          <th className="px-3 py-2">Magazine Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Cacciatore_12G`} className="text-green-800 hover:underline">Cacciatore 12G</Link></td>
                          <td className="px-3 py-2">1-8</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">29</td>
                          <td className="px-3 py-2">88</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Caversham_Steward_12G`} className="text-green-800 hover:underline">Caversham Steward 12G</Link></td>
                          <td className="px-3 py-2">1-8</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">69</td>
                          <td className="px-3 py-2">88</td>
                          <td className="px-3 py-2">2</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Couso_Model_1897`} className="text-green-800 hover:underline">Couso Model 1897</Link></td>
                          <td className="px-3 py-2">1-7</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">29</td>
                          <td className="px-3 py-2">88</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Strecker_SxS_20G`} className="text-green-800 hover:underline">Strecker SxS 20G</Link></td>
                          <td className="px-3 py-2">1-7</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">95</td>
                          <td className="px-3 py-2">2</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Nordin_20SA`} className="text-green-800 hover:underline">Nordin 20SA</Link></td>
                          <td className="px-3 py-2">1-7</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">29</td>
                          <td className="px-3 py-2">88</td>
                          <td className="px-3 py-2">3</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Grelck_Drilling_Rifle`} className="text-green-800 hover:underline">Grelck Drilling Rifle</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">95</td>
                          <td className="px-3 py-2">3</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Miller_Model_1891`} className="text-green-800 hover:underline">Miller Model 1891</Link></td>
                          <td className="px-3 py-2">1-2, 4-9</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">69</td>
                          <td className="px-3 py-2">88</td>
                          <td className="px-3 py-2">3</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Strandberg_10SA_Executive`} className="text-green-800 hover:underline">Strandberg 10SA Executive</Link></td>
                          <td className="px-3 py-2">1-2, 4-9</td>
                          <td className="px-3 py-2">30</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">25</td>
                          <td className="px-3 py-2">88</td>
                          <td className="px-3 py-2">4</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Gopi_10G_Grand`} className="text-green-800 hover:underline">Gopi 10G Grand</Link></td>
                          <td className="px-3 py-2">1-2, 4-9</td>
                          <td className="px-3 py-2">36</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">92</td>
                          <td className="px-3 py-2">2</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Giddings_SSC_.410_Coyote`} className="text-green-800 hover:underline">Giddings SSC .410 Coyote</Link></td>
                          <td className="px-3 py-2">1, 2-3, 3-5</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">78</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">88</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 px-4">* Higher value is better.</p>
                </div>
              )}
              {type === 'Handgun' && (
                <div className="px-4 py-4">
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-700">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-3 py-2">Weapon</th>
                          <th className="px-3 py-2">Weapon Class</th>
                          <th className="px-3 py-2">Accuracy*</th>
                          <th className="px-3 py-2">Recoil</th>
                          <th className="px-3 py-2">Reload Speed*</th>
                          <th className="px-3 py-2">Hipshot</th>
                          <th className="px-3 py-2">Magazine Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/.243_R._Cuomo`} className="text-green-800 hover:underline">.243 R. Cuomo</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">62</td>
                          <td className="px-3 py-2">48</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">17</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/.44_Panther_Magnum`} className="text-green-800 hover:underline">.44 Panther Magnum</Link></td>
                          <td className="px-3 py-2">3-8</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">82</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">95</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/.45_Rolleston`} className="text-green-800 hover:underline">.45 Rolleston</Link></td>
                          <td className="px-3 py-2">2-5</td>
                          <td className="px-3 py-2">45</td>
                          <td className="px-3 py-2">75</td>
                          <td className="px-3 py-2">18</td>
                          <td className="px-3 py-2">72</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/.45-70_Jernberg_Superior`} className="text-green-800 hover:underline">.45-70 Jernberg Superior</Link></td>
                          <td className="px-3 py-2">4-9</td>
                          <td className="px-3 py-2">75</td>
                          <td className="px-3 py-2">62</td>
                          <td className="px-3 py-2">58</td>
                          <td className="px-3 py-2">25</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/10mm_Davani`} className="text-green-800 hover:underline">10mm Davani</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">85</td>
                          <td className="px-3 py-2">50</td>
                          <td className="px-3 py-2">78</td>
                          <td className="px-3 py-2">80</td>
                          <td className="px-3 py-2">15</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Andersson_.22LR`} className="text-green-800 hover:underline">Andersson .22LR</Link></td>
                          <td className="px-3 py-2">1</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">49</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">10</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Focoso_357`} className="text-green-800 hover:underline">Focoso 357</Link></td>
                          <td className="px-3 py-2">2-6</td>
                          <td className="px-3 py-2">55</td>
                          <td className="px-3 py-2">64</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Mangiafico_410/45_Colt`} className="text-green-800 hover:underline">Mangiafico 410/45 Colt</Link></td>
                          <td className="px-3 py-2">1-5</td>
                          <td className="px-3 py-2">40</td>
                          <td className="px-3 py-2">70</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">95</td>
                          <td className="px-3 py-2">6</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Rhino_454`} className="text-green-800 hover:underline">Rhino 454</Link></td>
                          <td className="px-3 py-2">4-9</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Sundberg_454`} className="text-green-800 hover:underline">Sundberg 454</Link></td>
                          <td className="px-3 py-2">4-9</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">60</td>
                          <td className="px-3 py-2">86</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 px-4">* Higher value is better.</p>
                </div>
              )}
              {type === 'Bow' && (
                <div className="px-4 py-4">
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-700">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-3 py-2">Weapon</th>
                          <th className="px-3 py-2">Weapon Class</th>
                          <th className="px-3 py-2">Accuracy*</th>
                          <th className="px-3 py-2">Recoil</th>
                          <th className="px-3 py-2">Reload Speed*</th>
                          <th className="px-3 py-2">Hipshot</th>
                          <th className="px-3 py-2">Peak Draw Weight*</th>
                          <th className="px-3 py-2">Magazine Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Alexander_Longbow`} className="text-green-800 hover:underline">Alexander Longbow</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">30</td>
                          <td className="px-3 py-2">15</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">12</td>
                          <td className="px-3 py-2">60 lb</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Bearclaw_Lite_CB-60`} className="text-green-800 hover:underline">Bearclaw Lite CB-60</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">38</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">14</td>
                          <td className="px-3 py-2">60 lb</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Crosspoint_CB-165`} className="text-green-800 hover:underline">Crosspoint CB-165</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">45</td>
                          <td className="px-3 py-2">35</td>
                          <td className="px-3 py-2">20</td>
                          <td className="px-3 py-2">0</td>
                          <td className="px-3 py-2">165 lb</td>
                          <td className="px-3 py-2">5</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Hawk_Edge_CB-70`} className="text-green-800 hover:underline">Hawk Edge CB-70</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">28</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">70 lb</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Houyi_Recurve_Bow`} className="text-green-800 hover:underline">Houyi Recurve Bow</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">38</td>
                          <td className="px-3 py-2">20</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">70 lb</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Koter_CB-65_Bow`} className="text-green-800 hover:underline">Koter CB-65 Bow</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">24</td>
                          <td className="px-3 py-2">19</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">12</td>
                          <td className="px-3 py-2">65 lb</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Razorback_Lite_CB-60`} className="text-green-800 hover:underline">Razorback Lite CB-60</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">33</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">19</td>
                          <td className="px-3 py-2">60 lb</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2"><Link to={`/weapons/Stenberg_Takedown_Recurve_Bow`} className="text-green-800 hover:underline">Stenberg Takedown Recurve Bow</Link></td>
                          <td className="px-3 py-2">1-9</td>
                          <td className="px-3 py-2">38</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">100</td>
                          <td className="px-3 py-2">10</td>
                          <td className="px-3 py-2">50 lb</td>
                          <td className="px-3 py-2">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 px-4">* Higher value is better.</p>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
