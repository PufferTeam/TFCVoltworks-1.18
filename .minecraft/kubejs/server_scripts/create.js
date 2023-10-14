onEvent('recipes', event => {

    event.remove({ output: 'create:basin' })
    event.shaped('create:basin', [
        'SAS',
        ' S '
    ], {
        S: '#forge:plates/cast_iron',
        A: 'tfc:crucible'
    }).id('create:basin')

    event.remove({ output: 'create:chute' })
    event.shaped('4x create:chute', [
        'S',
        'A',
        'S'
    ], {
        S: '#forge:plates/cast_iron',
        A: '#forge:ingots/cast_iron'
    }).id('create:chute')

    event.remove({ output: 'createbigcannons:basin_foundry_lid' })
    event.shaped('createbigcannons:basin_foundry_lid', [
        'SAS'
    ], {
        S: '#forge:plates/wrought_iron',
        A: 'tfc_metalwork:metal/plate/andesite_alloy'
    }).id('createbigcannons:basin_foundry_lid')

    event.remove({ output: 'create:metal_bracket' })
    event.shaped('8x create:metal_bracket', [
        'SS',
        'AA'
    ], {
        S: '#forge:rods/cast_iron',
        A: '#forge:plates/cast_iron'
    }).id('create:metal_bracket')

    event.remove({ output: 'create:wooden_bracket' })
    event.shaped('8x create:wooden_bracket', [
        'SS',
        'AA'
    ], {
        S: '#forge:rods/cast_iron',
        A: 'kubejs:pitch_treated_lumber'
    }).id('create:wooden_bracket')

    event.remove({ id: 'create:crafting/kinetics/linear_chassis' })
    event.shaped('4x create:linear_chassis', [
        ' R ',
        'SAS',
        ' R '
    ], {
        S: '#minecraft:planks',
        A: '#tfc:pit_kiln_logs',
        R: '#forge:rods/andesite_alloy'
    }).id('create:linear_chassis')

    event.remove({ output: 'create:radial_chassis' })
    event.shaped('4x create:radial_chassis', [
        ' S ',
        'RAR',
        ' S '
    ], {
        S: '#minecraft:planks',
        A: '#tfc:pit_kiln_logs',
        R: '#forge:rods/andesite_alloy'
    }).id('create:radial_chassis')

    event.remove({ output: 'create:metal_girder' })
    event.shaped('32x create:metal_girder', [
        ' A ',
        'SSS',
        ' A '
    ], {
        S: '#forge:rods/cast_iron',
        A: '#forge:plates/cast_iron'
    }).id('create:metal_girder')

    event.remove({ output: 'create:depot' })
    event.shaped('create:depot', [
        'A',
        'S'
    ], {
        S: 'create:andesite_casing',
        A: '#forge:plates/cast_iron'
    }).id('create:depot')

    event.remove({ output: 'create:shaft' })
    event.shaped('8x create:shaft', [
        'S',
        'S'
    ], {
        S: '#forge:rods/andesite_alloy'
    }).id('create:shaft')

    event.remove({ output: 'create:fluid_pipe' })
    event.shaped('8x create:fluid_pipe', [
        'S',
        'A',
        'S'
    ], {
        S: '#forge:plates/copper',
        A: '#forge:ingots/copper'
    }).id('create:fluid_pipe')

    event.remove({ output: 'immersiveengineering:fluid_pipe' })
    event.shaped('8x immersiveengineering:fluid_pipe', [
        'S',
        'A',
        'S'
    ], {
        S: '#forge:plates/wrought_iron',
        A: '#forge:ingots/wrought_iron'
    }).id('immersiveengineering:fluid_pipe')

    event.remove({ output: 'create:piston_extension_pole' })
    event.shaped('8x create:piston_extension_pole', [
        'S',
        'A',
        'S'
    ], {
        S: '#forge:rods/andesite_alloy',
        A: '#minecraft:planks'
    }).id('create:piston_extension_pole')

    event.remove({ output: 'create:gantry_shaft' })
    event.shaped('8x create:gantry_shaft', [
        'BSB',
        ' A ',
        'BSB'
    ], {
        S: '#forge:rods/andesite_alloy',
        B: 'kubejs:pitch_treated_lumber',
        A: 'minecraft:redstone'
    }).id('create:gantry_shaft')

    event.remove({ output: 'create:water_wheel' })
    event.shaped('create:water_wheel', [
        ' A ',
        'ASA',
        ' A '
    ], {
        S: 'create:large_cogwheel',
        A: 'kubejs:pitch_treated_waterwheel_segment'
    }).id('create:water_wheel')

    event.remove({ output: 'create:large_water_wheel' })
    event.shaped('create:large_water_wheel', [
        'AAA',
        'ASA',
        'AAA'
    ], {
        S: 'create:water_wheel',
        A: 'kubejs:pitch_treated_waterwheel_segment'
    }).id('create:large_water_wheel')

    event.remove({ output: 'create:item_vault' })
    event.shaped('3x create:item_vault', [
        ' S ',
        'AAA',
        ' S '
    ], {
        S: 'tfc_metalwork:metal/plate/lead',
        A: '#tfcbarrels:barrels'
    }).id('create:item_vault')

    event.remove({ output: 'create:schematic_table' })
    event.shaped('create:schematic_table', [
        'AAA',
        ' S ',
        ' S '
    ], {
        S: '#forge:smooth_stone',
        A: 'kubejs:pitch_treated_lumber'
    }).id('create:schematic_table')

    event.remove({ output: 'create:schematicannon' })
    event.shaped('create:schematicannon', [
        ' C ',
        'ABA',
        'SDS'
    ], {
        S: '#forge:smooth_stone',
        A: 'kubejs:pitch_treated_wood',
        B: 'createbigcannons:cast_iron_cannon_end',
        C: 'createbigcannons:cast_iron_cannon_barrel',
        D: 'minecraft:dispenser'
    }).id('create:schematicannon')

    event.remove({ output: 'create:steam_engine' })
    event.shaped('create:steam_engine', [
        ' B ',
        ' A ',
        'RSR'
    ], {
        S: 'minecraft:copper_block',
        R: 'create:copper_casing',
        A: 'tfc_metalwork:metal/large_rod/wrought_iron',
        B: 'tfc:metal/sheet/brass',
    }).id('create:steam_engine')

    event.remove({ output: 'create:display_board' })
    event.shaped('8x create:display_board', [
        ' B ',
        'SAS',
        ' P '
    ], {
        S: 'tfc_metalwork:metal/plate/cast_iron',
        P: 'tfc_metalwork:metal/plate/andesite_alloy',
        A: '#forge:cogwheels',
        B: 'create:electron_tube'
    }).id('create:display_board')

    event.remove({ output: 'create:cogwheel' })
    event.shapeless('create:cogwheel', ['create:shaft', 'kubejs:pitch_treated_small_gear']).id('create:cogwheel')

    event.remove({ output: 'create:large_cogwheel' })
    event.shapeless('create:large_cogwheel', ['create:shaft', 'kubejs:pitch_treated_large_gear']).id('create:large_cogwheel')

    event.remove({ output: 'create:belt_connector' })
    event.shaped('8x create:belt_connector', [
        'SSS',
        'SSS'
    ], {
        S: '#forge:leather'
    }).id('create:belt_connector')

    event.remove({ output: 'create:fluid_tank' })
    event.shaped('3x create:fluid_tank', [
        ' S ',
        'AAA',
        ' S '
    ], {
        S: '#forge:plates/copper',
        A: '#forge:glass/colorless'
    }).id('create:fluid_tank')

    event.remove({ output: 'create:deployer' })
    event.shaped('create:deployer', [
        ' P ',
        'RSR',
        ' A '
    ], {
        S: 'create:andesite_casing',
        A: 'create:brass_hand',
        P: 'create:shaft',
        R: 'tfc:metal/rod/cast_iron'
    }).id('create:deployer')

    event.remove({ output: 'create:mechanical_mixer' })
    event.shaped('create:mechanical_mixer', [
        ' P ',
        'CSC',
        ' A '
    ], {
        S: 'create:andesite_casing',
        A: 'create:whisk',
        P: 'create:shaft',
        C: '#forge:cogwheels'
    }).id('create:mechanical_mixer')

    event.remove({ output: 'create:mechanical_drill' })
    event.shaped('create:mechanical_drill', [
        'P',
        'S',
        'A'
    ], {
        S: 'create:andesite_casing',
        A: 'thermal:drill_head',
        P: 'create:shaft',
    }).id('create:mechanical_drill')

    event.remove({ output: 'create:mechanical_saw' })
    event.shaped('create:mechanical_saw', [
        'P',
        'S',
        'A'
    ], {
        S: 'create:andesite_casing',
        A: 'thermal:saw_blade',
        P: 'create:shaft',
    }).id('create:mechanical_saw')

    event.remove({ output: 'create:brass_tunnel' })
    event.shaped('2x create:brass_tunnel', [
        'LP',
        'SS',
        'AA'
    ], {
        S: '#forge:plates/brass',
        A: '#forge:leather',
        L: 'create:electron_tube',
        P: 'tfc:brass_mechanisms'
    }).id('create:brass_tunnel')

    event.remove({ output: 'create:andesite_tunnel' })
    event.shaped('2x create:andesite_tunnel', [
        'SS',
        'AA'
    ], {
        S: '#forge:plates/andesite_alloy',
        A: '#forge:leather'
    }).id('create:andesite_tunnel')

    event.remove({ output: 'create:andesite_funnel' })
    event.shaped('2x create:andesite_funnel', [
        'S',
        'A'
    ], {
        S: '#forge:plates/andesite_alloy',
        A: '#forge:leather'
    }).id('create:andesite_funnel')

    event.remove({ output: 'create:brass_funnel' })
    event.shaped('2x create:brass_funnel', [
        'P',
        'S',
        'A'
    ], {
        S: '#forge:plates/brass',
        A: '#forge:leather',
        P: 'create:electron_tube'
    }).id('create:brass_funnel')

    event.remove({ output: 'create:hose_pulley' })
    event.shaped('create:hose_pulley', [
        ' S ',
        'OAO',
        ' P '
    ], {
        S: 'create:copper_casing',
        A: '#forge:rope',
        P: '#forge:plates/copper',
        O: 'create:shaft'
    }).id('create:hose_pulley')

    event.remove({ output: 'create:rope_pulley' })
    event.shaped('create:rope_pulley', [
        ' S ',
        'OAO',
        ' P '
    ], {
        S: 'create:andesite_casing',
        A: '#forge:rope',
        P: '#forge:plates/wrought_iron',
        O: 'create:shaft'
    }).id('create:rope_pulley')

    event.remove({ output: 'create:pulse_repeater' })
    event.shaped('create:pulse_repeater', [
        'LSP',
        'AAA'
    ], {
        S: '#forge:plates/brass',
        A: '#forge:smooth_stone',
        L: 'minecraft:redstone',
        P: 'minecraft:redstone_torch'
    }).id('create:pulse_repeater')

    event.remove({ output: 'create:pulse_extender' })
    event.shaped('create:pulse_extender', [
        '  P',
        'LSP',
        'AAA'
    ], {
        S: '#forge:plates/brass',
        A: '#forge:smooth_stone',
        L: 'minecraft:redstone',
        P: 'minecraft:redstone_torch'
    }).id('create:pulse_extender')

    event.remove({ output: 'create:powered_latch' })
    event.shaped('create:powered_latch', [
        ' P ',
        'LSL',
        'AAA'
    ], {
        S: 'minecraft:lever',
        A: '#forge:smooth_stone',
        L: 'minecraft:redstone',
        P: 'minecraft:redstone_torch'
    }).id('create:powered_latch')

    event.remove({ output: 'create:powered_toggle_latch' })
    event.shaped('create:powered_toggle_latch', [
        ' P ',
        ' S ',
        'AAA'
    ], {
        S: 'minecraft:lever',
        A: '#forge:smooth_stone',
        P: 'minecraft:redstone_torch'
    }).id('create:powered_toggle_latch')

    event.remove({ output: 'create:millstone' })
    event.shaped('create:millstone', [
        'P',
        'A',
        'S'
    ], {
        S: 'tfc:quern',
        A: 'create:cogwheel',
        P: 'create:andesite_casing'
    }).id('create:millstone')

    event.recipes.createMechanicalCrafting('2x create:crushing_wheel', [
        ' CCC ',
        'CPSPC',
        'CSRSC',
        'CPSPC',
        ' CCC '
    ], {
        C: '#forge:smooth_stone',
        P: 'tfc:metal/rod/wrought_iron',
        S: 'kubejs:creosote_treated_large_stick',
        R: 'create:large_cogwheel'
    }).id('create:crushing_wheel')

    event.remove({ output: 'create_mechanical_extruder:mechanical_extruder' })
    event.shaped('create_mechanical_extruder:mechanical_extruder', [
        ' S ',
        'APA',
        ' A '
    ], {
        S: 'create:shaft',
        A: '#forge:glass/colorless',
        P: 'create:mechanical_drill'
    }).id('create_mechanical_extruder:mechanical_extruder')

    let transitionItem = 'kubejs:transition_andesite_alloy'
    const andesiteFrame = []
    andesiteFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_double_ingots`]).keepHeldItem())
    andesiteFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_hammers`]))
    andesiteFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_double_sheets`]).keepHeldItem())
    event.recipes.tfc.anvil('4x kubejs:frame/andesite', 'tfc_metalwork:metal/large_rod/andesite_alloy', [
        "shrink_last",
        "hit_second_last",
        "bend_third_last"
    ]).tier(2).id(`kubejs:anvil/frame/andesite`)
    event.recipes.createSequencedAssembly('4x kubejs:frame/andesite', 'tfc_metalwork:metal/large_rod/andesite_alloy', andesiteFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_copper'
    const copperFrame = []
    copperFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_double_ingots`]).keepHeldItem())
    copperFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_hammers`]))
    copperFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_double_sheets`]).keepHeldItem())
    event.recipes.tfc.anvil('4x kubejs:frame/copper', 'tfc_metalwork:metal/large_rod/copper', [
        "shrink_last",
        "hit_second_last",
        "bend_third_last"
    ]).tier(2).id(`kubejs:anvil/frame/copper`)
    event.recipes.createSequencedAssembly('4x kubejs:frame/copper', 'tfc_metalwork:metal/large_rod/copper', copperFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_brass'
    const brassFrame = []
    brassFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'tfc_metallum:metal/rod/andesite_alloy']))
    brassFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_rods`]).keepHeldItem())
    brassFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    brassFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_hammers`]))
    brassFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_chisels`]))
    brassFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_sheets`]).keepHeldItem())
    event.recipes.createSequencedAssembly('4x kubejs:frame/brass', 'tfc_metalwork:metal/large_rod/brass', brassFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_rose_gold'
    const railwayFrame = []
    railwayFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'tfc_metalwork:metal/large_rod/wrought_iron']))
    railwayFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_rods`]).keepHeldItem())
    railwayFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    railwayFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_hammers`]))
    railwayFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_chisels`]))
    railwayFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_sheets`]).keepHeldItem())
    event.recipes.createSequencedAssembly('4x kubejs:frame/railway', 'tfc_metalwork:metal/large_rod/rose_gold', railwayFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_wrought_iron'
    const ironFrame = []
    ironFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_rods`]).keepHeldItem())
    ironFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    ironFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_hammers`]))
    ironFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_chisels`]))
    ironFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_sheets`]).keepHeldItem())
    event.recipes.createSequencedAssembly('2x kubejs:frame/iron', 'tfc_metalwork:metal/large_rod/wrought_iron', ironFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_steel'
    const steelFrame = []
    steelFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_rods`]).keepHeldItem())
    steelFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_ingots`]).keepHeldItem())
    steelFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_hammers`]))
    steelFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_chisels`]))
    steelFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_sheets`]).keepHeldItem())
    event.recipes.createSequencedAssembly('2x kubejs:frame/steel', 'tfc_metalwork:metal/large_rod/steel', steelFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_aluminum'
    const aluFrame = []
    aluFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'tfc_metalwork:metal/large_rod/stainless_steel']))
    aluFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_rods`]).keepHeldItem())
    aluFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_ingots`]).keepHeldItem())
    aluFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_hammers`]))
    aluFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_chisels`]))
    aluFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_sheets`]).keepHeldItem())
    event.recipes.createSequencedAssembly('2x kubejs:frame/aluminum', 'tfc_metalwork:metal/large_rod/aluminum', aluFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_refined_obsidian'
    const shadowFrame = []
    shadowFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'create:shadow_steel']))
    shadowFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'create:shadow_steel']))
    shadowFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_rods`]).keepHeldItem())
    shadowFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_double_ingots`]).keepHeldItem())
    shadowFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_hammers`]))
    shadowFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_chisels`]))
    shadowFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_double_sheets`]).keepHeldItem())
    event.recipes.createSequencedAssembly('2x kubejs:frame/shadow_steel', 'tfc_metalwork:metal/large_rod/refined_obsidian', shadowFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_refined_glowstone'
    const radiantFrame = []
    radiantFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'create:refined_radiance']))
    radiantFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'create:refined_radiance']))
    radiantFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_rods`]).keepHeldItem())
    radiantFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_double_ingots`]).keepHeldItem())
    radiantFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_hammers`]))
    radiantFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_chisels`]))
    radiantFrame.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier5_double_sheets`]).keepHeldItem())
    event.recipes.createSequencedAssembly('2x kubejs:frame/refined_radiance', 'tfc_metalwork:metal/large_rod/refined_glowstone', radiantFrame).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_wrought_iron'
    event.remove({ output: 'thermal:saw_blade' })
    const sawBlade = []
    sawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'thermal:saw_blade']).keepHeldItem())
    sawBlade.push(event.recipes.createPressing(transitionItem, [transitionItem]));
    sawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_rods`]).keepHeldItem())
    sawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_sheets`]).keepHeldItem())
    sawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_hammers`]))
    event.recipes.tfc.anvil('thermal:saw_blade', '#forge:sheets/wrought_iron', [
        "hit_last",
        "shrink_second_last",
        "upset_third_last"
    ]).tier(3).id(`tfc:anvil/part/saw_blade`)
    event.recipes.createSequencedAssembly('thermal:saw_blade', '#forge:sheets/wrought_iron', sawBlade).transitionalItem(transitionItem).loops(1);

    event.remove({ output: 'thermal:drill_head' })
    const drillHead = []
    drillHead.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'thermal:drill_head']).keepHeldItem())
    drillHead.push(event.recipes.createPressing(transitionItem, [transitionItem]));
    drillHead.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    drillHead.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_sheets`]).keepHeldItem())
    drillHead.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_chisels`]))
    event.recipes.tfc.anvil('thermal:drill_head', '#forge:sheets/wrought_iron', [
        "punch_last",
        "shrink_second_last",
        "bend_third_last"
    ]).tier(3).id(`tfc:anvil/part/drill_head`)
    event.recipes.createSequencedAssembly('thermal:drill_head', '#forge:sheets/wrought_iron', drillHead).transitionalItem(transitionItem).loops(1);

    event.remove({ output: 'create:propeller' })
    const propeller = []
    propeller.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'create:propeller']).keepHeldItem())
    propeller.push(event.recipes.createPressing(transitionItem, [transitionItem]));
    propeller.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_hammers`]))
    propeller.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_sheets`]).keepHeldItem())
    propeller.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    event.recipes.tfc.anvil('create:propeller', '#forge:sheets/wrought_iron', [
        "bend_last",
        "draw_second_last",
        "hit_third_last"
    ]).tier(3).id(`tfc:anvil/part/propeller`)
    event.recipes.createSequencedAssembly('create:propeller', '#forge:sheets/wrought_iron', propeller).transitionalItem(transitionItem).loops(1);

    event.remove({ output: 'create:whisk' })
    const whisk = []
    whisk.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'create:whisk']).keepHeldItem())
    whisk.push(event.recipes.createPressing(transitionItem, [transitionItem]));
    whisk.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_sheets`]).keepHeldItem())
    whisk.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_rods`]).keepHeldItem())
    whisk.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    event.recipes.tfc.anvil('create:whisk', '#forge:sheets/wrought_iron', [
        "bend_last",
        "upset_second_last",
        "shrink_third_last"
    ]).tier(3).id(`tfc:anvil/part/whisk`)
    event.recipes.createSequencedAssembly('create:whisk', '#forge:sheets/wrought_iron', whisk).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_brass'
    event.remove({ output: 'create:brass_hand' })
    const hand = []
    hand.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'create:brass_hand']).keepHeldItem())
    hand.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_hammers`]))
    hand.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_rods`]).keepHeldItem())
    hand.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier2_hammers`]))
    event.recipes.tfc.anvil('4x create:brass_hand', '#forge:ingots/brass', [
        "hit_last",
        "upset_second_last",
        "hit_third_last"
    ]).tier(2).id(`tfc:anvil/part/brass_hand`)
    event.recipes.createSequencedAssembly('4x create:brass_hand', '#forge:ingots/brass', hand).transitionalItem(transitionItem).loops(1);

    event.remove({ output: 'create:encased_chain_drive' })
    event.shapeless('create:encased_chain_drive', ['create:andesite_casing', 'tfc:metal/chain/wrought_iron', 'tfc:metal/chain/wrought_iron', 'tfc:metal/chain/wrought_iron']).id('create:encased_chain_drive')

    function casingCrafting(isTag, mod, block, metal) {
        global.addItemApplication(isTag, block, `kubejs:frame/${metal}`, `${mod}:${metal}_casing`)
    }

    casingCrafting(false, 'create', 'kubejs:pitch_treated_wood', 'andesite')
    casingCrafting(false, 'create', 'kubejs:ash_treated_wood', 'copper')
    casingCrafting(true, 'create', 'forge:treated_wood', 'brass')
    casingCrafting(false, 'create', 'kubejs:sturdy_sheet', 'railway')
    casingCrafting(false, 'create', 'immersiveengineering:sheetmetal_aluminum', 'refined_radiance')
    casingCrafting(false, 'create', 'immersiveengineering:sheetmetal_steel', 'shadow_steel')

    global.addItemApplication(false, 'immersiveengineering:sheetmetal_lead', 'create:sturdy_sheet', 'kubejs:sturdy_sheet')

    global.anvilRockTypes.forEach(i => {
        global.addItemApplication(false, `tfc:rock/hardened/${i}`, 'minecraft:magma_cream', `tfc:rock/magma/${i}`)
        global.addMechanicalExtruder('minecraft:lava', 'minecraft:water', `tfc:rock/magma/${i}`, `tfc:rock/loose/${i}`)
    });

    global.addItemApplication(false, 'minecraft:bedrock', 'kubejs:void_shard', 'kubejs:cracked_bedrock')
    global.addMechanicalExtruder('minecraft:lava', 'minecraft:water', 'kubejs:cracked_bedrock', 'kubejs:abyss_flour')

    global.addDamageInputShapeless(1, 'create:sticky_mechanical_piston', 'create:mechanical_piston', "tfc:knives", 1)

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'create:andesite_alloy', 'tfc_metallum:metal/ingot/andesite_alloy')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'create:andesite_alloy', 'tfc_metallum:metal/ingot/andesite_alloy')

    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'createaddition:iron_wire', 'immersiveengineering:wire_aluminum')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'tfc:powder/wood_ash', '#tfc:ash')

});