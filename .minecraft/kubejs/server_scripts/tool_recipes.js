// priority: 1100

onEvent('recipes', event => {

    global.stoneToolsTypes.forEach(i => {
        let result = i.split("/")
        let stone = result[0]

        event.remove({ id: `woodencog:compacting/axe_head_${stone}` })
        global.addCompactingTagEItem(`tfc:${stone}_rock`, `tfc:stone/axe_head/${stone}`, 1)

        event.remove({ id: `woodencog:compacting/javelin_head_${stone}` })
        global.addCompactingTagEItem(`tfc:${stone}_rock`, `tfc:stone/javelin_head/${stone}`, 1)

        event.remove({ id: `woodencog:compacting/shovel_head_${stone}` })
        global.addCompactingTagEItem(`tfc:${stone}_rock`, `tfc:stone/shovel_head/${stone}`, 1)

        event.remove({ id: `woodencog:compacting/hammer_head_${stone}` })
        global.addCompactingTagEItem(`tfc:${stone}_rock`, `tfc:stone/hammer_head/${stone}`, 1)

        event.remove({ id: `woodencog:compacting/hoe_head_2_${stone}` })
        event.remove({ id: `woodencog:compacting/hoe_head_1_${stone}` })
        event.remove({ id: `woodencog:compacting/hoe_head_${stone}` })
        global.addCompactingTagEItem(`tfc:${stone}_rock`, `tfc:stone/hoe_head/${stone}`, 2)

        event.remove({ id: `woodencog:compacting/knife_head_3_${stone}` })
        event.remove({ id: `woodencog:compacting/knife_head_2_${stone}` })
        event.remove({ id: `woodencog:compacting/knife_head_1_${stone}` })
        event.remove({ id: `woodencog:compacting/knife_head_${stone}` })
        global.addCompactingTagEItem(`tfc:${stone}_rock`, `tfc:stone/knife_head/${stone}`, 2)

        global.addCompactingTagEItem(`tfc:${stone}_rock`, `kubejs:stone/pickaxe_head/${stone}`, 2)

        event.shaped(`kubejs:stone/pickaxe/${stone}`, [
            'S',
            'A'
        ], {
            S: `kubejs:stone/pickaxe_head/${stone}`,
            A: '#tfc:firepit_sticks'
        }).id(`kubejs:crafting/stone/axe_${stone}`)

        event.recipes.tfc.rock_knapping(`kubejs:stone/pickaxe_head/${stone}`, [
            ' XXX ', 
            'X   X'
        ], `#tfc:${stone}_rock`).outsideSlotNotRequired().id(`kubejs:rock_knapping/pickaxe_head_${stone}`)

        event.recipes.tfc.rock_knapping(`kubejs:stone/pickaxe_head/${stone}`, [
            'X   X', 
            ' XXX '
        ], `#tfc:${stone}_rock`).outsideSlotNotRequired().id(`kubejs:rock_knapping/pickaxe_head_2_${stone}`)

        event.recipes.tfc.rock_knapping(`2x kubejs:stone/pickaxe_head/${stone}`, [
            ' XXX ', 
            'X   X',
            '     ',
            ' XXX ', 
            'X   X'
        ], `#tfc:${stone}_rock`).outsideSlotNotRequired().id(`kubejs:rock_knapping/pickaxe_head_3_${stone}`)

        event.recipes.tfc.rock_knapping(`2x kubejs:stone/pickaxe_head/${stone}`, [
            ' XXX ', 
            'X   X',
            '     ',
            'X   X', 
            ' XXX '
        ], `#tfc:${stone}_rock`).outsideSlotNotRequired().id(`kubejs:rock_knapping/pickaxe_head_4_${stone}`)

        event.recipes.tfc.rock_knapping(`2x kubejs:stone/pickaxe_head/${stone}`, [
            'X   X', 
            ' XXX ',
            '     ',
            ' XXX ', 
            'X   X'
        ], `#tfc:${stone}_rock`).outsideSlotNotRequired().id(`kubejs:rock_knapping/pickaxe_head_5_${stone}`)

        event.recipes.tfc.rock_knapping(`2x kubejs:stone/pickaxe_head/${stone}`, [
            'X   X', 
            ' XXX ',
            '     ',
            'X   X', 
            ' XXX '
        ], `#tfc:${stone}_rock`).outsideSlotNotRequired().id(`kubejs:rock_knapping/pickaxe_head_6_${stone}`)

    });

})