onEvent('fluid.registry', event => {
    event.create('magmatic_lava')
    .thickTexture(0x753A0F)
    .bucketColor(0x753A0F)
    .displayName('Magmatic Lava')

    event.create('raw_andesite_alloy')
    .thickTexture(0xF0F0F0)
    .bucketColor(0xF0F0F0)
    .displayName('Raw Igneous Alloy')

    event.create('molten_bioplastic')
    .thickTexture(0x786544)
    .bucketColor(0x786544)
    .displayName('Molten Bio Plastic')

    event.create('molten_duroplast')
    .thickTexture(0xC88A32)
    .bucketColor(0xC88A32)
    .displayName('Molten Duroplast')

    event.create('molten_fiberpolymer')
    .thickTexture(0x55948D)
    .bucketColor(0x55948D)
    .displayName('Molten Fiber Reinforced Polymer')

    event.create('cast_aluminum')
    .thickTexture(0x9C6A4F)
    .bucketColor(0x9C6A4F)
    .displayName('Cast Aluminum')

    event.create('alumina')
    .thickTexture(0xEEEEEE)
    .bucketColor(0xEEEEEE)
    .displayName('Alumina')

    event.create('mercury')
    .thickTexture(0xAAAAAA)
    .bucketColor(0xAAAAAA)
    .displayName('Mercury')

    event.create('phenol')
    .thinTexture(0x948655)
    .bucketColor(0x948655)
    .displayName('Phenol')

    event.create('tar')
    .thinTexture(0x302D23)
    .bucketColor(0x302D23)
    .displayName('Tar')

    event.create('ashwater')
    .thinTexture(0x978B82)
    .bucketColor(0x978B82)
    .displayName('Ashwater')

    event.create('cinderwater')
    .thinTexture(0x9D8375)
    .bucketColor(0x9D8375)
    .displayName('Cinderwater')

    event.create('clinkerwater')
    .thinTexture(0x6C6C6C)
    .bucketColor(0x6C6C6C)
    .displayName('Clinkerwater')

    event.create('firewater')
    .thinTexture(0x916B5C)
    .bucketColor(0x916B5C)
    .displayName('Flakwater')

    event.create('pitch')
    .thinTexture(0x63492B)
    .bucketColor(0x63492B)
    .displayName('Pitch')

    event.create('wax')
    .thinTexture(0xA69D6F)
    .bucketColor(0xA69D6F)
    .displayName('Wax')

    event.create('liquid_glass')
    .thinTexture(0xE5F8F8)
    .bucketColor(0xE5F8F8)
    .displayName('Liquid Glass')

    event.create('cryolite')
    .thickTexture(0x806860)
    .bucketColor(0x806860)
    .displayName('Cryolite')

    event.create('amethyst')
    .thickTexture(0x8D6ACC)
    .bucketColor(0x8D6ACC)
    .displayName('Amethyst')

    event.create('diamond')
    .thickTexture(0x6BDDD7)
    .bucketColor(0x6BDDD7)
    .displayName('Diamond')

    event.create('emerald')
    .thickTexture(0x69C449)
    .bucketColor(0x69C449)
    .displayName('Emerald')

    event.create('lapis_lazuli')
    .thickTexture(0x42519B)
    .bucketColor(0x42519B)
    .displayName('Lapis Lazuli')

    event.create('opal')
    .thickTexture(0x50828C)
    .bucketColor(0x50828C)
    .displayName('Opal')

    event.create('pyrite')
    .thickTexture(0xCDC693)
    .bucketColor(0xCDC693)
    .displayName('Pyrite')

    event.create('ruby')
    .thickTexture(0xCB2821)
    .bucketColor(0xCB2821)
    .displayName('Ruby')

    event.create('sapphire')
    .thickTexture(0x5D83BB)
    .bucketColor(0x5D83BB)
    .displayName('Sapphire')

    event.create('topaz')
    .thickTexture(0xF1AB51)
    .bucketColor(0xF1AB51)
    .displayName('Topaz')

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