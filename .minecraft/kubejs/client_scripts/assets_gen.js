onEvent('client.generate_assets', event => {
    global.tfcRockTypes.forEach(i => {
        event.addModel('block', 'kubejs:' + i + '_underclay', m => {
            m.parent('tfc:block/ore')
            m.textures({
                all: `tfc:block/rock/raw/${i}`,
                particle: `tfc:block/rock/raw/${i}`,
                overlay: 'kubejs:block/underclay_overlay'
            })
        })
    })

    global.tfcMetalTypes.forEach(i => {
        event.addModel('item', 'kubejs:transition_' + i + '_block', m => {
            m.parent('block/cube_all')
            m.textures({
                all: `tfc:block/metal/full/${i}`
            })
        })
    })

    global.tfcMetallumMetalTypes.forEach(i => {
        event.addModel('item', 'kubejs:transition_' + i + '_block', m => {
            m.parent('block/cube_all')
            m.textures({
                all: `tfc_metallum:block/metal/full/${i}`
            })
        })
    })

    global.firmalifeMetalTypes.forEach(i => {
        event.addModel('item', 'kubejs:transition_' + i + '_block', m => {
            m.parent('block/cube_all')
            m.textures({
                all: `firmalife:block/metal/full/${i}`
            })
        })
    })

    global.colors.forEach(i => {
        event.addModel('item', 'kubejs:transition_' + i + '_block', m => {
            m.parent('block/cube_all')
            m.textures({
                all: `immersiveengineering:block/metal/sheetmetal_${i}`
            })
        })
    })

    global.gasesToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]
        let isLiquid = result[2]
        let displayName = global.getCapitalizedWord(name)

        if (isLiquid == 'true') {
            event.addLang(`gas.kubejs.${name}`, `${displayName}`)
        } else {
            event.addLang(`gas.kubejs.${name}`, `Gaseous ${displayName}`)
        }
    })

    global.dyeingItems.forEach(item => {
        let displayName = global.getCapitalizedWord(item)
        global.colors.forEach(color => {
            let displayColor = global.getCapitalizedWord(color)
                event.addLang(`tfc.recipe.barrel.tfc.barrel.dye.${color}_${item}`, `Dyeing ${displayName} ${displayColor}`)
        })
        event.addLang(`tfc.recipe.barrel.tfc.barrel.dye.bleach_${item}`, `Bleaching ${displayName}`)
    })

    global.fluidsToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]

        event.addModel('item', `kubejs:${name}_bucket`, m => {
            m.loader('forge:bucket')
            m.parent('forge:item/bucket')
            m.fluid(`kubejs:${name}`)
        })
    })

    /*
    global.framesTypes.forEach(i => {
        event.addModel('item', 'kubejs:' + i + '_frame', m => {
            m.parent('kubejs:block/frame')
            m.textures({
                all: `create:block/${i}_casing`
            })
        })
    })
    */
})