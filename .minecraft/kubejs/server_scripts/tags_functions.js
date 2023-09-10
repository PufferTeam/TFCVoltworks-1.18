onEvent('tags.items', event => {
    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
    global.tfcFoodSeeds.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.tfcSaplings.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.waxingAgents.forEach(i => event.add('tfc:waxing_agents', i));
    global.tfcWoodTypes.forEach(i => event.add('quark:seed_pouch_holdable', `dttfc:${i}_seed`));

    event.add('tfc:placed_item_whitelist', 'kubejs:unfired_flower_box')
    event.add('tfc:unfired_pottery', 'kubejs:unfired_flower_box')

    global.stoneToolsTypes.forEach(i => {
        let result = i.split("/")
        let stone = result[0]
        event.add('tfc:pickaxes', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:usable_on_tool_rack', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:placed_item_whitelist', `kubejs:stone/pickaxe/${stone}`)
    });


})

onEvent('tags.blocks', event => {
    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
})