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

    event.remove({ output: 'create:encased_chain_drive' })
    event.shapeless('create:encased_chain_drive', ['create:andesite_casing', 'tfc:metal/chain/wrought_iron', 'tfc:metal/chain/wrought_iron', 'tfc:metal/chain/wrought_iron']).id('create:encased_chain_drive')


    global.addDamageInputShapeless(1, 'create:sticky_mechanical_piston', 'create:mechanical_piston', "tfc:knives", 1)



});