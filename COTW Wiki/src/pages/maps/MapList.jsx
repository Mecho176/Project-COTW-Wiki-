import Card from '../../components/Card';
import { maps } from '../../data/maps';
import { Link } from 'react-router-dom';
import React from 'react';
import worldMap from '../../assets/world-map-vector-removebg-preview.png';
import reserveLogo from '../../assets/Layton_Lake-removebg-preview.png';
import hirschLogo from '../../assets/Hirschfelden_reserve_logo-removebg-preview.png';
import yukonLogo from '../../assets/Yukon_Valley-removebg-preview.png';
import './Maps.css';
import cuatroLogo from '../../assets/Cuatro_Collinas-removebg-preview.png';
import silverLogo from '../../assets/Silver_Ridge_Peaks-removebg-preview (1).png';
import teAwaroaLogo from '../../assets/Te_Awaroa-removebg-preview (1).png';
import ranchoLogo from '../../assets/Rancho_Del_Arroyo-removebg-preview.png';
import askiyLogo from '../../assets/Aisky_Ridge-removebg-preview.png';
import mississippiLogo from '../../assets/Mississippi_Acres-removebg-preview.png';
import salzwiesenLogo from '../../assets/Salzwiesen-removebg-preview.png';
import newEnglandLogo from '../../assets/New_England-removebg-preview.png';
import sundarLogo from '../../assets/Sundarpartan-removebg-preview.png';
import medvedLogo from '../../assets/Medved_taiga-removebg-preview.png';
import parqueFernandoLogo from '../../assets/Parque_Fernando-removebg-preview.png';
import revontuliLogo from '../../assets/Revontuli_Coast-removebg-preview.png';
import geminiLogo from '../../assets/Gemini_Generated_Image_do1hjzdo1hjzdo1h-removebg-preview.png';
import emeraldLogo from '../../assets/Emerald_coast-removebg-preview (1).png';

const Map = () => {
  return (
    <div className="map-container">
      {/* Inline CSS for hover effect on logos: enlarge + yellow tint */}
      <style>{` 
        .map-container img[class*="logo-"]{ 
          transition: transform 180ms ease, filter 180ms ease, box-shadow 180ms ease; 
          transform-origin: center center; 
          cursor: pointer; 
          border: none; 
          outline: none; 
        }
        .map-container a:focus, .map-container a:focus img{ outline: none; }
        .map-container img[class*="logo-"]:hover{ 
          transform: scale(1.25); 
          /* Tint the image strongly toward yellow (rgb(255,210,0)) and remove any glow/border */
          filter: sepia(1) saturate(10000%) hue-rotate(10deg) brightness(1);
          z-index: 999; 
          box-shadow: none; /* remove glow */
          border: none;
          outline: none;
        }
      `}</style>
      <img className="map-image" src={worldMap} alt="World Map" />
      <Link to="/maps/layton-lake" className="logo" style={{ '--mask': `url("${reserveLogo}")` }} data-tooltip="Layton Lake District">
        <img src={reserveLogo} alt="Layton Lake Logo" />
      </Link>
      <Link to="/maps/hirschfelden" className="logo-hirsch" style={{ '--mask': `url("${hirschLogo}")` }} data-tooltip="Hirschfelden Hunting Reserve">
        <img src={hirschLogo} alt="Hirschfelden Logo" />
      </Link>
      <Link to="/maps/yukon-valley" className="logo-yukon" style={{ '--mask': `url("${yukonLogo}")` }} data-tooltip="Yukon Valley">
        <img src={yukonLogo} alt="Yukon Valley Logo" />
      </Link>
      <Link to="/maps/cuatro-colinas" className="logo-cuatro" style={{ '--mask': `url("${cuatroLogo}")` }} data-tooltip="Cuatro Colinas Game Reserve">
        <img src={cuatroLogo} alt="Cuatro Colinas Logo" />
      </Link>
      <Link to="/maps/silver-ridge-peaks" className="logo-silver" style={{ '--mask': `url("${silverLogo}")` }} data-tooltip="Silver Ridge Peaks">
        <img src={silverLogo} alt="Silver Ridge Peaks Logo" />
      </Link>
      <Link to="/maps/te-awaroa" className="logo-teawaroa" style={{ '--mask': `url("${teAwaroaLogo}")` }} data-tooltip="Te Awaroa National Park">
        <img src={teAwaroaLogo} alt="Te Awaroa Logo" />
      </Link>
      <Link to="/maps/rancho-del-arroyo" className="logo-rancho" style={{ '--mask': `url("${ranchoLogo}")` }} data-tooltip="Rancho del Arroyo">
        <img src={ranchoLogo} alt="Rancho Del Arroyo Logo" />
      </Link>
      <Link to="/maps/askiy-ridge" className="logo-askiy" style={{ '--mask': `url("${askiyLogo}")` }} data-tooltip="Askiy Ridge Hunting Preserve">
        <img src={askiyLogo} alt="Askiy Ridge Logo" />
      </Link>
      <Link to="/maps/mississippi-acres" className="logo-mississippi" style={{ '--mask': `url("${mississippiLogo}")` }} data-tooltip="Mississippi Acres Preserve">
        <img src={mississippiLogo} alt="Mississippi Acres Logo" />
      </Link>
      <Link to="/maps/salzwiesen-park" className="logo-salzwiesen" style={{ '--mask': `url("${salzwiesenLogo}")` }} data-tooltip="Salzwiesen Park">
        <img src={salzwiesenLogo} alt="Salzwiesen Logo" />
      </Link>
      <Link to="/maps/revontuli-coast" className="logo-revontuli" style={{ '--mask': `url("${revontuliLogo}")` }} data-tooltip="Revontuli Coast">
        <img src={revontuliLogo} alt="Revontuli Coast Logo" />
      </Link>
      <Link to="/maps/emerald-coast" className="logo-emerald" style={{ '--mask': `url("${emeraldLogo}")` }} data-tooltip="Emerald Coast">
        <img src={emeraldLogo} alt="Emerald Coast Logo" />
      </Link>
      <Link to="/maps/new-england-mountains" className="logo-newengland" style={{ '--mask': `url("${newEnglandLogo}")` }} data-tooltip="New England Mountains">
        <img src={newEnglandLogo} alt="New England Logo" />
      </Link>
      <Link to="/maps/parque-fernando" className="logo-parque" style={{ '--mask': `url("${parqueFernandoLogo}")` }} data-tooltip="Parque Fernando">
        <img src={parqueFernandoLogo} alt="Parque Fernando Logo" />
      </Link>
      <Link to="/maps/gemini-generated" className="logo-gemini" style={{ '--mask': `url("${geminiLogo}")` }} data-tooltip="Gemini Generated Image">
        <img src={geminiLogo} alt="Gemini Generated Logo" />
      </Link>
      <Link to="/maps/sundarpatan" className="logo-sundar" style={{ '--mask': `url("${sundarLogo}")` }} data-tooltip="Sundarpatan">
        <img src={sundarLogo} alt="Sundarpatan Logo" />
      </Link>
      <Link to="/maps/medved-taiga" className="logo-medved" style={{ '--mask': `url("${medvedLogo}")` }} data-tooltip="Medved-Taiga National Park">
        <img src={medvedLogo} alt="Medved Taiga Logo" />
      </Link>
    </div>
  );
}

export default function MapsList() {
  const baseMaps = maps.filter((m) => !m.dlc);
  const dlcMaps = maps.filter((m) => m.dlc);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">All Hunting Reserves</h1>
      <p className="text-gray-700 mb-4">Reserves are game maps/worlds which are available for players to hunt on. Including <Link to="/dlc" className="text-green-800 hover:underline">DLCs</Link>, there are currently 17 reserves to play on.</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Base Game Reserves:</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {baseMaps.map((map) => (
            <Card
              key={map.id}
              title={map.name}
              image={map.image}
              badge={map.dlc ? "DLC" : null}
              link={`/maps/${map.id}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 text-gray-700">
        <p className="mb-2">While Layton Lake District and Hirschfelden Hunting Reserve are available with the base game, the other reserves have to be bought as DLCs. However, these reserves can be played even if a player does not own the DLC if they join a <Link to="/multiplayer" className="text-green-800 hover:underline">Multiplayer</Link> session in which the host owns the DLC.</p>

        <p>Reserves are located all around the world and each reserve has its own group of huntable <Link to="/animals" className="text-green-800 hover:underline">animals</Link>. Accordingly, the animals in a reserve reflect the wildlife that lives in the real-life counterpart of the reserve. A new reserve is planned to release in Winter 2025.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">DLCs:</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dlcMaps.map((map) => (
            <Card
              key={map.id}
              title={map.name}
              image={map.image}
              badge={map.dlc ? "DLC" : null}
              link={`/maps/${map.id}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <Map />
      </section>
    </div>
  );
}