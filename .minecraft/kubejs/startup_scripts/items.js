onEvent('item.registry', event => {

    //event.create('firewood').maxStackSize(64)

    global.tfcWoodTypes.forEach(i => {
        event.create(`${i}_firewood`).maxStackSize(64)
        event.create(`stripped_${i}_firewood`).maxStackSize(64)
    });

    global.tfcGlobalMetalTypes.forEach(i => {
        event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1)
        event.create('transition_' + i + '_block', 'create:sequenced_assembly').maxStackSize(1)
    });    
    
    event.create('transition_bloom', 'create:sequenced_assembly').maxStackSize(1);

    global.scrapingItems.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));    
 
    global.framesTypes.forEach(i => event.create(i + '_frame').maxStackSize(64));    

    global.stoneToolsTypes.forEach(i => {
        let result = i.split('/')
        let stone = result[0]
        let damage = result[1]
        event.create('stone/pickaxe/' + stone, 'pickaxe').tier('wood').maxDamage(damage)
        event.create('stone/pickaxe_head/' + stone).maxStackSize(64)
    });

})