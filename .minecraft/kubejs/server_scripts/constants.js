// priority: 3000

//--------------------------------------------------------------
//Internal
//--------------------------------------------------------------

global.recipeOutputToRemove = [
    'computercraft:computer_normal',
    'minecraft:bedrock'
];
global.removeAndHide.forEach(i => global.recipeOutputToRemove.push(i));

global.recipeIdToRemove = [
    'create:filling/honey_bottle',
    'create:filling/chocolate_glazed_berries',
    'create:filling/sweet_roll',
    'create:filling/honeyed_apple',
    'create:filling/grass_block',
    'create:mixing/chocolate',
    'create:mixing/tea',
    'create:mixing/dough',
    'createaddition:mixing/biomass_from_sticks',
    'createaddition:mixing/biomass_from_flowers',
    'createaddition:mixing/biomass_from_crops',
    'createaddition:mixing/biomass_from_plant_foods',
    'createaddition:mixing/biomass_from_plants',
    'createaddition:mixing/biomass_from_saplings',
    'createaddition:mixing/biomass_from_honeycomb',
    'createaddition:mixing/biomass_from_leaves',
    'tfc:barrel/dye/bleach_bricks',
    'tfc:barrel/dye/bleach_shulkers',
    'tfc:barrel/dye/bleach_raw',
    'tfc:barrel/dye/bleach_polished',
    'tfc:barrel/dye/bleach_concrete_powder',
    'tfc:barrel/dye/bleach_candles',
    'tfc:crafting/vanilla/armor_stand',
    'tfc:anvil/red_steel_bucket',
    'tfc:anvil/blue_steel_bucket',
    'tconstruct:common/glass/vanilla/daylight_sensor',
    'tconstruct:common/slime/lead',
    'quark:mobs/smelting/cooked_frog_leg',
    'quark:mobs/smoking/cooked_frog_leg',
    'mekanism:paper',
    'immersiveengineering:crafting/paper_from_sawdust',
    'create:pressing/sugar_cane',
    'tfc:heating/torch_from_stick_bunch',
    'firmalife:casting/chromium_ingot_fire',
    'firmalife:casting/stainless_steel_ingot_fire',
    'tfc:heating/torch_from_stick',
    'framedblocks:framing_saw/framed_fancy_rail',
    'framedblocks:framing_saw/framed_fancy_rail_slope',
    'framedblocks:framing_saw/framed_fancy_powered_rail_slope',
    'framedblocks:framing_saw/framed_fancy_detector_rail_slope',
    'framedblocks:framing_saw/framed_fancy_activator_rail_slope',
    'framedblocks:framing_saw/framed_rail_slope',
    'framedblocks:framing_saw/framed_powered_rail_slope',
    'framedblocks:framing_saw/framed_detector_rail_slope',
    'framedblocks:framing_saw/framed_activator_rail_slope',
    'framedblocks:framing_saw/framed_secret_storage',
    'create:crafting/kinetics/copper_valve_handle_from_others',
    'extendedflywheels:brass_flywheel_from_painted_flywheel',
    'extendedflywheels:steel_flywheel_from_painted_flywheel',
    'extendedflywheels:iron_flywheel_from_painted_flywheel',
    'immersiveengineering:alloysmelter/rose_gold',
    'thermal:gunpowder_4',
    'immersiveengineering:crafting/gunpowder_from_dusts',
    'thermal:earth_charge/prismarine_shard_from_prismarine_bricks',
    'thermal:earth_charge/quartz_from_quartz_block',
    'thermal:earth_charge/prismarine_shard_from_prismarine',
    'thermal:ice_charge/ice_from_water_bucket',
    'thermal:ice_charge/obsidian_from_lava_bucket',
    'thermal:lightning_charge/witch_from_villager',
    'thermal:lightning_charge/zombified_piglin_from_pig',
    'create:crafting/kinetics/white_sail',
    'create:crafting/kinetics/mechanical_press',
    'create:crafting/kinetics/encased_fan',
    'create:splashing/stained_glass',
    'create:splashing/stained_glass_pane',
    'create:splashing/sand',
    'quark:tweaks/crafting/dirty_glass',
    'create:crafting/materials/sand_paper',
    'createaddition:filling/treated_wood_planks',
    'create:mixing/lava_from_cobble',
    'woodencog:crafting/kinetics/windmill_bearing',
    'woodencog:crafting/kinetics/item_drain',
    'create:crafting/logistics/redstone_contact',
    'immersiveengineering:crafting/treated_wood_horizontal',
    'immersiveengineering:crafting/sawdust',
    'create:crafting/materials/andesite_alloy',
    'create:mixing/andesite_alloy',
    'create:crafting/materials/andesite_alloy_from_zinc',
    'create:mixing/andesite_alloy_from_zinc',
    'quark:building/crafting/oak_ladder',
    'thermal:machines/smelter/smelter_iron_armor',
    'thermal:machines/smelter/smelter_iron_tools',
    'thermal:machines/smelter/smelter_gold_armor',
    'thermal:machines/smelter/smelter_gold_tools',
    'mekanism:charcoal',
    'woodencog:crafting/kinetics/steam_whistle',
    'woodencog:crafting/kinetics/analog_lever',
    'create:crafting/kinetics/spout',
    'woodencog:crafting/kinetis/adjustable_chain_gearshift',
    'supplementaries:strings',
    'immersiveengineering:crafting/string',
    'create:crafting/sequenced_assembly/sturdy_sheet',
    'woodencog:crafting/sequenced_assembly/sturdy_sheet',
    'create:mechanical_crafting/crushing_wheel',
    'woodencog:crafting/mechanical_crafting/crushing_wheel',
    'tfc:quern/cryolite',
    'tfc:crafting/gunpowder',
    'immersiveengineering:crafting/component_iron',
    'immersiveengineering:crafting/component_steel',
    'createaddition:crafting/accumulator_conversion',
    'create:sequenced_assembly/track',
    'woodencog:crafting/sequenced_assembly/track',
    'railways:sequenced_assembly/track_spruce',
    'pneumaticcraft:thermo_plant/lubricant_from_biodiesel',
    'pneumaticcraft:thermo_plant/lubricant_from_diesel',
    'pneumaticcraft:thermo_plant/vegetable_oil_from_crops',
    'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds',
    'pneumaticcraft:thermo_plant/yeast_culture',
    'pneumaticcraft:thermo_plant/kerosene',
    'pneumaticcraft:thermo_plant/ethanol_from_sugar',
    'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato',
    'pneumaticcraft:thermo_plant/ethanol_from_potato',
    'pneumaticcraft:thermo_plant/ethanol_from_melon',
    'pneumaticcraft:thermo_plant/ethanol_from_sweet_berries',
    'pneumaticcraft:thermo_plant/ethanol_from_apple',
    'pneumaticcraft:thermo_plant/salmon_tempura',
    'pneumaticcraft:thermo_plant/chips',
    'pneumaticcraft:thermo_plant/gasoline',
    'pneumaticcraft:refinery/oil_2',
    'pneumaticcraft:refinery/oil_3',
    'pneumaticcraft:refinery/oil_4',
    'immersiveengineering:crafting/rs_engineering',
    'immersiveengineering:crafting/light_engineering',
    'immersiveengineering:crafting/heavy_engineering',
    'immersivepetroleum:refinery/acetaldehyde',
    'immersiveengineering:refinery/acetaldehyde',
    'immersiveengineering:bottling/duroplast_plate',
    'immersiveengineering:refinery/resin',
    'immersivepetroleum:hydrotreater/propylene_plastic',
    'immersivepetroleum:hydrotreater/ethylene_plastic',
    'create:crafting/kinetics/white_sailfrom_conversion',
    'pneumaticcraft:fluid_mixer/biodiesel',
    'createaddition:compat/immersiveengineering/fabric_sail',
    'createaddition:mixing/bioethanol',

    'rosia:alloy/invar',
    'rosia:alloy/weak_purple_steel',
    'rosia:blast_furnace/purple_steel',

    'thermal:machines/bottler/bottler_honey_bottle',
    'thermal:machines/bottler/bottler_mossy_stone_bricks'
];

global.recipeModToRemove = [
    'minecraft'
];

global.recipeTypeToRemove = [
    'create:item_application',
    'create:crushing',
    'create:deploying',
    'create:milling',
    'create:item_application',
    
    'create_mechanical_extruder:extruding',

    'createaddition:rolling',

    'createbigcannons:melting',

    'immersiveengineering:blast_furnace',
    'immersiveengineering:crusher',
    'immersiveengineering:metal_press',
    'immersiveengineering:arc_furnace',
    'immersiveengineering:squeezer',
    'immersiveengineering:fermenter',

    'immersivepetroleum:distillation',

    'mekanism:pigment_extracting',
    'mekanism:painting',

    'pneumaticcraft:explosion_crafting',

    'thermal:press',
    'thermal:crystallizer',
    'thermal:smelter',
    'thermal:insolator',
    'thermal:centrifuge',
    'thermal:pulverizer',
    'thermal:tree_extractor',
    'thermal:rock_gen',

    'minecraft:campfire_cooking',
    'minecraft:blasting',
    'minecraft:smelting',
    'minecraft:smithing',
    'minecraft:smoking',
    'minecraft:stonecutting'
];

global.woodTagList = [
    'tfc:firepit_fuel',
    'firmalife:oven_fuel',
    'minecraft:non_flammable_wood',
    'minecraft:logs',
    'tfc:pit_kiln_logs',
    'tfc:firepit_logs',
    'tfc:log_pile_logs',
    'tfc:logs_that_log',
    'rosia:fire_box_fuel'
];

//--------------------------------------------------------------
//Config
//--------------------------------------------------------------

global.dyeingDuration = 1000;
global.lyeingDuration = 1000;