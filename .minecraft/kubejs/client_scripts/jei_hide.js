//priority: 1000
onEvent('jei.hide.items', event => {
    global.removeAndHide.forEach(i => event.hide([Item.of(i).ignoreNBT()]));
    global.itemsToHide.forEach(i => event.hide([Item.of(i).ignoreNBT()]));

});

onEvent('jei.hide.fluids', event => {
    global.removeAndHideFluid.forEach(i => event.hide(i));
})

onEvent('jei.remove.categories', event => {
    console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
    
    global.categoriesToHide.forEach(i => event.remove([i]));
})