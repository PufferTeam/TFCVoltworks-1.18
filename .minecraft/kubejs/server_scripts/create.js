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
        ' S'
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

    global.addDamageInputShapeless(1, 'create:sticky_mechanical_piston', 'create:mechanical_piston', "tfc:knives", 1)



});