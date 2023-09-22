onEvent('fluid.registry', event => {
    event.create('raw_andesite_alloy')
    .thickTexture(0xF0F0F0)
    .bucketColor(0xF0F0F0)
    .displayName('Raw Igneous Alloy')

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
})