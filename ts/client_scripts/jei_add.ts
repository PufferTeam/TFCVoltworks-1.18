onEvent('jei.add.items', event => {
    global.itemsToShow.forEach(i => event.add(Item.of(i).ignoreNBT()));
})