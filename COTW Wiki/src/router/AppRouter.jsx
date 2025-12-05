import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MapsList from '../pages/maps/MapList';
import RegionPage from '../pages/maps/RegionPage';
import SubregionPage from '../pages/maps/SubregionPage';
import WeaponsComparison from '../pages/loadouts/weapons/WeaponsComparison';
import WeaponsList from '../pages/loadouts/weapons/WeaponsList';
import AmmunitionPage from '../pages/loadouts/weapons/Ammunition';
import AmmoDetail from '../pages/loadouts/weapons/AmmoDetail';
import SightsPage from '../pages/loadouts/weapons/SightsPage';
import SightDetail from '../pages/loadouts/weapons/SightDetail';
import WeaponDetail from '../pages/loadouts/weapons/WeaponDetail';
import CallersPage from '../pages/loadouts/Callers';
import ScentsPage from '../pages/loadouts/Scents';
import PlaceablesPage from '../pages/loadouts/Placeables';
import AnimalsListPage from '../pages/animals/Animals';
import IntegrityPage from '../pages/animals/Integrity';
import AnimalDetailPage from '../pages/animals/AnimalDetailPage';
import NeedZones from '../pages/animals/NeedZones';
import HarvestScreen from '../pages/harvest/HarvestScreen';
import DecoysPage from '../pages/lures/Decoys';
import Multiplayer from '../pages/multiplayer/Multiplayer';
import LuresPage from '../pages/lures/Lures';
import ScentsNames from '../pages/lures/ScentsNames';
import ScentDetail from '../pages/lures/ScentDetail';
import DecoysNames from '../pages/lures/DecoysNames';
import CallersNames from '../pages/lures/CallersNames';
import DecoyDetail from '../pages/lures/DecoyDetail';
import CallerDetail from '../pages/lures/CallerDetail';
import ATV from '../pages/atv/ATV';
import DLC from '../pages/dlc/DLC';
import OutpostsPage from '../pages/outposts/Outposts';
import TentsPage from '../pages/tents/Elite2Tent';
import ExperiencePage from '../pages/experience/Experience';
import CashPage from '../pages/cash/Cash';
import GroundblindsPage from '../pages/groundblinds/Groundblinds';
import LayoutBlindsPage from '../pages/layoutBlinds/layoutBlinds';
import HuntingStructuresPage from '../pages/hunting-structures/HuntingStructures';
import VisibilityPage from '../pages/visibility/Visibility';
import MissionsPage from '../pages/missions/Missions';
import RatingPage from '../pages/rating/Rating';
import GreatOnes from '../pages/rating/GreatOnes';
import TruScore from '../pages/rating/TruScore';
import Score from '../pages/rating/Score';
import DoggyBiscuits from '../pages/consumable/Consumables/DoggyBiscuits';
import FirstAidKit from '../pages/consumable/Consumables/FirstAidKit';
import ScentEliminator from '../pages/consumable/Consumables/ScentEliminator';
import ArcticHuntingOutfit from '../pages/consumable/clothing/ArcticHuntingOutfit';
import AustralianBushwearOutfit from '../pages/consumable/clothing/AustralianBushwearOutfit';
import BlazingOrangeOutfit from '../pages/consumable/clothing/BlazingOrangeOutfit';
import DryGrassGhillieSuit from '../pages/consumable/clothing/DryGrassGhillieSuit';
import DryLeavesGhillieSuit from '../pages/consumable/clothing/DryLeavesGhillieSuit';
import ForestCamoOutfit from '../pages/consumable/clothing/ForestCamoOutfit';
import OliveOutfit from '../pages/consumable/clothing/OliveOutfit';
import PatagonianGauchoOutfit from '../pages/consumable/clothing/PatagonianGauchoOutfit';
import RemiWarrenOutfit from '../pages/consumable/clothing/RemiWarrenOutfit';
import SavannaWardenOutfit from '../pages/consumable/clothing/SavannaWardenOutfit';
import TundraGhillieSuit from '../pages/consumable/clothing/TundraGhillieSuit';
import WoodlandGhillieSuit from '../pages/consumable/clothing/WoodlandGhillieSuit';
import Clothing from '../pages/consumable/clothing/Clothing';
import Backpack from '../pages/backpack/Backpack';
import BinocularsPage from '../pages/binoculars/Binoculars';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/backpack" element={<Backpack />} />
      <Route path="/binoculars" element={<BinocularsPage />} />
      <Route path="/maps" element={<MapsList />} />
      <Route path="/maps/:regionId" element={<RegionPage />} />
      <Route path="/maps/:regionId/:subregionId" element={<SubregionPage />} />
      <Route path="/weapons/list" element={<WeaponsList />} />
      <Route path="/weapons/:weaponId" element={<WeaponDetail />} />
      <Route path="/weapons" element={<WeaponsComparison />} />
      <Route path="/weapons/ammo" element={<AmmunitionPage />} />
      <Route path="/weapons/ammo/:ammoId" element={<AmmoDetail />} />
      <Route path="/weapons/sights" element={<SightsPage />} />
      <Route path="/weapons/sights/:sightId" element={<SightDetail />} />
      <Route path="/loadouts/callers" element={<CallersPage />} />
      <Route path="/loadouts/scents" element={<ScentsPage />} />
      <Route path="/loadouts/placeables" element={<PlaceablesPage />} />
      <Route path="/lures" element={<LuresPage />} />
      <Route path="/lures/scents/names" element={<ScentsNames />} />
      <Route path="/lures/scents/:scentId" element={<ScentDetail />} />
      <Route path="/lures/decoys/names" element={<DecoysNames />} />
      <Route path="/lures/decoys/:decoyId" element={<DecoyDetail />} />
      <Route path="/lures/callers/:callerId" element={<CallerDetail />} />
      <Route path="/lures/callers/names" element={<CallersNames />} />
      <Route path="/animals" element={<AnimalsListPage />} />
      <Route path="/animals/need-zones" element={<NeedZones />} />
      <Route path="/animals/integrity" element={<IntegrityPage />} />
      <Route path="/animals/:animalId" element={<AnimalDetailPage />} />
      <Route path="/harvest" element={<HarvestScreen />} />
      <Route path="/multiplayer" element={<Multiplayer />} />
      <Route path="/atv" element={<ATV />} />
      <Route path="/outposts" element={<OutpostsPage />} />
      <Route path="/tents" element={<TentsPage />} />
      <Route path="/groundblinds" element={<GroundblindsPage />} />
      <Route path="/layout-blinds" element={<LayoutBlindsPage />} />
      <Route path="/hunting-structures" element={<HuntingStructuresPage />} />
      <Route path="/visibility" element={<VisibilityPage />} />
      <Route path="/missions" element={<MissionsPage />} />
      <Route path="/rating" element={<RatingPage />} />
      <Route path="/rating/great-ones" element={<GreatOnes />} />
      <Route path="/rating/score" element={<Score />} />
      <Route path="/truscore" element={<TruScore />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/cash" element={<CashPage />} />
      <Route path="/dlc" element={<DLC />} />
      <Route path="/lures/decoys" element={<DecoysPage />} />
      <Route path="/consumables/doggy-biscuits" element={<DoggyBiscuits />} />
      <Route path="/consumables/first-aid-kit" element={<FirstAidKit />} />
      <Route path="/consumables/scent-eliminator" element={<ScentEliminator />} />
      <Route path="/clothing/arctic-hunting-outfit" element={<ArcticHuntingOutfit />} />
      <Route path="/clothing/australian-bushwear-outfit" element={<AustralianBushwearOutfit />} />
      <Route path="/clothing/blazing-orange-outfit" element={<BlazingOrangeOutfit />} />
      <Route path="/clothing/dry-grass-ghillie-suit" element={<DryGrassGhillieSuit />} />
      <Route path="/clothing/dry-leaves-ghillie-suit" element={<DryLeavesGhillieSuit />} />
      <Route path="/clothing/forest-camo-outfit" element={<ForestCamoOutfit />} />
      <Route path="/clothing/olive-outfit" element={<OliveOutfit />} />
      <Route path="/clothing/patagonian-gaucho-outfit" element={<PatagonianGauchoOutfit />} />
      <Route path="/clothing/remi-warren-outfit" element={<RemiWarrenOutfit />} />
      <Route path="/clothing/savanna-warden-outfit" element={<SavannaWardenOutfit />} />
      <Route path="/clothing/tundra-ghillie-suit" element={<TundraGhillieSuit />} />
      <Route path="/clothing/woodland-ghillie-suit" element={<WoodlandGhillieSuit />} />
      <Route path="/clothing" element={<Clothing />} />
    </Routes>
  );
}