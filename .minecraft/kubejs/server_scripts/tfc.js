// priority: 0

onEvent('recipes', event => {

  global.tfcJarTypes.forEach(i => global.addMixingItemTagItemFluidEItem('firmalife:empty_jar', 'firmalife:sweetener', `tfc:food/${i}`, 'minecraft:water', 1000, `firmalife:${i}_jar`, 1, 'heated'))
  global.firmalifeJarTypes.forEach(i => global.addMixingItemTagItemFluidEItem('firmalife:empty_jar', 'firmalife:sweetener', `firmalife:food/${i}`, 'minecraft:water', 1000, `firmalife:${i}_jar`, 1, 'heated'))

  event.recipes.createMixing(Fluid.of('tfc:limewater', 500), ['tfc:powder/flux', Fluid.of('minecraft:water', 500)])
  event.recipes.createMixing('tfc:soaked_papyrus_strip', ['tfc:papyrus_strip', Fluid.of('minecraft:water', 200)])
  event.recipes.createMixing(Fluid.of('tfc:lye', 200), ['tfc:powder/wood_ash', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:tallow', 200), ['tfc:blubber', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:olive_oil_water', 200), ['tfc:olive_paste', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:salt_water', 125), ['tfc:powder/salt', Fluid.of('minecraft:water', 125)])
  event.recipes.createMixing('tfc:food/boiled_egg', ['minecraft:egg', Fluid.of('minecraft:water', 100)])

  global.addMixingItemFluidEItem('tfc:food/rice_grain', 'minecraft:water', 100, 'tfc:food/cooked_rice', 1, 'heated')
  global.addMixingItemFluidEItem('firmalife:food/tomato_sauce_mix', 'minecraft:water', 200, 'firmalife:food/tomato_sauce', 1, 'heated')
  global.addMixingItemFluidEItem('tfc:food/maize_grain', 'tfc:limewater', 1000, 'firmalife:food/cured_maize', 1, 'heated')
  global.addMixingItemFluidEItem('firmalife:food/cured_maize', 'minecraft:water', 100, 'firmalife:food/nixtamal ', 1, null)
  global.addMixingItemFluidEItem('tfc:food/soybean', 'tfc:salt_water', 1000, 'firmalife:food/soy_mixture', 1, 'heated')

  global.addMixingTagTagFluidTagEFluid('firmalife:sweetener', 'firmalife:foods/chocolate', 'tfc:milks', 1000, 'firmalife:chocolate', 1000, 'heated')

  event.remove({ output: 'tfc:fire_bricks', type: 'minecraft:crafting_shaped' })
  event.shaped('2x tfc:fire_bricks', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'tfc:ceramic/fire_brick',
    A: 'tfc:mortar'
  }).id('tfc:fire_bricks')

  event.remove({ output: 'tfc:alabaster/bricks', type: 'minecraft:crafting_shaped' })
  event.shaped('4x tfc:alabaster/bricks', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'tfc:alabaster_brick',
    A: 'tfc:mortar'
  }).id('tfc:alabaster/bricks')

  event.remove({ output: 'tfc:wooden_bucket', type: 'minecraft:crafting_shaped' })
  event.shaped('tfc:wooden_bucket', [
    'S S',
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber'
  }).id('tfc:wooden_bucket')

  event.remove({ output: 'minecraft:bowl', type: 'minecraft:crafting_shaped' })
  event.shaped('minecraft:bowl', [
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber'
  }).id('minecraft:bowl')



})