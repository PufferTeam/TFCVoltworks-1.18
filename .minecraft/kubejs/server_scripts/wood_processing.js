onEvent('recipes', event => {
    function strippingRecipes(mod, name) {
        //event.recipes.tfc.damage_inputs_shapeless_crafting(`${mod}:wood/stripped_log/${name}`, [`${mod}:wood/log/${name}`, Item.of('#tfc:axes').ignoreNBT()])
        //event.recipes.tfc.damage_inputs_shapeless_crafting(`${mod}:wood/stripped_wood/${name}`, [`${mod}:wood/wood/${name}`, Item.of('#tfc:axes').ignoreNBT()])

        global.addDamageInputShapeless(1, `${mod}:wood/log/${name}`, `${mod}:wood/stripped_log/${name}`, "tfc:axes", 1)
        global.addDamageInputShapeless(1, `${mod}:wood/wood/${name}`, `${mod}:wood/stripped_wood/${name}`, "tfc:axes", 1)

        global.addTimeCutting(`${mod}:wood/log/${name}`, `${mod}:wood/stripped_log/${name}`, 1, 50)
        global.addTimeCutting(`${mod}:wood/wood/${name}`, `${mod}:wood/stripped_wood/${name}`, 1, 50)
        
        global.addTimeCutting(`${mod}:wood/stripped_log/${name}`, `${mod}:wood/lumber/${name}`, 8, 50)
        global.addTimeCutting(`${mod}:wood/stripped_wood/${name}`, `${mod}:wood/lumber/${name}`, 8, 50)

        event.remove({mod: 'createbigcannons', type: 'create:cutting'}) 
        event.remove({mod: 'botania', type: 'create:cutting'}) 
        event.remove({mod: 'create', type: 'create:cutting'}) 

        //global.addDamageInputShapeless(`kubejs:${name}_firewood`, `${mod}:wood/lumber/${name}`, 'tfc:saws', 2)

        //Firewood
        //global.addChopping(`tfc:full_${name}_log`, `kubejs:${name}_firewood`, 4)

    }

    global.tfcWoodTypes.forEach(i => strippingRecipes('tfc', i));

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