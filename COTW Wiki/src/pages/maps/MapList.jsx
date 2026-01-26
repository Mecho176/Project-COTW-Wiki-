import Card from '../../components/Card';
import { maps } from '../../data/maps';
import { Link } from 'react-router-dom';
import React from 'react';
import './Maps.css';
import WorldMap from '../../components/WorldMap';

const Reserves = () => {

  // --- DATA SOURCES ---

  const baseGameReserves = [
    "Hirschfelden Hunting Reserve",
    "Layton Lake District"
  ];

  const dlcReserves = [
    "Medved-Taiga National Park",
    "Vurhonga Savanna",
    "Parque Fernando",
    "Yukon Valley",
    "Cuatro Colinas Game Reserve",
    "Silver Ridge Peaks",
    "Te Awaroa National Park",
    "Rancho del Arroyo",
    "Mississippi Acres Preserve",
    "Revontuli Coast",
    "New England Mountains",
    "Emerald Coast",
    "Sundarpatan",
    "Salzwiesen Park",
    "Askiy Ridge Hunting Preserve",
    "Tòrr nan Sithean"
  ];

  // --- STYLES OBJECT (Copied and adapted from CapeBuffalo) ---
  const styles = {
    container: {
      backgroundColor: '#0b1a26',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '40px',
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    innerWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    mainHeader: {
      fontSize: '2.5rem',
      fontWeight: '400',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '15px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    mainColumn: {
      flex: 1,
      maxWidth: '900px', // Restricted width for better readability on text-heavy pages
    },
    link: {
      color: '#6fb2e6',
      textDecoration: 'none',
      cursor: 'pointer',
      fontWeight: '500',
    },
    // Adapted H2 for list headers
    sectionHeader: {
        fontSize: '1.2rem',
        color: '#dbe4eb',
        marginTop: '25px',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '25px',
        marginBottom: '20px',
    },
    listItem: {
        marginBottom: '5px',
        color: '#6fb2e6', // Using the link color for list items as they appear to be links in the screenshot
        cursor: 'pointer',
    },
    paragraph: {
        marginBottom: '20px',
        color: '#dbe4eb',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Reserves</span>
        </div>

        {/* --- MAIN CONTENT --- */}
        <main style={styles.mainColumn}>

          {/* Intro Text */}
          <p style={styles.paragraph}>
            <strong>Reserves</strong> are game maps/worlds which are available for players to hunt on. Including <span style={styles.link}>DLCs</span>, there are currently 18 reserves to play on.
          </p>

          {/* Base Game List */}
          <div style={styles.sectionHeader}>Base game:</div>
          <ul style={styles.list}>
            {baseGameReserves.map((reserve, index) => (
                <li key={index} style={styles.listItem}>{reserve}</li>
            ))}
          </ul>

          {/* DLC List */}
          <div style={styles.sectionHeader}>DLCs:</div>
          <ul style={styles.list}>
            {dlcReserves.map((reserve, index) => (
                <li key={index} style={styles.listItem}>{reserve}</li>
            ))}
          </ul>

          {/* Multiplayer Info */}
          <p style={styles.paragraph}>
            While Layton Lake District and Hirschfelden Hunting Reserve are available with the base game, the other reserves have to be bought as DLCs. However, these reserves can be played even if a player does not own the DLC if they join a <span style={styles.link}>Multiplayer</span> session in which the host owns the DLC.
          </p>

          {/* Animals Info */}
          <p style={styles.paragraph}>
            Reserves are located all around the world and each reserve has its own group of huntable <span style={styles.link}>animals</span>. Accordingly, the animals in a reserve reflect the wildlife that lives in the real-life counterpart of the reserve.
          </p>

        </main>
      </div>
    </div>
  );
};

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
  return ( 
    <div>

      <section className="mt-8">
        <Reserves />
          <div style={{ margin: '20px 0', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', color: '#dbe4eb' }}>
            <h2 style={{ fontSize: '1.5rem', margin: '0 0 8px 0' }}>Map</h2>
            <p style={{ margin: 0 }}>Click on the reserve icon on the interactive map to get directed to the wiki page of the respective reserve:</p>
          </div>
          <WorldMap />
      </section>
    </div>
  );
}