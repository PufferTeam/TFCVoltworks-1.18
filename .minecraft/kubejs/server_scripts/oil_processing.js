onEvent('recipes', event => {

    function oilProcessing(sulfur, oil, cracked) {
        let sulfurResult = sulfur.split(':')
        let sulfurTag = sulfurResult[1]

        let oilResult = oil.split(':')
        let oilTag = oilResult[1]

        global.addRefinery('tfc:fresh_water', 10, `forge:${sulfurTag}`, 20, 'forge:dusts/redstone', oil, 20, 240)

        if (oilResult[0] !== 'immersivepetroleum') {
            global.addPressureRefinery(`forge:${oilTag}`, 24, 'forge:steam', 5, cracked, 24, 2560, 5)
        }
    }

    oilProcessing('kubejs:natural_gas_sulfur', 'kubejs:natural_gas', 'kubejs:natural_gas_cracked')
    oilProcessing('kubejs:naphtha_sulfur', 'immersivepetroleum:naphtha', 'immersivepetroleum:naphtha_cracked')
    oilProcessing('kubejs:lubricant_sulfur', 'immersivepetroleum:lubricant', 'immersivepetroleum:lubricant_cracked')
    oilProcessing('kubejs:light_oil_sulfur', 'kubejs:light_oil', 'kubejs:light_oil_cracked')
    oilProcessing('kubejs:heavy_oil_sulfur', 'kubejs:heavy_oil', 'kubejs:heavy_oil_cracked')

    global.addStillOne('immersivepetroleum:lubricant', 100, 'immersivepetroleum:kerosene', 40, 6000)
    global.addStill('kubejs:ethane', 100, 'mekanism:ethene', 70, 'kubejs:methanol', 10, 6000)
    global.addStill('mekanism:ethene', 100, 'kubejs:propylene', 80, 'kubejs:butane', 20, 6000)
    global.addStill('kubejs:propylene', 100, 'mekanism:ethene', 80, 'kubejs:glycerol', 20, 6000)
    global.addStillOne('kubejs:butane', 100, 'mekanism:ethene', 30, 6000)
    global.addStill('kubejs:propane', 100, 'kubejs:propylene', 60, 'kubejs:methane', 10, 6000)
    global.addStillOne('immersivepetroleum:gasoline', 100, 'pneumaticcraft:lpg', 60, 6000)
    global.addStillOne('kubejs:butadiene', 100, 'kubejs:toluene', 100, 6000)
    global.addStillOne('kubejs:toluene', 100, 'kubejs:butadiene', 100, 6000)

    global.addThermoPlantFluidItemEFluid(null, 'forge:methane', 1000, 'kubejs:acetylene', 150, 2, 10)
    global.addThermoPlantFluidItemEFluid(null, 'forge:methanol', 1000, 'kubejs:acetylene', 750, 2, 10)

    //Crude Oil
    event.custom({
        "type": "immersivepetroleum:distillation",
        "byproducts": [
            {
                "item": "immersivepetroleum:bitumen",
                "chance": "0.07"
            }
        ],
        "results": [
            {
                "fluid": "kubejs:lubricant_sulfur",
                "amount": 10
            },
            {
                "fluid": "kubejs:light_oil_sulfur",
                "amount": 14
            },
            {
                "fluid": "kubejs:heavy_oil_sulfur",
                "amount": 18
            },
            {
                "fluid": "kubejs:natural_gas_sulfur",
                "amount": 25
            },
            {
                "fluid": "kubejs:naphtha_sulfur",
                "amount": 13
            }
        ],
        "input": {
            "tag": "forge:crude_oil",
            "amount": 80
        },
        "time": 1,
        "energy": 1024
    })

    //Natural Gas
    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:helium",
                "amount": 2
            },
            {
                "fluid": "kubejs:methane",
                "amount": 10
            }
        ],
        "input": {
            "tag": "forge:natural_gas",
            "amount": 12
        },
        "time": 1,
        "energy": 1024
    })

    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:butane",
                "amount": 11
            },
            {
                "fluid": "kubejs:propane",
                "amount": 8
            },
            {
                "fluid": "kubejs:ethane",
                "amount": 5
            },
            {
                "fluid": "kubejs:helium",
                "amount": 10
            },
            {
                "fluid": "kubejs:methane",
                "amount": 16
            }
        ],
        "input": {
            "tag": "forge:natural_gas_cracked",
            "amount": 50
        },
        "time": 1,
        "energy": 1024
    })

    //Naphtha
    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:methane",
                "amount": 2
            }
        ],
        "input": {
            "tag": "forge:naphtha",
            "amount": 12
        },
        "time": 1,
        "energy": 1024
    })

    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:propane",
                "amount": 5
            },
            {
                "fluid": "kubejs:butane",
                "amount": 4
            },
            {
                "fluid": "kubejs:benzene",
                "amount": 8
            },
            {
                "fluid": "kubejs:propylene",
                "amount": 8
            },
            {
                "fluid": "mekanism:ethene",
                "amount": 24
            }
        ],
        "input": {
            "tag": "forge:naphtha_cracked",
            "amount": 50
        },
        "time": 1,
        "energy": 1024
    })

    //Light Oil
    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:methane",
                "amount": 4
            }
        ],
        "input": {
            "tag": "forge:light_oil",
            "amount": 12
        },
        "time": 1,
        "energy": 1024
    })

    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:ethane",
                "amount": 6
            },
            {
                "fluid": "kubejs:butane",
                "amount": 4
            },
            {
                "fluid": "kubejs:toluene",
                "amount": 5
            },
            {
                "fluid": "mekanism:ethene",
                "amount": 13
            },
            {
                "fluid": "kubejs:butadiene",
                "amount": 22
            }
        ],
        "input": {
            "tag": "forge:light_oil_cracked",
            "amount": 50
        },
        "time": 1,
        "energy": 1024
    })

    //Heavy Oil
    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:methane",
                "amount": 8
            }
        ],
        "input": {
            "tag": "forge:heavy_oil",
            "amount": 12
        },
        "time": 1,
        "energy": 1024
    })

    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:ethane",
                "amount": 6
            },
            {
                "fluid": "kubejs:butane",
                "amount": 4
            },
            {
                "fluid": "kubejs:toluene",
                "amount": 13
            },
            {
                "fluid": "mekanism:ethene",
                "amount": 10
            },
            {
                "fluid": "kubejs:butadiene",
                "amount": 17
            }
        ],
        "input": {
            "tag": "forge:heavy_oil_cracked",
            "amount": 50
        },
        "time": 1,
        "energy": 1024
    })

    //Kerosene
    event.custom({
        "type": "immersivepetroleum:distillation",
        "results": [
            {
                "fluid": "kubejs:light_oil",
                "amount": 6
            },
            {
                "fluid": "immersivepetroleum:gasoline_additives",
                "amount": 3
            },
            {
                "fluid": "kubejs:naphtha_sulfur",
                "amount": 3
            }
        ],
        "input": {
            "tag": "forge:kerosene",
            "amount": 12
        },
        "time": 1,
        "energy": 1024
    })

    //Biomass
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "tag": "forge:biomass",
            "amount": 10
        },
        "temperature": {
            "min_temp": 373
        },
        "results": [
            {
                "fluid": "immersiveengineering:plantoil",
                "amount": 4
            },
            {
                "fluid": "kubejs:glycerol",
                "amount": 2
            },
            {
                "fluid": "kubejs:methane",
                "amount": 2
            },
            {
                "fluid": "kubejs:biogas",
                "amount": 4
            }
        ]
    })

    //Fermented Biomass
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "tag": "forge:fermented_biomass",
            "amount": 10
        },
        "temperature": {
            "min_temp": 373
        },
        "results": [
            {
                "fluid": "immersiveengineering:ethanol",
                "amount": 4
            },
            {
                "fluid": "kubejs:ammonia",
                "amount": 2
            },
            {
                "fluid": "kubejs:methanol",
                "amount": 2
            },
            {
                "fluid": "kubejs:biogas",
                "amount": 4
            }
        ]
    })

    //Creosote Oil
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "tag": "forge:creosote",
            "amount": 10
        },
        "temperature": {
            "min_temp": 100
        },
        "results": [
            {
                "fluid": "kubejs:methanol",
                "amount": 2
            },
            {
                "fluid": "kubejs:tar",
                "amount": 2
            },
            {
                "fluid": "kubejs:phenol",
                "amount": 6
            }
        ]
    })

    //Biodiesel
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "tag": "forge:biodiesel",
            "amount": 10
        },
        "temperature": {
            "min_temp": 100
        },
        "results": [
            {
                "fluid": "kubejs:ammonia",
                "amount": 3
            },
            {
                "fluid": "kubejs:glycerol",
                "amount": 7
            }
        ]
    })

    //Bioethanol
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
            "type": "pneumaticcraft:fluid",
            "tag": "forge:bioethanol",
            "amount": 10
        },
        "temperature": {
            "min_temp": 100
        },
        "results": [
            {
                "fluid": "immersiveengineering:ethanol",
                "amount": 6
            },
            {
                "fluid": "kubejs:bioethylene",
                "amount": 4
            }
        ]
    })


})