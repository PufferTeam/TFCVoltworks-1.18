onEvent('tags.blocks', event => {

})

onEvent('recipes', event => {

    function decorationRecipes(mod, wood) {
        event.remove({ id: `supplementaries:hanging_sign_tfc/${wood}` })
        event.remove({ id: `supplementaries:sign_post_tfc/${wood}` });
        let signPost = `supplementaries:tfc/sign_post_${wood}`
        let hangingSign = `supplementaries:tfc/hanging_sign_${wood}`
        let ladder = `everycomp:q/tfc/${wood}_ladder`
        let upgradedFence = `everycomp:cfm/tfc/${wood}_upgraded_fence`
        let upgradedGate = `everycomp:cfm/tfc/${wood}_upgraded_gate`
        let verticalPlanks = `everycomp:q/tfc/vertical_${wood}_planks`
        let bookshelf = `everycomp:q/tfc/${wood}_bookshelf`

        if(mod == 'beneath') {
            signPost = `supplementaries:sign_post_${wood}`
            hangingSign = `supplementaries:hanging_sign_${wood}`
            ladder = `quark:${wood}_ladder`
            upgradedFence = `cfm:${wood}_upgraded_fence`
            upgradedGate = `cfm:${wood}_upgraded_gate`
            verticalPlanks = `quark:vertical_${wood}_planks`
            bookshelf = `quark:${wood}_bookshelf`
        }

        event.remove({ output: signPost });
        event.shaped(`3x ${signPost}`, [
            'SSS',
            ' A '
        ], {
            A: '#tfc:firepit_sticks',
            S: `${mod}:wood/lumber/${wood}`
        }).id(`supplementaries:sign_post_tfc/${wood}`)

        event.remove({ output: hangingSign });
        event.shaped(`2x ${hangingSign}`, [
            'BAB',
            'SSS',
            'SSS'
        ], {
            A: '#tfc:firepit_sticks',
            B: '#forge:string',
            S: `${mod}:wood/lumber/${wood}`
        }).id(`supplementaries:hanging_sign_tfc/${wood}`)

        event.remove({ output: bookshelf });
        event.shaped(bookshelf, [
            'SSS',
            'AAA',
            'SSS'
        ], {
            A: 'minecraft:book',
            S: `${mod}:wood/lumber/${wood}`
        }).id(bookshelf)

        if(mod == 'tfc') {
            event.remove({ id: `firmalife:crafting/wood/${wood}_shelf` });
            event.shaped(`firmalife:wood/food_shelf/${wood}`, [
                'AA',
                'SS',
                'AA'
            ], {
                A: `${mod}:wood/lumber/${wood}`,
                S: '#tfc:firepit_sticks'
            }).id(`firmalife:crafting/wood/${wood}_shelf`)
    
            event.remove({ id: `firmalife:crafting/wood/${wood}_jarbnet` });
            event.shaped(`firmalife:wood/jarbnet/${wood}`, [
                'AAL',
                'SS ',
                'AAL'
            ], {
                A: `${mod}:wood/lumber/${wood}`,
                L: `${mod}:wood/log/${wood}`,
                S: '#tfc:firepit_sticks'
            }).id(`firmalife:crafting/wood/${wood}_jarbnet`)
    
            event.remove({ id: `firmalife:crafting/wood/${wood}_hanger` });
            event.shaped(`firmalife:wood/hanger/${wood}`, [
                'AAA',
                ' L ',
                ' L '
            ], {
                A: `${mod}:wood/lumber/${wood}`,
                L: '#forge:string'
            }).id(`firmalife:crafting/wood/${wood}_hanger`)
        }

        event.remove({ output: ladder });
        event.shaped(`16x ${ladder}`, [
            'SSS',
            ' S ',
            'SSS'
        ], {
            S: `${mod}:wood/lumber/${wood}`
        }).id(ladder)

        event.remove({ output: upgradedFence });
        event.shaped(`8x ${upgradedFence}`, [
            'SFS',
            'SFS'
        ], {
            S: `${mod}:wood/log/${wood}`,
            F: `${mod}:wood/planks/${wood}_fence`
        }).id(upgradedFence)

        event.remove({ output: upgradedGate });
        event.shaped(`2x ${upgradedGate}`, [
            'SFS',
            'SFS'
        ], {
            S: `${mod}:wood/log/${wood}`,
            F: `${mod}:wood/planks/${wood}_fence_gate`
        }).id(upgradedGate)

        event.remove({ output: verticalPlanks });
        event.shapeless(`${mod}:wood/planks/${wood}`, [verticalPlanks]).id(`${mod}:wood/planks/${wood}_from_horizontal`)
        event.shapeless(verticalPlanks, [`${mod}:wood/planks/${wood}`]).id(`${verticalPlanks}_from_horizontal`)

    }

    global.tfcWoodTypes.forEach(i => decorationRecipes('tfc', i));
    global.netherWoodTypes.forEach(i => decorationRecipes('beneath', i));

    function addRoofRecipes(mod, name, full_block) {

        event.remove({ output: `${mod}:${name}_attic_roof` });
        event.shaped(`2x ${mod}:${name}_attic_roof`, [
            ' B',
            'BA'
        ], {
            B: full_block,
            A: '#forge:glass/colorless'
        }).id(`${mod}:${name}_attic_roof`)

        event.remove({ output: `${mod}:${name}_roof` });
        event.shaped(`2x ${mod}:${name}_roof`, [
            ' B',
            'BA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        }).id(`${mod}:${name}_roof`)

        event.remove({ output: `${mod}:${name}_top_roof` });
        event.shaped(`2x ${mod}:${name}_top_roof`, [
            'BAB'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        }).id(`${mod}:${name}_top_roof`)

        event.remove({ output: `${mod}:${name}_lower_roof` });
        event.shaped(`4x ${mod}:${name}_lower_roof`, [
            ' BB',
            'BBA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        }).id(`${mod}:${name}_lower_roof`)

        event.remove({ output: `${mod}:${name}_steep_roof` });
        event.shaped(`4x ${mod}:${name}_steep_roof`, [
            ' B',
            'BB',
            'BA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        }).id(`${mod}:${name}_steep_roof`)

        event.remove({ output: `${mod}:${name}_upper_lower_roof` });
        event.shaped(`3x ${mod}:${name}_upper_lower_roof`, [
            '  B',
            'BBA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        }).id(`${mod}:${name}_upper_lower_roof`)

        event.remove({ output: `${mod}:${name}_upper_steep_roof` });
        event.shaped(`3x ${mod}:${name}_upper_steep_roof`, [
            ' B',
            ' B',
            'BA'
        ], {
            B: full_block,
            A: '#forge:rods/wooden'
        }).id(`${mod}:${name}_upper_steep_roof`)

    }

    addRoofRecipes('mcwroofs', 'bricks', 'minecraft:bricks')

    global.colors.forEach(i => addRoofRecipes('mcwroofs', `${i}_terracotta`, `minecraft:${i}_terracotta`));
    global.colors.forEach(i => addRoofRecipes('mcwroofs', `${i}_concrete`, `quark:${i}_shingles`));
    addRoofRecipes('mcwroofs', 'granite', 'quark:shingles')
    
    global.addCuttingDamageInputShapeless(1, 'minecraft:glass', 'create:framed_glass', "tfc:chisels", 1)
    global.addCuttingDamageInputShapeless(1, 'minecraft:glass_pane', 'create:framed_glass_pane', "tfc:chisels", 1)
    global.addCuttingDamageInputShapeless(1, 'create:framed_glass', 'create:horizontal_framed_glass', "tfc:chisels", 1)
    global.addCuttingDamageInputShapeless(1, 'create:framed_glass_pane', 'create:horizontal_framed_glass_pane', "tfc:chisels", 1)
    global.addCuttingDamageInputShapeless(1, 'create:horizontal_framed_glass', 'create:vertical_framed_glass', "tfc:chisels", 1)
    global.addCuttingDamageInputShapeless(1, 'create:horizontal_framed_glass_pane', 'create:vertical_framed_glass_pane', "tfc:chisels", 1)

    global.addCuttingDamageInputShapeless(3, 'minecraft:glass', 'create:tiled_glass', "tfc:chisels", 3)
    global.addCuttingDamageInputShapeless(3, 'minecraft:glass_pane', 'create:tiled_glass_pane', "tfc:chisels", 3)

    event.remove({ output: 'cfm:rock_path' })
    event.shaped('16x cfm:rock_path', [
        'OS',
        'SO'
    ], {
        S: '#tfc:rock/raw',
        O: '#forge:cobblestone'
    }).id('cfm:rock_path')

    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:hay_block', 'tfc:thatch')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:hay_block', 'tfc:thatch')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:stick', '#tfc:firepit_sticks')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stick', '#tfc:firepit_sticks')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:glass', '#forge:glass/colorless')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:glass', '#forge:glass/colorless')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:crafting_table', '#tfc:workbenches')
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:crafting_table', '#tfc:workbenches')

})
