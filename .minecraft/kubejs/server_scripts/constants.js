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
    'tfc:barrel/dye/bleach_bricks',
    'tfc:barrel/dye/bleach_shulkers',
    'tfc:barrel/dye/bleach_raw',
    'tfc:barrel/dye/bleach_polished',
    'tfc:barrel/dye/bleach_concrete_powder',
    'tfc:barrel/dye/bleach_candles',
    'tfc:crafting/vanilla/armor_stand',
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
    'create:crafting/kinetics/mechanical_press',
    'create:crafting/kinetics/encased_fan',

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
    
    'create_mechanical_extruder:extruding',

    'createaddition:rolling',

    'createbigcannons:melting',

    'immersiveengineering:blast_furnace',
    'immersiveengineering:crusher',

    'mekanism:pigment_extracting',
    'mekanism:painting',

    'minecraft:campfire_cooking',
    'minecraft:blasting',
    'minecraft:smelting',
    'minecraft:smithing',
    'minecraft:smoking',
    'minecraft:stonecutting'
];

//--------------------------------------------------------------
//Config
//--------------------------------------------------------------

global.dyeingDuration = 2000;
global.lyeingDuration = 2000;