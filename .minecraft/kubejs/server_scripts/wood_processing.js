onEvent('recipes', event => {
    function strippingRecipes(mod, name) {
        //event.recipes.tfc.damage_inputs_shapeless_crafting(`${mod}:wood/stripped_log/${name}`, [`${mod}:wood/log/${name}`, Item.of('#tfc:axes').ignoreNBT()])
        //event.recipes.tfc.damage_inputs_shapeless_crafting(`${mod}:wood/stripped_wood/${name}`, [`${mod}:wood/wood/${name}`, Item.of('#tfc:axes').ignoreNBT()])

        global.addDamageInputShapeless(1, `${mod}:wood/log/${name}`, `${mod}:wood/stripped_log/${name}`, "tfc:axes", 1)
        global.addDamageInputShapeless(1, `${mod}:wood/wood/${name}`, `${mod}:wood/stripped_wood/${name}`, "tfc:axes", 1)

        global.addTimeCutting(false, `${mod}:wood/log/${name}`, `${mod}:wood/stripped_log/${name}`, 1, 50)
        global.addTimeCutting(false, `${mod}:wood/wood/${name}`, `${mod}:wood/stripped_wood/${name}`, 1, 50)

        global.addTimeCutting(false, `${mod}:wood/stripped_log/${name}`, `${mod}:wood/lumber/${name}`, 8, 50)
        global.addTimeCutting(false, `${mod}:wood/stripped_wood/${name}`, `${mod}:wood/lumber/${name}`, 8, 50)

        global.addTimeCutting(false, `${mod}:wood/planks/${name}`, `${mod}:wood/lumber/${name}`, 4, 25)

        global.addSawmill(`${mod}:wood/log/${name}`, `${mod}:wood/stripped_log/${name}`, `${mod}:wood/lumber/${name}`, 16, 1600)
        global.addSawmill(`${mod}:wood/wood/${name}`, `${mod}:wood/stripped_wood/${name}`, `${mod}:wood/lumber/${name}`, 16, 1600)

        event.remove({ mod: 'createbigcannons', type: 'create:cutting' })
        event.remove({ mod: 'botania', type: 'create:cutting' })
        event.remove({ mod: 'create', type: 'create:cutting' })

        //global.addDamageInputShapeless(`kubejs:${name}_firewood`, `${mod}:wood/lumber/${name}`, 'tfc:saws', 2)

        //Firewood
        //global.addChopping(`tfc:full_${name}_log`, `kubejs:${name}_firewood`, 4)

    }

    global.tfcWoodTypes.forEach(i => strippingRecipes('tfc', i));
    global.netherWoodTypes.forEach(i => strippingRecipes('beneath', i));

    function addCustomWood(mod, name, fluid) {
        let lumber = `${mod}:${name}treated_lumber`
        let stick = `kubejs:${name}treated_stick`
        let largeStick = `kubejs:${name}treated_large_stick`
        let wood = `${mod}:${name}treated_wood`
        switch (name) {
            case 'creosote_':
                wood = 'immersiveengineering:treated_wood_horizontal',
                stick = 'immersiveengineering:stick_treated'
                break;
        }

        event.remove({ output: stick })
        global.addTimeCutting(false, lumber, stick, 2, 25)
        global.addDamageInputShapeless(1, lumber, stick, "tfc:saws", 2)

        event.shapeless(largeStick, [stick, stick]).id(largeStick)

        global.addDamageInputShapeless(1, wood, lumber, "tfc:saws", 4)
        global.addTimeCutting(false, wood, lumber, 4, 25)

        if (mod == 'kubejs') {
            event.shaped(`1x ${wood}`, [
                'GG',
                'GG'
            ], {
                G: lumber
            }).id(`${mod}:crafting/${name}treated_wood`)
        }

        if (fluid !== null) {
            let inputLumber = '#tfc:lumber'
            let inputWood = '#minecraft:planks'

            switch (name) {
                case 'creosote_':
                    inputLumber = 'firmalife:treated_lumber'
                    inputWood = 'firmalife:treated_wood'
                    break;
            }
            
            event.recipes.createFilling(lumber, [inputLumber, Fluid.of(fluid, 125)])
            event.recipes.createFilling(wood, [inputWood, Fluid.of(fluid, 500)])

        }

    }

    event.recipes.tfc.barrel_sealed(['firmalife:treated_lumber'], [Fluid.of(`kubejs:wax`, 125), '#tfc:lumber'], 4000).id(`firmalife:barrel/wax_treated_lumber`)
    event.recipes.tfc.barrel_sealed(['firmalife:treated_wood'], [Fluid.of(`kubejs:wax`, 500), '#minecraft:planks'], 16000).id(`firmalife:barrel/wax_treated_wood`)

    event.recipes.tfc.barrel_sealed(['kubejs:pitch_treated_lumber'], [Fluid.of(`kubejs:pitch`, 125), '#tfc:lumber'], 4000).id(`kubejs:barrel/pitch_treated_lumber`)
    event.recipes.tfc.barrel_sealed(['kubejs:pitch_treated_wood'], [Fluid.of(`kubejs:pitch`, 500), '#minecraft:planks'], 16000).id(`kubejs:barrel/pitch_treated_wood`)

    event.recipes.tfc.barrel_sealed(['kubejs:ash_treated_lumber'], [Fluid.of(`kubejs:ashwater`, 125), '#tfc:lumber'], 4000).id(`kubejs:barrel/ash_treated_lumber`)
    event.recipes.tfc.barrel_sealed(['kubejs:ash_treated_wood'], [Fluid.of(`kubejs:ashwater`, 500), '#minecraft:planks'], 16000).id(`kubejs:barrel/ash_treated_wood`)

    addCustomWood('firmalife', '', 'kubejs:wax')
    addCustomWood('kubejs', 'pitch_', 'kubejs:pitch')
    addCustomWood('kubejs', 'ash_', 'kubejs:ashwater')
    addCustomWood('kubejs', 'creosote_', 'immersiveengineering:creosote')

    event.shaped('kubejs:pitch_treated_small_gear', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S: 'kubejs:pitch_treated_stick',
        A: 'kubejs:pitch_treated_lumber'
    }).id('kubejs:pitch_treated_small_gear')

    event.shaped('kubejs:pitch_treated_large_gear', [
        ' S ',
        'SAS',
        ' S '
    ], {
        S: 'kubejs:pitch_treated_large_stick',
        A: 'kubejs:pitch_treated_lumber'
    }).id('kubejs:pitch_treated_large_gear')

    event.shaped('kubejs:pitch_treated_waterwheel_segment', [
        ' A ',
        'ABA',
        'BAB'
    ], {
        B: 'kubejs:pitch_treated_wood',
        A: 'kubejs:pitch_treated_lumber'
    }).id('kubejs:pitch_treated_waterwheel_segment')

    event.remove({ output: 'immersiveengineering:waterwheel_segment' })
    event.shaped('immersiveengineering:waterwheel_segment', [
        ' A ',
        'ABA',
        'BAB'
    ], {
        B: '#forge:treated_wood',
        A: 'kubejs:creosote_treated_lumber'
    }).id('immersiveengineering:creosote_treated_waterwheel_segment')

    event.remove({ output: 'immersiveengineering:treated_fence' })
    event.shaped('8x immersiveengineering:treated_fence', [
        'BAB',
        'BAB'
    ], {
        B: '#forge:treated_wood',
        A: 'kubejs:creosote_treated_lumber'
    }).id('immersiveengineering:creosote_treated_fence')


    global.addTimeCutting(true, 'tfc:flammable_lumber', 'minecraft:stick', 2, 25)
    global.addDamageInputShapeless(10, 'tfc:flammable_lumber', 'minecraft:stick', "tfc:saws", 2)

    //event.shapeless('kubejs:ash_treated_lumber', ['kubejs:pitch_treated_lumber', 'kubejs:powder/fly_ash']).id('kubejs:ash_treated_lumber_made_with_ash')
    //event.shapeless('kubejs:ash_treated_wood', ['kubejs:pitch_treated_wood', 'kubejs:powder/fly_ash', 'kubejs:powder/fly_ash', 'kubejs:powder/fly_ash', 'kubejs:powder/fly_ash']).id('kubejs:ash_treated_wood_made_with_ash')

})

onEvent('tags.items', event => {
    //global.tfcWoodTypes.forEach(i => event.add(`tfc:full_${i}_log`, `tfc:wood/log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.add(`tfc:full_${i}_log`, `tfc:wood/wood/${i}`));

    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:pit_kiln_logs`, `tfc:wood/log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:pit_kiln_logs`, `tfc:wood/stripped_log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:pit_kiln_logs`, `tfc:wood/wood/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:pit_kiln_logs`, `tfc:wood/stripped_wood/${i}`));

    //global.tfcWoodTypes.forEach(i => event.add(`tfc:pit_kiln_logs`, `kubejs:${i}_firewood`));

    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:log_pile_logs`, `tfc:wood/log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:log_pile_logs`, `tfc:wood/stripped_log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:log_pile_logs`, `tfc:wood/wood/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:log_pile_logs`, `tfc:wood/stripped_wood/${i}`));

    //global.tfcWoodTypes.forEach(i => event.add(`tfc:log_pile_logs`, `kubejs:${i}_firewood`));

    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:firepit_fuel`, `tfc:wood/log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:firepit_fuel`, `tfc:wood/stripped_log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:firepit_fuel`, `tfc:wood/wood/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`tfc:firepit_fuel`, `tfc:wood/stripped_wood/${i}`));

    //global.tfcWoodTypes.forEach(i => event.add(`tfc:firepit_fuel`, `kubejs:${i}_firewood`));

    //global.tfcWoodTypes.forEach(i => event.remove(`firmalife:oven_fuel`, `tfc:wood/log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`firmalife:oven_fuel`, `tfc:wood/stripped_log/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`firmalife:oven_fuel`, `tfc:wood/wood/${i}`));
    //global.tfcWoodTypes.forEach(i => event.remove(`firmalife:oven_fuel`, `tfc:wood/stripped_wood/${i}`));

    //global.tfcWoodTypes.forEach(i => event.add(`firmalife:oven_fuel`, `kubejs:${i}_firewood`));

})