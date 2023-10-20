onEvent('fluid.registry', event => {
    global.tagFluids = []
    event.create('magmatic_lava')
    .thickTexture(0x753A0F)
    .bucketColor(0x753A0F)
    .displayName('Magmatic Lava')
    global.tagFluids.push('kubejs:magmatic_lava/minecraft:lava')

    event.create('raw_andesite_alloy')
    .thickTexture(0xF0F0F0)
    .bucketColor(0xF0F0F0)
    .displayName('Raw Igneous Alloy')
    global.tagFluids.push('kubejs:raw_andesite_alloy/minecraft:lava')
    global.tagFluids.push('kubejs:raw_andesite_alloy/tfc:molten_metals')

    event.create('molten_bioplastic')
    .thickTexture(0x786544)
    .bucketColor(0x786544)
    .displayName('Molten Bio Plastic')
    global.tagFluids.push('kubejs:molten_bioplastic/minecraft:lava')
    global.tagFluids.push('kubejs:molten_bioplastic/tfc:molten_metals')

    event.create('molten_duroplast')
    .thickTexture(0xC88A32)
    .bucketColor(0xC88A32)
    .displayName('Molten Duroplast')
    global.tagFluids.push('kubejs:molten_duroplast/minecraft:lava')
    global.tagFluids.push('kubejs:molten_duroplast/tfc:molten_metals')

    event.create('molten_fiberpolymer')
    .thickTexture(0x55948D)
    .bucketColor(0x55948D)
    .displayName('Molten Fiber Reinforced Polymer')
    global.tagFluids.push('kubejs:molten_fiberpolymer/minecraft:lava')
    global.tagFluids.push('kubejs:molten_fiberpolymer/tfc:molten_metals')

    global.tagFluids.push('pneumaticcraft:plastic/minecraft:lava')
    global.tagFluids.push('pneumaticcraft:plastic/tfc:molten_metals')

    event.create('cast_aluminum')
    .thickTexture(0x9C6A4F)
    .bucketColor(0x9C6A4F)
    .displayName('Cast Aluminum')
    global.tagFluids.push('kubejs:cast_aluminum/minecraft:lava')
    global.tagFluids.push('kubejs:cast_aluminum/tfc:molten_metals')

    event.create('alumina')
    .thickTexture(0xEEEEEE)
    .bucketColor(0xEEEEEE)
    .displayName('Alumina')
    global.tagFluids.push('kubejs:alumina/minecraft:lava')
    global.tagFluids.push('kubejs:alumina/tfc:molten_metals')

    event.create('mercury')
    .thickTexture(0xAAAAAA)
    .bucketColor(0xAAAAAA)
    .displayName('Mercury')
    global.tagFluids.push('kubejs:mercury/minecraft:water')

    event.create('phenol')
    .thinTexture(0x948655)
    .bucketColor(0x948655)
    .displayName('Phenol')
    global.tagFluids.push('kubejs:phenol/minecraft:water')

    event.create('tar')
    .thinTexture(0x302D23)
    .bucketColor(0x302D23)
    .displayName('Tar')
    global.tagFluids.push('kubejs:tar/minecraft:water')
    global.tagFluids.push('kubejs:tar/tfc:ingredients')

    event.create('ashwater')
    .thinTexture(0x978B82)
    .bucketColor(0x978B82)
    .displayName('Ashwater')
    global.tagFluids.push('kubejs:ashwater/minecraft:water')
    global.tagFluids.push('kubejs:ashwater/tfc:ingredients')

    event.create('cinderwater')
    .thinTexture(0x9D8375)
    .bucketColor(0x9D8375)
    .displayName('Cinderwater')
    global.tagFluids.push('kubejs:cinderwater/minecraft:water')
    global.tagFluids.push('kubejs:cinderwater/tfc:ingredients')

    event.create('clinkerwater')
    .thinTexture(0x6C6C6C)
    .bucketColor(0x6C6C6C)
    .displayName('Clinkerwater')
    global.tagFluids.push('kubejs:clinkerwater/minecraft:water')
    global.tagFluids.push('kubejs:clinkerwater/tfc:ingredients')

    event.create('firewater')
    .thinTexture(0x916B5C)
    .bucketColor(0x916B5C)
    .displayName('Flakwater')
    global.tagFluids.push('kubejs:firewater/minecraft:water')
    global.tagFluids.push('kubejs:firewater/tfc:ingredients')

    event.create('pitch')
    .thinTexture(0x63492B)
    .bucketColor(0x63492B)
    .displayName('Pitch')
    global.tagFluids.push('kubejs:pitch/minecraft:water')
    global.tagFluids.push('kubejs:pitch/tfc:ingredients')

    event.create('wax')
    .thinTexture(0xA69D6F)
    .bucketColor(0xA69D6F)
    .displayName('Wax')
    global.tagFluids.push('kubejs:wax/minecraft:water')

    event.create('liquid_glass')
    .thinTexture(0xE5F8F8)
    .bucketColor(0xE5F8F8)
    .displayName('Liquid Glass')
    global.tagFluids.push('kubejs:liquid_glass/minecraft:lava')

    event.create('cryolite')
    .thickTexture(0x806860)
    .bucketColor(0x806860)
    .displayName('Cryolite')
    global.tagFluids.push('kubejs:cryolite/minecraft:lava')

    event.create('amethyst')
    .thickTexture(0x8D6ACC)
    .bucketColor(0x8D6ACC)
    .displayName('Amethyst')
    global.tagFluids.push('kubejs:amethyst/minecraft:lava')

    event.create('diamond')
    .thickTexture(0x6BDDD7)
    .bucketColor(0x6BDDD7)
    .displayName('Diamond')
    global.tagFluids.push('kubejs:diamond/minecraft:lava')

    event.create('emerald')
    .thickTexture(0x69C449)
    .bucketColor(0x69C449)
    .displayName('Emerald')
    global.tagFluids.push('kubejs:emerald/minecraft:lava')

    event.create('lapis_lazuli')
    .thickTexture(0x42519B)
    .bucketColor(0x42519B)
    .displayName('Lapis Lazuli')
    global.tagFluids.push('kubejs:lapis_lazuli/minecraft:lava')

    event.create('opal')
    .thickTexture(0x50828C)
    .bucketColor(0x50828C)
    .displayName('Opal')
    global.tagFluids.push('kubejs:opal/minecraft:lava')

    event.create('pyrite')
    .thickTexture(0xCDC693)
    .bucketColor(0xCDC693)
    .displayName('Pyrite')
    global.tagFluids.push('kubejs:pyrite/minecraft:lava')

    event.create('ruby')
    .thickTexture(0xCB2821)
    .bucketColor(0xCB2821)
    .displayName('Ruby')
    global.tagFluids.push('kubejs:ruby/minecraft:lava')

    event.create('sapphire')
    .thickTexture(0x5D83BB)
    .bucketColor(0x5D83BB)
    .displayName('Sapphire')
    global.tagFluids.push('kubejs:sapphire/minecraft:lava')

    event.create('topaz')
    .thickTexture(0xF1AB51)
    .bucketColor(0xF1AB51)
    .displayName('Topaz')
    global.tagFluids.push('kubejs:topaz/minecraft:lava')

    global.fluidsToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]
        let color = result[1]
        let cutColor = '#' + color.slice(2)
        let fluidColor = global.getColor(cutColor)
        let isLiquid = result[2]
        console.log(isLiquid)
        console.log('color' + color)
        let displayName = 'ERROR'
        if(isLiquid == 'true') {
            displayName = "Liquid " + global.getCapitalizedWord(name)
        } else {
            displayName = global.getCapitalizedWord(name)
        }
    
        console.log(name + color + displayName)

        event.create(name)
        .thinTexture(fluidColor)
        .bucketColor(fluidColor)
        .displayName(displayName)
    });
})