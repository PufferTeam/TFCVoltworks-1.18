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

    global.addDrying = function addDrying(input, output) {
        event.custom({
            "type": "firmalife:drying",
            "ingredient": {
                "item": input
            },
            "result": {
                "item": output
            }
        })
    }

    global.addFirmaMixingItemFluidEItem = function addFirmaMixingItemFluidEItem(number, input, fluid, fluidAmount, output, outputCount) {
        switch (number) {
            case 1:
                event.custom({
                    "type": "firmalife:mixing_bowl",
                    "ingredients": [
                        {
                            "type": "tfc:not_rotten",
                            "ingredient": {
                                "item": input
                            }
                        }
                    ],
                    "fluid_ingredient": {
                        "ingredient": fluid,
                        "amount": fluidAmount
                    },
                    "output_item": {
                        "item": output,
                        "count": outputCount
                    }
                })
                break;

            case 2:
                event.custom({
                    "type": "firmalife:mixing_bowl",
                    "ingredients": [
                        {
                            "type": "tfc:not_rotten",
                            "ingredient": {
                                "item": input
                            }
                        },
                        {
                            "type": "tfc:not_rotten",
                            "ingredient": {
                                "item": input
                            }
                        }
                    ],
                    "fluid_ingredient": {
                        "ingredient": fluid,
                        "amount": fluidAmount
                    },
                    "output_item": {
                        "item": output,
                        "count": outputCount
                    }
                })
                break;
        }

    }

    global.addFirmaMixingItemTagFluidEItem = function addFirmaMixingItemTagFluidEItem(input, input2, fluid, fluidAmount, output, outputCount) {
        event.custom({
            "type": "firmalife:mixing_bowl",
            "ingredients": [
                {
                    "tag": input
                },
                {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                        "item": input2
                    }
                }
            ],
            "fluid_ingredient": {
                "ingredient": fluid,
                "amount": fluidAmount
            },
            "output_item": {
                "item": output,
                "count": outputCount
            }
        })
    }

    global.addMixingItemFluidEItem = function addMixingItemFluidEItem(input, fluid, fluidCount, output, outputCount, heatingLevel) {
        if (heatingLevel !== null) {
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

    global.addFillingItemFluidEItem = function addFillingItemFluidEItem(input, fluid, fluidCount, output, outputCount, heated) {
        event.custom({
            "type": "create:filling",
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

    global.addMixingItemItemFluidEItem = function addMixingItemItemFluidEItem(input1, input2, fluid, fluidCount, output, outputCount, heatingLevel) {
        event.custom({
            "type": "create:mixing",
            "ingredients": [
                {
                    "item": input1
                },
                {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                        "item": input2
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

    global.addMixingTagItemFluidEItem = function addMixingTagItemFluidEItem(input1, input2, fluid, fluidCount, output, outputCount, heatingLevel) {
        event.custom({
            "type": "create:mixing",
            "ingredients": [
                {
                    "tag": input1
                },
                {
                    "type": "tfc:not_rotten",
                    "ingredient": {
                        "item": input2
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

    global.addQuerning = function addQuerning(input, output, outputCount) {
        if (global.rottablefoodsrx.test(input)) {
            if (global.rottablefoodsrx.test(output)) {
                event.custom({
                    "type": "tfc:quern",
                    "ingredient": {
                        "type": "tfc:not_rotten",
                        "ingredient": {
                            "item": input
                        }
                    },
                    "result": {
                        "stack": {
                            "item": output,
                            "count": outputCount
                        },
                        "modifiers": [
                            "tfc:copy_food"
                        ]
                    }
                })
            } else {
                event.custom({
                    "type": "tfc:quern",
                    "ingredient": {
                        "type": "tfc:not_rotten",
                        "ingredient": {
                            "item": input
                        }
                    },
                    "result": {
                        "item": output,
                        "count": outputCount
                    }
                })
            }
        } else {
            event.custom({
                "type": "tfc:quern",
                "ingredient": {
                    "item": input
                },
                "result": {
                    "item": output,
                    "count": outputCount
                }
            })
        }
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

    global.addCompactingTagEItem = function addCompactingTagEItem(input, output, outputCount) {
        event.custom({
            "type": "create:compacting",
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
            ]
        })
    }

    global.addItemApplication = function addItemApplication(isTag, block, input, result) {
        if (isTag) {
            event.custom({
                "type": "create:item_application",
                "ingredients": [
                    {
                        "tag": block
                    },
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "item": result
                    }
                ]
            })
        } else {
            event.custom({
                "type": "create:item_application",
                "ingredients": [
                    {
                        "item": block
                    },
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "item": result
                    }
                ]
            })
        }
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

    global.addTimeCutting = function addTimeCutting(isTag, input, output, count, time) {
        if (isTag) {
            event.custom({
                "type": "create:cutting",
                "ingredients": [
                    {
                        "tag": input
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
        } else {
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

    global.addHeating = function addHeating(isTag, input, fluid, fluidAmount, temperature, useDurability) {
        if (isTag) {
            if (useDurability) {
                event.custom({
                    "type": "tfc:heating",
                    "ingredient": {
                        "tag": input
                    },
                    "result_fluid": {
                        "fluid": fluid,
                        "amount": fluidAmount
                    },
                    "temperature": temperature,
                    "use_durability": true
                })
            } else {
                event.custom({
                    "type": "tfc:heating",
                    "ingredient": {
                        "tag": input
                    },
                    "result_fluid": {
                        "fluid": fluid,
                        "amount": fluidAmount
                    },
                    "temperature": temperature
                })
            }

        } else {
            if (useDurability) {
                event.custom({
                    "type": "tfc:heating",
                    "ingredient": {
                        "item": input
                    },
                    "result_fluid": {
                        "fluid": fluid,
                        "amount": fluidAmount
                    },
                    "temperature": temperature,
                    "use_durability": true
                })
            } else {
                event.custom({
                    "type": "tfc:heating",
                    "ingredient": {
                        "item": input
                    },
                    "result_fluid": {
                        "fluid": fluid,
                        "amount": fluidAmount
                    },
                    "temperature": temperature
                })
            }

        }

    }

    global.addMoldBottling = function addMoldBottling(mold, fluid, output) {
        event.custom({
            "type": "immersiveengineering:bottling_machine",
            "results": [
                {
                    "item": output
                },
                {
                    "item": mold
                }
            ],
            "input": {
                "item": mold
            },
            "fluid": {
                "tag": fluid,
                "amount": 250
            }
        })
    }

    global.addMoldBottlingInputs = function addMoldBottlingInputs(mold, extraInput, extraInputCount, fluid, output) {
        event.custom({
            "type": "immersiveengineering:bottling_machine",
            "results": [
                {
                    "item": output
                },
                {
                    "item": mold
                }
            ],
            "inputs": [
                {
                    "item": mold
                },
                {
                    "count": extraInputCount,
                    "base_ingredient": {
                        "item": extraInput
                    }
                }
            ],
            "fluid": {
                "tag": fluid,
                "amount": 250
            }
        })
    }

    global.addThermoPlantFluidItemEFluid = function addThermoPlantFluidItemEFluid(item_input, fluid_input, fluid_input_amount, fluid_output, fluid_output_amount, pressure, speed) {
        if (item_input == null) {
            event.custom({
                "type": "pneumaticcraft:thermo_plant",
                "fluid_input": {
                    "type": "pneumaticcraft:fluid",
                    "tag": fluid_input,
                    "amount": fluid_input_amount
                },
                "fluid_output": {
                    "fluid": fluid_output,
                    "amount": fluid_output_amount
                },
                "pressure": pressure,
                "speed": speed
            })
        } else {
            event.custom({
                "type": "pneumaticcraft:thermo_plant",
                "item_input": {
                    "item": item_input
                },
                "fluid_input": {
                    "type": "pneumaticcraft:fluid",
                    "tag": fluid_input,
                    "amount": fluid_input_amount
                },
                "fluid_output": {
                    "fluid": fluid_output,
                    "amount": fluid_output_amount
                },
                "pressure": pressure,
                "speed": speed
            })
        }
    }

    global.addFluidMixer = function addFluidMixer(input, input_amount, input2, input2_amount, output, output_amount, pressure, time) {
        event.custom({
            "type": "pneumaticcraft:fluid_mixer",
            "input1": {
                "type": "pneumaticcraft:fluid",
                "tag": input,
                "amount": input_amount
            },
            "input2": {
                "type": "pneumaticcraft:fluid",
                "tag": input2,
                "amount": input2_amount
            },
            "fluid_output": {
                "fluid": output,
                "amount": output_amount
            },
            "pressure": pressure,
            "time": time
        })
    }

    global.addStill = function addStill(input, input_amount, result, result_amount, result2, result2_amount, energy) {
        event.custom({
            "type": "thermal:refinery",
            "ingredient": {
                "fluid": input,
                "amount": input_amount
            },
            "result": [
                {
                    "fluid": result,
                    "amount": result_amount
                },
                {
                    "fluid": result2,
                    "amount": result2_amount
                }
            ],
            "energy": energy
        })
    }

    global.addStillOne = function addStillOne(input, input_amount, result, result_amount, energy) {
        event.custom({
            "type": "thermal:refinery",
            "ingredient": {
                "fluid": input,
                "amount": input_amount
            },
            "result": [
                {
                    "fluid": result,
                    "amount": result_amount
                }
            ],
            "energy": energy
        })
    }

    global.addExtraShapeless = function addExtraShapeless(input, result1, result1count, result2, tool) {
        event.custom({
            "type": "tfc:extra_products_shapeless_crafting",
            "extra_products": [
                {
                    "item": result2
                }
            ],
            "recipe": {
                "type": "tfc:damage_inputs_shapeless_crafting",
                "recipe": {
                    "type": "minecraft:crafting_shapeless",
                    "ingredients": [
                        {
                            "item": input
                        },
                        {
                            "tag": tool
                        }
                    ],
                    "result": {
                        "item": result1,
                        "count": result1count
                    }
                }
            }
        })
    }

    global.addRotary = function addRotary(fluidInput, fluidOutput, gas) {
        event.custom({
            "type": "mekanism:rotary",
            "fluidInput": {
                "amount": 1,
                "tag": fluidInput
            },
            "gasOutput": {
                "gas": gas,
                "amount": 1
            },
            "gasInput": {
                "amount": 1,
                "gas": gas
            },
            "fluidOutput": {
                "fluid": fluidOutput,
                "amount": 1
            }
        })
    }

    global.addSqueezer = function addSqueezer(fluid, fluid_amount, input, energy) {
        event.custom({
            "type": "immersiveengineering:squeezer",
            "fluid": {
                "fluid": fluid,
                "amount": fluid_amount
            },
            "input": {
                "tag": input
            },
            "energy": energy
        })
    }

    global.addFermenter = function addFermenter(fluid, fluid_amount, input, energy) {
        event.custom({
            "type": "immersiveengineering:fermenter",
            "fluid": {
                "fluid": fluid,
                "amount": fluid_amount
            },
            "input": {
                "tag": input,
            },
        "energy": energy
        })
    }

global.addRefinery = function addRefinery(input0, input0_amount, input1, input1_amount, catalyst, result, result_amount, energy) {
    event.custom({
        "type": "immersiveengineering:refinery",
        "result": {
            "fluid": result,
            "amount": result_amount
        },
        "catalyst": {
            "tag": catalyst
        },
        "input0": {
            "tag": input0,
            "amount": input0_amount
        },
        "input1": {
            "tag": input1,
            "amount": input1_amount
        },
        "energy": energy
    })
}

global.addPressureRefinery = function addPressureRefinery(input0, input0_amount, input1, input1_amount, result, result_amount, energy, time) {
    event.custom({
        "type": "immersivepetroleum:hydrotreater",
        "time": time,
        "energy": energy,
        "result": {
            "fluid": result,
            "amount": result_amount
        },
        "input": {
            "tag": input0,
            "amount": input0_amount
        },
        "secondary_input": {
            "tag": input1,
            "amount": input1_amount
        }
    })
}

global.addQuerningAndMilling = function addQuerningAndMilling(isTag, input, output, outputCount) {
    let tagPrefix = ''
    if (isTag) {
        tagPrefix = '#'
    }

    if (isTag) {
        event.recipes.tfc.quern(`${outputCount}x ${output}`, tagPrefix + input)
    } else {
        global.addQuerning(input, output, outputCount)
    }
    global.addMilling(isTag, input, output, outputCount, 50, true)
}

global.addMeltingHeatingFluid = function addMeltingHeatingFluid(isTag, input, fluid, fluidAmount, metal, temperature) {
    let heatcapacity = fluidAmount * 0.02857
    let processingSpeed = Math.ceil(heatcapacity * 100)
    let tagPrefix = ''
    if (isTag) {
        tagPrefix = '#'
    }

    let heatingLevel = global.getHeatingLevel(temperature)
    let heatingTemperature = temperature
    if (global.highmetalrx.test(metal) || global.gemrx.test(input)) {
        heatingTemperature = 5000
    }

    event.recipes.tfc.heating(Fluid.of(fluid, fluidAmount), tagPrefix + input, heatingTemperature)

    if (temperature <= 2015) {
        global.addMelting(isTag, input, fluid, fluidAmount, heatingLevel, processingSpeed)
    }
}

global.addMeltingCrushing = function addMeltingCrushing(isTag, input, fluid, fluidAmount, metal, temperature) {
    let dustCount = fluidAmount / 100
    let tagPrefix = ''
    if (isTag) {
        tagPrefix = '#'
    }
    global.addMeltingHeatingFluid(isTag, input, fluid, fluidAmount, metal, temperature)

    if (Number.isInteger(dustCount)) {
        if (!global.highmetalrx.test(metal)) {
            event.recipes.createCrushing([`${dustCount}x tfc_metalwork:metal/dust/${metal}`], tagPrefix + input)
        }
        event.recipes.immersiveengineeringCrusher(`${dustCount}x tfc_metalwork:metal/dust/${metal}`, tagPrefix + input)
    }

}

global.addMechanicalExtruder = function addMechanicalExtruder(inputFluid, inputFluid2, catalyst, output) {
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": inputFluid,
                "amount": 1000
            },
            {
                "fluid": inputFluid2,
                "amount": 1000
            }
        ],
        "catalyst": {
            "item": catalyst
        },
        "result": {
            "item": output
        }
    })
}


global.addMechanicalExtruderNoIngredient = function addMechanicalExtruderNoIngredient(catalyst, output) {
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "fluid": 'minecraft:water',
                "amount": 1000
            },
            {
                "fluid": 'minecraft:water',
                "amount": 1000
            }
        ],
        "catalyst": {
            "item": catalyst
        },
        "result": {
            "item": output
        }
    })
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

global.addExplosionCrafting = function addExplosionCrafting(input, output, loss_rate) {
    event.custom({
        "type": "pneumaticcraft:explosion_crafting",
        "input": {
            "item": input
        },
        "results": [
            {
                "item": output
            }
        ],
        "loss_rate": loss_rate
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

global.addSawmill = function addSawmill(input, strippedInput, output, outputCount, energy) {
    event.custom({
        "type": "immersiveengineering:sawmill",
        "secondaries": [
            {
                "output": {
                    "item": "immersiveengineering:sawdust"
                },
                "stripping": true
            },
            {
                "output": {
                    "item": "immersiveengineering:sawdust"
                },
                "stripping": false
            }
        ],
        "result": {
            "item": output,
            "count": outputCount
        },
        "energy": energy,
        "input": [
            {
                "item": input
            }
        ],
        "stripped": {
            "item": strippedInput
        }
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

        case 10:
            event.custom({
                "type": "tfc:damage_inputs_shapeless_crafting",
                "recipe": {
                    "type": "minecraft:crafting_shapeless",
                    "ingredients": [
                        {
                            "tag": input_item
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

global.addCuttingDamageInputShapeless = function addCuttingDamageInputShapeless(input_number, input_item, output_item, tool, count) {
    global.addDamageInputShapeless(input_number, input_item, output_item, tool, count)

    if (input_number == count) {
        global.addCutting(input_item, output_item, 1)
    }

    if (input_number == 2 && count == 4) {
        global.addCutting2Output(input_item, output_item)
    }
}

});
