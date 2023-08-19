onEvent('item.registry', event => {

    //event.create('firewood').maxStackSize(64)

    global.tfcWoodTypes.forEach(i => event.create(`${i}_firewood`).maxStackSize(64));
    global.tfcWoodTypes.forEach(i => event.create(`stripped_${i}_firewood`).maxStackSize(64));

    //global.forgingBonusWhitelist.forEach(i => event.create(`${i}_template`).maxStackSize(1));

    global.tfcGlobalMetalTypes.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));    

    event.create('transition_small_soaked_hide', 'create:sequenced_assembly').maxStackSize(1)   
    event.create('transition_medium_soaked_hide', 'create:sequenced_assembly').maxStackSize(1)   
    event.create('transition_large_soaked_hide', 'create:sequenced_assembly').maxStackSize(1)   
    event.create('transition_unrefined_paper', 'create:sequenced_assembly').maxStackSize(1)   

})