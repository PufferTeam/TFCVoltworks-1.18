onEvent('recipes', event => {
    global.customFluidGas.forEach(i => {
        let result = i.split('/')
        let name = result[0]

        global.addRotary(`forge:${name}`, `kubejs:${name}`, `kubejs:${name}`)
    });

    global.addInfusing('kubejs:nitrogen', 1, 'mekanism:hydrogen', 3, 'kubejs:ammonia', 4)
    global.addInfusing('kubejs:ammonia', 1, 'mekanism:oxygen', 1, 'kubejs:nitric_acid', 1)
    global.addInfusing('kubejs:nitric_acid', 1, 'mekanism:sulfuric_acid', 1, 'kubejs:nitration_mixture', 1)

})