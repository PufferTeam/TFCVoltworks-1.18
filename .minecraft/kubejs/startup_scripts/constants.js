// priority: 30000

global.colors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
];

global.limitedColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'white',
    'black'
]

global.removeAndHide = [
    'framedblocks:framed_torch',
    'framedblocks:framed_soul_torch',
    'framedblocks:framed_redstone_torch',
    'framedblocks:framed_chest',
    'framedblocks:framed_chest',
    'framedblocks:framed_rail_slope',
    'framedblocks:framed_powered_rail_slope',
    'framedblocks:framed_detector_rail_slope',
    'framedblocks:framed_activator_rail_slope',
    'framedblocks:framed_fancy_rail',
    'framedblocks:framed_fancy_powered_rail',
    'framedblocks:framed_fancy_detector_rail',
    'framedblocks:framed_fancy_activator_rail',
    'framedblocks:framed_fancy_rail_slope',
    'framedblocks:framed_fancy_powered_rail_slope',
    'framedblocks:framed_fancy_detector_rail_slope',
    'framedblocks:framed_fancy_activator_rail_slope',
    'framedblocks:framed_secret_storage',
    'tfc_metalwork:metal/block/copper',
    'tfc_metalwork:metal/block/copper_slab',
    'tfc_metalwork:metal/block/copper_stairs',
    'tfc_metalwork:metal/cut/copper',
    'tfc_metalwork:metal/cut/copper_slab',
    'tfc_metalwork:metal/cut/copper_stairs',
    'rosia:copper_wire',
    'rosia:copper_coil',
    'rosia:purple_steel_rifle',
    'rosia:bullets',
    'rosia:rifle_ammo',
    'createbigcannons:cast_iron_ingot',
    'createbigcannons:cast_iron_nugget',
    'createbigcannons:nethersteel_ingot',
    'createbigcannons:nethersteel_nugget',
    'createbigcannons:cast_iron_block',
    'createbigcannons:nethersteel_block',
    'thermal:apple_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:beetroot_block',
    'create:dough',
    'create:wheat_flour',
    'create:crushed_platinum_ore',
    'dynamictrees:cocoa_seed',
    'dynamictrees:azalea_seed',
    'dynamictrees:apple_oak_seed',
    'mekanism:ingot_refined_glowstone',
    'mekanism:ingot_refined_obsidian',
    'mekanism:nugget_refined_glowstone',
    'mekanism:nugget_refined_obsidian',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_chemical_tank',
    'pneumaticcraft:compressed_iron_helmet',
    'pneumaticcraft:compressed_iron_chestplate',
    'pneumaticcraft:compressed_iron_leggings',
    'pneumaticcraft:compressed_iron_boots',
    'pneumaticcraft:compressed_iron_gear',
    'pneumaticcraft:ingot_iron_compressed',
    'tfc:metal/bucket/red_steel',
    'tfc:metal/bucket/blue_steel',
    'vs_clockwork:universal_joint',
    'create:bar_of_chocolate',
    'create:tree_fertilizer',
    'create:sweet_roll',
    'create:chocolate_glazed_berries',
    'create:honeyed_apple',
    'create:empty_blaze_burner',
    'create:blaze_burner',
    'minecraft:barrier'
]

global.weatheringLevels = [
    'exposed',
    'weathered',
    'oxidized'
]

global.waxingAgents = [
    'minecraft:honeycomb',
    'immersivepetroleum:paraffin_wax',
    'firmalife:beeswax'
]

global.removeAndHideFluid = [
    'createaddition:seed_oil'
]

global.tfcGrass = [
    'tfc:peat_grass'
]

global.stoneToolsTypes = [
    'igneous_extrusive/60',
    'igneous_intrusive/60',
    'metamorphic/55',
    'sedimentary/50'
]

global.scrapingItems = [
    'small_soaked_hide',
    'medium_soaked_hide',
    'large_soaked_hide',
    'unrefined_paper'
]

global.tfcRockTypes = [
    'granite',
    'diorite',
    'gabbro',
    'shale',
    'claystone',
    'limestone',
    'conglomerate',
    'dolomite',
    'chert',
    'chalk',
    'rhyolite',
    'basalt',
    'andesite',
    'dacite',
    'quartzite',
    'slate',
    'phyllite',
    'schist',
    'gneiss',
    'marble'
]

global.tfcSandstoneTypes = [
    'brown',
    'white',
    'black',
    'red',
    'green',
    'pink',
    'yellow'
]

global.tfcSoilsTypes = [
    'silt',
    'loam',
    'sandy_loam',
    'silty_loam'
]

global.cutBlocksTypes = [
    'slab',
    'stairs'
]

global.cutBlocksStoneTypes = [
    'slab',
    'wall',
    'stairs'
]

global.invisibleQuernInput = [
    'dirt'
];

global.nonTfcVanillaWoodTypes = [
    'dark_oak',
    'jungle'
];

global.netherWoodTypes = [
    'crimson',
    'warped'
];

global.miscRoofTypes = [
    'granite',
    'diorite',
    'andesite',
    'sandstone',
    'red_sandstone',
    'blackstone',
    'deepslate',
    'stone',
    'prismarine_brick',
    'dark_prismarine',
    'nether_bricks',
    'red_nether_bricks',
    'cobblestone'
];

global.tfcSoils = [
    'silt',
    'loam',
    'sandy_loam',
    'silty_loam'
]

global.tfcSoils.forEach(i => global.tfcGrass.push(`tfc:grass/${i}`));
global.tfcSoils.forEach(i => global.tfcGrass.push(`tfc:clay_grass/${i}`));

global.tfcFoodSeeds = [
    'firmalife:seed_ball'
]

global.tfcFoods = [
    'barley',
    'oat',
    'rye',
    'maize',
    'wheat',
    'rice',
    'beet',
    'cabbage',
    'carrot',
    'garlic',
    'green_bean',
    'potato',
    'onion',
    'soybean',
    'squash',
    'sugarcane',
    'tomato',
    'jute',
    'pumpkin',
    'melon'
];
global.tfcFoods.forEach(i => global.tfcFoodSeeds.push(`tfc:seeds/${i}`));

global.tfcSaplings = [
    'tfc:plant/cherry_sapling',
    'tfc:plant/green_apple_sapling',
    'tfc:plant/lemon_sapling',
    'tfc:plant/olive_sapling',
    'tfc:plant/orange_sapling',
    'tfc:plant/peach_sapling',
    'tfc:plant/plum_sapling',
    'tfc:plant/red_apple_sapling',
    'tfc:plant/banana_sapling',
    'firmalife:plant/cocoa_sapling',
    'firmalife:plant/fig_sapling'
]

global.tfcWoodTypes = [
    'acacia',
    'ash',
    'aspen',
    'birch',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'maple',
    'oak',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'spruce',
    'sycamore',
    'white_cedar',
    'willow'
]
global.tfcWoodTypes.forEach(i => global.tfcSaplings.push(`tfc:wood/sapling/${i}`));

global.nonVanillatfcWoodTypes = [
    'ash',
    'aspen',
    'blackwood',
    'chestnut',
    'douglas_fir',
    'hickory',
    'kapok',
    'maple',
    'palm',
    'pine',
    'rosewood',
    'sequoia',
    'sycamore',
    'white_cedar',
    'willow'
]

global.tfcGlobalMetalTypes = [

];

global.tier6MetalTypes = [
    'blue_steel',
    'red_steel'
];
global.tier5MetalTypes = [
    'black_steel',
];
global.tier6MetalTypes.forEach(i => global.tier5MetalTypes.push(i));
global.tier4MetalTypes = [
    'steel',
];
global.tier5MetalTypes.forEach(i => global.tier4MetalTypes.push(i));
global.tier3MetalTypes = [
    'wrought_iron',
];
global.tier4MetalTypes.forEach(i => global.tier3MetalTypes.push(i));
global.tier2MetalTypes = [
    'bismuth_bronze',
    'bronze',
    'black_bronze'
];
global.tier3MetalTypes.forEach(i => global.tier2MetalTypes.push(i));
global.tier1MetalTypes = [
    'copper'
];
global.tier2MetalTypes.forEach(i => global.tier1MetalTypes.push(i));

global.tier6MetallumMetalTypes = [
    'tungsten_steel',
    'tungsten',
    'titanium',
    'thorium',
    'ferroboron'
];
global.tier5MetallumMetalTypes = [
    'enderium',
];
global.tier6MetallumMetalTypes.forEach(i => global.tier5MetallumMetalTypes.push(i));
global.tier4MetallumMetalTypes = [
    'signalum',
    'lumium'
];
global.tier5MetallumMetalTypes.forEach(i => global.tier4MetallumMetalTypes.push(i));
global.tier3MetallumMetalTypes = [
    'uranium',
    'pewter',
    'osmium',
    'osmiridium',
    'invar',
    'florentine_bronze',
    'compressed_iron',
    'cobalt',
    'boron',
    'beryllium_copper',
    'aluminum',
];
global.tier4MetallumMetalTypes.forEach(i => global.tier3MetallumMetalTypes.push(i));
global.tier2MetallumMetalTypes = [
    'nickel_silver',
    'mithril'
];
global.tier3MetallumMetalTypes.forEach(i => global.tier2MetallumMetalTypes.push(i));
global.tier1MetallumMetalTypes = [
];
global.tier2MetallumMetalTypes.forEach(i => global.tier1MetallumMetalTypes.push(i));

global.toolMetalTypes = [

];

global.tier1MetallumMetalTypes.forEach(i => global.toolMetalTypes.push(i));
global.tier1MetalTypes.forEach(i => global.toolMetalTypes.push(i));

global.forgingBonusWhitelist = [
    "fish_hook",
    "tuyere",
    "pickaxe_head",
    "propick_head",
    "axe_head",
    "shovel_head",
    "hoe_head",
    "chisel_head",
    "hammer_head",
    "saw_blade",
    "javelin_head",
    "sword_blade",
    "mace_head",
    "knife_blade",
    "scythe_blade",
    "helmet",
    "chestplate",
    "greaves",
    "boots",
    "shield"
];

global.rosiaMetalTypes = [
    'purple_steel',
    'invar'
]

global.tfcMetalTypes = [
    'bismuth',
    'bismuth_bronze',
    'black_bronze',
    'bronze',
    'brass',
    'copper',
    'gold',
    'nickel',
    'rose_gold',
    'silver',
    'tin',
    'zinc',
    'sterling_silver',
    'wrought_iron',
    'cast_iron',
    'steel',
    'black_steel',
    'blue_steel',
    'red_steel'
];
global.tfcMetalTypes.forEach(i => global.tfcGlobalMetalTypes.push(i));

global.tfcMetallumMetalTypes = [
    'andesite_alloy',
    'antimony',
    'alnico',
    'aluminum',
    'boron',
    'beryllium',
    'beryllium_copper',
    'blutonium',
    'constantan',
    'cobalt',
    'compressed_iron',
    'electrum',
    'platinum',
    'enderium',
    'ferroboron',
    'florentine_bronze',
    'graphite',
    'invar',
    'iridium',
    'lead',
    'lumium',
    'mithril',
    'nickel_silver',
    'osmium',
    'osmiridium',
    'pewter',
    'pink_slime',
    'refined_glowstone',
    'refined_obsidian',
    'signalum',
    'solder',
    'thorium',
    'titanium',
    'tungsten',
    'tungsten_steel',
    'uranium'
];
global.tfcMetallumMetalTypes.forEach(i => global.tfcGlobalMetalTypes.push(i));

global.firmalifeMetalTypes = [
    'chromium',
    'stainless_steel'
];
global.firmalifeMetalTypes.forEach(i => global.tfcGlobalMetalTypes.push(i));

global.tfcMeatTypes = [
    'beef',
    'calamari',
    'pork',
    'chicken',
    'quail',
    'mutton',
    'bear',
    'horse_meat',
    'pheasant',
    'turkey',
    'grouse',
    'venison',
    'wolf',
    'rabbit',
    'hyena',
    'duck',
    'chevon',
    'camelidae',
    'gran_feline',
    'shellfish',
    'cod',
    'salmon',
    'bluegill',
    'tropical_fish',
    'turtle'
];

global.tfcRawMeatTypes = [
    'minecraft:egg',
    'firmalife:food/bacon'
];
global.tfcMeatTypes.forEach(i => global.tfcRawMeatTypes.push(`tfc:food/${i}`));

global.tfcMoldTypes = [
    'ingot',
    'pickaxe_head',
    'shovel_head',
    'axe_head',
    'hoe_head',
    'chisel_head',
    'sword_blade',
    'mace_head',
    'saw_blade',
    'javelin_head',
    'hammer_head',
    'propick_head',
    'knife_blade',
    'scythe_blade',
    'bell',
    'fire_ingot'
];

global.vanillaWoodTypes = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'crimson',
    'warped'
];

global.botaniaWoodTypes = [
    'livingwood',
    'dreamwood'
]

global.quarkWoodTypes = [
    'azalea',
    'blossom'
]

global.vanillaRockTypes = [
    'stone',
    'mossy_cobblestone',
    'mossy_stone_brick',
    'stone_brick',
    'polished_blackstone',
    'polished_blackstone_brick',
    'cobblestone',
    'deepslate_tile',
    'deepslate_brick',
    'andesite',
    'granite',
    'diorite',
    'deepslate',
    'basalt',
    'red_sandstone',
    'sandstone',
    'cobbled_deepslate'
];

global.createRockTypes = [
    'granite',
    'diorite',
    'andesite',
    'calcite',
    'dripstone',
    'deepslate',
    'tuff',
    'asurine',
    'crimsite',
    'limestone',
    'ochrum',
    'scoria',
    'scorchia',
    'veridium'
];

global.thermalOreTypes = [
    'cinnabar',
    'niter',
    'sulfur',
    'tin',
    'lead',
    'silver',
    'nickel',
    'bronze',
    'electrum',
    'invar',
    'apatite',
    'constantan',
    'signalum',
    'lumium',
    'enderium'
]

global.ieOreTypes = [
    'aluminum',
    'lead',
    'silver',
    'saltpeter',
    'sulfur',
    'wood',
    'hop_graphite',
    'nickel',
    'uranium',
    'constantan',
    'electrum',
    'steel'
]

global.ieItems = [
    'seed',
    'fertilizer',
    'slag',
    'coal_coke',
    'dust_coke',
    'hemp_fiber',
    'wooden_barrel',
    'minecart_woodenbarrel',
    'gunpowder_barrel',
    'crate',
    'minecart_woodencrate',
    'reinforced_crate',
    'minecart_reinforcedcrate',
    'metal_barrel',
    'minecart_metalbarrel'
]

global.caItems = [
    'connector',
    'accumulator',
    'redstone_relay',
    'chocolate_cake',
    'honey_cake',
    'spool',
    'copper_spool',
    'gold_spool',
    'copper_wire',
    'iron_wire',
    'gold_wire',
    'cake_base',
    'cake_base_baked'
]

global.duplicateAnimals = [
    'horse',
    'sheep',
    'goat',
    'mule',
    'cod',
    'cat',
    'rabbit',
    'dolphin',
    'tropical_fish',
    'salmon',
    'fox',
    'squid',
    'cow',
    'turtle',
    'glow_squid',
    'polar_bear',
    'pufferfish',
    'chicken',
    'donkey',
    'ocelot',
    'panda',
    'wolf',
    'pig'
]

global.mekanismOreTypes = [
    'osmium',
    'tin',
    'steel',
    'bronze',
    'lead',
    'uranium',
    'fluorite'
]

global.modFluids = [
    'createbigcannons:molten_cast_iron',
    'createbigcannons:molten_bronze',
    'createaddition:seed_oil',
    'createaddition:bioethanol',
    'pneumaticcraft:oil',
    'pneumaticcraft:diesel',
    'pneumaticcraft:gasoline',
    'pneumaticcraft:biodiesel',
    'pneumaticcraft:lubricant',
    'pneumaticcraft:vegetable_oil',
    'thermal:creosote',
    'cofh_core:honey',
    'cofh_core:potion',
    'rosia:invar_fluid',
    'rosia:weak_purple_steel_fluid',
    'rosia:purple_steel_fluid',
    'createbigcannons:molten_steel',
    'createbigcannons:molten_nethersteel'
]

global.createOreTypes = [
    'brass',
    'zinc'
]

global.vanillaOreTypes = [
    'wooden',
    'golden',
    'iron',
    'gold',
    'stone',
    'lapis',
    'copper',
    'coal',
    'diamond',
    'netherite',
    'emerald',
    'lapis_lazuli',
    'redstone'
];

global.vanillaFoodTypes = [
    'beef',
    'porkchop',
    'rabbit_stew',
    'carrot',
    'baked_potato',
    'pufferfish',
    'cod',
    'apple',
    'potato',
    'tropical_fish',
    'bread',
    'poisonous_potato',
    'mushroom_stew',
    'dried_kelp',
    'honey_bottle',
    'dried_kelp_block',
    'beetroot_soup',
    'beetroot',
    'sweet_berries',
    'salmon',
    'rabbit',
    'chicken',
    'mutton'
];

global.vanillaCoralTypes = [
    'tube',
    'brain',
    'bubble',
    'fire',
    'horn'
];

global.tfcGrains = [
    'rye',
    'wheat',
    'oat',
    'maize',
    'barley'
]
global.invisibleQuernInput = [
    null
]
global.tfcGrains.forEach(i => global.invisibleQuernInput.push(`tfc:food/${i}_grain`));

global.mekanismItems = [
    'sugar_cane_block',
    'apple_block',
    'carrot_block',
    'potato_block',
    'beetroot_block',
    'oil_sand',
    'oil_red_sand',
    'ender_pearl_dust',
    'quartz_gear',
    'quartz_dust'
]

global.thermalItems = [
    'dust_quartz',
    'dust_sulfur',
    'sawdust',
    'salt',
    'creative_fluid_tank',
    'dirty_netherite_scrap',
    'block_charcoal',
    'creative_chemical_tank'
]

global.vanillaItems = [
    'calcite',
    'tuff',
    'dripstone_block',
    'grass_block',
    'grass',
    'seagrass',
    'tall_grass',
    'podzol',
    'crimson_nylium',
    'warped_nylium',
    'sand',
    'red_sand',
    'gravel',
    'nether_gold_ore',
    'nether_quartz_ore',
    'bookshelf',
    'pumpkin',
    'jack_o_lantern',
    'melon',
    'lantern',
    'soul_lantern',
    'mycelium',
    'nether_wart_block',
    'warped_wart_block',
    'iron_trapdoor',
    'gilded_blackstone',
    'magma_block',
    'fern',
    'seagrass',
    'dead_bush',
    'dandelion',
    'poppy',
    'blue_orchid',
    'allium',
    'red_tulip',
    'orange_tulip',
    'white_tulip',
    'azure_bluet',
    'pink_tulip',
    'oxeye_daisy',
    'cornflower',
    'lily_of_the_valley',
    'brown_mushroom',
    'red_mushroom',
    'nether_sprouts',
    'crimson_fungus',
    'warped_fungus',
    'crimson_roots',
    'warped_roots',
    'weeping_vines',
    'twisting_vines',
    'sugar_cane',
    'moss_carpet',
    'big_dripleaf',
    'small_dripleaf',
    'torch',
    'petrified_oak_slab',
    'chest',
    'crafting_table',
    'farmland',
    'furnace',
    'cactus',
    'soul_torch',
    'campfire',
    'soul_campfire',
    'hanging_roots',
    'chest_minecart',
    'infested_stone',
    'infested_cobblestone',
    'infested_stone_bricks',
    'infested_mossy_stone_bricks',
    'infested_cracked_stone_bricks',
    'infested_chiseled_stone_bricks',
    'infested_deepslate',
    'pufferfish_bucket',
    'salmon_bucket',
    'cod_bucket',
    'tropical_fish_bucket',
    'powder_snow_bucket',
    'axolotl_bucket',
    'bee_nest',
    'beehive',
    'brown_mushroom_block',
    'red_mushroom_block',
    'respawn_anchor',
    'mushroom_stem',
    'ancient_debris',
    'kelp',
    'netherite_scrap',
    'sunflower',
    'barrel',
    'lilac',
    'rose_bush',
    'peony',
    'large_fern',
    'candle',
    'composter',
    'cocoa_beans',
    'smoker',
    'azalea_leaves',
    'flowering_azalea_leaves',
    'azalea',
    'flowering_azalea',
    'blast_furnace',
    'diamond_horse_armor',
    'glow_berries',
    'amethyst_shard',
    'sea_pickle',
    'nautilus_shell',
    'netherite_block',
    'turtle_egg',
    'melon_seeds',
    'trapped_chest',
    'lily_pad',
    'cake',
    'shears',
    'cookie',
    'pointed_dripstone',
    'spore_blossom',
    'wheat_seeds',
    'pumpkin_seeds',
    'iron_horse_armor',
    'golden_horse_armor',
    'beetroot_seeds',
    'fishing_rod',
    'slime_ball',
    'dirt',
    'coarse_dirt',
    'rooted_dirt',
    'rabbit_hide',
    'dirt_path'
];