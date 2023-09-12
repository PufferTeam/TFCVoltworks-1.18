// priority: 0

onEvent('recipes', event => {

  global.tfcJarTypes.forEach(i => global.addMixingItemItemFluidEItem('firmalife:empty_jar', `tfc:food/${i}`, 'firmalife:sugar_water', 1000, `firmalife:${i}_jar`, 1, 'heated'))
  global.firmalifeJarTypes.forEach(i => global.addMixingItemItemFluidEItem('firmalife:empty_jar', `firmalife:food/${i}`, 'firmalife:sugar_water', 1000, `firmalife:${i}_jar`, 1, 'heated'))

  event.recipes.createMixing(Fluid.of('tfc:limewater', 500), ['tfc:powder/flux', Fluid.of('minecraft:water', 500)])
  event.recipes.createMixing('tfc:soaked_papyrus_strip', ['tfc:papyrus_strip', Fluid.of('minecraft:water', 200)])
  event.recipes.createMixing(Fluid.of('tfc:lye', 200), ['tfc:powder/wood_ash', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:tallow', 200), ['tfc:blubber', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:olive_oil_water', 200), ['tfc:olive_paste', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:salt_water', 125), ['tfc:powder/salt', Fluid.of('minecraft:water', 125)])
  event.recipes.createMixing('tfc:food/boiled_egg', ['minecraft:egg', Fluid.of('minecraft:water', 100)]).heated()

  global.tfcGrains.forEach(i => {

    event.remove({ id: `tfc:crafting/dough/${i}_dough_1` })
    event.remove({ id: `tfc:crafting/dough/${i}_dough_2` })
    event.remove({ id: `tfc:crafting/dough/${i}_dough_3` })
    event.remove({ id: `tfc:crafting/dough/${i}_dough_4` })
    event.remove({ id: `tfc:crafting/dough/${i}_dough_5` })
    event.remove({ id: `tfc:crafting/dough/${i}_dough_6` })
    event.remove({ id: `tfc:crafting/dough/${i}_dough_7` })
    event.remove({ id: `tfc:crafting/dough/${i}_dough_8` })

    global.addFirmaMixingItemFluidEItem(1, `tfc:food/${i}_flour`, 'minecraft:water', 1000, `tfc:food/${i}_dough`, 2)
    global.addFirmaMixingItemFluidEItem(2, `tfc:food/${i}_flour`, 'minecraft:water', 1000, `tfc:food/${i}_dough`, 4)

    global.addMixingItemFluidEItem(`tfc:food/${i}_flour`, 'minecraft:water', 100, `tfc:food/${i}_dough`, 2, null)

    event.remove({ output: `firmalife:food/${i}_dough` })
    global.addFirmaMixingItemTagFluidEItem('firmalife:sweetener', `tfc:food/${i}_flour`, 'firmalife:yeast_starter', 1000, `firmalife:food/${i}_dough`, 4)
    global.addMixingTagItemFluidEItem('firmalife:sweetener', `tfc:food/${i}_flour`, 'firmalife:yeast_starter', 100, `firmalife:food/${i}_dough`, 4)
  })

  global.tfcSoilsTypes.forEach(i => {
    event.recipes.createMixing(`tfc:mud/${i}`, [`tfc:dirt/${i}`, Fluid.of('minecraft:water', 100)])
    global.addDrying(`tfc:drying_bricks/${i}`, `tfc:mud_brick/${i}`)
  })

  global.addMixingItemFluidEItem('tfc:food/rice_grain', 'minecraft:water', 100, 'tfc:food/cooked_rice', 1, 'heated')
  global.addMixingItemFluidEItem('firmalife:food/tomato_sauce_mix', 'minecraft:water', 200, 'firmalife:food/tomato_sauce', 1, 'heated')
  global.addMixingItemFluidEItem('tfc:food/maize_grain', 'tfc:limewater', 1000, 'firmalife:food/cured_maize', 1, 'heated')
  global.addMixingItemFluidEItem('firmalife:food/cured_maize', 'minecraft:water', 100, 'firmalife:food/nixtamal ', 1, null)
  global.addMixingItemFluidEItem('tfc:food/soybean', 'tfc:salt_water', 1000, 'firmalife:food/soy_mixture', 1, 'heated')

  global.addMixingTagTagFluidTagEFluid('firmalife:sweetener', 'firmalife:foods/chocolate', 'tfc:milks', 1000, 'firmalife:chocolate', 1000, 'heated')

  event.remove({ id: 'tfc:quern/olive' })
  global.addQuerning('tfc:food/olive', 'tfc:olive_paste', 2)

  global.addQuerning('firmalife:food/cocoa_beans', 'firmalife:food/cocoa_powder', 1)
  global.addMilling(false, 'firmalife:food/cocoa_beans', 'firmalife:food/cocoa_powder', 1, 50, false)

  event.remove({ id: 'tfc:clay_knapping/brick' })
  event.recipes.tfc.clay_knapping('6x tfc:ceramic/unfired_brick', [
    'XX XX',
    '     ',
    'XX XX',
    '     ',
    'XX XX'
  ]).id('tfc:clay_knapping/brick')
  global.addCompactingTagEItem(`tfc:clay_knapping`, 'tfc:ceramic/unfired_brick', 6)

  event.remove({ output: 'supplementaries:flower_box' })
  event.recipes.tfc.clay_knapping('2x kubejs:unfired_flower_box', [
    'X   X',
    'XXXXX',
    '     ',
    'X   X',
    'XXXXX'
  ]).id('kubejs:clay_knapping/unfired_flower_box')
  global.addCompactingTagEItem(`tfc:clay_knapping`, 'kubejs:unfired_flower_box', 2)
  event.recipes.tfc.heating('supplementaries:flower_box', 'kubejs:unfired_flower_box', 1399).id('tfc:heating/flower_box')

  event.remove({ id: 'tfc:fire_clay_knapping/brick' })
  event.remove({ id: 'woodencog:compacting/brick' })
  event.recipes.tfc.fire_clay_knapping('6x tfc:ceramic/unfired_fire_brick', [
    'XX XX',
    '     ',
    'XX XX',
    '     ',
    'XX XX'
  ]).id('tfc:fire_clay_knapping/brick')
  global.addCompactingTagEItem(`tfc:fire_clay_knapping`, 'tfc:ceramic/unfired_fire_brick', 6)

  event.remove({ output: 'tfc:fire_bricks', type: 'minecraft:crafting_shaped' })
  event.shaped('2x tfc:fire_bricks', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'tfc:ceramic/fire_brick',
    A: 'tfc:mortar'
  }).id('tfc:crafting/fire_bricks')

  event.remove({ output: 'tfc:alabaster/bricks', type: 'minecraft:crafting_shaped' })
  event.shaped('4x tfc:alabaster/bricks', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'tfc:alabaster_brick',
    A: 'tfc:mortar'
  }).id('tfc:crafting/alabaster/bricks')

  event.remove({ output: 'tfc:wooden_bucket', type: 'minecraft:crafting_shaped' })
  event.shaped('tfc:wooden_bucket', [
    'S S',
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber'
  }).id('tfc:crafting/wooden_bucket')

  event.remove({ output: 'minecraft:bowl', type: 'minecraft:crafting_shaped' })
  event.shaped('minecraft:bowl', [
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber'
  }).id('minecraft:bowl')

  global.tfcGemTypes.forEach(i => {

    let input = `tfc:ore/${i}`
    let output = `tfc:gem/${i}`
    let transitionItem = `kubejs:transition_${i}`
  
    const cresults = []
    const cmethods = []
  
    cresults.push(Item.of(`${output}`).withChance(100))
  
    cmethods.push(event.recipes.createDeploying(transitionItem, [transitionItem, '#tfc:chisels']).keepHeldItem());
    cmethods.push(event.recipes.createDeploying(transitionItem, [transitionItem, '#tfc:chisels']).keepHeldItem());
    cmethods.push(event.recipes.createDeploying(transitionItem, [transitionItem, '#tfc:chisels']).keepHeldItem());
  
    event.recipes.createSequencedAssembly(cresults, input, cmethods).transitionalItem(transitionItem).loops(1);
  
  })

})

onEvent('server.datapack.first', event => {
  event.addTFCHeat('kubejs:unfired_flower_box', 0.8)

})