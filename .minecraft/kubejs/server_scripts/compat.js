// priority: 2103

//fix dust
//fix metal processing
onEvent('tags.items', event => {
    global.unfiredPotteryItem = event.get('tfc:unfired_pottery').getObjectIds()
    global.rawFood = event.get('tfc:foods').getObjectIds()
    global.terracotta = event.get('forge:terracotta').getObjectIds()
    global.pileableIngots = event.get('tfc:pileable_ingots').getObjectIds()
    global.largeRods = event.get('forge:large_rods').getObjectIds()
    global.tfcMetallumMetalTypes.forEach(i => global.pileableIngots.push(`tfc_metallum:metal/ingot/${i}`));
    global.tfcMetallumMetalTypes.forEach(i => global.pileableIngots.push(`forge:ingots/${i}`));
    //console.log(global.pileableIngots)

    global.highTierOres = []
    global.tfcMetallumMedTierOres.forEach(ore => {
        global.oreRarity.forEach(rarity => {
            global.highTierOres.push(`tfc_metallum:ore/${rarity}_${ore}`)
        })
    })
    //console.log(global.highTierOres)

    global.gemMetals = []
    global.tfcGemTypes.forEach(i => global.gemMetals.push(i))
    global.gemMetals.push('cryolite')

    global.tfcMetallumRods = []
    global.tfcMetallumMetalTypes.forEach(i => global.tfcMetallumRods.push(`tfc_metallum:metal/rod/${i}`));

    global.tfcAnvils = []
    global.tier1MetalTypes.forEach(i => global.tfcAnvils.push(`tfc:metal/anvil/${i}`));
    global.tier1MetallumMetalTypes.forEach(i => global.tfcAnvils.push(`tfc_metallum:metal/anvil/${i}`));

    global.largeRodsTag = []
    global.tfcGlobalMetalTypes.forEach(i => global.largeRodsTag.push(`forge:large_rods/${i}`));

    global.laddersTag = []
    global.tfcGlobalMetalTypes.forEach(i => global.laddersTag.push(`tfc_metalwork:metal_ladders/${i}`));

    global.ladders = []
    global.tfcGlobalMetalTypes.forEach(i => global.ladders.push(`tfc_metalwork:metal/ladder/${i}`));

    global.platesTag = []
    global.tfcGlobalMetalTypes.forEach(i => global.platesTag.push(`forge:plates/${i}`));

    global.largePlatesTag = []
    global.tfcGlobalMetalTypes.forEach(i => global.largePlatesTag.push(`forge:large_plates/${i}`));

    global.largeGearsTag = []
    global.tfcGlobalMetalTypes.forEach(i => global.largeGearsTag.push(`forge:large_gears/${i}`));

    global.dustsTag = []
    global.tfcGlobalMetalTypes.forEach(i => global.dustsTag.push(`forge:dusts/${i}`));

    global.ingotsTag = []
    global.tfcGlobalMetalTypes.forEach(i => global.ingotsTag.push(`forge:ingots/${i}`));

    global.rawFood.push('minecraft:egg')
    global.rawFood.push('tfc:plant/giant_kelp_flower')
    global.rawFood.push('tfc:groundcover/seaweed')

    global.heatingBlacklist = [
        'rosia:compressed_magnetite',
        'minecraft:clay',
        'tfc:stick_bunch',
        'minecraft:stick',
        'tfc:glass_shard'
    ];
    global.heatingTagBlacklist = [
        'forge:sand',
        'forge:rods/wooden'
    ]
    global.meltingBlacklist = [
        'minecraft:iron_bars',
        'tfc:steel_bars',
        'tfc:black_steel_bars',
        'tfc:red_steel_bars',
        'tfc:blue_steel_bars'
    ]
    global.doubleIngotBlacklist = [
        'weak_steel',
        'high_carbon_steel',
        'unknown',
        'weak_red_steel',
        'weak_blue_steel',
        'high_carbon_red_steel',
        'high_carbon_black_steel',
        'pig_iron',
        'high_carbon_blue_steel'
    ];

    global.nameBlacklist = [
        'stairs',
        'slab',
        'wall'
    ]

    global.anvilCopyBlacklist = [
        'tfc_metalwork:metal/block/copper_slab',
        'tfc_metalwork:metal/block/copper_stairs',
        'tfc:metal/bucket/red_steel',
        'tfc:metal/bucket/blue_steel',
        'tfc_metalwork:metal/cut/copper',
        'tfc_metalwork:metal/cut/copper_slab',
        'tfc_metalwork:metal/cut/copper_stairs'
    ]

    global.anvilCopyWhitelist = [
        'tfc:refined_iron_bloom',
        'tfc:brass_mechanisms',
        'minecraft:iron_door',
        'waterflasks:unfinished_iron_flask',
        'firmalife:pie_pan',
        'tfc:metal/ingot/high_carbon_steel'
    ]

    global.metalworkMetalParts = [
        'dust',
        'plate',
        'small_gear',
        'large_gear',
        'large_rod',
        'block',
        'cut',
        'ladder'
    ]

    global.rottableFoods = []
    const rottableFoods = event.get('tfc:foods').getObjectIds()
    rottableFoods.forEach(i => global.rottableFoods.push(i))

    global.unfiredPotteryItem.forEach(i => global.heatingBlacklist.push(i));
    global.terracotta.forEach(i => global.heatingBlacklist.push(i));

    global.dusttagrx = new RegExp(global.dustsTag.join('|'));
    global.largeplatetagrx = new RegExp(global.largePlatesTag.join('|'));
    global.largegeartagrx = new RegExp(global.largeGearsTag.join('|'));
    global.largerodtagrx = new RegExp(global.largeRodsTag.join('|'));
    global.platetagrx = new RegExp(global.platesTag.join('|'));
    global.anvilrx = new RegExp(global.tfcAnvils.join('|'));
    global.ingottagrx = new RegExp(global.ingotsTag.join('|'));
    global.largerodrx = new RegExp(global.largeRods.join('|'));
    global.laddertagrx = new RegExp(global.laddersTag.join('|'));
    global.ladderrx = new RegExp(global.ladders.join('|'));
    global.rodrx = new RegExp(global.tfcMetallumRods.join('|'));
    global.nameblacklistrx = new RegExp(global.nameBlacklist.join('|'));
    global.doubleingotrx = new RegExp(global.doubleIngotBlacklist.join('|'));
    global.ingotrx = new RegExp(global.pileableIngots.join('|'));
    global.bonuswhitelistrx = new RegExp(global.forgingBonusWhitelist.join('|'));
    global.anvilblacklistrx = new RegExp(global.anvilCopyBlacklist.join('|'));
    global.anvilwhitelistrx = new RegExp(global.anvilCopyWhitelist.join('|'));
    global.rottablefoodsrx = new RegExp(global.rottableFoods.join('|'));
    global.meltingrx = new RegExp(global.meltingBlacklist.join('|'));
    global.highmetalrx = new RegExp(global.highTierMetals.join('|'));
    global.highorerx = new RegExp(global.highTierOres.join('|'));
    global.gemrx = new RegExp(global.gemMetals.join('|'));

    //console.log(global.ingotrx)
    global.foodrx = new RegExp(global.rawFood.join('|'));
    global.metalworkpartsrx = new RegExp(global.metalworkMetalParts.join('|'));
    global.rx = new RegExp(global.heatingBlacklist.join('|'));
    global.tagrx = new RegExp(global.heatingTagBlacklist.join('|'));
    global.toolmetalrx = new RegExp(global.toolMetalTypes.join('|'));
})

onEvent('recipes', event => {

    //Quern to Milling
    event.forEachRecipe({ type: "tfc:quern" }, recipe => {
        const quernRecipe = JSON.parse(recipe.json);
        let input = undefined
        let isTag = false
        input = quernRecipe.ingredient.item;
        if (input == undefined && quernRecipe.ingredient.ingredient !== undefined) {
            input = quernRecipe.ingredient.ingredient.item;
        }
        if (input == undefined) {
            input = quernRecipe.ingredient.tag;
            isTag = true
        }
        let time = 50
        let output = quernRecipe.result.item;
        let outputCount = quernRecipe.result.count;
        if (outputCount == undefined) {
            outputCount = 1
        }
        let modifiers = false
        if (output == undefined) {
            output = quernRecipe.result.stack.item
            modifiers = true
        }
        //console.log(output)
        //console.log(outputCount)
        if (output !== undefined && input !== undefined && !global.ingotrx.test(input)) {
            //console.log(input)
            global.addMilling(isTag, input, output, outputCount, time, modifiers)
        }
    });

    event.forEachRecipe({ type: "tfc:welding" }, recipe => {
        const weldingRecipe = JSON.parse(recipe.json);

        let output = weldingRecipe.result.item;
        let result = output.split(':')
        let output_item = result[1]
        let mod = result[0]

        if (mod == 'rosia') {
            event.remove({ id: `${mod}:welding/${output_item}` })
        }

    });

    event.forEachRecipe({ type: "tfc:anvil" }, recipe => {
        const anvilRecipe = JSON.parse(recipe.json);

        let output = anvilRecipe.result.item;
        let result = output.split(':')
        let output_item = result[1]
        let mod = result[0]

        if (mod == 'rosia') {
            event.remove({ id: `${mod}:anvil/${output_item}` })
            event.remove({ id: `${mod}:anvil/tools/${output_item}` })
            event.remove({ id: `${mod}:anvil/armor/${output_item}` })
        }

    });

    event.forEachRecipe({ type: "tfc:anvil" }, recipe => {
        const anvilRecipe = JSON.parse(recipe.json);

        let output = anvilRecipe.result.item;
        let tier = anvilRecipe.tier;
        let result = output.split('/')
        let metal = result[2];

        if (global.rodrx.test(output)) {
            let input = anvilRecipe.input.tag;
            event.remove({ id: `tfc_metallum:anvil/${metal}_rod` })
            //console.log(input + metal)
            event.recipes.tfc.anvil(`2x ${output}`, `#${input}`, [
                "bend_last",
                "draw_second_last",
                "draw_third_last"
            ]).tier(tier).id(`tfc_metallum:anvil/${metal}_rod`)
        }

        if (global.largerodrx.test(output)) {
            let input = anvilRecipe.input.item;
            event.remove({ id: `tfc_metalwork:anvil/${metal}_large_rod` })
            event.recipes.tfc.anvil(`2x ${output}`, `${input}`, [
                "bend_last",
                "draw_second_last",
                "draw_third_last"
            ]).tier(tier).id(`tfc_metalwork:anvil/${metal}_large_rod`)
        }

        if (global.ladderrx.test(output)) {
            let input = anvilRecipe.input.item;
            event.remove({ id: `tfc_metalwork:anvil/${metal}_ladder` })
            event.recipes.tfc.anvil(`16x ${output}`, `${input}`, [
                "bend_last",
                "bend_second_last",
                "hit_any"
            ]).tier(tier).id(`tfc_metalwork:anvil/${metal}_ladder`)
        }
    });

    event.forEachRecipe({ type: "tfc:anvil" }, recipe => {
        const anvilRecipe = JSON.parse(recipe.json);
        let rules = [];
        rules = anvilRecipe.rules;
        let input = undefined
        let count = undefined
        let isTag = false
        let tagPrefix = ""
        input = anvilRecipe.input.item;
        if (input == undefined) {
            input = anvilRecipe.input.tag;
            isTag = true
            tagPrefix = "#"
        }

        count = anvilRecipe.result.count
        if (count == undefined) {
            count = 1
        }

        let output = anvilRecipe.result.item;
        let tier = anvilRecipe.tier;
        let result = output.split('/')
        let mod = result[0]
        let blockType = undefined
        let toolType = result[1]
        let inputResult = input.split('/')
        let inputType = inputResult[1]
        if (global.anvilwhitelistrx.test(output)) {
            result[2] = 'custom'
        }
        if (result[2] !== undefined) {
            let resultDivided = result[2].split("_")
            let metal = undefined;

            //console.log(resultDivided)

            if (resultDivided[0] !== undefined && !global.nameblacklistrx.test(resultDivided[0])) {
                if (global.nameblacklistrx.test(resultDivided[1]) || resultDivided[1] == undefined) {
                    metal = resultDivided[0]

                    if (resultDivided[1] == undefined) {
                        blockType = 'block'
                    } else {
                        blockType = resultDivided[1]
                    }
                }
            }
            if (resultDivided[1] !== undefined && !global.nameblacklistrx.test(resultDivided[1])) {
                if (global.nameblacklistrx.test(resultDivided[2]) || resultDivided[2] == undefined) {
                    metal = resultDivided[0] + '_' + resultDivided[1]

                    if (resultDivided[2] == undefined) {
                        blockType = 'block'
                    } else {
                        blockType = resultDivided[2]
                    }
                }
            }

            switch (output) {
                case 'tfc:refined_iron_bloom':
                    metal = 'bloom'
                    toolType = 'customp'
                    break;
                case 'tfc:brass_mechanisms':
                    metal = 'brass'
                    break;
                case 'minecraft:iron_door':
                case 'waterflasks:unfinished_iron_flask':
                    metal = 'wrought_iron'
                    break;
                case 'firmalife:pie_pan':
                    metal = 'cast_iron'
                    break;
                case 'tfc:metal/ingot/high_carbon_steel':
                    metal = 'high_carbon_steel'
                    toolType = 'customp'
                    break;
            }

            if (output == 'tfc_metalwork:metal/block/copper') {
                output = 'minecraft:copper_block'
                blockType = 'block'
            }

            if (global.anvilwhitelistrx.test(output)) {
                blockType = 'custom'
            }
            if (global.anvilblacklistrx.test(output)) {
                blockType = 'fcut'
            }

            rules = anvilRecipe.rules;

            //console.log(blockType)

            if (blockType !== 'wall' && blockType !== 'fcut' && toolType !== 'large_plate') {

                const order = []
                const methods = []
                const results = []

                let transitionItem = `kubejs:transition_${metal}`
                if (toolType == 'block' || toolType == 'cut') {
                    transitionItem = `kubejs:transition_${metal}_block`
                }

                for (let i in rules) {
                    let step = rules[i];
                    let stepDivided = step.split("_")
                    let stepName = stepDivided[0];
                    let stepOrder = step.substring(stepName.length + 1);

                    if (stepName !== '') {
                        if (stepOrder == 'last') {
                            order[(rules.length) - 1] = stepName
                        } else if (stepOrder == 'second_last') {
                            order[(rules.length) - 2] = stepName
                        } else if (stepOrder == 'third_last') {
                            order[0] = stepName
                        } else if (stepOrder == 'not_last') {
                            if (order[0] == undefined) {
                                order[0] = stepName
                            } else if (order[1] == undefined) {
                                order[1] = stepName
                            }
                        } else if (stepOrder == 'any') {
                            if (order[0] == undefined) {
                                order[0] = stepName
                            } else if (order[1] == undefined) {
                                order[1] = stepName
                            } else if (order[(rules.length) - 1] == undefined) {
                                order[(rules.length) - 1] = stepName
                            }
                        }
                    }

                }

                if (inputType !== 'double_sheet') {
                    if (blockType == 'slab' || blockType == 'stairs') {
                        methods.push(event.recipes.createDeploying(transitionItem, [transitionItem, output]).keepHeldItem());
                    }
                }
                if (toolType == 'sheet' || toolType == 'plate' || toolType == 'ingot' || inputType == 'double_sheet' || toolType == 'trapdoor' || toolType == 'ladder' || toolType == 'customp') {
                    methods.push(event.recipes.createPressing(transitionItem, [transitionItem]));
                } else if (global.bonuswhitelistrx.test(toolType) || toolType == 'chain' || toolType == 'lamp') {
                    let toolCopy = `#forge:tier${tier}_${toolType}s`
                    methods.push(event.recipes.createDeploying(transitionItem, [transitionItem, toolCopy]).keepHeldItem());
                } else if (toolType == 'block' || toolType == 'cut' || toolType == 'rod' || toolType == 'large_rod') {
                    if (inputType !== 'double_sheet') {
                        methods.push(event.recipes.createCutting(transitionItem, transitionItem))
                    }
                } else {
                    methods.push(event.recipes.createDeploying(transitionItem, [transitionItem, output]).keepHeldItem());
                }

                for (let i in order) {
                    let deployingItem = undefined;
                    let keepHeldItem = false;

                    switch (order[i]) {
                        case 'draw':
                            deployingItem = 'sheets'
                            keepHeldItem = true
                            break;

                        case 'hit':
                            deployingItem = 'hammers'
                            break;

                        case 'upset':
                            deployingItem = 'rods'
                            keepHeldItem = true
                            break;

                        case 'punch':
                            deployingItem = 'chisels'
                            break;

                        case 'bend':
                            deployingItem = 'double_ingots'
                            keepHeldItem = true
                            break;

                        case 'shrink':
                            deployingItem = 'double_sheets'
                            keepHeldItem = true
                            break;
                    }

                    if (keepHeldItem) {
                        methods.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_${deployingItem}`]).keepHeldItem())
                    } else {
                        methods.push(event.recipes.createDeploying(transitionItem, [transitionItem, `#forge:tier${tier}_${deployingItem}`]))
                    }
                }

                if (toolType == 'large_rod' || toolType == 'rod') {
                    count = 2
                }

                if (toolType == 'ladder') {
                    count = 16
                }

                //console.log(count + 'of output')
                if (global.bonuswhitelistrx.test(toolType)) {
                    results.push(Item.of(output, '{"tfc:forging_bonus": 3}').withChance(80));
                    results.push(Item.of(output, '{"tfc:forging_bonus": 2}').withChance(15));
                    results.push(Item.of(output, '{"tfc:forging_bonus": 1}').withChance(5));
                } else {
                    results.push(Item.of(`${count}x ${output}`).withChance(100));
                }

                if (toolType !== 'large_plate') {
                    event.recipes.createSequencedAssembly(results, tagPrefix + input, methods).transitionalItem(transitionItem).loops(1);
                }
                //console.log(results)
                //console.log(methods)

                //console.log(output + order);
            }
        }
    });

    event.forEachRecipe({ type: "tfc:scraping" }, recipe => {
        const scrapingRecipe = JSON.parse(recipe.json);
        let input = scrapingRecipe.ingredient.item
        let output = scrapingRecipe.result.item
        let count = scrapingRecipe.result.count

        let inputResult = input.split(":")
        let itemResult = inputResult[1]
        let transitionItem = `kubejs:transition_${itemResult}`

        const sresults = []
        const smethods = []

        sresults.push(Item.of(`${count}x ${output}`).withChance(100))

        smethods.push(event.recipes.createDeploying(transitionItem, [transitionItem, '#tfc:knives']));

        event.recipes.createSequencedAssembly(sresults, input, smethods).transitionalItem(transitionItem).loops(3);
    });


    event.forEachRecipe({ type: "tfc:heating" }, recipe => {
        const heatingRecipe = JSON.parse(recipe.json);
        let input = undefined
        let isTag = false
        let tagPrefix = ""
        input = heatingRecipe.ingredient.item;
        if (input == undefined) {
            input = heatingRecipe.ingredient.tag;
            isTag = true
            tagPrefix = "#"
        }

        let isValid = true
        if (heatingRecipe.use_durability == true) {
            isValid = false
            //fluidAmount = fluidAmount / 2
        }

        if (!global.tagrx.test(input) && !global.rx.test(input) && !global.foodrx.test(input) && input !== undefined && heatingRecipe.result_fluid !== undefined) {
            //console.log(isTag)
            //console.log(input);

            let fluid = heatingRecipe.result_fluid.fluid;
            let fluidAmount = heatingRecipe.result_fluid.amount;
            let temperature = heatingRecipe.temperature;

            let result = undefined
            let mod = undefined
            let metal = undefined
            let modresult = undefined
            let toolType = undefined
            let toolResult = undefined

            let heatcapacity = undefined;

            if (isTag == false) {
                result = input.split('/')
                metal = result[2];
                toolType = result[1]
                mod = result[0];
            } else {
                result = input.split('/')
                metal = result[1];
                toolResult = result[0].split(':')
                toolType = toolResult[1].substr(0, toolResult[1].length - 1);
                modresult = fluid.split('/')
                mod = modresult[0];
            }

            let heatingTemperature = temperature
            //console.log(global.highmetalrx)
            //console.log(metal)

            if (isTag) {
                switch (result[0]) {
                    case 'tfc_metalwork:metal_ladders':
                        toolType = 'ladder'
                        break;
                    case 'tfc_metalwork:storage_blocks':
                        toolType = 'block'
                        break;
                    case 'tfc_metalwork:cut':
                        toolType = 'cut'
                        break;
                    case 'forge:gears':
                        toolType = 'small_gear'
                        break;
                }
            }

            let isMetalworkPart = false
            if (global.metalworkpartsrx.test(toolType)) {
                isMetalworkPart = true
            }

            let modResult = undefined
            modResult = input.split(':')
            let modName = undefined
            let itemName = undefined
            let preNameResult = undefined
            modName = modResult[0]
            itemName = modResult[1]
            preNameResult = itemName.split("/")


            if (modName == 'rosia') {
                event.remove({ id: `rosia:heating/${itemName}` })
                event.remove({ id: `rosia:heating/tools/${itemName}` })
                event.remove({ id: `rosia:heating/armor/${itemName}` })

                event.remove({ id: `rosia:crafting/${itemName}` })
                event.remove({ id: `rosia:crafting/tools/${itemName}` })
            }

            if (modName == 'tfc') {
                event.remove({ id: `tfc:heating/iron_bars` })
                if (preNameResult[0] !== 'ore') {
                    event.remove({ id: `tfc:heating/${itemName}` })
                }
            }


            if (modName !== 'rosia') {

                let heatCapacityModifier = 0.02857
                switch (metal) {
                    case 'nickel':
                    case 'silver':
                        heatCapacityModifier = 0.02083
                        break;
                    case 'zinc':
                        heatCapacityModifier = 0.04762
                        break;
                    case 'gold':
                        heatCapacityModifier = 0.01667
                        break;
                    case 'bismuth':
                        heatCapacityModifier = 0.07143
                        break;
                }
                heatcapacity = fluidAmount * heatCapacityModifier

                let weldingHeatingLevel = undefined
                let weldingTemperature = temperature - 200;
                weldingHeatingLevel = global.getHeatingLevel(weldingTemperature)

                let heatingLevel = undefined
                heatingLevel = global.getHeatingLevel(temperature)

                if (global.highmetalrx.test(metal) && !global.doubleingotrx.test(metal)) {
                    //console.log(`${mod}:heating/metal/${metal}_${toolType}`)
                    heatingTemperature = 5000

                    if (!global.largerodtagrx.test(input) && !global.platetagrx.test(input) && !global.laddertagrx.test(input) && !global.largegeartagrx.test(input) && !global.largeplatetagrx.test(input) && !global.anvilrx.test(input)) {
                        //console.log(isTag + fluid + fluidAmount + tagPrefix + input + heatingTemperature + mod + metal + toolType)
                        if (isValid) {
                            global.addHeating(isTag, input, fluid, fluidAmount, heatingTemperature, false)
                            //event.recipes.tfc.heating(Fluid.of(fluid, fluidAmount), tagPrefix + input, heatingTemperature).id(`${mod}:heating/custom/metal/${metal}_${toolType}`)
                        } else {
                            global.addHeating(isTag, input, fluid, fluidAmount, heatingTemperature, true)
                            //event.recipes.tfc.heating(Fluid.of(fluid, fluidAmount), tagPrefix + input, heatingTemperature).id(`${mod}:heating/custom/metal/${metal}_${toolType}`).useDurability()
                        }
                    }
                }

                if (global.highorerx.test(input) && mod != 'tfc') {
                    let oreResult = input.split('/')
                    let oreName = oreResult[1]
                    //console.log(oreName)
                    event.remove({ id: `tfc_metallum:heating/ore/${oreName}` })
                    heatingTemperature = 5000
                    if(fluid == 'tfc_metallum:metal/aluminum') {
                        fluid = 'kubejs:cast_aluminum'
                        heatingTemperature = temperature
                    }

                    //console.log(input)
                    event.recipes.tfc.heating(Fluid.of(fluid, fluidAmount), input, heatingTemperature).id(`tfc_metallum:heating/custom/ore/${oreName}`)
                }

                //console.log(input)
                if (global.largerodtagrx.test(input) || global.platetagrx.test(input)) {
                    event.remove({ id: `tfc_metalwork:heating/metal/${metal}_large_rod` })
                    event.remove({ id: `tfc_metalwork:heating/metal/${metal}_plate` })
                    if (fluid == 'tfc:metal/wrought_iron' && isMetalworkPart) {
                        fluid = 'tfc:metal/cast_iron'
                    }

                    event.recipes.tfc.heating(Fluid.of(fluid, 100), `#${input}`, heatingTemperature).id(`tfc_metalwork:heating/custom/metal/${metal}_${toolType}`)

                    if (temperature <= 2015) {
                        global.addMelting(isTag, input, fluid, 100, heatingLevel)
                    }
                }

                if (global.laddertagrx.test(input)) {
                    event.remove({ id: `tfc_metalwork:heating/metal/${metal}_ladder` })
                    if (fluid == 'tfc:metal/wrought_iron' && isMetalworkPart) {
                        fluid = 'tfc:metal/cast_iron'
                    }

                    event.recipes.tfc.heating(Fluid.of(fluid, 6), `#${input}`, heatingTemperature).id(`tfc_metalwork:heating/custom/metal/${metal}_${toolType}`)

                    if (temperature <= 2015) {
                        global.addMelting(isTag, input, fluid, 6, heatingLevel)
                    }
                }

                if (global.largegeartagrx.test(input)) {
                    event.remove({ id: `tfc_metalwork:heating/metal/${metal}_large_gear` })
                    if (fluid == 'tfc:metal/wrought_iron' && isMetalworkPart) {
                        fluid = 'tfc:metal/cast_iron'
                    }
                    event.recipes.tfc.heating(Fluid.of(fluid, 400), `#${input}`, heatingTemperature).id(`tfc_metalwork:heating/custom/metal/${metal}_${toolType}`)

                    if (temperature <= 2015) {
                        global.addMelting(isTag, input, fluid, 400, heatingLevel)
                    }
                }

                if (global.anvilrx.test(input)) {
                    event.remove({ id: `tfc:heating/metal/${metal}_anvil` })
                    event.remove({ id: `tfc_metallum:heating/metal/${metal}_anvil` })
                    if (fluid == 'tfc:metal/wrought_iron' && isMetalworkPart) {
                        fluid = 'tfc:metal/cast_iron'
                    }
                    event.recipes.tfc.heating(Fluid.of(fluid, 1000), `${input}`, heatingTemperature).id(`tfc_metalwork:heating/custom/metal/${metal}_${toolType}`)

                    if (temperature <= 2015) {
                        global.addMelting(isTag, input, fluid, 1000, heatingLevel)
                    }
                }

                //console.log(metal + fluid + input)
                if (metal !== undefined && fluid !== undefined && input !== undefined && !global.doubleingotrx.test(metal) && !global.largeplatetagrx.test(input) && !global.dusttagrx.test(input) && !global.laddertagrx.test(input) && isValid) {
                    let dustCount = 1
                    dustCount = fluidAmount / 100
                    if (global.largerodtagrx.test(input) || global.platetagrx.test(input)) {
                        dustCount = 1
                    }
                    if (global.largegeartagrx.test(input)) {
                        dustCount = 4
                    }
                    if (global.anvilrx.test(input)) {
                        dustCount = 10
                    }
                    if (Number.isInteger(dustCount)) {
                        if (!global.highmetalrx.test(metal)) {
                            event.recipes.createCrushing([`${dustCount}x tfc_metalwork:metal/dust/${metal}`], tagPrefix + input)
                        }
                        event.recipes.immersiveengineeringCrusher(`${dustCount}x tfc_metalwork:metal/dust/${metal}`, tagPrefix + input)
                    }
                }

                if (global.ingotrx.test(input) && !global.doubleingotrx.test(input) && input !== undefined && !global.meltingrx.test(input) && isValid) {
                    if (metal !== undefined && mod !== undefined) {

                        if (metal !== 'copper') {
                            let mFluid = `${mod}/${metal}`
                            if (metal == 'wrought_iron') {
                                mFluid = "tfc:metal/cast_iron"
                            }

                            //console.log(temperature + metal + mFluid)

                            global.addMeltingCrushing(false, `tfc_metalwork:metal/block/${metal}_slab`, mFluid, 200, metal, temperature)
                            global.addMeltingCrushing(false, `tfc_metalwork:metal/cut/${metal}_slab`, mFluid, 200, metal, temperature)

                            global.addMeltingCrushing(false, `tfc_metalwork:metal/block/${metal}_stairs`, mFluid, 300, metal, temperature)
                            global.addMeltingCrushing(false, `tfc_metalwork:metal/cut/${metal}_stairs`, mFluid, 300, metal, temperature)
                        }

                        if (weldingTemperature <= 2015) {

                            global.addCompacting3ItemEItem(`${mod}/ingot/${metal}`, `${mod}/ingot/${metal}`, 'tfc:powder/flux', `${mod}/double_ingot/${metal}`, weldingHeatingLevel)
                            global.addCompacting3ItemEItem(`${mod}/sheet/${metal}`, `${mod}/sheet/${metal}`, 'tfc:powder/flux', `${mod}/double_sheet/${metal}`, weldingHeatingLevel)
                            if (global.toolmetalrx.test(metal) && mod !== 'firmalife:metal') {
                                global.addCompacting3ItemEItem(`${mod}/knife_blade/${metal}`, `${mod}/knife_blade/${metal}`, 'tfc:powder/flux', `${mod}/shears/${metal}`, weldingHeatingLevel)
                                global.addCompacting3ItemEItem(`${mod}/unfinished_helmet/${metal}`, `${mod}/sheet/${metal}`, 'tfc:powder/flux', `${mod}/helmet/${metal}`, weldingHeatingLevel)
                                global.addCompacting3ItemEItem(`${mod}/unfinished_greaves/${metal}`, `${mod}/sheet/${metal}`, 'tfc:powder/flux', `${mod}/greaves/${metal}`, weldingHeatingLevel)
                                global.addCompacting3ItemEItem(`${mod}/unfinished_chestplate/${metal}`, `${mod}/sheet/${metal}`, 'tfc:powder/flux', `${mod}/chestplate/${metal}`, weldingHeatingLevel)
                                global.addCompacting3ItemEItem(`${mod}/unfinished_boots/${metal}`, `${mod}/sheet/${metal}`, 'tfc:powder/flux', `${mod}/boots/${metal}`, weldingHeatingLevel)
                            }
                        }
                    }
                }

                if (temperature <= 2015) {

                    //console.log(fluid)
                    if (fluid !== undefined && input !== undefined && !global.largerodtagrx.test(input) && !global.largeplatetagrx.test(input) && !global.platetagrx.test(input) && !global.laddertagrx.test(input) && !global.largegeartagrx.test(input) && !global.meltingrx.test(input) && isValid && !global.anvilrx.test(input)) {
                        let processingSpeed = Math.ceil(heatcapacity * 100)
                        if (fluid == 'tfc:metal/wrought_iron' && isMetalworkPart) {
                            fluid = 'tfc:metal/cast_iron'

                            if (global.dusttagrx.test(input)) {
                                fluid = 'tfc:metal/wrought_iron'
                            }

                            event.remove({ id: `tfc_metalwork:heating/metal/wrought_iron_block` })
                            event.remove({ id: `tfc_metalwork:heating/metal/${metal}_${toolType}` })
                            event.recipes.tfc.heating(Fluid.of(fluid, fluidAmount), `${tagPrefix}${input}`, heatingTemperature)
                        }
                        global.addMelting(isTag, input, fluid, fluidAmount, heatingLevel, processingSpeed)
                    }
                }
            }

        }
    });

})