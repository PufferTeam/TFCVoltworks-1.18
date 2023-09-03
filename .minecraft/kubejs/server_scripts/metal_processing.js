// priority: 1103

onEvent('tags.items', event => {
    function taggingTools(mod, metal, tier) {
        event.add(`forge:${tier}pickaxes`, `${mod}:metal/pickaxe/${metal}`)
        event.add(`forge:${tier}pickaxe_heads`, `${mod}:metal/pickaxe_head/${metal}`)
        event.add(`forge:${tier}propicks`, `${mod}:metal/propick/${metal}`)
        event.add(`forge:${tier}propick_heads`, `${mod}:metal/propick_head/${metal}`)
        event.add(`forge:${tier}axes`, `${mod}:metal/axe/${metal}`)
        event.add(`forge:${tier}axe_heads`, `${mod}:metal/axe_head/${metal}`)
        event.add(`forge:${tier}shovels`, `${mod}:metal/shovel/${metal}`)
        event.add(`forge:${tier}shovel_heads`, `${mod}:metal/shovel_head/${metal}`)
        event.add(`forge:${tier}hoes`, `${mod}:metal/hoe/${metal}`)
        event.add(`forge:${tier}hoe_heads`, `${mod}:metal/hoe_head/${metal}`)
        event.add(`forge:${tier}chisels`, `${mod}:metal/chisel/${metal}`)
        event.add(`forge:${tier}chisel_heads`, `${mod}:metal/chisel_head/${metal}`)
        event.add(`forge:${tier}hammers`, `${mod}:metal/hammer/${metal}`)
        event.add(`forge:${tier}hammer_heads`, `${mod}:metal/hammer_head/${metal}`)
        event.add(`forge:${tier}saws`, `${mod}:metal/saw/${metal}`)
        event.add(`forge:${tier}saw_blades`, `${mod}:metal/saw_blade/${metal}`)
        event.add(`forge:${tier}javelins`, `${mod}:metal/javelin/${metal}`)
        event.add(`forge:${tier}javelin_heads`, `${mod}:metal/javelin_head/${metal}`)
        event.add(`forge:${tier}swords`, `${mod}:metal/sword/${metal}`)
        event.add(`forge:${tier}sword_blades`, `${mod}:metal/sword_blade/${metal}`)
        event.add(`forge:${tier}maces`, `${mod}:metal/mace/${metal}`)
        event.add(`forge:${tier}mace_heads`, `${mod}:metal/mace_head/${metal}`)
        event.add(`forge:${tier}knifes`, `${mod}:metal/knife/${metal}`)
        event.add(`forge:${tier}knife_blades`, `${mod}:metal/knife_blade/${metal}`)
        event.add(`forge:${tier}scythes`, `${mod}:metal/scythe/${metal}`)
        event.add(`forge:${tier}scythe_blades`, `${mod}:metal/scythe_blade/${metal}`)
        event.add(`forge:${tier}shears`, `${mod}:metal/shears/${metal}`)
        event.add(`forge:${tier}unfinished_helmets`, `${mod}:metal/unfinished_helmet/${metal}`)
        event.add(`forge:${tier}unfinished_chestplates`, `${mod}:metal/unfinished_chestplate/${metal}`)
        event.add(`forge:${tier}unfinished_greavess`, `${mod}:metal/unfinished_greaves/${metal}`)
        event.add(`forge:${tier}unfinished_bootss`, `${mod}:metal/unfinished_boots/${metal}`)
        event.add(`forge:${tier}shields`, `${mod}:metal/shield/${metal}`)
        event.add(`forge:${tier}chains`, `${mod}:metal/chain/${metal}`)
        event.add(`forge:${tier}lamps`, `${mod}:metal/lamp/${metal}`)
        event.add(`forge:${tier}anvil`, `${mod}:metal/anvil/${metal}`)

        event.add(`forge:${tier}rods`, `${mod}:metal/rod/${metal}`)
        event.add(`forge:${tier}double_sheets`, `${mod}:metal/double_sheet/${metal}`)
        event.add(`forge:${tier}double_ingots`, `${mod}:metal/double_ingot/${metal}`)
        event.add(`forge:${tier}tuyeres`, `${mod}:metal/tuyere/${metal}`)
        event.add(`forge:${tier}fish_hooks`, `${mod}:metal/fish_hook/${metal}`)
    }
    //global.tfcMetalTypes.forEach(i => taggingTools('tfc', i, ''));
    //global.tfcMetallumMetalTypes.forEach(i => taggingTools('tfc', i, ''));

    global.tier1MetalTypes.forEach(i => taggingTools('tfc', i, 'tier1_'));
    global.tier2MetalTypes.forEach(i => taggingTools('tfc', i, 'tier2_'));
    global.tier3MetalTypes.forEach(i => taggingTools('tfc', i, 'tier3_'));
    global.tier4MetalTypes.forEach(i => taggingTools('tfc', i, 'tier4_'));
    global.tier5MetalTypes.forEach(i => taggingTools('tfc', i, 'tier5_'));
    global.tier6MetalTypes.forEach(i => taggingTools('tfc', i, 'tier6_'));

    global.tier1MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier1_'));
    global.tier2MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier2_'));
    global.tier3MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier3_'));
    global.tier4MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier4_'));
    global.tier5MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier5_'));
    global.tier6MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier6_'));

    global.tfcMetalTypes.forEach(i => event.remove('forge:plates', `tfc:metal/sheet/${i}`));
    global.tfcMetalTypes.forEach(i => event.remove(`forge:plates/${i}`, `tfc:metal/sheet/${i}`));
    global.tfcMetalTypes.forEach(i => event.remove(`forge:plates/iron`, `tfc:metal/sheet/${i}`));

    const knifes = event.get('tfc:knifes').getObjectIds()

    knifes.forEach(i => event.add('tfc:sharp_tools', i))
    knifes.forEach(i => event.add('tfc:deals_piercing_damage', i))
    knifes.forEach(i => event.add('tfc:knives', i))

    const knives = event.get('tfc:knives').getObjectIds()
    knives.forEach(i => event.add('sliceanddice:allowed_tools', i))
    const axes = event.get('tfc:axes').getObjectIds()
    axes.forEach(i => event.add('sliceanddice:allowed_tools', i))

    event.add(`forge:plates/iron`, 'tfc_metalwork:metal/plate/wrought_iron')
})

onEvent('recipes', event => {
    //Duplicate chain recipe
    global.tfcMetallumMetalTypes.forEach(i => event.remove({ id: `tfc_metallum:anvil/${i}_chain.json` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `immersiveengineering:crafting/hammercrushing_${i}` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:heating/metal/${i}_large_plate` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:anvil/${i}_large_plate` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:quern/${i}_dust` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:anvil/${i}_cut_block_wall` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:anvil/${i}_block_wall` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:chisel/cut/${i}_cut_wall` }));

    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block_slab` })
    event.remove({ id: `tfc_metalwork:chisel/cut/copper_cut_slab` })
    event.remove({ id: `tfc_metalwork:chisel/slab/copper_cut_block_slab` })
    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block_stairs` })
    event.remove({ id: `tfc_metalwork:chisel/cut/copper_cut_stairs` })
    event.remove({ id: `tfc_metalwork:chisel/stair/copper_cut_block_stair` })
    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block_wall` })
    event.remove({ id: `tfc_metalwork:chisel/cut/copper_cut_wall` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block` })
    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block_slab` })
    event.remove({ id: `tfc_metalwork:chisel/slab/copper_block_slab` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block_stairs` })
    event.remove({ id: `tfc_metalwork:chisel/stair/copper_block_stair` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block_wall` })
    event.remove({ id: `tfc_metalwork:chisel/cut/copper_cut` })

    event.recipes.tfc.anvil('minecraft:copper_block', 'tfc:metal/double_sheet/copper', [
        "bend_last",
        "hit_any",
        "bend_any"
    ]).tier(1).id(`tfc_metalwork:anvil/copper_block`)

    function copperBlockRecipes(input, inputCut, output, outputCut) {
        let transitionItem = `kubejs:transition_copper_block`
        let result = output.split(':')
        let name = result[1]
        let mod = result[0]
        console.log(output)

        if (outputCut == null) {
            outputCut = output
        }

        let resultCut = outputCut.split(':')
        let nameCut = resultCut[1]
        let modCut = resultCut[0]

        let resultInput = input.split(':')
        let nameInput = resultInput[1]

        if (input !== null) {
            const methodsCut = []
            methodsCut.push(event.recipes.createCutting(transitionItem, transitionItem))
            methodsCut.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier1_hammers`]))
            methodsCut.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier1_rods`]).keepHeldItem())
            methodsCut.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier1_hammers`]))
            event.recipes.tfc.anvil(output, input, [
                "hit_last",
                "hit_any",
                "upset_any"
            ]).tier(1).id(`tfc_metalwork:anvil/copper_${name}_block`)
            console.log(name)
            event.recipes.createSequencedAssembly(output, input, methodsCut).transitionalItem(transitionItem).loops(1);
        }

        if(inputCut == undefined) {
            event.remove({output: input})
            event.remove({output: `${mod}:waxed_${nameInput}`})
            event.shapeless(`minecraft:waxed_${nameInput}`, [ `${input}`, '#tfc:waxing_agents']).id(`minecraft:waxing_${nameInput}`)
            event.recipes.tfc.chisel(input, `minecraft:waxed_${nameInput}`, 'smooth').id(`minecraft:chisel/unwaxing/${nameInput}`)
        }
 
        event.remove({output: output})
        event.remove({output: `${outputCut}_slab`})
        event.remove({output: `${outputCut}_stairs`})

        event.remove({output: `${mod}:waxed_${name}`})
        event.shapeless(`${mod}:waxed_${name}`, [ `${output}`, '#tfc:waxing_agents']).id(`${mod}:waxing_${name}`)
        event.recipes.tfc.chisel(output, `${mod}:waxed_${name}`, 'smooth').id(`${mod}:chisel/unwaxing/${name}`)

        event.remove({output: `${modCut}:waxed_${nameCut}_slab`})
        event.shapeless(`${modCut}:waxed_${nameCut}_slab`, [ `${outputCut}_slab`, '#tfc:waxing_agents']).id(`${modCut}:waxing_${nameCut}_slab`)
        event.recipes.tfc.chisel(`${outputCut}_slab`, `${modCut}:waxed_${nameCut}_slab`, 'smooth').id(`${modCut}:chisel/unwaxing/${nameCut}_slab`)

        event.remove({output: `${modCut}:waxed_${nameCut}_stairs`})
        event.shapeless(`${modCut}:waxed_${nameCut}_stairs`, [ `${outputCut}_stairs`, '#tfc:waxing_agents']).id(`${modCut}:waxing_${nameCut}_stairs`)
        event.recipes.tfc.chisel(`${outputCut}_stairs`, `${modCut}:waxed_${nameCut}_stairs`, 'smooth').id(`${modCut}:chisel/unwaxing/${nameCut}_stairs`)

        const methodsSlab = []
        methodsSlab.push(event.recipes.createCutting(transitionItem, transitionItem))
        methodsSlab.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        methodsSlab.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        methodsSlab.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier1_double_ingots`]).keepHeldItem())
        event.recipes.tfc.anvil(`2x ${outputCut}_slab`, output, [
            "bend_last",
            "draw_any",
            "draw_any"
        ]).tier(1).id(`tfc_metalwork:anvil/copper_${name}_slab`)
        event.recipes.createSequencedAssembly(`2x ${outputCut}_slab`, output, methodsSlab).transitionalItem(transitionItem).loops(1);

        const methodsStairs = []
        methodsStairs.push(event.recipes.createCutting(transitionItem, transitionItem))
        methodsStairs.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier1_hammers`]))
        methodsStairs.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        methodsStairs.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        event.recipes.tfc.anvil(`${outputCut}_stairs`, output, [
            "hit_not_last",
            "draw_any",
            "draw_any"
        ]).tier(1).id(`tfc_metalwork:anvil/copper_${name}_stairs`)
        event.recipes.createSequencedAssembly(`${outputCut}_stairs`, output, methodsStairs).transitionalItem(transitionItem).loops(1);

        event.recipes.tfc.chisel(`${outputCut}_slab`, output, 'slab').extraDrop(`${outputCut}_slab`).id(`${mod}:chisel/slab/${name}_slab`)
        event.recipes.tfc.chisel(`${outputCut}_stairs`, output, 'stair').id(`${mod}:chisel/stair/${name}_stairs`)

        if (input !== null) {
            event.recipes.tfc.chisel(`${output}`, input, 'smooth').id(`${mod}:chisel/smooth/${name}`)
        }

        if(inputCut == null) {
            inputCut = input
        }
        if (inputCut !== undefined) {
            event.recipes.tfc.chisel(`${outputCut}_slab`, `${inputCut}_slab`, 'smooth').id(`${mod}:chisel/smooth/${name}_slab`)
            event.recipes.tfc.chisel(`${outputCut}_stairs`, `${inputCut}_stairs`, 'smooth').id(`${mod}:chisel/smooth/${name}_stairs`)
        }
    }

    copperBlockRecipes('minecraft:copper_block', undefined, 'minecraft:cut_copper', null)
    copperBlockRecipes('minecraft:cut_copper', null, 'create:copper_shingles', 'create:copper_shingle')
    copperBlockRecipes('create:copper_shingles', 'create:copper_shingle', 'create:copper_tiles', 'create:copper_tile')

    global.weatheringLevels.forEach(i => {
        copperBlockRecipes(`minecraft:${i}_copper`, undefined, `minecraft:${i}_cut_copper`, null)
        copperBlockRecipes(`minecraft:${i}_cut_copper`, null, `create:${i}_copper_shingles`, `create:${i}_copper_shingle`)
        copperBlockRecipes(`create:${i}_copper_shingles`, `create:${i}_copper_shingle`, `create:${i}_copper_tiles`, `create:${i}_copper_tile`)
    })

    event.remove({ id: `rosia:casting/invar_fire_ingot` })
    event.remove({ id: `rosia:casting/invar_ingot` })
    event.remove({ id: `rosia:casting/purple_steel_fire_ingot` })
    event.remove({ id: `rosia:casting/purple_steel_ingot` })
    event.remove({ id: `rosia:casting/weak_purple_steel_fire_ingot` })
    event.remove({ id: `rosia:casting/weak_purple_steel_ingot` })

    global.addMeltingHeatingFluid('create:whisk', "tfc:metal/cast_iron", 200, 1535)
    global.addMeltingHeatingFluid('create:propeller', "tfc:metal/cast_iron", 200, 1535)
    global.addMeltingHeatingFluid('thermal:drill_head', "tfc:metal/cast_iron", 200, 1535)
    global.addMeltingHeatingFluid('thermal:saw_blade', "tfc:metal/cast_iron", 200, 1535)

})

onEvent('server.datapack.first', event => {
    event.addTFCHeat('create:whisk', 5.714, 921)
    event.addTFCHeat('create:propeller', 5.714, 921)
    event.addTFCHeat('thermal:drill_head', 5.714, 921)
    event.addTFCHeat('thermal:saw_blade', 5.714, 921)
})