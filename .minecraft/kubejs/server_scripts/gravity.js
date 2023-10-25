onEvent('tags.blocks', event => {
    function tagGravity(mod, name, type, block) {
        event.add(`tfc:can_${type}`, `${mod}/${block}/${name}_slab`)
        event.add(`tfc:can_${type}`, `${mod}/${block}/${name}_stairs`)
        if (mod == 'tfc:rock') {
            event.add(`tfc:can_${type}`, `${mod}/${block}/${name}_wall`)
        }
    }

    global.tfcRockTypes.forEach(i => {
        tagGravity('tfc:rock', i, 'landslide', 'cobble')
        tagGravity('tfc:rock', i, 'landslide', 'mossy_cobble')
        tagGravity('tfc:rock', i, 'collapse', 'raw')
     
        tagGravity('additionalplacements:tfc.rock', i, 'landslide', 'cobble')
        tagGravity('additionalplacements:tfc.rock', i, 'landslide', 'mossy_cobble')
        tagGravity('additionalplacements:tfc.rock', i, 'collapse', 'raw')

        tagInsulation('tfc:rock', i, 'cobble')
        tagInsulation('tfc:rock', i, 'cobble')
        tagInsulation('tfc:rock', i, 'mossy_cobble')
        tagInsulation('tfc:rock', i, 'mossy_bricks')
        tagInsulation('tfc:rock', i, 'raw')
        tagInsulation('tfc:rock', i, 'bricks')
        tagInsulation('tfc:rock', i, 'cracked_bricks')
        tagInsulation('tfc:rock', i, 'smooth')
    
        tagInsulation('additionalplacements:tfc.rock', i, 'cobble')
        tagInsulation('additionalplacements:tfc.rock', i, 'mossy_cobble')
        tagInsulation('additionalplacements:tfc.rock', i, 'mossy_bricks')
        tagInsulation('additionalplacements:tfc.rock', i, 'raw')
        tagInsulation('additionalplacements:tfc.rock', i, 'bricks')
        tagInsulation('additionalplacements:tfc.rock', i, 'cracked_bricks')
        tagInsulation('additionalplacements:tfc.rock', i, 'smooth')
    
        tagInsulation('kubejs:rock', i, 'pavedcobble')
        tagInsulation('additionalplacements:kubejs.rock', i, 'pavedcobble')
    });

    global.tfcWoodTypes.forEach(i => {
        tagMineable('axe', 'additionalplacements:tfc.wood', i, 'planks')
    });

    global.netherWoodTypes.forEach(i => {
        tagMineable('axe', 'additionalplacements:beneath.wood', i, 'planks')
    });

    tagMineableSpecial('pickaxe', `additionalplacements:quark.shingles`)
    global.colors.forEach(i => {
        tagMineable('pickaxe', 'additionalplacements:tfc.alabaster', i, 'bricks')
        tagMineable('pickaxe', 'additionalplacements:tfc.alabaster', i, 'polished')

        tagMineableSpecial('pickaxe', `additionalplacements:quark.${i}_shingles`)
    });

    global.tfcSandstoneTypes.forEach(i => {
        tagMineableSpecial('pickaxe', `additionalplacements:tfc.raw_sandstone/${i}`)
        tagMineableSpecial('pickaxe', `additionalplacements:tfc.smooth_sandstone/${i}`)
        tagMineableSpecial('pickaxe', `additionalplacements:tfc.cut_sandstone/${i}`)
    });

    global.tfcSoilsTypes.forEach(i => {
        tagMineableSpecial('shovel', `additionalplacements:tfc.mud_bricks/${i}`)
    });


    addDirectInsulation('immersiveengineering:blastbrick')
    addDirectInsulation('immersiveengineering:blastbrick_reinforced')
    
    function addDirectInsulation(input) {
        event.add('tfc:forge_insulation', input)
    }

    function tagInsulation(mod, name, block) {
        let result = mod.split(":")
        let modName = result[0]

        event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}_slab`)
        event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}_stairs`)

        if (mod == 'tfc:rock') {
            event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}_wall`)
        }
        if(mod == 'kubejs:rock') {
            event.add(`tfc:forge_insulation`, `${mod}/${block}/${name}`)
        }

        if(modName == 'additionalplacements') {
            tagMineable('pickaxe', mod, name, block)
        }
    }

    function tagMineable(tool, mod, name, block) {
        event.add(`minecraft:mineable/${tool}`, `${mod}/${block}/${name}_slab`)
        event.add(`minecraft:mineable/${tool}`, `${mod}/${block}/${name}_stairs`)
    }

    function tagMineableSpecial(tool, name) {
        let result = name.split(":")
        let modName = result[0]

        event.add(`minecraft:mineable/${tool}`, `${name}_slab`)

        if(modName !== 'quark') {
            event.add(`minecraft:mineable/${tool}`, `${name}_stairs`)
        }

    }
});

onEvent('recipes', event => {
    global.tfcRockTypes.forEach(i => {
        recipeGravity('tfc:rock', i, 'landslide', 'cobble')
        recipeGravity('tfc:rock', i, 'landslide', 'mossy_cobble')
        recipeGravity('tfc:rock', i, 'collapse', 'raw')
     
        recipeGravity('additionalplacements:tfc.rock', i, 'landslide', 'cobble')
        recipeGravity('additionalplacements:tfc.rock', i, 'landslide', 'mossy_cobble')
        recipeGravity('additionalplacements:tfc.rock', i, 'collapse', 'raw')
    });

    function recipeGravity(mod, name, type, block) {
        global.addGravity(`tfc:${type}`, `${mod}/${block}/${name}_slab`)
        global.addGravity(`tfc:${type}`, `${mod}/${block}/${name}_stairs`)
        if (mod == 'tfc:rock') {
            global.addGravity(`tfc:${type}`, `${mod}/${block}/${name}_wall`)
        }
    }
})