// priority: 110000

onEvent('recipes', event => {

	global.recipeOutputToRemove.forEach(i => event.remove({ output: i }));
	global.recipeIdToRemove.forEach(i => event.remove({ id: i }));
	global.recipeModToRemove.forEach(i => event.remove({ mod: i }));
	global.recipeTypeToRemove.forEach(i => event.remove({ type: i }));

})