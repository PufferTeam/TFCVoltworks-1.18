// priority: 0

onEvent('recipes', event => {

  global.tfcJarTypes.forEach(i => global.addMixingItemItemFluidEItem('firmalife:empty_jar', `tfc:food/${i}`, 'firmalife:sugar_water', 1000, `firmalife:${i}_jar`, 1, 'heated'))
  global.firmalifeJarTypes.forEach(i => global.addMixingItemItemFluidEItem('firmalife:empty_jar', `firmalife:food/${i}`, 'firmalife:sugar_water', 1000, `firmalife:${i}_jar`, 1, 'heated'))

  event.recipes.createMixing(Fluid.of('tfc:limewater', 500), ['tfc:powder/flux', Fluid.of('minecraft:water', 500)])
  event.recipes.createFilling('tfc:soaked_papyrus_strip', ['tfc:papyrus_strip', Fluid.of('minecraft:water', 200)])
  event.recipes.createMixing(Fluid.of('tfc:lye', 200), ['tfc:powder/wood_ash', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:tallow', 200), ['tfc:blubber', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:olive_oil_water', 200), ['tfc:olive_paste', Fluid.of('minecraft:water', 200)]).heated()
  event.recipes.createMixing(Fluid.of('tfc:salt_water', 125), ['tfc:powder/salt', Fluid.of('minecraft:water', 125)])
  event.recipes.createMixing('tfc:food/boiled_egg', ['minecraft:egg', Fluid.of('minecraft:water', 100)]).heated()
  event.recipes.createMixing('minecraft:magma_cream', ['tfc:glue', 'minecraft:blaze_powder', Fluid.of('minecraft:lava', 200)]).superheated()

  event.recipes.tfc.pot([Fluid.of('tfc:tallow', 250), 'tfc:dirty_jute_net'], [Fluid.of('minecraft:water', 1000), '4x tfc:food/beef', 'tfc:jute_net'], 9600, 55)

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

  event.remove({ id: `firmalife:crafting/masa_1` })
  event.remove({ id: `firmalife:crafting/masa_2` })
  event.remove({ id: `firmalife:crafting/masa_3` })
  event.remove({ id: `firmalife:crafting/masa_4` })
  event.remove({ id: `firmalife:crafting/masa_5` })
  event.remove({ id: `firmalife:crafting/masa_6` })
  event.remove({ id: `firmalife:crafting/masa_7` })
  event.remove({ id: `firmalife:crafting/masa_8` })

  global.addFirmaMixingItemFluidEItem(1, `firmalife:food/masa_flour`, 'minecraft:water', 1000, `firmalife:food/masa`, 2)
  global.addFirmaMixingItemFluidEItem(2, `firmalife:food/masa_flour`, 'minecraft:water', 1000, `firmalife:food/masa`, 4)

  global.addMixingItemFluidEItem(`firmalife:food/masa_flour`, 'minecraft:water', 100, `firmalife:food/masa`, 2, null)

  global.tfcSoilsTypes.forEach(i => {
    event.recipes.createFilling(`tfc:mud/${i}`, [`tfc:dirt/${i}`, Fluid.of('minecraft:water', 100)])
    global.addDrying(`tfc:drying_bricks/${i}`, `tfc:mud_brick/${i}`)
  })

  global.resinWoodTypes.forEach(i => {
    global.addExtraShapeless(`kubejs:${i}_leaking_log`, 'thermal:rosin', 1, `tfc:wood/twig/${i}`, 'tfc:knives')
    global.addDamageInputShapeless(1, `tfc:wood/log/${i}`, `kubejs:${i}_leaking_log`, "tfc:chisels", 1)
    global.addMechanicalExtruderNoIngredient(`kubejs:${i}_leaking_log`, 'thermal:rosin')
  })

  global.addMixingItemFluidEItem('tfc:food/rice_grain', 'minecraft:water', 100, 'tfc:food/cooked_rice', 1, 'heated')
  global.addMixingItemFluidEItem('firmalife:food/tomato_sauce_mix', 'minecraft:water', 200, 'firmalife:food/tomato_sauce', 1, 'heated')
  global.addMixingItemFluidEItem('tfc:food/maize_grain', 'tfc:limewater', 1000, 'firmalife:food/cured_maize', 1, 'heated')
  global.addFillingItemFluidEItem('firmalife:food/cured_maize', 'minecraft:water', 100, 'firmalife:food/nixtamal ', 1, null)
  global.addMixingItemFluidEItem('tfc:food/soybean', 'tfc:salt_water', 1000, 'firmalife:food/soy_mixture', 1, 'heated')

  global.addMixingTagTagFluidTagEFluid('firmalife:sweetener', 'firmalife:foods/chocolate', 'tfc:milks', 1000, 'firmalife:chocolate', 1000, 'heated')

  event.remove({ id: 'tfc:quern/olive' })
  global.addQuerning('tfc:food/olive', 'tfc:olive_paste', 2)

  global.addCompactingFluid('thermal:resin', 200, 'immersiveengineering:sawdust', 'kubejs:compacted_sawdust')

  global.addQuerningAndMilling(false, 'firmalife:food/cocoa_beans', 'firmalife:food/cocoa_powder', 1)
  global.addQuerningAndMilling(false, 'tfc:ore/gypsum', 'kubejs:powder/gypsum', 4)
  global.addQuerningAndMilling(false, 'minecraft:quartz', 'mekanism:dust_quartz', 4)
  global.addQuerningAndMilling(false, 'beneath:nether_pebble', 'create:cinder_flour', 1)
  global.addQuerningAndMilling(false, 'beneath:crackrack_rock', 'kubejs:clinker_flour', 1)
  global.addQuerningAndMilling(false, 'immersiveengineering:coal_coke', 'immersiveengineering:dust_coke', 1)
  global.addQuerningAndMilling(false, 'immersivepetroleum:petcoke', 'immersivepetroleum:petcoke_dust', 1)
  global.addQuerningAndMilling(false, 'tfc:ore/cryolite', 'kubejs:powder/cryolite', 4)
  global.addQuerningAndMilling(false, 'tfc:ore/bituminous_coal', 'kubejs:powder/bituminous_coal', 4)
  global.addQuerningAndMilling(false, 'tfc:ore/lignite', 'kubejs:powder/lignite', 4)
  global.addQuerningAndMilling(false, 'beneath:cursecoal', 'kubejs:powder/cursecoal', 4)
  global.addQuerningAndMilling(false, 'minecraft:ender_pearl', 'kubejs:powder/ender_pearl', 2)

  event.recipes.firmalife.mixing_bowl(['2x kubejs:powder/fly_ash'], ['#tfc:ash', 'kubejs:powder/gypsum', 'tfc:powder/charcoal', Fluid.of('tfc:limewater', 1000)])
  event.recipes.createMixing('2x kubejs:powder/fly_ash', ['#tfc:ash', 'kubejs:powder/gypsum', 'tfc:powder/charcoal', Fluid.of('tfc:limewater', 100)])
  event.recipes.tfc.barrel_instant([Fluid.of('kubejs:ashwater', 500)], 'kubejs:powder/fly_ash', Fluid.of('minecraft:water', 500))
  event.recipes.createMixing(Fluid.of('kubejs:ashwater', 500), ['kubejs:powder/fly_ash', Fluid.of('minecraft:water', 500)])
  event.recipes.createFilling('kubejs:brick/unfired_ash_brick', ['tfc:ceramic/unfired_brick', Fluid.of('kubejs:ashwater', 125)])

  event.recipes.firmalife.mixing_bowl(['2x kubejs:powder/coke_oven'], ['kubejs:powder/fly_ash', 'tfc:powder/graphite', 'kubejs:clinker_flour', Fluid.of('tfc:limewater', 1000)])
  event.recipes.createMixing('2x kubejs:powder/coke_oven', ['kubejs:powder/fly_ash', 'tfc:powder/graphite', 'kubejs:clinker_flour', Fluid.of('tfc:limewater', 100)])
  event.recipes.tfc.barrel_instant([Fluid.of('kubejs:clinkerwater', 500)], 'kubejs:powder/coke_oven', Fluid.of('minecraft:water', 500))
  event.recipes.createMixing(Fluid.of('kubejs:clinkerwater', 500), ['kubejs:powder/coke_oven', Fluid.of('minecraft:water', 500)])
  event.recipes.createFilling('kubejs:brick/unfired_coke_oven_brick', ['tfc:ceramic/unfired_brick', Fluid.of('kubejs:clinkerwater', 125)])

  event.recipes.firmalife.mixing_bowl(['2x kubejs:powder/bloomery'], ['kubejs:powder/fly_ash', 'rosia:magnetite_powder', 'create:cinder_flour', Fluid.of('tfc:limewater', 1000)])
  event.recipes.createMixing('2x kubejs:powder/bloomery', ['kubejs:powder/fly_ash', 'rosia:magnetite_powder', 'create:cinder_flour', Fluid.of('tfc:limewater', 100)])
  event.recipes.tfc.barrel_instant([Fluid.of('kubejs:cinderwater', 500)], 'kubejs:powder/bloomery', Fluid.of('minecraft:water', 500))
  event.recipes.createMixing(Fluid.of('kubejs:cinderwater', 500), ['kubejs:powder/bloomery', Fluid.of('minecraft:water', 500)])
  event.recipes.createFilling('kubejs:brick/unfired_bloomery_brick', ['tfc:ceramic/unfired_brick', Fluid.of('kubejs:cinderwater', 125)])

  //event.recipes.firmalife.mixing_bowl(['2x kubejs:powder/fire'], ['kubejs:powder/fly_ash', 'kubejs:powder/bauxite', 'kubejs:abyss_flour', Fluid.of('tfc:limewater', 1000)])
  event.recipes.createMixing('2x kubejs:powder/fire', ['kubejs:powder/fly_ash', 'kubejs:powder/bauxite', 'kubejs:abyss_flour', Fluid.of('tfc:limewater', 100)]).heated()
  event.recipes.tfc.barrel_instant([Fluid.of('kubejs:firewater', 500)], 'kubejs:powder/fire', Fluid.of('minecraft:water', 500))
  event.recipes.createMixing(Fluid.of('kubejs:firewater', 500), ['kubejs:powder/fire', Fluid.of ('minecraft:water', 500)])
  event.recipes.createFilling('kubejs:brick/unfired_fire_brick', ['tfc:ceramic/unfired_fire_brick', Fluid.of('kubejs:firewater', 125)])

  event.remove({ output: 'create:rose_quartz' })
  event.recipes.firmalife.mixing_bowl(['create:rose_quartz'], ['minecraft:quartz', 'tfc_metalwork:metal/dust/gold', 'create:cinder_flour', '2x minecraft:redstone', Fluid.of('tfc:lye', 1000)])
  event.recipes.createMixing('create:rose_quartz', ['minecraft:quartz', 'tfc_metalwork:metal/dust/gold', 'create:cinder_flour', 'minecraft:redstone', 'minecraft:redstone', Fluid.of('tfc:lye', 1000)])

  event.remove({ output: 'tfc:fire_clay' })
  //event.recipes.firmalife.mixing_bowl(['tfc:fire_clay'], ['kubejs:underclay_ball', '4x tfc:powder/kaolinite', 'mekanism:dust_quartz', 'tfc:powder/sulfur', Fluid.of('minecraft:water', 1000)])
  //event.recipes.createMixing('tfc:fire_clay', ['kubejs:underclay_ball', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'mekanism:dust_quartz', 'tfc:powder/sulfur', Fluid.of('minecraft:water', 100)]).superheated()
  event.shapeless('tfc:fire_clay', ['kubejs:underclay_ball', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'tfc:powder/kaolinite', 'mekanism:dust_quartz', 'tfc:powder/sulfur'])

  event.remove({ id: 'tfc:heating/fired_fire_brick' })

  event.recipes.tfc.heating('kubejs:brick/bloomery_brick', 'kubejs:brick/unfired_bloomery_brick', 1399).id('tfc:heating/fired_bloomery_brick')
  event.recipes.tfc.heating('kubejs:brick/coke_oven_brick', 'kubejs:brick/unfired_coke_oven_brick', 1399).id('tfc:heating/fired_coke_oven_brick')
  event.recipes.tfc.heating('supplementaries:ash_brick', 'kubejs:brick/unfired_ash_brick', 1399).id('tfc:heating/fired_ash_brick')
  event.recipes.tfc.heating('kubejs:brick/tfcfire_brick', 'tfc:ceramic/unfired_fire_brick', 1399).id('tfc:heating/fired_fire_brick')
  event.recipes.tfc.heating('tfc:ceramic/fire_brick', 'kubejs:brick/unfired_fire_brick', 1399).id('tfc:heating/fired_blast_brick')

  event.shaped('kubejs:underclay', [
    'GG',
    'GG'
  ], {
    G: 'kubejs:underclay_ball'
  }).id('minecraft:underclay_from_underclay_ball')
  event.shapeless('4x tfc:fire_clay', ['tfc:fire_clay_block']).id('tfc:fire_clay_ball_from_fire_clay')
  event.shapeless('4x kubejs:underclay_ball', ['kubejs:underclay']).id('kubejs:underclay_ball_from_underclay')

  event.recipes.tfc.blast_furnace(Fluid.of('tfc_metallum:metal/aluminum', 1), Fluid.of('kubejs:alumina', 1), 'kubejs:powder/cryolite')

  function animalHideRecipes(size, fluidAmount) {
    event.remove({ id: `woodencog:mixing/barrel/${size}_soaked_hide` })
    event.recipes.createFilling(`tfc:${size}_soaked_hide`, [`tfc:${size}_raw_hide`, Fluid.of('tfc:limewater', fluidAmount)]).id(`woodencog:filling/barrel/${size}_soaked_hide`)

    event.remove({ id: `woodencog:mixing/barrel/${size}_prepared_hide` })
    event.recipes.createFilling(`tfc:${size}_prepared_hide`, [`tfc:${size}_scraped_hide`, Fluid.of('minecraft:water', fluidAmount)]).id(`woodencog:filling/barrel/${size}_prepared_hide`)
  }

  animalHideRecipes('small', 300)
  animalHideRecipes('medium', 400)
  animalHideRecipes('large', 500)

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

  event.remove({ output: 'supplementaries:ash_bricks', type: 'minecraft:crafting_shaped' })
  function brickRecipe(full_block, cutItem, catalyst) {
    event.shaped(`2x ${full_block}`, [
      'SSS',
      'SAS',
      'SSS'
    ], {
      S: cutItem,
      A: catalyst
    })
  }

  brickRecipe('kubejs:brick/coke_oven_bricks', 'kubejs:brick/coke_oven_brick', 'tfc:mortar')
  brickRecipe('kubejs:brick/tfcfire_bricks', 'kubejs:brick/tfcfire_brick', 'tfc:mortar')
  brickRecipe('kubejs:brick/bloomery_bricks', 'kubejs:brick/bloomery_brick', 'tfc:mortar')
  brickRecipe('supplementaries:ash_bricks', 'supplementaries:ash_brick', 'tfc:mortar')

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
    'SAS',
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber',
    A: '#forge:string'
  }).id('tfc:crafting/wooden_bucket')

  event.remove({ output: 'minecraft:bowl', type: 'minecraft:crafting_shaped' })
  event.shaped('minecraft:bowl', [
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber'
  }).id('minecraft:bowl')

  event.remove({ output: 'beneath:crimson_thatch' })
  event.shaped('beneath:crimson_thatch', [
    'AA',
    'AA'
  ], {
    A: 'beneath:crimson_straw'
  }).id('beneath:crafting/crimson_thatch')

  event.remove({ id: 'tfc:crafting/powderkeg' })
  event.shaped('tfc:powderkeg', [
      'SAS',
      'SBS',
      'SSS'
  ], {
      S: 'kubejs:creosote_treated_lumber',
      B: 'minecraft:red_dye',
      A: '#tfc:high_quality_cloth'
  }).id('tfc:crafting/powderkeg')

  event.remove({ id: 'tfc:crafting/stick_bunch' })
  event.shapeless('tfc:stick_bunch', ['#tfc:firepit_sticks', '#tfc:firepit_sticks', '#tfc:firepit_sticks', '#tfc:firepit_sticks']).id('tfc:crafting/stick_bunch')

  event.remove({ id: 'tfc:crafting/stick_bundle' })
  event.shapeless('tfc:stick_bundle', ['tfc:stick_bunch', 'tfc:stick_bunch', 'tfc:stick_bunch', 'tfc:stick_bunch']).id('tfc:crafting/stick_bundle')

  event.remove({ id: 'tfc:crafting/stick_from_bunch' })
  event.shapeless('4x minecraft:stick', ['tfc:stick_bunch']).id('tfc:crafting/stick_from_bunch')

  event.remove({ id: 'tfc:crafting/stick_from_bundle' })
  event.shapeless('16x minecraft:stick', ['tfc:stick_bundle']).id('tfc:crafting/stick_from_bundle')

  global.tfcGemTypes.forEach(i => {

    let input = `tfc:ore/${i}`
    let output = `tfc:gem/${i}`
    let transitionItem = `kubejs:transition_${i}`

    const cresults = []
    const cmethods = []

    cresults.push(Item.of(`${output}`).withChance(100))

    cmethods.push(event.recipes.createDeploying(transitionItem, [transitionItem, '#tfc:chisels']));

    event.recipes.createSequencedAssembly(cresults, input, cmethods).transitionalItem(transitionItem).loops(3);

  })

  event.recipes.createMixing(Fluid.of('kubejs:pitch', 200), ['thermal:rosin', Fluid.of('tfc:tannin', 200)]).heated()
  event.recipes.tfc.pot(Fluid.of('kubejs:pitch', 1000), [Fluid.of('tfc:tannin', 1000), '5x thermal:rosin'], 50, 500)

})

onEvent('server.datapack.first', event => {
  event.addTFCHeat('kubejs:unfired_flower_box', 0.8)
  event.addTFCMetal('kubejs:raw_andesite_alloy', 520, 0.01, 'create:andesite_alloy', 'minecraft:structure_void')
  event.addTFCMetal('kubejs:cast_aluminum', 660, 0.01, 'minecraft:structure_void', 'minecraft:structure_void')
  event.addTFCMetal('thermal:resin', 240, 0.01, 'thermal:rosin', 'minecraft:structure_void')
  event.addTFCMetal('kubejs:wax', 240, 0.01, 'firmalife:beeswax', 'minecraft:structure_void')
  event.addTFCMetal('create:honey', 240, 0.01, 'minecraft:structure_void', 'minecraft:structure_void')

  event.addTFCHeat('kubejs:brick/unfired_ash_brick', 1.2)
  event.addTFCHeat('kubejs:brick/unfired_coke_oven_brick', 1.2)
  event.addTFCHeat('kubejs:brick/unfired_bloomery_brick', 1.2)

})