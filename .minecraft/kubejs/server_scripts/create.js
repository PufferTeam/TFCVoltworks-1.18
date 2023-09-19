onEvent('recipes', event => {

    event.remove({ output: 'create:basin' })
    event.shaped('create:basin', [
        'SAS',
        'SSS'
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
        A: '#forge:ingots/andesite_alloy'
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
        A: '#tfc:lumber'
    }).id('create:wooden_bracket')

    event.remove({ id: 'create:crafting/kinetics/linear_chassis' })
    event.shaped('4x create:linear_chassis', [
        ' R ',
        'SAS',
        ' R '
    ], {
        S: '#minecraft:planks',
        A: '#tfc:pit_kiln_logs',
        R: '#forge:plates/andesite_alloy'
    }).id('create:linear_chassis')

    event.remove({ output: 'create:radial_chassis' })
    event.shaped('4x create:radial_chassis', [
        ' S ',
        'RAR',
        ' S '
    ], {
        S: '#minecraft:planks',
        A: '#tfc:pit_kiln_logs',
        R: '#forge:plates/andesite_alloy'
    }).id('create:radial_chassis')

    event.remove({ output: 'create:metal_girder' })
    event.shaped('16x create:metal_girder', [
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
        R: 'tfc:metal/rod/wrought_iron'
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
        S: 'create:rope_pulley',
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

    let transitionItem = 'kubejs:transition_wrought_iron'

    event.remove({ output: 'thermal:saw_blade' })
    const sawBlade = []
    sawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'thermal:saw_blade']).keepHeldItem())
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
    propeller.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_hammers`]))
    propeller.push(event.recipes.createPressing(transitionItem, [transitionItem]));
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
    whisk.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_sheets`]).keepHeldItem())
    whisk.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_rods`]).keepHeldItem())
    whisk.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    event.recipes.tfc.anvil('create:whisk', '#forge:sheets/wrought_iron', [
        "bend_last",
        "upset_second_last",
        "shrink_third_last"
    ]).tier(3).id(`tfc:anvil/part/whisk`)
    event.recipes.createSequencedAssembly('create:whisk', '#forge:sheets/wrought_iron', whisk).transitionalItem(transitionItem).loops(1);

    event.remove({ output: 'create:encased_chain_drive' })
    event.shapeless('create:encased_chain_drive', ['create:andesite_casing', 'tfc:metal/chain/wrought_iron', 'tfc:metal/chain/wrought_iron', 'tfc:metal/chain/wrought_iron']).id('create:encased_chain_drive')

    global.framesTypes.forEach(i => {
        let block = undefined
        let isTag = false
        switch(i) {
            case 'andesite':
            case 'copper':
                block = 'minecraft:planks'
                isTag = true
            break;
            case 'brass':
                block = 'forge:treated_wood'
                isTag = true
            break;
            case 'railway':
                block = 'immersiveengineering:sheetmetal_lead'
            break;
            case 'refined_radiance':
                block = 'immersiveengineering:sheetmetal_aluminum'
            break;
            case 'shadow_steel':
                block = 'immersiveengineering:sheetmetal_steel'
            break;
        }
        global.addItemApplication(isTag, block, `kubejs:frame/${i}`, `create:${i}_casing`)
    })

    global.addDamageInputShapeless(1, 'create:sticky_mechanical_piston', 'create:mechanical_piston', "tfc:knives", 1)

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'create:andesite_alloy', 'tfc_metallum:metal/ingot/andesite_alloy')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'create:andesite_alloy', 'tfc_metallum:metal/ingot/andesite_alloy')

    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'createaddition:iron_wire', 'immersiveengineering:wire_aluminum')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper')

});