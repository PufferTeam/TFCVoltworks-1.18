global.getHeatingLevel = function getHeatingLevel(temperature) {

    let heatingLevel = undefined

    if (Number.isSafeInteger(temperature)) {
        if (temperature <= 1100 && temperature >= 100) {
            heatingLevel = 'heated'
        }
        if (temperature <= 2015 && temperature > 1100) {
            heatingLevel = 'superheated'
        }
        if (temperature >= 2016) {
            heatingLevel = 'superheated'
        }
    } else {
        heatingLevel = 'superheated'
    }

    return heatingLevel
}

global.getValidBar = function getValidBar(mod, metal) {
    let barItem = `${mod}:${metal}_bars`
    switch (metal) {
        case 'wrought_iron':
            barItem = 'minecraft:iron_bars'
            break;
        case 'gold':
            barItem = 'quark:gold_bars'
            break;
    }
    return barItem
}

global.getTier = function getTier(metal) {
    let tier = 3
    switch (metal) {
        case 'gold':
        case 'lead':
        case 'silver':
        case 'nickel':
        case 'copper':
            tier = 1
            break;
        case 'constantan':
        case 'electrum':
            tier = 2
            break;
        case 'enderium':
        case 'black_steel':
            tier = 5
            break;
        case 'steel':
            tier = 4
            break;
        case 'red_steel':
        case 'blue_steel':
        case 'tungsten_steel':
        case 'tungsten':
        case 'titanium':
            tier = 6
            break;
    }
    return tier
}