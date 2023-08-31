onEvent('server.datapack.first', event => {
    //event.addTFCItemSize('minecraft:dirt', 's=huge, w=heavy')

    global.stoneToolsTypes.forEach(i => {
        let result = i.split("/")
        let stone = result[0]

        event.addTFCItemSize(`kubejs:stone/pickaxe/${stone}`, 's=very_large, w=heavy')
    });
})