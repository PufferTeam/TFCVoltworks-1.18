// priority: 210000

onEvent('recipes', event => {

    global.addLoom = function addLoom(input_item, input_item_count, result_item, result_item_count, steps, texture) {
        event.custom({ "type": "tfc:loom", "ingredient": { "item": input_item }, "input_count": input_item_count, "result": { "item": result_item, "count": result_item_count }, "steps_required": steps, "in_progress_texture": texture })
    }

    global.addQuern = function addQuern(input_item, result_item, result_item_count) {
        event.custom({ "type": "tfc:quern", "ingredient": { "item": input_item }, "result": { "item": result_item, "count": result_item_count } })
    }

    global.addPigmentExtracting = function addPigmentExtracting(input_item, pigment, pigment_amount) {
        event.custom({ "type": "mekanism:pigment_extracting", "input": { "ingredient": { "item": input_item } }, "output": { "pigment": pigment, "amount": pigment_amount } })
    }

    global.addPainting = function addPainting(input_item, pigment, pigment_amount, output_item) {
        event.custom({ "type": "mekanism:painting", "itemInput": { "ingredient": { "type": "forge:difference", "base": { "tag": input_item }, "subtracted": { "item": output_item } } }, "chemicalInput": { "amount": pigment_amount, "pigment": pigment }, "output": { "item": output_item } })
    }

    /*
    global.addChopping = function addChopping(tag_input, output_item, count) {
        event.custom({
            "type": "choppingblock:chopping",
            "ingredient": {
                "tag": tag_input
            },
            "result": {
                "item": output_item,
                "count": count
            }
        })
    }
    */

    global.addMixingItemFluidEItem = function addMixingItemFluidEItem(input, fluid, fluidCount, output, outputCount, heatingLevel) {
        if(heatingLevel !== null) {
            event.custom({
                "type": "create:mixing",
                "ingredients": [
                    {
                        "type": "tfc:not_rotten",
                        "ingredient": {
                            "item": input
                        }
                    },
                    {
                        "fluid": fluid,
                        "amount": fluidCount
                    }
                ],
                "results": [
                    {
                        "item": output,
                        "count": outputCount
                    }
                ],
                "heatRequirement": heatingLevel
            })
        } else {
            event.custom({
                "type": "create:mixing",
                "ingredients": [
                    {
                        "type": "tfc:not_rotten",
                        "ingredient": {
                            "item": input
                        }
                    },
                    {
                        "fluid": fluid,
                        "amount": fluidCount
                    }
                ],
                "results": [
                    {
                        "item": output,
                        "count": outputCount
                    }
                ]
            })
        }

    }

    global.addMixingTagTagFluidTagEFluid = function addMixingTagTagFluidTagEFluid(input1, input2, fluid, fluidCount, output, outputCount, heatingLevel) {
        event.custom({
            "type": "create:mixing",
            "ingredients": [
                {
                    "tag": input1
                },
                {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                        "tag": input2
                    }
                },
                {
                    "fluidTag": fluid,
                    "amount": fluidCount
                }
            ],
            "results": [
                {
                    "fluid": output,
                    "amount": outputCount
                }
            ],
            "heatRequirement": heatingLevel
        })
    }

    global.addMixingItemTagItemFluidEItem = function addMixingItemTagItemFluidEItem(input1, input2, input3, fluid, fluidCount, output, outputCount, heatingLevel) {
        event.custom({
            "type": "create:mixing",
            "ingredients": [
                {
                    "item": input1
                },
                {
                    "tag": input2
                },
                {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                        "item": input3
                    }
                },
                {
                    "fluid": fluid,
                    "amount": fluidCount
                }
            ],
            "results": [
                {
                    "item": output,
                    "count": outputCount
                }
            ],
            "heatRequirement": heatingLevel
        })
    }

    global.addMilling = function addMilling(isTag, input, output, outputCount, time, modifiers) {
        if (global.rottablefoodsrx.test(input)) {
            event.custom({
                "type": "create:milling",
                "ingredients": [
                    {
                        "type": "tfc:not_rotten",
                        "ingredient": {
                            "item": input
                        }
                    }
                ],
                "results": [
                    {
                        "item": output,
                        "count": outputCount
                    }
                ],
                "processingTime": time
            })
        } else if (isTag) {
            event.custom({
                "type": "create:milling",
                "ingredients": [
                    {
                        "tag": input
                    }
                ],
                "results": [
                    {
                        "item": output,
                        "count": outputCount
                    }
                ],
                "processingTime": time
            })
        } else {
            event.custom({
                "type": "create:milling",
                "ingredients": [
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "item": output,
                        "count": outputCount
                    }
                ],
                "processingTime": time
            })
        }

    }
    global.addBlasting = function addBlasting(input, output) {
        event.custom({
            "type": "immersiveengineering:blast_furnace",
            "result": {
                "item": output
            },
            "input": {
                "item": input
            },
            "time": 8000
        })
    }

    global.addFireCasting = function addFireCasting(input, output) {
        event.custom({
            "type": "tfc:casting",
            "mold": {
                "item": "tfc:ceramic/fire_ingot_mold"
            },
            "fluid": {
                "ingredient": input,
                "amount": 100
            },
            "result": {
                "item": output
            },
            "break_chance": 0.01
        })
    }


    global.addCompacting3ItemEItem = function addCompacting3ItemEItem(input, second_input, third_input, output, heatRequirement) {
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": second_input
                },
                {
                    "item": third_input
                }
            ],
            "results": [
                {
                    "item": output
                }
            ],
            "heatRequirement": heatRequirement
        })
    }

    global.addCutting = function addCutting(input, output, count) {
        if (count == undefined || count == null) {
            count == 1;
        }

        event.custom({
            "type": "create:cutting",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output,
                    "count": count
                }
            ],
        })
    }

    global.addCutting2Output = function addCutting2Output(input, output) {
        event.custom({
            "type": "create:cutting",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output
                },
                {
                    "item": output
                }
            ],
        })
    }

    global.addTimeCutting = function addTimeCutting(input, output, count, time) {
        event.custom({
            "type": "create:cutting",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output,
                    "count": count
                }
            ],
            "processingTime": time
        })
    }

    global.addMelting = function addMelting(isTag, input, fluid, fluid_amount, heat, time) {
        if (time == undefined || time == null) {
            time == 50;
        }
        if (isTag) {
            event.custom({
                "type": "createbigcannons:melting",
                "ingredients": [
                    {
                        "tag": input
                    }
                ],
                "results": [
                    {
                        "fluid": fluid,
                        "amount": fluid_amount
                    }
                ],
                "processingTime": time,
                "heatRequirement": heat
            })
        } else {
            event.custom({
                "type": "createbigcannons:melting",
                "ingredients": [
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "fluid": fluid,
                        "amount": fluid_amount
                    }
                ],
                "processingTime": time,
                "heatRequirement": heat
            })
        }
    }

    global.addMeltingHeatingFluid = function addMeltingHeatingFluid(input, fluid, fluidAmount, temperature) {
        let heatcapacity = fluidAmount * 0.02857
        let processingSpeed = Math.ceil(heatcapacity * 100)
        let isTag = false;

        let heatingLevel = global.getHeatingLevel(temperature)

        event.recipes.tfc.heating(Fluid.of(fluid, fluidAmount), input, temperature)
        global.addMelting(isTag, input, fluid, fluidAmount, heatingLevel, processingSpeed)

    }

    global.addRolling = function addRolling(input, output, outputCount) {
        if (outputCount == undefined || outputCount == null) {
            outputCount == 1;
        }

        event.custom({
            "type": "createaddition:rolling",
            "input": {
                "item": input
            },
            "result": {
                "item": output,
                "count": outputCount
            }
        })
    }

    global.addCompactingFluid = function addCompactingFluid(fluid_input, fluid_amount, item_input, output) {
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "fluid": fluid_input,
                    "nbt": {},
                    "amount": fluid_amount
                },
                {
                    "item": item_input
                }
            ],
            "results": [
                {
                    "item": output
                }
            ]
        })
    }

    global.addCompactingFluid2Output = function addCompactingFluid2Output(fluid_input, fluid_amount, item_input, output, second_output) {
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "fluid": fluid_input,
                    "nbt": {},
                    "amount": fluid_amount
                },
                {
                    "item": item_input
                }
            ],
            "results": [
                {
                    "item": second_output
                },
                {
                    "item": output
                }
            ]
        })
    }

    global.addGravity = function addGravity(type, block) {
        event.custom({
            "type": type,
            "ingredient": block,
            "result": block
        })
    }

    global.add1x2Shaped = function add1x2Shaped(input_item, output_item, count) {
        event.shaped(`${count}x ${output_item}`, [
            'S',
            'S'
        ], {
            S: input_item
        })
    }

    global.add2x2Shaped = function add2x2Shaped(input_item, output_item, count) {
        if (count == undefined || count == null) {
            count == 1;
        }

        event.shaped(`${count}x ${output_item}`, [
            'SS',
            'SS'
        ], {
            S: input_item
        })
    }

    global.addDamageInputExtraShapeless = function addDamageInputExtraShapeless(input_number, input_item, extra_item, output_item, tool, count) {
        if (count == undefined || count == null) {
            count == 1;
        }

        if (input_number == undefined || input_number == null) {
            input_number == 1;
        }

        switch (input_number) {
            case 1:
                event.custom({
                    "type": "tfc:damage_inputs_shapeless_crafting",
                    "recipe": {
                        "type": "minecraft:crafting_shapeless",
                        "ingredients": [
                            {
                                "item": input_item
                            },
                            {
                                "item": extra_item
                            },
                            {
                                "tag": tool
                            }
                        ],
                        "result": {
                            "item": output_item,
                            "count": count
                        }
                    }
                })
                break;

            case 2:
                event.custom({
                    "type": "tfc:damage_inputs_shapeless_crafting",
                    "recipe": {
                        "type": "minecraft:crafting_shapeless",
                        "ingredients": [
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "item": extra_item
                            },
                            {
                                "tag": tool
                            }
                        ],
                        "result": {
                            "item": output_item,
                            "count": count
                        }
                    }
                })
                break;
        }
    }
    global.addDamageInputShapeless = function addDamageInputShapeless(input_number, input_item, output_item, tool, count) {
        if (count == undefined || count == null) {
            count == 1;
        }

        if (input_number == undefined || input_number == null) {
            input_number == 1;
        }

        switch (input_number) {
            case 1:
                event.custom({
                    "type": "tfc:damage_inputs_shapeless_crafting",
                    "recipe": {
                        "type": "minecraft:crafting_shapeless",
                        "ingredients": [
                            {
                                "item": input_item
                            },
                            {
                                "tag": tool
                            }
                        ],
                        "result": {
                            "item": output_item,
                            "count": count
                        }
                    }
                })
                break;

            case 2:
                event.custom({
                    "type": "tfc:damage_inputs_shapeless_crafting",
                    "recipe": {
                        "type": "minecraft:crafting_shapeless",
                        "ingredients": [
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "tag": tool
                            }
                        ],
                        "result": {
                            "item": output_item,
                            "count": count
                        }
                    }
                })
                break;

            case 3:
                event.custom({
                    "type": "tfc:damage_inputs_shapeless_crafting",
                    "recipe": {
                        "type": "minecraft:crafting_shapeless",
                        "ingredients": [
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "tag": tool
                            }
                        ],
                        "result": {
                            "item": output_item,
                            "count": count
                        }
                    }
                })
                break;


            case 6:
                event.custom({
                    "type": "tfc:damage_inputs_shapeless_crafting",
                    "recipe": {
                        "type": "minecraft:crafting_shapeless",
                        "ingredients": [
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "item": input_item
                            },
                            {
                                "tag": tool
                            }
                        ],
                        "result": {
                            "item": output_item,
                            "count": count
                        }
                    }
                })
                break;
        }


    }

});
