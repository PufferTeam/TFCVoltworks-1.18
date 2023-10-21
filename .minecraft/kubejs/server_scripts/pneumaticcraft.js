onEvent('recipes', event => {

    global.addMoldBottling('immersiveengineering:mold_plate', 'pneumaticcraft:plastic', 'pneumaticcraft:plastic')
    global.addMoldBottling('immersiveengineering:mold_plate', 'pneumaticcraft:bioplastic', 'kubejs:bioplastic_sheet')
    global.addMoldBottlingInputs('immersiveengineering:mold_plate', 'kubejs:bioplastic_sheet', 1, 'pneumaticcraft:duroplast', 'immersiveengineering:plate_duroplast')
    global.addMoldBottlingInputs('immersiveengineering:mold_plate', 'pneumaticcraft:plastic', 1, 'pneumaticcraft:fiberpolymer', 'kubejs:fiber_reinforced_polymer')

    global.addFluidMixer('forge:acetaldehyde', 12, 'forge:phenol', 8, 'immersiveengineering:phenolic_resin', 8, 5.0, 250)

    global.addThermoPlantFluidItemEFluid('kubejs:mercury_dust', 'forge:acetylene', 500, 'immersiveengineering:acetaldehyde', 500, 2.0, 0.5)

})