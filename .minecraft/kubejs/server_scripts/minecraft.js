onEvent('server.datapack.first', event => {
    event.addTFCHeat('tfc:dead_torch', 1)
})

onEvent('recipes', event => {

    event.shaped('minecraft:moss_block', [
        'GG',
        'GG'
    ], {
        G: 'tfc:plant/moss'
    })

    event.shaped('minecraft:glowstone', [
        'GG',
        'GG'
    ], {
        G: 'minecraft:glowstone_dust'
    })

    event.shaped('minecraft:clay', [
        'GG',
        'GG'
    ], {
        G: 'minecraft:clay_ball'
    })

    event.shaped('minecraft:snow_block', [
        'GG',
        'GG'
    ], {
        G: 'minecraft:snowball'
    })

    event.shaped('minecraft:redstone_block', [
        'GGG',
        'GGG',
        'GGG'
    ], {
        G: 'minecraft:redstone'
    })

    event.shaped('minecraft:redstone_torch', [
        'G',
        'S'
    ], {
        G: 'minecraft:redstone',
        S: '#tfc:firepit_sticks'
    })

    event.remove({ id: 'tfc:crafting/vanilla/ladder' })
    event.shaped('16x minecraft:ladder', [
        'SSS',
        ' S ',
        'SSS'
    ], {
        S: '#tfc:firepit_sticks'
    })

    event.shaped('minecraft:target', [
        ' A ',
        'ASA',
        ' A '
    ], {
        S: 'tfc:thatch',
        A: 'minecraft:redstone'
    })

    event.shaped('tfc:dead_torch', [
        'G',
        'S'
    ], {
        G: 'tfc:straw',
        S: '#tfc:firepit_sticks'
    })

    event.recipes.tfc.heating('tfc:torch', 'tfc:dead_torch', 50)

    event.remove({ output: 'minecraft:tinted_glass' })
    event.shaped('4x minecraft:tinted_glass', [
        ' L ',
        'LSL',
        ' L '
    ], {
        S: 'tfc:powder/amethyst',
        L: 'minecraft:glass'
    });

    event.remove({ output: 'minecraft:clock' })
    event.shaped('minecraft:clock', [
        ' L ',
        'ASA',
        ' L '
    ], {
        S: 'tfc:brass_mechanisms',
        A: '#forge:plates/gold',
        L: 'minecraft:redstone'
    });

    event.remove({ output: 'minecraft:tripwire_hook' })
    event.shaped('2x minecraft:tripwire_hook', [
        'C',
        'S',
        'L'
    ], {
        C: '#forge:sheets/cast_iron',
        S: 'minecraft:redstone',
        L: '#tfc:firepit_sticks'
    });

    event.remove({ output: 'minecraft:rail' })
    event.shaped('32x minecraft:rail', [
        'C C',
        'CLC',
        'C C'
    ], {
        C: '#forge:rods/cast_iron',
        L: '#tfc:firepit_sticks'
    });

    event.remove({ output: 'minecraft:detector_rail' })
    event.shaped('8x minecraft:detector_rail', [
        'C C',
        'CLC',
        'CRC'
    ], {
        C: '#forge:rods/cast_iron',
        L: '#minecraft:stone_pressure_plates',
        R: 'minecraft:redstone'
    });

    event.remove({ output: 'minecraft:activator_rail' })
    event.shaped('8x minecraft:activator_rail', [
        'CRC',
        'CLC',
        'CRC'
    ], {
        C: '#forge:rods/cast_iron',
        L: 'minecraft:redstone_torch',
        R: '#tfc:firepit_sticks'
    });

    event.remove({ output: 'create:controller_rail' })
    event.shaped('6x create:controller_rail', [
        'C C',
        'CRC',
        'CLC'
    ], {
        C: '#forge:rods/gold',
        L: 'create:electron_tube',
        R: '#tfc:firepit_sticks'
    });

    event.remove({ output: 'minecraft:hopper' })
    event.shaped('minecraft:hopper', [
        'C C',
        ' C '
    ], {
        C: '#forge:plates/cast_iron'
    });

    event.shaped('minecraft:jukebox', [
        'LLL',
        'LSL',
        'LLL'
    ], {
        S: 'tfc:powder/diamond',
        L: '#tfc:lumber'
    });

    event.shaped('minecraft:note_block', [
        'LLL',
        'LSL',
        'LLL'
    ], {
        S: 'minecraft:redstone',
        L: '#tfc:lumber'
    });

    event.shaped('minecraft:sculk_sensor', [
        'O O',
        'ASA',
        'LLL'
    ], {
        S: 'create:redstone_link',
        O: 'minecraft:end_rod',
        A: '#forge:plates/enderium',
        L: 'minecraft:end_stone'
    });

    event.shaped('minecraft:end_rod', [
        'A',
        'L',
        'L'
    ], {
        A: 'minecraft:popped_chorus_fruit',
        L: 'minecraft:end_stone'
    });

    event.shapeless('4x tfc:plant/moss', ['minecraft:moss_block'])
    event.shapeless('4x minecraft:glowstone_dust', ['minecraft:glowstone'])
    event.shapeless('4x minecraft:clay_ball', ['minecraft:clay'])
    event.shapeless('4x minecraft:snowball', ['minecraft:snow_block'])
    event.shapeless('9x minecraft:redstone', ['minecraft:redstone_block'])

});