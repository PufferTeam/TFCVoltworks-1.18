onEvent('item.registry.tool_tiers', event => {
    global.stoneToolsTypes.forEach(i => {
        let result = i.split('/')
        let stone = result[0]
        let damage = result[1]

        event.add('custom_' + stone, tier => {
            tier.uses = damage
            tier.speed = 1.0
            tier.attackDamageBonus = 0
            tier.level = 0
            tier.enchantmentValue = 15
            tier.repairIngredient = '#forge:cobblestone'
        })

    });
})

onEvent('item.registry', event => {

    //event.create('firewood').maxStackSize(64)

    global.tfcWoodTypes.forEach(i => {
        event.create(`${i}_firewood`).maxStackSize(64)
        event.create(`stripped_${i}_firewood`).maxStackSize(64)
    });

    global.tfcGlobalMetalTypes.forEach(i => {
        event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1)
        event.create('transition_' + i + '_block', 'create:sequenced_assembly').maxStackSize(1)
    });

    event.create('glass_jug', 'tfc:fluid_container').capacity(250)

    event.create('transition_bloom', 'create:sequenced_assembly').maxStackSize(1);

    event.create('transition_high_carbon_steel', 'create:sequenced_assembly').maxStackSize(1);

    event.create('unfired_flower_box').maxStackSize(64);

    event.create('large_stick').maxStackSize(32);

    event.create('treated_stick').maxStackSize(32);

    event.create('treated_large_stick').maxStackSize(32);

    event.create('pitch_treated_lumber').maxStackSize(64);

    event.create('pitch_treated_small_gear').maxStackSize(64);

    event.create('pitch_treated_large_gear').maxStackSize(64);

    event.create('pitch_treated_stick').maxStackSize(32);

    event.create('pitch_treated_large_stick').maxStackSize(32);

    event.create('pitch_treated_waterwheel_segment').maxStackSize(16);

    event.create('pitch_treated_tough_fabric').maxStackSize(16);

    event.create('ash_treated_lumber').maxStackSize(64);

    event.create('ash_treated_stick').maxStackSize(32);

    event.create('ash_treated_large_stick').maxStackSize(32);

    event.create('creosote_treated_lumber').maxStackSize(64);

    event.create('creosote_treated_large_stick').maxStackSize(64);

    event.create('brick/coke_oven_brick').maxStackSize(64);

    event.create('brick/bloomery_brick').maxStackSize(64);

    event.create('brick/unfired_ash_brick').maxStackSize(64);

    event.create('brick/unfired_bloomery_brick').maxStackSize(64);

    event.create('brick/unfired_coke_oven_brick').maxStackSize(64);

    event.create('powder/gypsum').maxStackSize(32);

    event.create('powder/alumina').maxStackSize(32);

    event.create('underclay_ball').maxStackSize(64);

    global.scrapingItems.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));

    global.tfcGemTypes.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));

    global.colors.forEach(i => event.create('transition_' + i + '_block', 'create:sequenced_assembly').maxStackSize(1));

    global.framesTypes.forEach(i => event.create('frame/' + i).maxStackSize(64));

    global.stoneToolsTypes.forEach(i => {
        let result = i.split('/')
        let stone = result[0]
        let damage = result[1]
        event.create('stone/pickaxe/' + stone, 'pickaxe').tier('custom_' + stone).maxDamage(damage)
        event.create('stone/pickaxe_head/' + stone).maxStackSize(64)
    });

})