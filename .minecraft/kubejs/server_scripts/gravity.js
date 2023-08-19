onEvent('tags.blocks', event => {
    global.tfcRockTypes.forEach(i => tagGravity('tfc:rock', i, 'landslide', 'cobble'));
    global.tfcRockTypes.forEach(i => tagGravity('tfc:rock', i, 'landslide', 'mossy_cobble'));
    global.tfcRockTypes.forEach(i => tagGravity('tfc:rock', i, 'collapse', 'raw'));

    global.tfcRockTypes.forEach(i => tagGravity('additionalplacements:tfc.rock', i, 'landslide', 'cobble'));
    global.tfcRockTypes.forEach(i => tagGravity('additionalplacements:tfc.rock', i, 'landslide', 'mossy_cobble'));
    global.tfcRockTypes.forEach(i => tagGravity('additionalplacements:tfc.rock', i, 'collapse', 'raw'));
    function tagGravity(mod, name, type, block) {
        event.add(`tfc:can_${type}`, `${mod}/${block}/${name}_slab`)
        event.add(`tfc:can_${type}`, `${mod}/${block}/${name}_stairs`)
        if (mod == 'tfc:rock') {
            event.add(`tfc:can_${type}`, `${mod}/${block}/${name}_wall`)
        }
    }

    global.tfcRockTypes.forEach(i => tagInsulation('tfc:rock', i, 'cobble'));
    global.tfcRockTypes.forEach(i => tagInsulation('tfc:rock', i, 'mossy_cobble'));
    global.tfcRockTypes.forEach(i => tagInsulation('tfc:rock', i, 'raw'));
    global.tfcRockTypes.forEach(i => tagInsulation('tfc:rock', i, 'bricks'));
    global.tfcRockTypes.forEach(i => tagInsulation('tfc:rock', i, 'cracked_bricks'));
    global.tfcRockTypes.forEach(i => tagInsulation('tfc:rock', i, 'smooth'));

    global.tfcRockTypes.forEach(i => tagInsulation('additionalplacements:tfc.rock', i, 'cobble'));
    global.tfcRockTypes.forEach(i => tagInsulation('additionalplacements:tfc.rock', i, 'mossy_cobble'));
    global.tfcRockTypes.forEach(i => tagInsulation('additionalplacements:tfc.rock', i, 'raw'));
    global.tfcRockTypes.forEach(i => tagInsulation('additionalplacements:tfc.rock', i, 'bricks'));
    global.tfcRockTypes.forEach(i => tagInsulation('additionalplacements:tfc.rock', i, 'cracked_bricks'));
    global.tfcRockTypes.forEach(i => tagInsulation('additionalplacements:tfc.rock', i, 'smooth'));

    global.tfcRockTypes.forEach(i => tagInsulation('kubejs:rock', i, 'pavedcobble'));
    global.tfcRockTypes.forEach(i => tagInsulation('additionalplacements:kubejs.rock', i, 'pavedcobble'));

    function tagInsulation(mod, name, block) {
        event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}_slab`)
        event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}_stairs`)
        event.add(`tfc:bloomery_insulation`, `${mod}/${block}/${name}_slab`)
        event.add(`tfc:bloomery_insulation`, `${mod}/${block}/${name}_stairs`)
        if (mod == 'tfc:rock') {
            event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}_wall`)
            event.add(`tfc:bloomery_insulation`, `${mod}/${block}/${name}_wall`)
        }
        if(mod == 'kubejs:rock') {
            event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}`)
            event.add(`tfc:bloomery_insulation`, `${mod}/${block}/${name}`)
        }
    }
})

onEvent('recipes', event => {
    global.tfcRockTypes.forEach(i => recipeGravity('tfc:rock', i, 'landslide', 'cobble'));
    global.tfcRockTypes.forEach(i => recipeGravity('tfc:rock', i, 'landslide', 'mossy_cobble'));
    global.tfcRockTypes.forEach(i => recipeGravity('tfc:rock', i, 'collapse', 'raw'));

    global.tfcRockTypes.forEach(i => recipeGravity('additionalplacements:tfc.rock', i, 'landslide', 'cobble'));
    global.tfcRockTypes.forEach(i => recipeGravity('additionalplacements:tfc.rock', i, 'landslide', 'mossy_cobble'));
    global.tfcRockTypes.forEach(i => recipeGravity('additionalplacements:tfc.rock', i, 'collapse', 'raw'));

    function recipeGravity(mod, name, type, block) {
        global.addGravity(`tfc:${type}`, `${mod}/${block}/${name}_slab`)
        global.addGravity(`tfc:${type}`, `${mod}/${block}/${name}_stairs`)
        if (mod == 'tfc:rock') {
            global.addGravity(`tfc:${type}`, `${mod}/${block}/${name}_wall`)
        }
    }
})