import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MapsList from '../pages/maps/MapList';
import MapPage from '../pages/maps/Map';
import RegionPage from '../pages/maps/RegionPage';
import SubregionPage from '../pages/maps/SubregionPage';
import WeaponsComparison from '../pages/loadouts/weapons/WeaponsComparison';
import WeaponsList from '../pages/loadouts/weapons/Weapons';
import Docent223 from '../pages/loadouts/weapons/rifles/223Docent';
import Huntsman270 from '../pages/loadouts/weapons/rifles/270Huntsman';
import Regent7mm from '../pages/loadouts/weapons/rifles/7mmRegentMagnum';
import Ranger243 from '../pages/loadouts/weapons/rifles/Ranger243';
import Rangemaster338 from '../pages/loadouts/weapons/rifles/Rangemaster338';
import WhitlockModel86 from '../pages/loadouts/weapons/rifles/WhitlockModel86';
import CoachmateLever4570 from '../pages/loadouts/weapons/rifles/CoachmateLever45-70';
import Virant22LR from '../pages/loadouts/weapons/rifles/Virant22LR';
import King470DB from '../pages/loadouts/weapons/rifles/King470DB';
import SolokhinMN1890 from '../pages/loadouts/weapons/rifles/SolokhinMN1980';
import CanningMagnum300 from '../pages/loadouts/weapons/rifles/300CanningMagnum';
import VasquezCyclone45 from '../pages/loadouts/weapons/rifles/VasquezCyclone45';
import Eckers3060 from '../pages/loadouts/weapons/rifles/Eckers3060';
import Martensson65 from '../pages/loadouts/weapons/rifles/Martensson65';
import Hudzik50Caplock from '../pages/loadouts/weapons/rifles/Hudzik50Caplock';
import M1Iwaniec from '../pages/loadouts/weapons/rifles/M1Iwaniec';
import FLSporter303 from '../pages/loadouts/weapons/rifles/FLSporter303';
import Kullman22h from '../pages/loadouts/weapons/rifles/Kullman22h';
import Zarza1522LR from '../pages/loadouts/weapons/rifles/Zarza1522LR';
import Zarza15223 from '../pages/loadouts/weapons/rifles/Zarza15223';
import Zarza10308 from '../pages/loadouts/weapons/rifles/Zarza10308';
import Curman50Inline from '../pages/loadouts/weapons/rifles/Curman50Inline';
import TsurugiLRR338 from '../pages/loadouts/weapons/rifles/TsurugiLRR338';
import Malmer7mmMagnum from '../pages/loadouts/weapons/rifles/Malmer7mmMagnum';
import OlssonModel23308 from '../pages/loadouts/weapons/rifles/OlssonModel23308';
import ZaganVarminter22250 from '../pages/loadouts/weapons/rifles/ZaganVarminter22250';
import MoradiModel1894 from '../pages/loadouts/weapons/rifles/MoradiModel1894';
import Arzyna300MagTactical from '../pages/loadouts/weapons/rifles/Arzyna300MagTactical';
import ForsElite300 from '../pages/loadouts/weapons/rifles/ForsElite300';
import Valgarda375 from '../pages/loadouts/weapons/rifles/Vallgarda375';
import GrandhareRifle from '../pages/loadouts/weapons/rifles/GandhareRifle';
import Johansson450 from '../pages/loadouts/weapons/rifles/Johansson450';
import Hansson3006 from '../pages/loadouts/weapons/rifles/Hansson3006';
import Perry308 from '../pages/loadouts/weapons/rifles/Perry308';
import QuistReaper762x39 from '../pages/loadouts/weapons/rifles/QuistReaper762x39';
import Cacciatore12G from '../pages/loadouts/weapons/shotguns/Cacciatore12G';
import CavershamSteward12G from '../pages/loadouts/weapons/shotguns/CavershamSteward12G';
import AmmunitionPage from '../pages/loadouts/ammunition/Ammunition';
import AmmoDetail from '../pages/loadouts/ammunition/AmmoDetail';
import SightsPage from '../pages/loadouts/sights/SightsPage';
import SightDetail from '../pages/loadouts/sights/SightDetail';
import WeaponDetail from '../pages/loadouts/weapons/WeaponDetail';
import CallersPage from '../pages/loadouts/Callers';
import ScentsPage from '../pages/loadouts/Scents';
import PlaceablesPage from '../pages/loadouts/Placeables';
import AnimalsListPage from '../pages/animals/Animals';
import FurTypesPage from '../pages/animals/AnimalsFurTypes';
import IntegrityPage from '../pages/animals/Integrity';
import AnimalDetailPage from '../pages/animals/AnimalDetailPage';
import NeedZones from '../pages/animals/NeedZones';
import TracksPage from '../pages/animals/Tracks';
import CallsPage from '../pages/animals/Calls';
import SpottingPage from '../pages/hunter/Spotting';
import NoisePage from '../pages/hunter/Noise';
import ScentPage from '../pages/hunter/Scent';
import Skill from '../pages/hunter/Skill';
import ConnectTheDots from '../pages/hunter/skills/ConnectTheDots';
import DazedAndConfused from '../pages/hunter/skills/DazedAndConfused';
import DisturbedVegetation from '../pages/hunter/skills/DisturbedVegetation';
import Endurance from '../pages/hunter/skills/Endurance';
import FatalAttraction from '../pages/hunter/skills/FatalAttraction';
import Haggle from '../pages/hunter/skills/Haggle';
import Hardened from '../pages/hunter/skills/Hardened';
import HillCaller from '../pages/hunter/skills/HillCaller';
import ImOnlyHappyWhenItRains from '../pages/hunter/skills/ImOnlyHappyWhenItRains';
import ImpactResistent from '../pages/hunter/skills/ImpactResistent';
import ImprovisedBlind from '../pages/hunter/skills/ImprovisedBlind';
import InnateTriangulation from '../pages/hunter/skills/InnateTriangulation';
import KeenEye from '../pages/hunter/skills/KeenEye';
import LocateTracks from '../pages/hunter/skills/LocateTracks';
import PackMule from '../pages/hunter/skills/PackMule';
import ScentThinkerer from '../pages/hunter/skills/ScentThinkerer';
import SightSpotting from '../pages/hunter/skills/SightsSpotting';
import SpottingKnowledge from '../pages/hunter/skills/SpottingKnowledge';
import Tag from '../pages/hunter/skills/Tag';
import TheMoreTheMerrier from '../pages/hunter/skills/TheMoreTheMerrier';
import TrackKnowledge from '../pages/hunter/skills/TrackKnowledge';
import WeatherPrediction from '../pages/hunter/skills/WeatherPrediction';
import WhosDeer from '../pages/hunter/skills/WhosDeer';
import WindPrediction from '../pages/hunter/skills/WindPrediction';
import SoftFeet from '../pages/hunter/skills/SoftFeet';
import Perks from '../pages/hunter/perks/Perks';
import BodyControl from '../pages/hunter/perks/BodyControl';
import Boomstick from '../pages/hunter/perks/Boomstick';
import BothEyesOpen from '../pages/hunter/perks/BothEyesOpen';
import BreathControl from '../pages/hunter/perks/BreathControl';
import FastShouldering from '../pages/hunter/perks/FastShouldering';
import FocusedShot from '../pages/hunter/perks/FocusedShot';
import FullDraw from '../pages/hunter/perks/FullDraw';
import IncreasedConfidence from '../pages/hunter/perks/IncreasedConfidence';
import LightningHands from '../pages/hunter/perks/LightningHands';
import LikeAPro from '../pages/hunter/perks/LikeAPro';
import MoveNShoot from '../pages/hunter/perks/MoveNShoot';
import MuscleMemory from '../pages/hunter/perks/MuscleMemory';
import PumpingIron from '../pages/hunter/perks/Pumpingiron';
import QuickDraw from '../pages/hunter/perks/QuickDraw';
import QuickFeet from '../pages/hunter/perks/QuickFeet';
import Ranger from '../pages/hunter/perks/Ranger';
import RecoilManagment from '../pages/hunter/perks/RecoilManagment';
import Recycle from '../pages/hunter/perks/Recycle';
import SprintNLoad from '../pages/hunter/perks/SprintNLoad';
import SteadyHands from '../pages/hunter/perks/SteadyHands';
import SurvivalInstinct from '../pages/hunter/perks/SurvivalInstinct';
import Traceshot from '../pages/hunter/perks/Traceshot';
import Windage from '../pages/hunter/perks/Windage';
import Zeroing from '../pages/hunter/perks/Zeroing';
import StartleCall from '../pages/hunter/skills/StartleCall';
import HeartRatePage from '../pages/animals/HeartRate';
import HarvestScreen from '../pages/animals/HarvestScreen';
import AnimalBehaviour from '../pages/animals/AnimalBehaviour';
import HuntingPressure from '../pages/animals/HuntingPressure';
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
import TentsPage from '../pages/hunting-structures/Elite2Tent';
import ExperiencePoints from '../pages/hunter/ExpierencePoints';
import CashPage from '../pages/cash/Cash';
import CollectablesPage from '../pages/collectibles/Collectables';
import GroundblindsPage from '../pages/hunting-structures/Groundblinds';
import LayoutBlindsPage from '../pages/hunting-structures/layoutBlinds';
import WaterfowlBlindsPage from '../pages/hunting-structures/waterfowlBlinds';
import HuntingStructuresPage from '../pages/hunting-structures/HuntingStructures';
import TripodStandsPage from '../pages/hunting-structures/TripodStands';
import VisibilityPage from '../pages/hunter/Visibility';
import MissionsPage from '../pages/missions/Missions';
import RatingPage from '../pages/animals/Rating';
import GreatOnes from '../pages/animals/GreatOnes';
import TruScore from '../pages/animals/TruRACS';
import Score from '../pages/loadouts/weapons/Score';
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
import AchievementsPage from '../pages/achievements/Achievements';
import WindPage from '../pages/hunter/Wind';
import LookoutPointsPage from '../pages/outposts/LookoutPoints';
import HuntClubPage from '../pages/huntClub/HuntClub';
import PointsOfInterestPage from '../pages/huntClub/pointsOfInterest';
import LandmarksPage from '../pages/huntClub/Landmarks';
import WhistlingPage from '../pages/hunter/Whistling';
import HuntingLodgePage from '../pages/huntClub/HuntingLodge';
import MultiTrophyMountsPage from '../pages/huntClub/MultiTrophyMounts';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/backpack" element={<Backpack />} />
      <Route path="/binoculars" element={<BinocularsPage />} />
      <Route path="/map-concept" element={<MapPage />} />
      <Route path="/hunt-club" element={<HuntClubPage />} />
      <Route path="/points-of-interest" element={<PointsOfInterestPage />} />
      <Route path="/landmarks" element={<LandmarksPage />} />
      <Route path="/whistling" element={<WhistlingPage />} />
      <Route path="/hunting-lodge" element={<HuntingLodgePage />} />
      <Route path="/multi-mounts" element={<MultiTrophyMountsPage />} />
      <Route path="/maps" element={<MapsList />} />
      <Route path="/maps/:regionId" element={<RegionPage />} />
      <Route path="/maps/:regionId/:subregionId" element={<SubregionPage />} />
      <Route path="/weapons" element={<WeaponsList />} />
      <Route path="/weapons/rifles/223-docent" element={<Docent223 />} />
      <Route path="/weapons/rifles/270-huntsman" element={<Huntsman270 />} />
      <Route path="/weapons/rifles/7mm-regent-magnum" element={<Regent7mm />} />
      <Route path="/weapons/rifles/ranger-243" element={<Ranger243 />} />
      <Route path="/weapons/rifles/rangemaster-338" element={<Rangemaster338 />} />
      <Route path="/weapons/rifles/whitlock-model-86" element={<WhitlockModel86 />} />
      <Route path="/weapons/rifles/coachmate-lever-45-70" element={<CoachmateLever4570 />} />
      <Route path="/weapons/rifles/virant-22lr" element={<Virant22LR />} />
      <Route path="/weapons/rifles/king-470db" element={<King470DB />} />
      <Route path="/weapons/rifles/solokhin-mn1890" element={<SolokhinMN1890 />} />
      <Route path="/weapons/rifles/300-canning-magnum" element={<CanningMagnum300 />} />
      <Route path="/weapons/rifles/vasquez-cyclone-45" element={<VasquezCyclone45 />} />
      <Route path="/weapons/rifles/eckers-30-06" element={<Eckers3060 />} />
      <Route path="/weapons/rifles/martensson-6-5mm" element={<Martensson65 />} />
      <Route path="/weapons/rifles/hudzik-50-caplock" element={<Hudzik50Caplock />} />
      <Route path="/weapons/rifles/m1-iwaniec" element={<M1Iwaniec />} />
      <Route path="/weapons/rifles/fl-sporter-303" element={<FLSporter303 />} />
      <Route path="/weapons/rifles/kullman-22h" element={<Kullman22h />} />
      <Route path="/weapons/rifles/zarza-15-22lr" element={<Zarza1522LR />} />
      <Route path="/weapons/rifles/zarza-15-223" element={<Zarza15223 />} />
      <Route path="/weapons/rifles/zarza-10-308" element={<Zarza10308 />} />
      <Route path="/weapons/rifles/curman-50-inline" element={<Curman50Inline />} />
      <Route path="/weapons/rifles/tsurugi-lrr-338" element={<TsurugiLRR338 />} />
      <Route path="/weapons/rifles/malmer-7mm-magnum" element={<Malmer7mmMagnum />} />
      <Route path="/weapons/rifles/johansson-450" element={<Johansson450 />} />
      <Route path="/weapons/rifles/Johansson450" element={<Johansson450 />} />
      <Route path="/weapons/Johansson_450" element={<Johansson450 />} />
      <Route path="/weapons/rifles/johansson-450/*" element={<Johansson450 />} />
      <Route path="/weapons/rifles/grandhare-rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/GrandhareRifle" element={<GrandhareRifle />} />
      <Route path="/weapons/Grandhare_Rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/gandhare-rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/GandhareRifle" element={<GrandhareRifle />} />
      <Route path="/weapons/Gandhare_Rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/fors-elite-300" element={<ForsElite300 />} />
      <Route path="/weapons/rifles/hansson-30-06" element={<Hansson3006 />} />
      <Route path="/weapons/rifles/perry-308" element={<Perry308 />} />
      <Route path="/weapons/rifles/quist-reaper-7-62x39" element={<QuistReaper762x39 />} />
      <Route path="/weapons/shotguns/cacciatore-12g" element={<Cacciatore12G />} />
      <Route path="/weapons/shotguns/caversham-steward-12g" element={<CavershamSteward12G />} />
      <Route path="/weapons/rifles/:weaponId" element={<WeaponDetail />} />
      <Route path="/weapons/rifles/moradi-model-1894" element={<MoradiModel1894 />} />
      <Route path="/weapons/rifles/MoradiModel1894" element={<MoradiModel1894 />} />
      <Route path="/weapons/Moradi_Model_1894" element={<MoradiModel1894 />} />
      <Route path="/weapons/rifles/valgarda-375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/Valgarda375" element={<Valgarda375 />} />
      <Route path="/weapons/Valgarda_375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/vallgarda-375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/Vallgarda375" element={<Valgarda375 />} />
      <Route path="/weapons/Vallgarda_375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/arzyna-300-mag-tactical" element={<Arzyna300MagTactical />} />
      <Route path="/weapons/rifles/Arzyna300MagTactical" element={<Arzyna300MagTactical />} />
      <Route path="/weapons/Arzyna_300_Mag_Tactical" element={<Arzyna300MagTactical />} />
      <Route path="/weapons/rifles/arzyna-300-mag-tactical/*" element={<Arzyna300MagTactical />} />
      {/* Explicit non-wildcard route to avoid unmatched-route warnings */}
      <Route path="/weapons/rifles/olsson-model-23-308" element={<OlssonModel23308 />} />
      <Route path="/weapons/rifles/olsson-model-23-308/*" element={<OlssonModel23308 />} />
      <Route path="/weapons/rifles/zagan-varminter-22-250" element={<ZaganVarminter22250 />} />
      <Route path="/weapons/comparison" element={<WeaponsComparison />} />
      <Route path="/weapons/:weaponId" element={<WeaponDetail />} />
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
      <Route path="/animals/fur-types" element={<FurTypesPage />} />
      <Route path="/animals/need-zones" element={<NeedZones />} />
      <Route path="/animals/tracks" element={<TracksPage />} />
      <Route path="/animals/calls" element={<CallsPage />} />
      <Route path="/animals/spotting" element={<SpottingPage />} />
      <Route path="/animals/noise" element={<NoisePage />} />
      <Route path="/animals/scent" element={<ScentPage />} />
      <Route path="/animals/heart-rate" element={<HeartRatePage />} />
      <Route path="/animals/integrity" element={<IntegrityPage />} />
      <Route path="/animals/wind" element={<WindPage />} />
      <Route path="/animals/:animalId" element={<AnimalDetailPage />} />
      <Route path="/harvest" element={<HarvestScreen />} />
      <Route path="/animals/behaviour" element={<AnimalBehaviour />} />
      <Route path="/animals/hunting-pressure" element={<HuntingPressure />} />
      <Route path="/multiplayer" element={<Multiplayer />} />
      <Route path="/atv" element={<ATV />} />
      <Route path="/outposts" element={<OutpostsPage />} />
      <Route path="/lookout-points" element={<LookoutPointsPage />} />
      <Route path="/tents" element={<TentsPage />} />
      <Route path="/groundblinds" element={<GroundblindsPage />} />
      <Route path="/layout-blinds" element={<LayoutBlindsPage />} />
      <Route path="/waterfowl-blinds" element={<WaterfowlBlindsPage />} />
      <Route path="/hunting-structures" element={<HuntingStructuresPage />} />
      <Route path="/tripod-stands" element={<TripodStandsPage />} />
      <Route path="/visibility" element={<VisibilityPage />} />
      <Route path="/missions" element={<MissionsPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/rating" element={<RatingPage />} />
      <Route path="/rating/great-ones" element={<GreatOnes />} />
      <Route path="/rating/score" element={<Score />} />
      <Route path="/truscore" element={<TruScore />} />
      <Route path="/experience" element={<ExperiencePoints />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/skills/connect-the-dots" element={<ConnectTheDots />} />
      <Route path="/skills/dazed-and-confused" element={<DazedAndConfused />} />
      <Route path="/skills/disturbed-vegetation" element={<DisturbedVegetation />} />
      <Route path="/skills/endurance" element={<Endurance />} />
      <Route path="/skills/fatal-attraction" element={<FatalAttraction />} />
      <Route path="/skills/haggle" element={<Haggle />} />
      <Route path="/skills/hardened" element={<Hardened />} />
      <Route path="/skills/hill-caller" element={<HillCaller />} />
      <Route path="/skills/im-only-happy-when-it-rains" element={<ImOnlyHappyWhenItRains />} />
      <Route path="/skills/impact-resistent" element={<ImpactResistent />} />
      <Route path="/skills/improvised-blind" element={<ImprovisedBlind />} />
      <Route path="/skills/innate-triangulation" element={<InnateTriangulation />} />
      <Route path="/skills/keen-eye" element={<KeenEye />} />
      <Route path="/skills/locate-tracks" element={<LocateTracks />} />
      <Route path="/skills/pack-mule" element={<PackMule />} />
      <Route path="/skills/scent-tinkerer" element={<ScentThinkerer />} />
      <Route path="/skills/sight-spotting" element={<SightSpotting />} />
      <Route path="/skills/spotting-knowledge" element={<SpottingKnowledge />} />
      <Route path="/skills/tag" element={<Tag />} />
      <Route path="/skills/the-more-the-merrier" element={<TheMoreTheMerrier />} />
      <Route path="/skills/track-knowledge" element={<TrackKnowledge />} />
      <Route path="/skills/weather-prediction" element={<WeatherPrediction />} />
      <Route path="/skills/whos-deer" element={<WhosDeer />} />
      <Route path="/skills/wind-prediction" element={<WindPrediction />} />
      <Route path="/perks" element={<Perks />} />
      <Route path="/perks/body-control" element={<BodyControl />} />
      <Route path="/perks/boomstick" element={<Boomstick />} />
      <Route path="/perks/both-eyes-open" element={<BothEyesOpen />} />
      <Route path="/perks/breath-control" element={<BreathControl />} />
      <Route path="/perks/fast-shouldering" element={<FastShouldering />} />
      <Route path="/perks/focused-shot" element={<FocusedShot />} />
      <Route path="/perks/full-draw" element={<FullDraw />} />
      <Route path="/perks/increased-confidence" element={<IncreasedConfidence />} />
      <Route path="/perks/lightning-hands" element={<LightningHands />} />
      <Route path="/perks/like-a-pro" element={<LikeAPro />} />
      <Route path="/perks/move-n-shoot" element={<MoveNShoot />} />
      <Route path="/perks/muscle-memory" element={<MuscleMemory />} />
      <Route path="/perks/pumping-iron" element={<PumpingIron />} />
      <Route path="/perks/quick-draw" element={<QuickDraw />} />
      <Route path="/perks/quick-feet" element={<QuickFeet />} />
      <Route path="/perks/ranger" element={<Ranger />} />
      <Route path="/perks/recoil-management" element={<RecoilManagment />} />
      <Route path="/perks/recycle" element={<Recycle />} />
      <Route path="/perks/sprint-and-load" element={<SprintNLoad />} />
      <Route path="/perks/steady-hands" element={<SteadyHands />} />
      <Route path="/perks/survival-instinct" element={<SurvivalInstinct />} />
      <Route path="/perks/traceshot" element={<Traceshot />} />
      <Route path="/perks/windage" element={<Windage />} />
      <Route path="/perks/zeroing" element={<Zeroing />} />
                <Route path="/skills/soft-feet" element={<SoftFeet />} />
          <Route path="/skills/startle-call" element={<StartleCall />} />
      <Route path="/cash" element={<CashPage />} />
      <Route path="/collectibles" element={<CollectablesPage />} />
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