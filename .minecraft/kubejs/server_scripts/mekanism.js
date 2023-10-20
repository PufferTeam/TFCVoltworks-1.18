onEvent('recipes', event => {
    global.customFluidGas.forEach(i => {
        let result = i.split('/')
        let name = result[0]

        global.addRotary(`forge:${name}`, `kubejs:${name}`, `kubejs:${name}`)
    });
})