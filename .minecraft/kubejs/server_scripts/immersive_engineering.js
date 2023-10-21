onEvent('recipes', event => {

    global.addSqueezer('immersiveengineering:plantoil', 40, 'tfc:seeds', 3000)

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

    transitionItem = 'kubejs:transition_wrought_iron_block'
    const lightAssembly = []
    lightAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_hammers`]))
    lightAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'immersiveengineering:component_electronic']))
    lightAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    lightAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_double_ingots`]).keepHeldItem())
    lightAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier3_rods`]).keepHeldItem())
    event.recipes.createSequencedAssembly('4x kubejs:light_engineering_assembly', 'immersiveengineering:component_iron', lightAssembly).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_steel_block'
    const heavyAssembly = []
    heavyAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_hammers`]))
    heavyAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'immersiveengineering:component_electronic_adv']))
    heavyAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_ingots`]).keepHeldItem())
    heavyAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_ingots`]).keepHeldItem())
    heavyAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_rods`]).keepHeldItem())
    event.recipes.createSequencedAssembly('4x kubejs:heavy_engineering_assembly', 'immersiveengineering:component_steel', heavyAssembly).transitionalItem(transitionItem).loops(1);

    transitionItem = 'kubejs:transition_stainless_steel_block'
    const ponderousAssembly = []
    ponderousAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_hammers`]))
    ponderousAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, 'kubejs:industrial_electronic_component']))
    ponderousAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_ingots`]).keepHeldItem())
    ponderousAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_double_ingots`]).keepHeldItem())
    ponderousAssembly.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier4_rods`]).keepHeldItem())
    event.recipes.createSequencedAssembly('4x kubejs:ponderous_engineering_assembly', 'kubejs:stainless_steel_mechanical_component', ponderousAssembly).transitionalItem(transitionItem).loops(1);
})