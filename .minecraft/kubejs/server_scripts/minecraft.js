onEvent('server.datapack.first', event => {
    event.addTFCHeat('tfc:dead_torch', 1)
})

onEvent('recipes', event => {

    event.shaped('minecraft:moss_block', [
        'GG',
        'GG'
    ], {
        G: 'tfc:plant/moss'
    }).id('minecraft:moss_block_from_moss')

    event.shaped('minecraft:glowstone', [
        'GG',
        'GG'
    ], {
        G: 'minecraft:glowstone_dust'
    }).id('minecraft:glowstone_from_glowstone_dust')

    event.shaped('minecraft:clay', [
        'GG',
        'GG'
    ], {
        G: 'minecraft:clay_ball'
    }).id('minecraft:clay_from_clay_ball')

    event.shaped('minecraft:snow_block', [
        'GG',
        'GG'
    ], {
        G: 'minecraft:snowball'
    }).id('minecraft:snow_block_from_showball')

    event.shaped('minecraft:redstone_block', [
        'GGG',
        'GGG',
        'GGG'
    ], {
        G: 'minecraft:redstone'
    }).id('minecraft:redstone_block_from_redstone')

    event.shaped('minecraft:redstone_torch', [
        'G',
        'S'
    ], {
        G: 'minecraft:redstone',
        S: '#tfc:firepit_sticks'
    }).id('minecraft:redstone_torch')

    event.remove({ id: 'tfc:crafting/vanilla/ladder' })
    event.shaped('16x minecraft:ladder', [
        'SSS',
        ' S ',
        'SSS'
    ], {
        S: '#tfc:firepit_sticks'
    }).id('minecraft:ladder_from_sticks')

    event.remove({ id: 'tfc:crafting/vanilla/redstone/piston' })
    event.shaped('minecraft:piston', [
        ' L ',
        'SRS',
        ' P '
    ], {
        S: '#forge:cobblestone',
        R: 'minecraft:redstone',
        P: 'create:piston_extension_pole',
        L: '#minecraft:planks'
    }).id('minecraft:piston')

    event.remove({ id: 'tfc:crafting/vanilla/redstone/minecart' })
    event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_minecart' })
    event.shaped('minecraft:minecart', [
        'S S',
        'ASA'
    ], {
        S: '#forge:plates/wrought_iron',
        A: 'createbigcannons:pair_of_cannon_wheels'

    }).id('minecraft:minecart')

    event.shapeless('minecraft:hopper_minecart', ['minecraft:hopper', 'minecraft:minecart']).id('minecraft:hopper_minecart')

    event.remove({ output: 'supplementaries:dispenser_minecart' })
    event.shapeless('supplementaries:dispenser_minecart', ['minecraft:dispenser', 'minecraft:minecart']).id('supplementaries:dispenser_minecart')

    event.remove({ output: 'railways:benchcart' })
    event.shapeless('railways:benchcart', ['#tfc:workbenches', 'minecraft:minecart']).id('railways:benchcart')

    event.remove({ output: 'railways:jukeboxcart' })
    event.shapeless('railways:jukeboxcart', ['minecraft:jukebox', 'minecraft:minecart']).id('railways:jukeboxcart')

    event.shaped('minecraft:target', [
        ' A ',
        'ASA',
        ' A '
    ], {
        S: 'tfc:thatch',
        A: 'minecraft:redstone'
    }).id('minecraft:target')

    event.shaped('minecraft:dropper', [
        'SSS',
        'S S',
        'SAS'
    ], {
        S: '#forge:cobblestone',
        A: 'minecraft:redstone'
    }).id('minecraft:dropper')

    event.shaped('minecraft:dispenser', [
        'SKS',
        'SDS',
        'SAS'
    ], {
        S: '#forge:cobblestone',
        D: 'minecraft:dropper',
        K: 'minecraft:bow',
        A: 'minecraft:redstone'
    }).id('minecraft:dispenser')

    event.shaped('tfc:dead_torch', [
        'G',
        'S'
    ], {
        G: 'tfc:straw',
        S: '#tfc:firepit_sticks'
    }).id('tfc:dead_torch')

    event.recipes.tfc.heating('tfc:torch', 'tfc:dead_torch', 50).id('tfc:heating/torch')

    event.remove({ output: 'minecraft:tinted_glass' })
    event.shaped('8x minecraft:tinted_glass', [
        'LLL',
        'LSL',
        'LLL'
    ], {
        S: 'tfc:powder/amethyst',
        L: 'minecraft:glass'
    }).id('minecraft:tinted_glass')

    event.remove({ output: 'minecraft:clock' })
    event.shaped('minecraft:clock', [
        ' L ',
        'ASA',
        ' L '
    ], {
        S: 'tfc:brass_mechanisms',
        A: '#forge:plates/gold',
        L: 'minecraft:redstone'
    }).id('minecraft:clock')

    event.remove({ output: 'minecraft:tripwire_hook' })
    event.shaped('2x minecraft:tripwire_hook', [
        'C',
        'S',
        'L'
    ], {
        C: '#forge:sheets/cast_iron',
        S: 'minecraft:redstone',
        L: '#tfc:firepit_sticks'
    }).id('minecraft:tripwire_hook')

    event.remove({ output: 'minecraft:rail' })
    event.shaped('32x minecraft:rail', [
        'C C',
        'CLC',
        'C C'
    ], {
        C: '#forge:rods/wrought_iron',
        L: '#tfc:firepit_sticks'
    }).id('minecraft:rail')

    event.remove({ output: 'minecraft:detector_rail' })
    event.shaped('8x minecraft:detector_rail', [
        'C C',
        'CLC',
        'CRC'
    ], {
        C: '#forge:rods/wrought_iron',
        L: '#minecraft:stone_pressure_plates',
        R: 'minecraft:redstone'
    }).id('minecraft:detector_rail')

    event.remove({ output: 'minecraft:activator_rail' })
    event.shaped('8x minecraft:activator_rail', [
        'CRC',
        'CLC',
        'CRC'
    ], {
        C: '#forge:rods/wrought_iron',
        L: 'minecraft:redstone_torch',
        R: '#tfc:firepit_sticks'
    }).id('minecraft:activator_rail')

    event.remove({ output: 'create:controller_rail' })
    event.shaped('6x create:controller_rail', [
        'A A',
        'CRC',
        'ALA'
    ], {
        C: '#forge:rods/gold',
        A: '#forge:rods/wrought_iron',
        L: 'create:electron_tube',
        R: '#tfc:firepit_sticks'
    }).id('create:controller_rail')

    event.remove({ output: 'minecraft:powered_rail' })
    event.shaped('8x minecraft:powered_rail', [
        'ARA',
        'CEC',
        'ARA'
    ], {
        C: '#forge:rods/gold',
        A: '#forge:rods/wrought_iron',
        R: '#tfc:firepit_sticks',
        E: 'minecraft:redstone'
    }).id('minecraft:powered_rail')

    event.remove({ output: 'minecraft:hopper' })
    event.shaped('minecraft:hopper', [
        'C C',
        ' C '
    ], {
        C: '#forge:plates/cast_iron'
    }).id('minecraft:hopper')

    event.shaped('minecraft:jukebox', [
        'LLL',
        'LSL',
        'LLL'
    ], {
        S: 'tfc:powder/diamond',
        L: '#tfc:lumber'
    }).id('minecraft:jukebox')

    event.shaped('4x minecraft:arrow', [
        'S',
        'A',
        'L'
    ], {
        S: 'minecraft:flint',
        A: '#tfc:firepit_sticks',
        L: 'minecraft:feather'
    }).id('minecraft:arrow')

    event.remove({ output: 'supplementaries:speaker_block' })
    event.shaped('supplementaries:speaker_block', [
        'LLL',
        'LSL',
        'LLL'
    ], {
        S: 'tfc:powder/emerald',
        L: '#tfc:lumber'
    }).id('supplementaries:speaker_block')

    event.remove({ output: 'minecraft:cauldron' })
    event.shaped('minecraft:cauldron', [
        'S S',
        'S S',
        'SSS'
    ], {
        S: '#forge:plates/cast_iron'
    }).id('minecraft:cauldron')

    event.shaped('minecraft:note_block', [
        'LLL',
        'LSL',
        'LLL'
    ], {
        S: 'minecraft:redstone',
        L: '#tfc:lumber'
    }).id('minecraft:note_block')

    event.shapeless('minecraft:book', ['#forge:leather', 'minecraft:paper', 'minecraft:paper', 'minecraft:paper']).id('minecraft:book')

    event.shaped('minecraft:sculk_sensor', [
        'O O',
        'ASA',
        'LLL'
    ], {
        S: 'create:redstone_link',
        O: 'minecraft:end_rod',
        A: '#forge:plates/enderium',
        L: 'minecraft:end_stone'
    }).id('minecraft:sculk_sensor')

    event.shaped('minecraft:end_rod', [
        'A',
        'L',
        'L'
    ], {
        A: 'minecraft:popped_chorus_fruit',
        L: 'minecraft:end_stone'
    }).id('minecraft:end_rod')

    event.remove({ output: 'minecraft:bucket' })
    event.remove({ id: 'rosia:anvil/bucket' })
    const bucket = []
    let transitionItem = 'kubejs:transition_wrought_iron'
    bucket.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'minecraft:bucket']).keepHeldItem())
    bucket.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    bucket.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    bucket.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    event.recipes.tfc.anvil('minecraft:bucket', '#forge:sheets/wrought_iron', [
        "bend_last",
        "bend_second_last",
        "bend_third_last"
    ]).tier(3).id(`tfc:anvil/part/bucket`)
    event.recipes.createSequencedAssembly('minecraft:bucket', '#forge:sheets/wrought_iron', bucket).transitionalItem(transitionItem).loops(1);

    event.shapeless('4x tfc:plant/moss', ['minecraft:moss_block']).id('tfc:moss_from_moss_block')
    event.shapeless('4x minecraft:glowstone_dust', ['minecraft:glowstone']).id('minecraft:glowstone_dust_from_glowstone')
    event.shapeless('4x minecraft:clay_ball', ['minecraft:clay']).id('minecraft:clay_ball_from_clay')
    event.shapeless('4x minecraft:snowball', ['minecraft:snow_block']).id('minecraft:snowball_from_snow_block')
    event.shapeless('9x minecraft:redstone', ['minecraft:redstone_block']).id('minecraft:redstone_from_redstone_block')
    event.remove({ id: 'tfc:crafting/vanilla/hay' })
    event.shapeless('9x tfc:straw', ['minecraft:hay_block']).id('tfc:crafting/vanilla/hay')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:slime_ball', 'tfc:glue')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:slime_ball', 'tfc:glue')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'create:andesite_alloy', 'tfc_metallum:metal/ingot/andesite_alloy')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'create:andesite_alloy', 'tfc_metallum:metal/ingot/andesite_alloy')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:honeycomb', '#tfc:waxing_agents')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:honeycomb', '#tfc:waxing_agents')

});