global.getHeatingLevel = function getHeatingLevel(temperature) {

    let heatingLevel = undefined

    if(Number.isSafeInteger(temperature)) {
        if (temperature <= 1100 && temperature >= 100) {
            heatingLevel = 'heated'
        }
        if (temperature <= 2015 && temperature > 1100) {
            heatingLevel = 'superheated'
        }
    } else {
        heatingLevel = 'superheated'
    }

    return heatingLevel
}