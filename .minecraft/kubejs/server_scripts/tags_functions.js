onEvent('tags.items', event => {
    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
    global.tfcFoodSeeds.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.tfcSaplings.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.tfcWoodTypes.forEach(i => event.add('quark:seed_pouch_holdable', `dttfc:${i}_seed`));

})

onEvent('tags.blocks', event => {
    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
})
