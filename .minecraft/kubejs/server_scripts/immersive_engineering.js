onEvent('recipes', event => {

    global.addSqueezer('kubejs:biomass', 30, 'forge:biomass', 6000)
    global.addSqueezer('immersiveengineering:plantoil', 40, 'tfc:seeds', 3000)

    global.addFermenter('kubejs:fermented_biomass', 30, 'forge:biomass', 12800)
    global.addFermenter('immersiveengineering:ethanol', 50, 'tfc:foods/fruits', 6400)
    global.addFermenter('immersiveengineering:ethanol', 80, 'tfc:foods/vegetables', 6400)
    global.addFermenter('immersiveengineering:ethanol', 150, 'tfc:foods/dairy', 6400)
    global.addFermenter('immersiveengineering:ethanol', 60, 'tfc:foods/grains', 6400)

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
        O: 'kubejs:creosote_treated_large_stick'
    }).id('immersiveengineering:wirecoil_structure_rope')

    event.remove({ output: 'immersiveengineering:wirecoil_copper' })
    event.shaped('2x immersiveengineering:wirecoil_copper', [
        ' S ',
        'SOS',
        ' S '
    ], {
        S: 'immersiveengineering:wire_copper',
        O: 'kubejs:creosote_treated_large_stick'
    }).id('immersiveengineering:wirecoil_copper')

    event.remove({ output: 'immersiveengineering:wirecoil_electrum' })
    event.shaped('2x immersiveengineering:wirecoil_electrum', [
        ' S ',
        'SOS',
        ' S '
    ], {
        S: 'immersiveengineering:wire_electrum',
        O: 'kubejs:creosote_treated_large_stick'
    }).id('immersiveengineering:wirecoil_electrum')

    event.remove({ output: 'immersiveengineering:wirecoil_steel' })
    event.shaped('2x immersiveengineering:wirecoil_steel', [
        ' S ',
        'AOA',
        ' S '
    ], {
        S: 'immersiveengineering:wire_steel',
        A: 'immersiveengineering:wire_aluminum',
        O: 'kubejs:creosote_treated_large_stick'
    }).id('immersiveengineering:wirecoil_steel')

    event.remove({ output: 'immersiveengineering:wirecoil_structure_steel' })
    event.shaped('4x immersiveengineering:wirecoil_structure_steel', [
        ' S ',
        'SOS',
        ' S '
    ], {
        S: 'immersiveengineering:wire_steel',
        O: 'kubejs:creosote_treated_large_stick'
    }).id('immersiveengineering:wirecoil_structure_steel')

    function technicalCrafting(tier, frame) {
        let block = `immersiveengineering:${tier}_engineering`
        let blockAssembly = `kubejs:${tier}_engineering_assembly`
        let mechanical = `kubejs:${tier}_mechanical_block`
        let mechanicalAssembly = `kubejs:${tier}_mechanical_assembly`
        if(tier == 'thermionic' || tier == 'ponderous' || tier == 'electric') {
            block = `kubejs:${tier}_engineering_block`
        }
        if(tier == 'redstone') {
            block = `immersiveengineering:rs_engineering`
        }

        global.addItemApplication(false, blockAssembly, frame, block)

        if(tier !== 'thermionic' && tier !== 'redstone' && tier !== 'electric') {
            global.addItemApplication(false, mechanicalAssembly, frame, mechanical)
        }
    }

    technicalCrafting('light', 'kubejs:frame/iron')
    technicalCrafting('heavy', 'kubejs:frame/steel')
    technicalCrafting('ponderous', 'kubejs:frame/aluminum')
    
    technicalCrafting('redstone', 'kubejs:frame/iron')
    technicalCrafting('electric', 'kubejs:frame/steel')
    technicalCrafting('thermionic', 'kubejs:frame/aluminum')

    global.addItemApplication(false, 'tfc:fire_bricks', 'firmalife:metal/rod/stainless_steel', 'kubejs:brick/fire_bricks_reinforced')
    global.addItemApplication(false, 'kubejs:brick/bloomery_bricks', 'tfc:metal/rod/steel', 'kubejs:brick/bloomery_bricks_reinforced')

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

    event.recipes.createMechanicalCrafting('4x kubejs:light_engineering_assembly', [
        'ASA',
        'PCP',
        'ASA'
    ], {
        C: 'immersiveengineering:component_iron',
        P: 'immersiveengineering:component_electronic',
        S: 'immersiveengineering:wire_electrum',
        A: 'immersiveengineering:treated_scaffold'
    }).id('kubejs:light_engineering_assembly')

    event.recipes.createMechanicalCrafting('4x kubejs:heavy_engineering_assembly', [
        'ASA',
        'PCP',
        'ASA'
    ], {
        C: 'immersiveengineering:component_steel',
        P: 'immersiveengineering:component_electronic_adv',
        S: 'immersiveengineering:wire_steel',
        A: 'immersiveengineering:steel_scaffolding_standard'
    }).id('kubejs:heavy_engineering_assembly')

    event.recipes.createMechanicalCrafting('4x kubejs:ponderous_engineering_assembly', [
        'ASA',
        'PCP',
        'ASA'
    ], {
        C: 'kubejs:stainless_steel_mechanical_component',
        P: 'kubejs:industrial_electronic_component',
        S: 'immersiveengineering:wire_aluminum',
        A: 'immersiveengineering:alu_scaffolding_standard'
    }).id('kubejs:ponderous_engineering_assembly')
    
})