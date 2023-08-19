onEvent('tags.blocks', event => {

})

onEvent('recipes', event => {

    global.tfcWoodTypes.forEach(i => decorationRecipes(i));


    function decorationRecipes(wood) {
        event.remove({ id: `supplementaries:hanging_sign_tfc/${wood}` })
        event.remove({ id: `supplementaries:sign_post_tfc/${wood}` });

        event.shaped(`supplementaries:tfc/sign_post_${wood}`, [
            'SSS',
            ' A '
        ], {
            A: '#tfc:firepit_sticks',
            S: `tfc:wood/lumber/${wood}`
        }).id(`supplementaries:sign_post_tfc/${wood}`)

        event.remove({ id: `firmalife:crafting/wood/${wood}_shelf` });
        event.shaped(`firmalife:wood/food_shelf/${wood}`, [
            'AA',
            'SS',
            'AA'
        ], {
            A: `tfc:wood/lumber/${wood}`,
            S: '#tfc:firepit_sticks'
        }).id(`firmalife:crafting/wood/${wood}_shelf`)

        event.remove({ id: `firmalife:crafting/wood/${wood}_jarbnet` });
        event.shaped(`firmalife:wood/jarbnet/${wood}`, [
            'AAL',
            'SS ',
            'AAL'
        ], {
            A: `tfc:wood/lumber/${wood}`,
            L: `tfc:wood/log/${wood}`,
            S: '#tfc:firepit_sticks'
        }).id(`firmalife:crafting/wood/${wood}_jarbnet`)

        event.remove({ id: `firmalife:crafting/wood/${wood}_hanger` });
        event.shaped(`firmalife:wood/hanger/${wood}`, [
            'AAA',
            ' L ',
            ' L '
        ], {
            A: `tfc:wood/lumber/${wood}`,
            L: '#forge:string'
        }).id(`firmalife:crafting/wood/${wood}_hanger`)

        event.shaped(`16x everycomp:q/tfc/${wood}_ladder`, [
            'SSS',
            ' S ',
            'SSS'
        ], {
            S: `tfc:wood/lumber/${wood}`
        }).id(`everycomp:crafting/wood/${wood}_ladder`)

        event.remove({ id: `everycomp:cfm/tfc/${wood}_upgraded_fence` });
        event.shaped(`8x everycomp:cfm/tfc/${wood}_upgraded_fence`, [
            'SFS',
            'SFS'
        ], {
            S: `tfc:wood/log/${wood}`,
            F: `tfc:wood/planks/${wood}_fence`
        }).id(`everycomp:cfm/tfc/${wood}_upgraded_fence`)

        event.remove({ id: `everycomp:cfm/tfc/${wood}_upgraded_gate` });
        event.shaped(`2x everycomp:cfm/tfc/${wood}_upgraded_gate`, [
            'SFS',
            'SFS'
        ], {
            S: `tfc:wood/log/${wood}`,
            F: `tfc:wood/planks/${wood}_fence_gate`
        }).id(`everycomp:cfm/tfc/${wood}_upgraded_gate`)

        event.shapeless(`tfc:wood/planks/${wood}`, [`everycomp:q/tfc/vertical_${wood}_planks`]).id(`tfc:wood/planks/${wood}_from_vertical`)
        event.shapeless(`everycomp:q/tfc/vertical_${wood}_planks`, [`tfc:wood/planks/${wood}`]).id(`everycomp:wood/planks/${wood}_from_horizontal`)

    }

    function addRoofRecipes(mod, name, full_block) {

        event.shaped(`2x ${mod}:${name}_attic_roof`, [
            ' B',
            'BA'
        ], {
            B: full_block,
            A: '#forge:glass/colorless'
        })

        event.shaped(`2x ${mod}:${name}_roof`, [
            ' B',
            'BA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        })

        event.shaped(`2x ${mod}:${name}_top_roof`, [
            'BAB'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        })

        event.shaped(`4x ${mod}:${name}_lower_roof`, [
            ' BB',
            'BBA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        })

        event.shaped(`4x ${mod}:${name}_steep_roof`, [
            ' B',
            'BB',
            'BA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        })

        event.shaped(`3x ${mod}:${name}_upper_lower_roof`, [
            '  B',
            'BBA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        })

        event.shaped(`3x ${mod}:${name}_upper_steep_roof`, [
            ' B',
            ' B',
            'BA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        })

    }

    global.colors.forEach(i => addRoofRecipes('mcwroofs', `${i}_terracotta`, `minecraft:${i}_terracotta`));
    global.colors.forEach(i => addRoofRecipes('mcwroofs', `${i}_concrete`, `minecraft:${i}_concrete`));

    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:hay_block', 'tfc:thatch')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:hay_block', 'tfc:thatch')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:stick', '#tfc:firepit_sticks')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stick', '#tfc:firepit_sticks')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:glass', '#forge:glass/colorless')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:glass', '#forge:glass/colorless')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:crafting_table', '#tfc:workbenches')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:crafting_table', '#tfc:workbenches')

})
