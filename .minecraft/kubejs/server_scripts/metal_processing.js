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

    taggingTools('tfc', 'copper', 'tier1to2_')
    taggingTools('tfc', 'bronze', 'tier1to2_')
    taggingTools('tfc', 'bismuth_bronze', 'tier1to2_')
    taggingTools('tfc', 'black_bronze', 'tier1to2_')

    taggingTools('tfc', 'bronze', 'bronze_')
    taggingTools('tfc', 'bismuth_bronze', 'bronze_')
    taggingTools('tfc', 'black_bronze', 'bronze_')

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

    event.add(`forge:dusts/iron`, 'tfc_metalwork:metal/dust/wrought_iron')
    event.add(`forge:gears/iron`, 'tfc_metalwork:metal/small_gear/wrought_iron')

    function tagSheetmetal(item) {
        if (metal == 'immersiveengineering:sheetmetal_wrought_iron') {
            metal = 'immersiveengineering:sheetmetal_iron'
        }
        event.add(`forge:metal_sheetmetals`, item)
    }

    global.tfcSheetmetalTypes.forEach(i => tagSheetmetal(`immersiveengineering:sheetmetal_${i}`));
    global.tfcMetallumSheetmetalTypes.forEach(i => tagSheetmetal(`immersiveengineering:sheetmetal_${i}`));
    global.customSheetmetalTypes.forEach(i => tagSheetmetal(`kubejs:sheetmetal/${i}`));

    function tagBars(mod, metal) {
        let barItem = global.getValidBar(mod, metal)

        event.add('forge:metal_bars', barItem)
    }
    global.tfcBarTypes.forEach(i => tagBars('tfc', i));
    global.tfcMetallumBarTypes.forEach(i => tagBars('tfc_metallum', i));

    event.add('forge:metal_gates', 'supplementaries:iron_gate')
    event.add('forge:metal_gates', 'supplementaries:gold_gate')

    const knifes = event.get('tfc:knifes').getObjectIds()

    knifes.forEach(i => event.add('tfc:sharp_tools', i))
    knifes.forEach(i => event.add('tfc:deals_piercing_damage', i))
    knifes.forEach(i => event.add('tfc:knives', i))

    const knives = event.get('tfc:knives').getObjectIds()
    knives.forEach(i => event.add('sliceanddice:allowed_tools', i))
    const axes = event.get('tfc:axes').getObjectIds()
    axes.forEach(i => event.add('sliceanddice:allowed_tools', i))

    event.add('tfc_metalwork:cut/copper', `minecraft:cut_copper`)
    event.add('tfc_metalwork:cut_slab/copper', `minecraft:cut_copper_slab`)
    event.add('tfc_metalwork:cut_stairs/copper', `minecraft:cut_copper_stairs`)

    event.add('tfc_metalwork:shingles/copper', `create:copper_shingles`)
    event.add('tfc_metalwork:shingles_slab/copper', `create:copper_shingle_slab`)
    event.add('tfc_metalwork:shingles_stairs/copper', `create:copper_shingle_stairs`)

    event.add('tfc_metalwork:tiles/copper', `create:copper_tiles`)
    event.add('tfc_metalwork:tiles_slab/copper', `create:copper_tile_slab`)
    event.add('tfc_metalwork:tiles_stairs/copper', `create:copper_tile_stairs`)

    global.weatheringLevels.forEach(i => {
        event.add('forge:storage_blocks/copper', `minecraft:${i}_copper`)

        event.add('tfc_metalwork:cut/copper', `minecraft:${i}_cut_copper`)
        event.add('tfc_metalwork:cut_slab/copper', `minecraft:${i}_cut_copper_slab`)
        event.add('tfc_metalwork:cut_stairs/copper', `minecraft:${i}_cut_copper_stairs`)

        event.add('tfc_metalwork:shingles/copper', `create:${i}_copper_shingles`)
        event.add('tfc_metalwork:shingles_slab/copper', `create:${i}_copper_shingle_slab`)
        event.add('tfc_metalwork:shingles_stairs/copper', `create:${i}_copper_shingle_stairs`)

        event.add('tfc_metalwork:tiles/copper', `create:${i}_copper_tiles`)
        event.add('tfc_metalwork:tiles_slab/copper', `create:${i}_copper_tile_slab`)
        event.add('tfc_metalwork:tiles_stairs/copper', `create:${i}_copper_tile_stairs`)
    })

    function tagOres(mod, ore, metal) {
        global.oreRarity.forEach(rarity => {
            event.add(`${mod}:ores/${metal}`, `${mod}:ore/${rarity}_${ore}`)
        })
    }

    tagOres('tfc', 'native_copper', 'copper')
    tagOres('tfc', 'tetrahedrite', 'copper')
    tagOres('tfc', 'malachite', 'copper')

    tagOres('tfc', 'native_gold', 'gold')
    tagOres('tfc', 'native_silver', 'silver')
    tagOres('tfc', 'garnierite', 'nickel')
    tagOres('tfc', 'cassiterite', 'tin')
    tagOres('tfc', 'sphalerite', 'zinc')
    tagOres('tfc', 'bismuthinite', 'bismuth')

    tagOres('tfc', 'hematite', 'wrought_iron')
    tagOres('tfc', 'limonite', 'wrought_iron')
    tagOres('tfc', 'magnetite', 'wrought_iron')

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
    global.tfcGlobalMetalTypes.forEach(i => {
        event.remove({ id: `tfc_metalwork:chisel/cut/${i}_cut` })
        event.remove({ id: `tfc_metalwork:chisel/cut/${i}_cut_slab` })
        event.remove({ id: `tfc_metalwork:chisel/cut/${i}_cut_stairs` })
        event.remove({ id: `tfc_metalwork:chisel/slab/${i}_block_slab` })
        event.remove({ id: `tfc_metalwork:chisel/slab/${i}_cut_block_slab` })
        event.remove({ id: `tfc_metalwork:chisel/stair/${i}_block_stair` })
        event.remove({ id: `tfc_metalwork:chisel/stair/${i}_cut_block_stair` })
    });

    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block_slab` })
    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block_stairs` })
    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block_wall` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block` })
    event.remove({ id: `tfc_metalwork:anvil/copper_cut_block` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block_slab` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block_stairs` })
    event.remove({ id: `tfc_metalwork:anvil/copper_block_wall` })

    event.recipes.tfc.anvil('minecraft:copper_block', 'tfc:metal/double_sheet/copper', [
        "bend_last",
        "hit_any",
        "bend_any"
    ]).tier(1).id(`tfc_metalwork:anvil/copper_block`)

    function mCutRecipes(mod, tier, transitionItem, input, output, namePrefix, name, nameSuffix) {
        const methodsCut = []
        methodsCut.push(event.recipes.createCutting(transitionItem, transitionItem))
        methodsCut.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_hammers`]))
        methodsCut.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_rods`]).keepHeldItem())
        methodsCut.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_hammers`]))
        event.recipes.tfc.anvil(output, input, [
            "hit_last",
            "hit_any",
            "upset_any"
        ]).tier(tier).id(`${mod}:anvil/${namePrefix}${name}${nameSuffix}`)
        //console.log(name)
        event.recipes.createSequencedAssembly(output, input, methodsCut).transitionalItem(transitionItem).loops(1);
    }

    function mSlabRecipes(mod, tier, transitionItem, input, output, namePrefix, name, nameSuffix) {
        const methodsSlab = []
        methodsSlab.push(event.recipes.createDeploying(transitionItem, [transitionItem, `${output}`]).keepHeldItem());
        methodsSlab.push(event.recipes.createCutting(transitionItem, transitionItem))
        methodsSlab.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        methodsSlab.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        methodsSlab.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_double_ingots`]).keepHeldItem())
        event.recipes.tfc.anvil(`2x ${output}`, input, [
            "bend_last",
            "draw_any",
            "draw_any"
        ]).tier(tier).id(`${mod}:anvil/${namePrefix}${name}${nameSuffix}`)
        event.recipes.createSequencedAssembly(`2x ${output}`, input, methodsSlab).transitionalItem(transitionItem).loops(1);
    }

    function mStairsRecipes(mod, tier, transitionItem, input, output, namePrefix, name, nameSuffix) {
        const methodsStairs = []
        methodsStairs.push(event.recipes.createDeploying(transitionItem, [transitionItem, `${output}`]).keepHeldItem());
        methodsStairs.push(event.recipes.createCutting(transitionItem, transitionItem))
        methodsStairs.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_hammers`]))
        methodsStairs.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        methodsStairs.push(event.recipes.createPressing(transitionItem, [transitionItem]));
        event.recipes.tfc.anvil(output, input, [
            "hit_not_last",
            "draw_any",
            "draw_any"
        ]).tier(tier).id(`${mod}:anvil/${namePrefix}${name}${nameSuffix}`)
        event.recipes.createSequencedAssembly(output, input, methodsStairs).transitionalItem(transitionItem).loops(1);
    }

    function mBarRecipes(mod, tier, transitionItem, input, output, namePrefix, name, nameSuffix) {
        let nameCopy = output
        if (nameSuffix == '_bars') {
            nameCopy = `#forge:metal_bars`
        }
        const methodsBar = []
        methodsBar.push(event.recipes.createDeploying(transitionItem, [transitionItem, nameCopy]).keepHeldItem())
        methodsBar.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_chisels`]).keepHeldItem())
        methodsBar.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_chisels`]).keepHeldItem())
        methodsBar.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_rods`]).keepHeldItem())
        event.recipes.tfc.anvil(output, input, [
            "upset_last",
            "punch_second_last",
            "punch_third_last"
        ]).tier(tier).id(`${mod}:anvil/${namePrefix}${name}${nameSuffix}`)
        event.recipes.createSequencedAssembly(output, input, methodsBar).transitionalItem(transitionItem).loops(1);
    }

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
            mCutRecipes('tfc_metalwork', 1, transitionItem, input, output, 'copper_', name, '_block')
        }

        if (inputCut == undefined) {
            event.remove({ output: input })
            event.remove({ output: `${mod}:waxed_${nameInput}` })
            event.shapeless(`minecraft:waxed_${nameInput}`, [`${input}`, '#tfc:waxing_agents']).id(`minecraft:waxing_${nameInput}`)
            event.recipes.tfc.chisel(input, `minecraft:waxed_${nameInput}`, 'smooth').id(`minecraft:chisel/unwaxing/${nameInput}`)
        }

        event.remove({ output: output })
        event.remove({ output: `${outputCut}_slab` })
        event.remove({ output: `${outputCut}_stairs` })

        event.remove({ output: `${mod}:waxed_${name}` })
        event.shapeless(`${mod}:waxed_${name}`, [`${output}`, '#tfc:waxing_agents']).id(`${mod}:waxing_${name}`)
        event.recipes.tfc.chisel(output, `${mod}:waxed_${name}`, 'smooth').id(`${mod}:chisel/unwaxing/${name}`)

        event.remove({ output: `${modCut}:waxed_${nameCut}_slab` })
        event.shapeless(`${modCut}:waxed_${nameCut}_slab`, [`${outputCut}_slab`, '#tfc:waxing_agents']).id(`${modCut}:waxing_${nameCut}_slab`)
        event.recipes.tfc.chisel(`${outputCut}_slab`, `${modCut}:waxed_${nameCut}_slab`, 'smooth').id(`${modCut}:chisel/unwaxing/${nameCut}_slab`)

        event.remove({ output: `${modCut}:waxed_${nameCut}_stairs` })
        event.shapeless(`${modCut}:waxed_${nameCut}_stairs`, [`${outputCut}_stairs`, '#tfc:waxing_agents']).id(`${modCut}:waxing_${nameCut}_stairs`)
        event.recipes.tfc.chisel(`${outputCut}_stairs`, `${modCut}:waxed_${nameCut}_stairs`, 'smooth').id(`${modCut}:chisel/unwaxing/${nameCut}_stairs`)

        mSlabRecipes('tfc_metalwork', 1, transitionItem, output, `${outputCut}_slab`, 'copper_', name, '_slab')
        mStairsRecipes('tfc_metalwork', 1, transitionItem, output, `${outputCut}_stairs`, 'copper_', name, '_stairs')

    }

    copperBlockRecipes('minecraft:copper_block', undefined, 'minecraft:cut_copper', null)
    copperBlockRecipes('minecraft:cut_copper', null, 'create:copper_shingles', 'create:copper_shingle')
    copperBlockRecipes('create:copper_shingles', 'create:copper_shingle', 'create:copper_tiles', 'create:copper_tile')

    global.weatheringLevels.forEach(i => {
        copperBlockRecipes(`minecraft:${i}_copper`, undefined, `minecraft:${i}_cut_copper`, null)
        copperBlockRecipes(`minecraft:${i}_cut_copper`, null, `create:${i}_copper_shingles`, `create:${i}_copper_shingle`)
        copperBlockRecipes(`create:${i}_copper_shingles`, `create:${i}_copper_shingle`, `create:${i}_copper_tiles`, `create:${i}_copper_tile`)
    })

    function barsRecipes(mod, metal) {
        let barItem = global.getValidBar(mod, metal)
        let rodItem = `${mod}:metal/rod/${metal}`
        let transitionItem = `kubejs:transition_${metal}`

        if (metal == 'wrought_iron') {
            metal = 'iron'
        }
        event.remove({ output: barItem })
        event.remove({ id: `tfc:anvil/${metal}_bars` })
        event.remove({ id: `tfc:anvil/${metal}_bars_double` })

        let tier = 3;
        tier = global.getTier(metal)

        mBarRecipes(mod, tier, transitionItem, rodItem, `8x ${barItem}`, '', metal, '_bars')
    }

    global.tfcBarTypes.forEach(i => barsRecipes('tfc', i));
    global.tfcMetallumBarTypes.forEach(i => barsRecipes('tfc_metallum', i));

    function sheetmetalRecipes(mod, metal) {
        //console.log(metal)
        let transitionItem = `kubejs:transition_${metal}_block`
        let iemetal = metal
        if (metal == 'wrought_iron') {
            iemetal = 'iron'
        }

        let sheetmetal = `immersiveengineering:sheetmetal_${iemetal}`
        let sheetmetalSlab = `immersiveengineering:slab_sheetmetal_${iemetal}`

        if(mod == 'kubejs') {
            sheetmetal = `kubejs:sheetmetal/${iemetal}`
            sheetmetalSlab = `kubejs:sheetmetal/${iemetal}_slab`
        }
        event.remove({ output: sheetmetal })
        event.remove({ output: sheetmetalSlab })

        let tier = 3
        tier = global.getTier(iemetal)

        mCutRecipes('immersiveengineering', tier, transitionItem, `tfc_metalwork:metal/plate/${metal}`, sheetmetal, '', iemetal, '_sheetmetal')
        mSlabRecipes('immersiveengineering', tier, transitionItem, sheetmetal, sheetmetalSlab, 'slab_', iemetal, '_sheetmetal')

    }

    global.tfcSheetmetalTypes.forEach(i => sheetmetalRecipes('tfc', i));
    global.tfcMetallumSheetmetalTypes.forEach(i => sheetmetalRecipes('tfc_metallum', i));
    global.customSheetmetalTypes.forEach(i => sheetmetalRecipes('kubejs', i));

    function coloredSheetmetalRecipes(metal) {
        event.remove({ output: `immersiveengineering:slab_sheetmetal_colored_${metal}` })
        let transitionItem = `kubejs:transition_${metal}_block`

        let tier = 1;
        mSlabRecipes('immersiveengineering', tier, transitionItem, `immersiveengineering:sheetmetal_colored_${metal}`, `immersiveengineering:slab_sheetmetal_colored_${metal}`, 'slab_', metal, '_sheetmetal')
    }

    global.colors.forEach(i => coloredSheetmetalRecipes(i));

    global.tfcMetallumSheetmetalTypes.forEach(i => sheetmetalRecipes('tfc_metallum', i));

    event.remove({ id: `rosia:casting/invar_fire_ingot` })
    event.remove({ id: `rosia:casting/invar_ingot` })
    event.remove({ id: `rosia:casting/purple_steel_fire_ingot` })
    event.remove({ id: `rosia:casting/purple_steel_ingot` })
    event.remove({ id: `rosia:casting/weak_purple_steel_fire_ingot` })
    event.remove({ id: `rosia:casting/weak_purple_steel_ingot` })

    global.addMeltingHeatingFluid(false, 'create:whisk', "tfc:metal/cast_iron", 200, 'wrought_iron', 1535)
    global.addMeltingHeatingFluid(false, 'create:propeller', "tfc:metal/cast_iron", 200, 'wrought_iron', 1535)
    global.addMeltingHeatingFluid(false, 'thermal:drill_head', "tfc:metal/cast_iron", 200, 'wrought_iron', 1535)
    global.addMeltingHeatingFluid(false, 'thermal:saw_blade', "tfc:metal/cast_iron", 200, 'wrought_iron', 1535)
    global.addMeltingHeatingFluid(false, 'minecraft:bucket', "tfc:metal/cast_iron", 200, 'wrought_iron', 1535)
    global.addMeltingHeatingFluid(false, 'firmalife:pie_pan', "tfc:metal/cast_iron", 50, 'wrought_iron', 1535)

    event.remove({ output: 'supplementaries:gold_gate' })
    event.shaped('2x supplementaries:gold_gate', [
        'SOS',
        'SOS'
    ], {
        S: 'quark:gold_bars',
        O: `tfc:metal/rod/gold`
    }).id('supplementaries:gold_gate')

    event.remove({ output: 'supplementaries:iron_gate' })
    event.shaped('2x supplementaries:iron_gate', [
        'SOS',
        'SOS'
    ], {
        S: 'minecraft:iron_bars',
        O: `tfc:metal/rod/wrought_iron`
    }).id('supplementaries:iron_gate')

    global.addMeltingHeatingFluid(false, 'minecraft:iron_bars', "tfc:metal/cast_iron", 6, 'wrought_iron', 1535)
    global.addMeltingHeatingFluid(false, 'supplementaries:iron_gate', "tfc:metal/cast_iron", 62, 'wrought_iron', 1535)
    global.addMeltingHeatingFluid(false, 'quark:gold_bars', "tfc:metal/gold", 6, 'gold', 1060)
    global.addMeltingHeatingFluid(false, 'supplementaries:gold_gate', "tfc:metal/gold", 62, 'gold', 1060)
    global.addMeltingHeatingFluid(false, 'tfc:steel_bars', "tfc:metal/steel", 6, 'steel', 1540)
    global.addMeltingHeatingFluid(false, 'tfc:black_steel_bars', "tfc:metal/black_steel", 6, 'black_steel', 1485)
    global.addMeltingHeatingFluid(false, 'tfc:red_steel_bars', "tfc:metal/red_steel", 6, 'red_steel', 1540)
    global.addMeltingHeatingFluid(false, 'tfc:blue_steel_bars', "tfc:metal/blue_steel", 6, 'blue_steel', 1540)
    global.addMeltingHeatingFluid(false, 'tfc_metallum:enderium_bars', "tfc_metallum:metal/enderium", 6, 'enderium', 1700)
    global.addMeltingHeatingFluid(false, 'tfc_metallum:titanium_bars', "tfc_metallum:metal/titanium", 6, 'titanium', 1700)
    global.addMeltingHeatingFluid(false, 'tfc_metallum:tungsten_bars', "tfc_metallum:metal/tungsten", 6, 'tungsten', 3400)
    global.addMeltingHeatingFluid(false, 'tfc_metallum:tungsten_steel_bars', "tfc_metallum:metal/tungsten_steel", 6, 'tungsten_steel', 3690)

    global.addMeltingHeatingFluid(false, 'create:andesite_alloy', "kubejs:raw_andesite_alloy", 25, 'andesite_alloy', 520)
    global.addMeltingHeatingFluid(false, 'thermal:rosin', "kubejs:pitch", 1000, 'custom', 240)
    global.addMeltingHeatingFluid(false, 'firmalife:beeswax', "kubejs:wax", 1000, 'custom', 240)

    global.addMeltingCrushing(true, 'tfc_metalwork:cut/copper', 'tfc:metal/copper', 400, 'copper', 1080)
    global.addMeltingCrushing(true, 'tfc_metalwork:cut_slab/copper', 'tfc:metal/copper', 200, 'copper', 1080)
    global.addMeltingCrushing(true, 'tfc_metalwork:cut_stairs/copper', 'tfc:metal/copper', 300, 'copper', 1080)

    global.addMeltingCrushing(true, 'tfc_metalwork:shingles/copper', 'tfc:metal/copper', 400, 'copper', 1080)
    global.addMeltingCrushing(true, 'tfc_metalwork:shingles_slab/copper', 'tfc:metal/copper', 200, 'copper', 1080)
    global.addMeltingCrushing(true, 'tfc_metalwork:shingles_stairs/copper', 'tfc:metal/copper', 300, 'copper', 1080)

    global.addMeltingCrushing(true, 'tfc_metalwork:tiles/copper', 'tfc:metal/copper', 400, 'copper', 1080)
    global.addMeltingCrushing(true, 'tfc_metalwork:tiles_slab/copper', 'tfc:metal/copper', 200, 'copper', 1080)
    global.addMeltingCrushing(true, 'tfc_metalwork:tiles_stairs/copper', 'tfc:metal/copper', 300, 'copper', 1080)

    function gemMelting(input, fluid, metal, fluidAmount) {
        global.addMeltingHeatingFluid(false, input, fluid, fluidAmount, metal, 1900)
    }
    global.tfcGemTypes.forEach(i => gemMelting(`tfc:ore/${i}`, `kubejs:${i}`, i, 25))
    global.tfcGemTypes.forEach(i => gemMelting(`tfc:gem/${i}`, `kubejs:${i}`, i, 25))
    global.tfcGemTypes.forEach(i => gemMelting(`tfc:powder/${i}`, `kubejs:${i}`, i, 25))
    gemMelting('tfc:ore/cryolite', 'kubejs:cryolite', 'cryolite', 25)

    function wireRecipes(mod, metal) {
        event.remove({ id: `immersiveengineering:crafting/wire_${metal}` })

        global.addRolling(`${mod}:metal/rod/${metal}`, `immersiveengineering:wire_${metal}`, 2)
        event.recipes.immersiveengineeringMetalPress(`2x immersiveengineering:wire_${metal}`, `${mod}:metal/rod/${metal}`, 'immersiveengineering:mold_wire')
    }
    wireRecipes('tfc', 'copper')
    wireRecipes('tfc_metallum', 'electrum')
    wireRecipes('tfc_metallum', 'aluminum')
    wireRecipes('tfc', 'steel')
    wireRecipes('tfc_metallum', 'lead')

    function pressRecipes(mod, metal) {
        event.remove({ id: `tfc_metalwork:crafting/small_gear/${metal}` })
        event.remove({ id: `tfc_metalwork:crafting/large_gear/${metal}` })

        event.recipes.immersiveengineeringMetalPress(`tfc_metalwork:metal/small_gear/${metal}`, `4x ${mod}:metal/rod/${metal}`, 'immersiveengineering:mold_gear')
        event.recipes.immersiveengineeringMetalPress(`tfc_metalwork:metal/large_gear/${metal}`, `4x tfc_metalwork:metal/large_rod/${metal}`, 'immersiveengineering:mold_gear')

    }
    global.tfcMetalTypes.forEach(i => pressRecipes('tfc', i))
    global.tfcMetallumMetalTypes.forEach(i => pressRecipes('tfc_metallum', i))
    global.firmalifeMetalTypes.forEach(i => pressRecipes('firmalife', i))

    function anvilRecipes(mod, metal) {
        let id = `${mod}:crafting/metal/${metal}_anvil`
        if (mod == 'tfc') {
            id = `${mod}:crafting/metal/anvil/${metal}`
        }
        event.remove({ id: id })

        if (global.highmetalrx.test(metal)) {
            event.recipes.createMechanicalCrafting(`${mod}:metal/anvil/${metal}`, [
                'SSS',
                ' A ',
                'AAA'
            ], {
                S: `${mod}:metal/double_ingot/${metal}`,
                A: `${mod}:metal/ingot/${metal}`
            }).id(id)
        } else {
            event.shaped(`${mod}:metal/anvil/${metal}`, [
                'SSS',
                ' A ',
                'AAA'
            ], {
                S: `${mod}:metal/double_ingot/${metal}`,
                A: `${mod}:metal/ingot/${metal}`
            }).id(id)
        }
    }

    global.tier1MetalTypes.forEach(i => anvilRecipes('tfc', i));
    global.tier1MetallumMetalTypes.forEach(i => anvilRecipes('tfc_metallum', i));

    global.tfcMetalPartsComplete.forEach(toolType => {
        if (global.metalworkpartsrx.test(toolType) && toolType !== 'chestplate' && toolType !== 'unfinished_chestplate') {
            global.addExplosionCrafting(`tfc_metalwork:metal/${toolType}/wrought_iron`, `tfc_metalwork:metal/${toolType}/compressed_iron`, 20)
        } else {
            global.addExplosionCrafting(`tfc:metal/${toolType}/wrought_iron`, `tfc_metallum:metal/${toolType}/compressed_iron`, 20)
        }
    })
    global.addExplosionCrafting(`tfc_metalwork:metal/block/wrought_iron_slab`, `tfc_metalwork:metal/block/compressed_iron_slab`, 20)
    global.addExplosionCrafting(`tfc_metalwork:metal/block/wrought_iron_stairs`, `tfc_metalwork:metal/block/compressed_iron_stairs`, 20)
    global.addExplosionCrafting(`tfc_metalwork:metal/cut/wrought_iron_slab`, `tfc_metalwork:metal/cut/compressed_iron_slab`, 20)
    global.addExplosionCrafting(`tfc_metalwork:metal/cut/wrought_iron_stairs`, `tfc_metalwork:metal/cut/compressed_iron_stairs`, 20)

    global.highTierMetals.forEach(metal => {
        event.remove({ id: `tfc_metallum:alloy/${metal}` })
        event.remove({ id: `tfc:alloy/${metal}` })
        event.remove({ id: `tfc:alloy/weak_${metal}` })
        event.remove({ id: `tfc:alloy/weak_steel` })

        global.tfcMetalParts.forEach(toolType => {
            event.remove({ id: `tfc_metalwork:heating/metal/${metal}_${toolType}` })
            event.remove({ id: `tfc:heating/metal/${metal}_${toolType}` })
            event.remove({ id: `tfc_metallum:heating/metal/${metal}_${toolType}` })

            if (toolType !== 'ingot') {
                event.remove({ id: `tfc_metallum:casting/${metal}_${toolType}` })
            }
        });
    });
})

onEvent('server.datapack.first', event => {
    event.addTFCHeat('create:whisk', 5.714, 921)
    event.addTFCHeat('create:propeller', 5.714, 921)
    event.addTFCHeat('thermal:drill_head', 5.714, 921)
    event.addTFCHeat('thermal:saw_blade', 5.714, 921)
    event.addTFCHeat('minecraft:bucket', 5.714, 921)
    event.addTFCHeat('firmalife:pie_pan', 1.428, 921)

    event.addTFCHeat('supplementaries:iron_gate', 0.171)
    event.addTFCHeat('supplementaries:gold_gate', 0.171)

    event.addTFCHeat('tfc_metallum:enderium_bars', 0.171, 1020)
    event.addTFCHeat('tfc_metallum:titanium_bars', 0.171, 1020)
    event.addTFCHeat('tfc_metallum:tungsten_bars', 0.3, 1020)
    event.addTFCHeat('tfc_metallum:tungsten_steel_bars', 0.3, 2214)
    event.addTFCHeat('quark:gold_bars', 0.171)

    event.addTFCHeat('create:andesite_alloy', 33.333)

    function gemHeating(input) {
        event.addTFCHeat(input, 3.333)
        event.addTFCMetal(input, 2000, 3.333, 'minecraft:structure_void', 'minecraft:structure_void')
    }
    global.tfcGemTypes.forEach(i => gemHeating(`tfc:ore/${i}`))
    global.tfcGemTypes.forEach(i => gemHeating(`tfc:gem/${i}`))
    global.tfcGemTypes.forEach(i => gemHeating(`tfc:powder/${i}`))
    gemHeating('tfc:ore/cryolite')

    event.addTFCHeat('#tfc_metalwork:cut/copper', 11.429, 648)
    event.addTFCHeat('#tfc_metalwork:shingles/copper', 11.429, 648)
    event.addTFCHeat('#tfc_metalwork:tiles/copper', 11.429, 648)

    event.addTFCHeat('#tfc_metalwork:cut_slab/copper', 5.714, 648)
    event.addTFCHeat('#tfc_metalwork:shingles_slab/copper', 5.714, 648)
    event.addTFCHeat('#tfc_metalwork:tiles_slab/copper', 5.714, 648)

    event.addTFCHeat('#tfc_metalwork:cut_stairs/copper', 8.571, 648)
    event.addTFCHeat('#tfc_metalwork:shingles_stairs/copper', 8.571, 648)
    event.addTFCHeat('#tfc_metalwork:tiles_stairs/copper', 8.571, 648)
})