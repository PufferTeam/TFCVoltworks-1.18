onEvent('recipes', event => {

    global.addMoldBottling('immersiveengineering:mold_plate', 'pneumaticcraft:plastic', 'pneumaticcraft:plastic')
    global.addMoldBottling('immersiveengineering:mold_plate', 'pneumaticcraft:bioplastic', 'kubejs:bioplastic_sheet')
    global.addMoldBottlingInputs('immersiveengineering:mold_plate', 'kubejs:bioplastic_sheet', 1, 'pneumaticcraft:duroplast', 'immersiveengineering:plate_duroplast')
    global.addMoldBottlingInputs('immersiveengineering:mold_plate', 'pneumaticcraft:plastic', 1, 'pneumaticcraft:fiberpolymer', 'kubejs:fiber_reinforced_polymer')

    global.addFluidMixer('forge:acetaldehyde', 12, 'forge:phenol', 8, 'immersiveengineering:phenolic_resin', 8, 5.0, 250)
    global.addFluidMixer('forge:bioethylene', 10, 'forge:methanol', 2, 'kubejs:biopolyethylene', 8, 5.0, 250)

    global.addThermoPlantFluidItemEFluid('kubejs:mercury_dust', 'forge:acetylene', 500, 'immersiveengineering:acetaldehyde', 500, 2.0, 0.5)
    global.addThermoPlantFluidItemEFluid('kubejs:rubber_fiber', 'forge:biopolyethylene', 100, 'kubejs:molten_bioplastic', 100, 2.0, 0.5)
    global.addThermoPlantFluidItemEFluid('kubejs:silicon_rubber_fiber', 'forge:polyvinyl_chloride', 100, 'pneumaticcraft:plastic', 100, 2.0, 0.5)

})