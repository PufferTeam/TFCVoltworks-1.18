onEvent('recipes', event => {

    //event.recipes.tfc.damage_inputs_shapeless_crafting(`tfc:alabaster/polished`, [`tfc:alabaster/raw`, Item.of('#tfc:chisels').ignoreNBT()])
    global.addDamageInputShapeless(1, `tfc:alabaster/raw`, `tfc:alabaster/polished`, "tfc:chisels", 1)

    global.addChiselCrafting = function addChiselCrafting(input_item, output_item) {
        event.recipes.tfc.chisel(output_item, input_item, 'smooth')
        //event.recipes.tfc.damage_inputs_shapeless_crafting(output_item, [input_item, Item.of('#tfc:chisels').ignoreNBT()])
        global.addDamageInputShapeless(1, input_item, output_item, "tfc:chisels", 1)
    }

    function miscAlabasterRecipes(mod, name) {
        //event.recipes.tfc.damage_inputs_shapeless_crafting(`${mod}:alabaster/polished/${name}`, [`${mod}:alabaster/raw/${name}`, Item.of('#tfc:chisels').ignoreNBT()])
        global.addDamageInputShapeless(1, `${mod}:alabaster/raw/${name}`, `${mod}:alabaster/polished/${name}`, "tfc:chisels", 1)
        global.addCutting(`${mod}:alabaster/raw/${name}`, `${mod}:alabaster/polished/${name}`)

    }

    function specialCutRecipes(mod, name, type, material) {
        let pressureplate = null;
        let button = null;
        let suffixpressureplate = null;
        let suffixbutton = null;

        if (type == 'rock') {
            pressureplate = 'pressure_plate';
            button = 'button';
            suffixpressureplate = '';
            suffixbutton = '';
        } else if (type == 'wood') {
            pressureplate = 'planks'
            button = 'planks';
            suffixpressureplate = '_pressure_plate';
            suffixbutton = '_button';
        }

        if (type == 'wood' || type == 'rock') {
            event.remove({ id: `tfc:crafting/${type}/${name}_pressure_plate` })
            //event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless(`16x ${mod}:${type}/${pressureplate}/${name}${suffixpressureplate}`, [`${mod}:${type}/${material}/${name}_slab`, `${mod}:${type}/${material}/${name}_slab`, 'minecraft:redstone', Item.of('#tfc:chisels').ignoreNBT()]))
            global.addDamageInputExtraShapeless(2, `${mod}:${type}/${material}/${name}_slab`, 'minecraft:redstone', `${mod}:${type}/${pressureplate}/${name}${suffixpressureplate}`, "tfc:chisels", 16)

            event.remove({ id: `tfc:crafting/${type}/${name}_button` })
            //event.recipes.tfc.damage_inputs_shapeless_crafting(event.shapeless(`16x ${mod}:${type}/${button}/${name}${suffixbutton}`, [`${mod}:${type}/${material}/${name}_slab`, 'minecraft:redstone', Item.of('#tfc:chisels').ignoreNBT()]))
            global.addDamageInputExtraShapeless(1, `${mod}:${type}/${material}/${name}_slab`, 'minecraft:redstone', `${mod}:${type}/${button}/${name}${suffixbutton}`, "tfc:chisels", 16)

        }

    }

    function addSmallCutRecipes(cutItem, full_block) {
        let slab = `${full_block}_slab`
        let stairs = `${full_block}_stairs`

        event.shaped(slab, [
            'SS'
        ], {
            S: cutItem
        })

        event.shaped(stairs, [
            'S ',
            'SS'
        ], {
            S: cutItem
        })

    }

    function addBigCutRecipes(catalyst, cutItem, full_block) {
        let slab = `${full_block}_slab`
        let stairs = `${full_block}_stairs`
        let wall = `${full_block}_wall`

        if (full_block == 'minecraft:bricks') {
            slab = 'brick_slab'
            stairs = 'brick_stairs'
            wall = 'brick_wall'
        }

        event.remove({ output: full_block, type: 'minecraft:crafting_shaped' })

        event.shaped(`2x ${full_block}`, [
            'SSS',
            'SAS',
            'SSS'
        ], {
            S: cutItem,
            A: catalyst
        })

        event.shaped(`2x ${stairs}`, [
            'S  ',
            'SAS',
            'SSS'
        ], {
            S: cutItem,
            A: catalyst
        })

        event.shaped(`3x ${slab}`, [
            ' A ',
            'SSS',
            'SSS'
        ], {
            S: cutItem,
            A: catalyst
        })
        event.shaped(`3x ${slab}`, [
            'SSS',
            'SSS',
            ' A '
        ], {
            S: cutItem,
            A: catalyst
        })

        event.shaped(`2x ${wall}`, [
            'S S',
            'SAS',
            'S S'
        ], {
            S: cutItem,
            A: catalyst
        })
    }

    function addCuttingRecipes(type, full_block) {
        let slab = `${full_block}_slab`
        let stairs = `${full_block}_stairs`
        let wall = `${full_block}_wall`

        if (type == 'rockpaved') {
            global.addCutting2Output(full_block, slab)
            global.addCutting(full_block, stairs)
        }

        global.addCutting(full_block, wall)
    }

    function addCutRecipes(type, full_block) {
        let slab = `${full_block}_slab`
        let stairs = `${full_block}_stairs`
        let wall = `${full_block}_wall`

        if (type == 'bricks') {
            slab = 'brick_slab'
            stairs = 'brick_stairs'
            wall = 'brick_wall'
        }

        event.remove({ output: slab, type: 'minecraft:crafting_shaped' })
        event.remove({ output: stairs, type: 'minecraft:crafting_shaped' })
        event.remove({ output: wall, type: 'minecraft:crafting_shaped' })

        //Slab
        global.add1x2Shaped(slab, full_block, 1)
        //event.recipes.tfc.damage_inputs_shapeless_crafting(`2x ${slab}`, [full_block, full_block, Item.of('#tfc:chisels').ignoreNBT()])
        global.addDamageInputShapeless(2, full_block, slab, "tfc:chisels", 2)

        //Stairs
        global.add2x2Shaped(stairs, full_block, 3)
        //event.recipes.tfc.damage_inputs_shapeless_crafting(`4x ${stairs}`, [full_block, full_block, full_block, Item.of('#tfc:chisels').ignoreNBT()])
        global.addDamageInputShapeless(3, full_block, stairs, "tfc:chisels", 4)

        if (type !== 'rock' && type !== 'alabaster' && type !== 'mud_bricks' && type !== 'sandstone' && type !== 'wood') {
            event.recipes.tfc.chisel(stairs, full_block, 'stair')
            event.recipes.tfc.chisel(slab, full_block, 'slab').extraDrop(slab)
        }

        //Wall
        if (type == 'rockpaved' || type == 'rock' || type == 'alabaster' || type == 'mud_bricks' || type == 'sandstone' || type == 'bricks') {
            event.recipes.tfc.damage_inputs_shapeless_crafting(`10x ${wall}`, [`6x ${full_block}`, Item.of('#tfc:chisels').ignoreNBT()])
        }
    }

    function addSpecialRockRecipes(type, block) {
        let fblock = `tfc:rock/${type}/${block}`
        let mossyFblock = `tfc:rock/mossy_${type}/${block}`
        let slab = `tfc:rock/${type}/${block}_slab`
        let mossySlab = `tfc:rock/mossy_${type}/${block}_slab`
        let stairs = `tfc:rock/${type}/${block}_stairs`
        let mossyStairs = `tfc:rock/mossy_${type}/${block}_stairs`
        let wall = `tfc:rock/${type}/${block}_wall`
        let mossyWall = `tfc:rock/mossy_${type}/${block}_wall`

        if (type == 'bricks') {
            let crackedSlab = `tfc:rock/cracked_${type}/${block}_slab`
            let crackedStairs = `tfc:rock/cracked_${type}/${block}_stairs`
            let crackedWall = `tfc:rock/cracked_${type}/${block}_wall`

            //event.recipes.tfc.damage_inputs_shapeless_crafting(crackedSlab, [slab, Item.of('#tfc:hammers').ignoreNBT()])
            global.addDamageInputShapeless(1, slab, crackedSlab, "tfc:hammers", 1)
            //event.recipes.tfc.damage_inputs_shapeless_crafting(crackedStairs, [stairs, Item.of('#tfc:hammers').ignoreNBT()])
            global.addDamageInputShapeless(1, stairs, crackedStairs, "tfc:hammers", 1)
            //event.recipes.tfc.damage_inputs_shapeless_crafting(crackedWall, [wall, Item.of('#tfc:hammers').ignoreNBT()])
            global.addDamageInputShapeless(1, wall, crackedWall, "tfc:hammers", 1)

        }

        event.shapeless(mossyFblock, [fblock, 'tfc:plant/moss'])
        event.shapeless(mossySlab, [slab, 'tfc:plant/moss'])
        event.shapeless(mossyStairs, [stairs, 'tfc:plant/moss'])
        event.shapeless(mossyWall, [wall, 'tfc:plant/moss'])
    }

    function addSmoothRecipes(type, block) {
        let raw = null;
        let smooth = null;
        let cut = null;

        if (type == 'sandstone') {
            raw = `tfc:raw_sandstone/${block}`
            smooth = `tfc:smooth_sandstone/${block}`;
            cut = `tfc:cut_sandstone/${block}`
        }
        if (type == 'rock') {
            raw = `tfc:rock/raw/${block}`
            smooth = `tfc:rock/smooth/${block}`
        }
        if (type == 'alabaster') {
            raw = `tfc:alabaster/raw/${block}`
            smooth = `tfc:alabaster/polished/${block}`
        }

        if (type == 'alabaster') {
            //event.recipes.tfc.damage_inputs_shapeless_crafting(smooth, [raw, Item.of('#tfc:chisels').ignoreNBT()])
            global.addDamageInputShapeless(1, raw, smooth, "tfc:chisels", 1)
        }

        if (type !== 'alabaster') {
            global.addChiselCrafting(`${raw}_slab`, `${smooth}_slab`)
            global.addChiselCrafting(`${raw}_stairs`, `${smooth}_stairs`)
            global.addChiselCrafting(`${raw}_wall`, `${smooth}_wall`)
        }

        if (cut !== null) {
            global.addChiselCrafting(`${smooth}_slab`, `${cut}_slab`)
            global.addChiselCrafting(`${smooth}_stairs`, `${cut}_stairs`)
            global.addChiselCrafting(`${smooth}_wall`, `${cut}_wall`)
        }
    }

    global.tfcWoodTypes.forEach(i => specialCutRecipes('tfc', i, 'wood', 'planks'));
    global.tfcRockTypes.forEach(i => specialCutRecipes('tfc', i, 'rock', 'raw'));

    global.tfcRockTypes.forEach(i => chiselRecipes('tfc', i, 'rock'));
    global.tfcWoodTypes.forEach(i => chiselRecipes('tfc', i, 'wood'));
    global.tfcSoilsTypes.forEach(i => chiselRecipes('tfc', i, 'mud_bricks'));
    global.colors.forEach(i => chiselRecipes('tfc', i, 'alabaster'));
    global.tfcSandstoneTypes.forEach(i => chiselRecipes('tfc', i, 'sandstone'));

    global.tfcRockTypes.forEach(i => addBigCutRecipes('tfc:mortar', `tfc:brick/${i}`, `tfc:rock/bricks/${i}`));
    global.tfcRockTypes.forEach(i => addBigCutRecipes('minecraft:clay_ball', `tfc:rock/loose/${i}`, `kubejs:rock/pavedcobble/${i}`));

    global.tfcSoilsTypes.forEach(i => addSmallCutRecipes(`tfc:mud_brick/${i}`, `tfc:mud_bricks/${i}`));
    global.tfcRockTypes.forEach(i => addSmallCutRecipes(`tfc:rock/loose/${i}`, `tfc:rock/cobble/${i}`));
    global.tfcWoodTypes.forEach(i => addSmallCutRecipes(`tfc:wood/lumber/${i}`, `tfc:wood/planks/${i}`));

    global.tfcRockTypes.forEach(i => addSpecialRockRecipes('bricks', i));
    global.tfcRockTypes.forEach(i => addSpecialRockRecipes('cobble', i));

    global.tfcRockTypes.forEach(i => addSmoothRecipes('rock', i));
    global.tfcSandstoneTypes.forEach(i => addSmoothRecipes('sandstone', i));
    global.colors.forEach(i => addSmoothRecipes('alabaster', i));

    global.colors.forEach(i => miscAlabasterRecipes('tfc', i));
    //Add Alabaster
    //global.colors.forEach(i => miscRecipes('tfc', i, 'alabaster', 'polished', 'alabaster'));

    addCutRecipes('bricks', 'minecraft:bricks')
    addBigCutRecipes('tfc:mortar', 'minecraft:brick', 'minecraft:bricks')

    function chiselRecipes(mod, name, type) {
        switch (type) {
            case 'rock':
                addCutRecipes('rock', `${mod}:${type}/raw/${name}`)
                addCuttingRecipes('rock', `${mod}:${type}/raw/${name}`)
                addCutRecipes('rockpaved', `kubejs:rock/pavedcobble/${name}`)
                addCuttingRecipes('rockpaved', `kubejs:rock/pavedcobble/${name}`)
                addCutRecipes('rock', `${mod}:${type}/smooth/${name}`)
                addCuttingRecipes('rock', `${mod}:${type}/smooth/${name}`)
                addCutRecipes('rock', `${mod}:${type}/cobble/${name}`)
                addCuttingRecipes('rock', `${mod}:${type}/cobble/${name}`)
                addCutRecipes('rock', `${mod}:${type}/mossy_cobble/${name}`)
                addCuttingRecipes('rock', `${mod}:${type}/mossy_cobble/${name}`)
                addCutRecipes('rock', `${mod}:${type}/bricks/${name}`)
                addCuttingRecipes('rock', `${mod}:${type}/bricks/${name}`)
                addCutRecipes('rock', `${mod}:${type}/cracked_bricks/${name}`)
                addCuttingRecipes('rock', `${mod}:${type}/cracked_bricks/${name}`)
                addCutRecipes('rock', `${mod}:${type}/mossy_bricks/${name}`)
                addCuttingRecipes('rock', `${mod}:${type}/mossy_bricks/${name}`)
                break;

            case 'wood':
                addCutRecipes('wood', `${mod}:${type}/planks/${name}`)
                break;

            case 'mud_bricks':
                addCutRecipes('mud_bricks', `${mod}:${type}/${name}`)
                addCuttingRecipes('mud_bricks', `${mod}:${type}/${name}`)
                break;

            case 'sandstone':
                addCutRecipes('sandstone', `${mod}:raw_${type}/${name}`)
                addCuttingRecipes('sandstone', `${mod}:raw_${type}/${name}`)
                addCutRecipes('sandstone', `${mod}:smooth_${type}/${name}`)
                addCuttingRecipes('sandstone', `${mod}:smooth_${type}/${name}`)
                addCutRecipes('sandstone', `${mod}:cut_${type}/${name}`)
                addCuttingRecipes('sandstone', `${mod}:cut_${type}/${name}`)
                break;

            case 'alabaster':
                addCutRecipes('alabaster', `${mod}:${type}/bricks/${name}`)
                addCuttingRecipes('alabaster', `${mod}:${type}/bricks/${name}`)
                addCutRecipes('alabaster', `${mod}:${type}/polished/${name}`)
                addCuttingRecipes('alabaster', `${mod}:${type}/polished/${name}`)
                break;
        }
    }

})

