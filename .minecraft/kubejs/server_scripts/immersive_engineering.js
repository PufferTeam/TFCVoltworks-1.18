onEvent('recipes', event => {

    event.remove({ output: 'immersiveengineering:hemp_fabric' })
    event.shaped('4x immersiveengineering:hemp_fabric', [
        ' S ',
        'SOS',
        ' S '
    ], {
        S: '#tfc:high_quality_cloth',
        O: 'immersiveengineering:stick_treated'
    }).id('immersiveengineering:hemp_fabric')

    event.remove({ output: 'kubejs:pitch_treated_tough_fabric' })
    event.shaped('4x kubejs:pitch_treated_tough_fabric', [
        ' S ',
        'SOS',
        ' S '
    ], {
        S: '#tfc:high_quality_cloth',
        O: 'kubejs:pitch_treated_stick'
    }).id('kubejs:pitch_treated_tough_fabric')

    event.remove({ output: 'immersiveengineering:wirecoil_structure_rope' })
    event.shaped('4x immersiveengineering:wirecoil_structure_rope', [
        ' S ',
        'SOS',
        ' S '
    ], {
        S: 'tfc:jute_fiber',
        O: '#tfc:firepit_sticks'
    }).id('immersiveengineering:wirecoil_structure_rope')

    let transitionItem = 'kubejs:transition_steel'

    event.remove({ output: 'immersiveengineering:sawblade' })
    const SsawBlade = []
    SsawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'immersiveengineering:sawblade']).keepHeldItem())
    SsawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_rods`]).keepHeldItem())
    SsawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_sheets`]).keepHeldItem())
    SsawBlade.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_hammers`]))
    event.recipes.tfc.anvil('immersiveengineering:sawblade', '#forge:sheets/steel', [
        "hit_last",
        "shrink_second_last",
        "upset_third_last"
    ]).tier(4).id(`tfc:anvil/part/steel_saw_blade`)
    event.recipes.createSequencedAssembly('immersiveengineering:sawblade', '#forge:sheets/steel', SsawBlade).transitionalItem(transitionItem).loops(1);

})