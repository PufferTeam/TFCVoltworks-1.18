onEvent('client.generate_assets', event => {

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