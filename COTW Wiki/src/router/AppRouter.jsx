import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MapsList from '../pages/maps/MapList';
import RegionPage from '../pages/maps/RegionPage';
import SubregionPage from '../pages/maps/SubregionPage';
import WeaponsComparison from '../pages/loadouts/weapons/WeaponsComparison';
import WeaponsList from '../pages/loadouts/weapons/WeaponsList';
import AmmunitionPage from '../pages/loadouts/weapons/Ammunition';
import SightsPage from '../pages/loadouts/weapons/SightsPage';
import WeaponDetail from '../pages/loadouts/weapons/WeaponDetail';
import CallersPage from '../pages/loadouts/Callers';
import ScentsPage from '../pages/loadouts/Scents';
import PlaceablesPage from '../pages/loadouts/Placeables';
import AnimalsListPage from '../pages/animals/Animals';
import AnimalDetailPage from '../pages/animals/AnimalDetailPage';
import DecoysPage from '../pages/lures/Decoys';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maps" element={<MapsList />} />
      <Route path="/maps/:regionId" element={<RegionPage />} />
      <Route path="/maps/:regionId/:subregionId" element={<SubregionPage />} />
      <Route path="/weapons/list" element={<WeaponsList />} />
      <Route path="/weapons/:weaponId" element={<WeaponDetail />} />
      <Route path="/weapons" element={<WeaponsComparison />} />
      <Route path="/weapons/ammo" element={<AmmunitionPage />} />
      <Route path="/weapons/sights" element={<SightsPage />} />
      <Route path="/loadouts/callers" element={<CallersPage />} />
      <Route path="/loadouts/scents" element={<ScentsPage />} />
      <Route path="/loadouts/placeables" element={<PlaceablesPage />} />
      <Route path="/animals" element={<AnimalsListPage />} />
      <Route path="/animals/:animalId" element={<AnimalDetailPage />} />
      <Route path="/lures/decoys" element={<DecoysPage />} />
    </Routes>
  );
}