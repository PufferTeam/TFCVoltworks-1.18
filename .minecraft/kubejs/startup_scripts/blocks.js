onEvent('block.registry', event => {
    global.tfcRockTypes.forEach(rock => {
        event.create(`rock/pavedcobble/${rock}`).material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
        event.create(`rock/pavedcobble/${rock}_slab`, 'slab').material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
        event.create(`rock/pavedcobble/${rock}_stairs`, 'stairs').material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
        event.create(`rock/pavedcobble/${rock}_wall`, 'wall').material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    });

    event.create('test_block').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 
    event.create('sturdy_sheet').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 

    event.create('cracked_bedrock').material('stone').unbreakable()

    event.create('light_engineering_assembly').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 
    event.create('heavy_engineering_assembly').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 

    event.create('light_mechanical_block').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 
    event.create('light_mechanical_assembly').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 
    event.create('heavy_mechanical_block').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 
    event.create('heavy_mechanical_assembly').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 

    event.create('redstone_engineering_assembly').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 

    event.create('thermionic_engineering_block').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 
    event.create('thermionic_engineering_assembly').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true) 

    event.create('pitch_treated_wood').material('wood').hardness(0.5).tagBlock('minecraft:mineable/axe')
    event.create('ash_treated_wood').material('wood').hardness(0.5).tagBlock('minecraft:mineable/axe')

    global.customSheetmetalTypes.forEach(i => {
        event.create(`sheetmetal/${i}`).material('metal').tagBlock('minecraft:mineable/pickaxe')
        event.create(`sheetmetal/${i}_slab`, 'slab').material('metal').tagBlock('minecraft:mineable/pickaxe')
    });

    event.create(`brick/bloomery_bricks`).material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    event.create(`brick/bloomery_bricks_reinforced`).material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    event.create(`brick/fire_bricks_reinforced`).material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true) 
    event.create(`brick/coke_oven_bricks`).material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    event.create(`brick/tfcfire_bricks`).material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

    event.create('underclay').material('clay').tagBlock('minecraft:mineable/shovel')

})