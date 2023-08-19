onEvent('block.registry', event => {
    global.tfcRockTypes.forEach(i => pavedCobblestone(i));

    function pavedCobblestone(rock) {
        event.create(`rock/pavedcobble/${rock}`).material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
        event.create(`rock/pavedcobble/${rock}_slab`, 'slab').material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
        event.create(`rock/pavedcobble/${rock}_stairs`, 'stairs').material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
        event.create(`rock/pavedcobble/${rock}_wall`, 'wall').material('stone').hardness(5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    }

    event.create('test_block').material('stone').hardness(0.5).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool')
        .requiresTool(true) // Make it require a tool to drop ay loot
})