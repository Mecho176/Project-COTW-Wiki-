// You can put this in a separate file like 'equipmentData.js' or at the top of your component
const equipmentData = [
  {
    category: "Lures",
    subsections: [
      {
        name: "Callers",
        link: "/lures/callers/names",
        items: [
          { name: "Antler Rattler", icon: "/icons/antler-rattler.png", link: "/lures/callers/Antler_Rattler" },
          { name: "Axis Deer \"Screamer\" Caller", icon: "/icons/axis-caller.png", link: "/lures/callers/Axis_Deer_Screamer_Caller" },
          { name: "Beacon Deluxe Bean Goose Caller", icon: "/icons/bean-goose.png", link: "/lures/callers/Beacon_Deluxe_Bean_Goose_Caller" },
          { name: "Beacon Deluxe Duck Caller", icon: "/icons/duck-caller.png", link: "/lures/callers/Beacon_Deluxe_Duck_Caller" },
          { name: "Beacon Deluxe Eurasian Teal Caller", icon: null, link: "/lures/callers/Beacon_Deluxe_Eurasian_Teal_Caller" },
          { name: "Beacon Deluxe Eurasian Wigeon Caller", icon: null, link: "/lures/callers/Beacon_Deluxe_Eurasian_Wigeon_Caller" },
          { name: "Beacon Deluxe Greylag Goose Caller", icon: null, link: "/lures/callers/Beacon_Deluxe_Greylag_Goose_Caller" },
          { name: "Buck \"Snort Wheeze\" Caller", icon: null, link: "/lures/callers/Buck_Snort_Wheeze_Caller" },
          { name: "Deer \"Bleat\" Caller", icon: null, link: "/lures/callers/Deer_Bleat_Caller" },
          { name: "Deer \"Grunt\" Caller", icon: null, link: "/lures/callers/Deer_Grunt_Caller" },
          { name: "Elk Caller", icon: "/icons/elk-caller.png", link: "/lures/callers/Elk_Caller" },
          { name: "Hazel Grouse Caller", icon: null, link: "/lures/callers/Hazel_Grouse_Caller" },
          { name: "Magpie Goose Caller", icon: null, link: "/lures/callers/Magpie_Goose_Caller" },
          { name: "Moose Caller", icon: "/icons/moose-caller.png", link: "/lures/callers/Moose_Caller" },
          { name: "Predator \"Distressed Fawn\" Caller", icon: null, link: "/lures/callers/Predator_Distressed_Fawn_Caller" },
          { name: "Predator \"Jackrabbit\" Caller", icon: null, link: "/lures/callers/Predator_Jackrabbit_Caller" },
          { name: "Quist Red Pro Electronic Caller", icon: null, link: "/lures/callers/Quist_Red_Pro_Electronic_Caller" },
          { name: "Raccoon \"Squall\" Caller", icon: null, link: "/lures/callers/Raccoon_Squall_Caller" },
          { name: "Red Deer Caller", icon: null, link: "/lures/callers/Red_Deer_Caller" },
          { name: "Roe Deer Caller", icon: null, link: "/lures/callers/Roe_Deer_Caller" },
          { name: "Sambar Mouth Caller", icon: null, link: "/lures/callers/Sambar_Mouth_Caller" },
          { name: "Short Reed Canada Goose Caller", icon: null, link: "/lures/callers/Short_Reed_Canada_Goose_Caller" },
          { name: "Wild Boar Caller", icon: null, link: "/lures/callers/Wild_Boar_Caller" },
          { name: "Wild Turkey Crow Caller", icon: null, link: "/lures/callers/Wild_Turkey_Crow_Caller" },
          { name: "Wild Turkey Mouth Caller", icon: null, link: "/lures/callers/Wild_Turkey_Mouth_Caller" },
        ]
      },
      {
        name: "Scents",
        link: "/lures/scents/names",
        items: [
          { name: "Blacktail Deer Scent", icon: "/icons/blacktail-scent.png", link: "/lures/scents/Blacktail_Deer_Scent" },
          { name: "Elk Scent", icon: "/icons/elk-scent.png", link: "/lures/scents/Elk_Scent" },
          { name: "Moose Scent", icon: "/icons/moose-scent.png", link: "/lures/scents/Moose_Scent" },
          { name: "Mule Deer Scent", icon: null, link: "/lures/scents/Mule_Deer_Scent" },
          { name: "Musk Deer Scent", icon: null, link: "/lures/scents/Musk_Deer_Scent" },
          { name: "Red Deer Scent", icon: "/icons/red-deer-scent.png", link: "/lures/scents/Red_Deer_Scent" },
          { name: "Roe Deer Scent", icon: null, link: "/lures/scents/Roe_Deer_Scent" },
          { name: "Whitetail Deer Scent", icon: null, link: "/lures/scents/Whitetail_Deer_Scent" },
          { name: "Wild Boar Scent", icon: null, link: "/lures/scents/Wild_Boar_Scent" },
        ]
      },
      {
        name: "Decoys",
        link: "/lures/decoys/names",
        items: [
          { name: "Bean Goose Decoys", icon: "/icons/bean-goose-decoy.png", link: "/lures/decoys/bean_goose_decoy" },
          { name: "Canada Goose Decoys", icon: "/icons/canada-goose.png", link: "/lures/decoys/canada_goose_decoy" },
          { name: "Cinnamon Teal Decoy", icon: null, link: "/lures/decoys/cinnamon_teal_decoy" },
          { name: "Eurasian Teal Decoy", icon: null, link: "/lures/decoys/eurasian_teal_decoy" },
          { name: "Eurasian Wigeon Decoy", icon: null, link: "/lures/decoys/eurasian_wigeon_decoy" },
          { name: "Goldeneye Decoy", icon: null, link: "/lures/decoys/goldeneye_decoy" },
          { name: "Green-Winged Teal", icon: null, link: "/lures/decoys/green_winged_teal_decoy" },
          { name: "Greylag Goose Decoys", icon: null, link: "/lures/decoys/greylag_goose_decoy" },
          { name: "Harlequin Duck Decoy", icon: null, link: "/lures/decoys/harlequin_duck_decoy" },
          { name: "Magpie Goose", icon: null, link: "/lures/decoys/magpie_goose_decoy" },
          { name: "Mallard Decoy", icon: "/icons/mallard.png", link: "/lures/decoys/mallard_decoy" },
          { name: "Tufted Duck Decoy", icon: null, link: "/lures/decoys/tufted_duck_decoy" },
          { name: "Wild Turkey Decoy", icon: null, link: "/lures/decoys/wild_turkey_female_decoy" },
        ]
      }
    ]
  },
  {
    category: "Consumables",
    subsections: [
      {
        name: "Consumables",
        items: [
          { name: "Doggy Biscuits", icon: "/icons/biscuits.png", link: "/consumables/doggy-biscuits" },
          { name: "First Aid Kit", icon: "/icons/medkit.png", link: "/consumables/first-aid-kit" },
          { name: "Scent Eliminator", icon: "/icons/scent-elim.png", link: "/consumables/scent-eliminator" },
        ]
      },
      {
        name: "Clothing",
        link: "/clothing",
        items: [
          { name: "Arctic Hunting Outfit", icon: "/icons/arctic.png", link: "/clothing/arctic-hunting-outfit" },
          { name: "Australian Bushwear Outfit", icon: null, link: "/clothing/australian-bushwear-outfit" },
          { name: "Blazing Orange Outfit", icon: null, link: "/clothing/blazing-orange-outfit" },
          { name: "Dry Grass Ghillie Suit", icon: null, link: "/clothing/dry-grass-ghillie-suit" },
          { name: "Dry Leaves Ghillie Suit", icon: null, link: "/clothing/dry-leaves-ghillie-suit" },
          { name: "Forest Camo Outfit", icon: null, link: "/clothing/forest-camo-outfit" },
          { name: "Olive Outfit", icon: null, link: "/clothing/olive-outfit" },
          { name: "Patagonian Gaucho Outfit", icon: null, link: "/clothing/patagonian-gaucho-outfit" },
          { name: "Remi Warren Outfit", icon: null, link: "/clothing/remi-warren-outfit" },
          { name: "Savanna Warden Outfit", icon: null, link: "/clothing/savanna-warden-outfit" },
          { name: "Tundra Ghillie Suit", icon: null, link: "/clothing/tundra-ghillie-suit" },
          { name: "Woodland Ghillie Suit", icon: null, link: "/clothing/woodland-ghillie-suit" },
        ]
      },
      {
        name: "Backpacks",
        link: "/backpack",
        items: [
          { name: "Exoadventurer 32 Light Daypack", icon: "/icons/backpack1.png", link: "/backpack?tab=exoadventurer" },
          { name: "Summit Explorer 6000 Pack", icon: "/icons/backpack2.png", link: "/backpack?tab=summit" },
          { name: "Trailscout Mini Daypack", icon: null, link: "/backpack?tab=trailscout" },
        ]
      }
    ]
  },
  {
    category: "Binoculars",
    link: "/binoculars",
    subsections: [
      {
        name: null, // null means we don't need a specific sub-label if it matches the main category
        items: [
           { name: "Apexview 7x42 Binoculars", icon: "/icons/bino1.png", link: "/binoculars?tab=apexview" },
           { name: "GenZero 8x50 Night Vision Rangefinder Binoculars", icon: "/icons/nightvision.png", link: "/binoculars?tab=genzero" },
           { name: "Vantage 8x42 Binoculars", icon: null, link: "/binoculars?tab=vantage" },
           { name: "Venture 5x30 Rangefinder", icon: null, link: "/binoculars?tab=venture" },
        ]
      }
    ]
  },
  {
    category: "Portable Structures",
    subsections: [
      {
        name: null, 
        items: [
           { name: "Elite 2 Tent", icon: "/icons/tent.png", link: "/tents" },
           { name: "Groundblinds", icon: "/icons/blind.png", link: "/groundblinds" },
           { name: "Layout Blinds", icon: null, link: "/layout-blinds" },
           { name: "Water Layout Blind", icon: null },
           { name: "Waterfowl Blinds", icon: null },
           { name: "Treestands", icon: "/icons/treestand.png", link: "/hunting-structures" },
           { name: "Tripod Stands", icon: null, link: "/hunting-structures" },
        ]
      }
    ]
  }
];
export default equipmentData;
