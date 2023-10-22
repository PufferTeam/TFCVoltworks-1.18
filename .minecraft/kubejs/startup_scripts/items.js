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

    event.create('iron_mechanisms').maxStackSize(64);
    event.create('light_mechanism').maxStackSize(64);
    event.create('incomplete_light_mechanism', 'create:sequenced_assembly').maxStackSize(1);

    event.create('steel_mechanisms').maxStackSize(64);
    event.create('heavy_mechanism').maxStackSize(64);
    event.create('incomplete_heavy_mechanism', 'create:sequenced_assembly').maxStackSize(1);

    event.create('stainless_steel_mechanisms').maxStackSize(64);
    event.create('ponderous_mechanism').maxStackSize(64);
    event.create('incomplete_ponderous_mechanism', 'create:sequenced_assembly').maxStackSize(1);

    event.create('carbon_fibers').maxStackSize(64);

    event.create('carbon_mesh').maxStackSize(64);

    event.create('carbon_plate').maxStackSize(64);

    event.create('electric_motor').maxStackSize(64);

    event.create('electric_piston').maxStackSize(64);

    event.create('electric_pump').maxStackSize(64);

    event.create('thermionic_emitter').maxStackSize(64);

    event.create('thermionic_sensor').maxStackSize(64);

    event.create('robotic_arm').maxStackSize(64);

    event.create('industrial_electronic_component').maxStackSize(64);

    event.create('stainless_steel_mechanical_component').maxStackSize(64);

    event.create('bioplastic_sheet').maxStackSize(64);

    event.create('fiber_reinforced_polymer').maxStackSize(64);

    event.create('assembled_pcb').maxStackSize(64);

    event.create('clinker_flour').maxStackSize(64);

    event.create('abyss_flour').maxStackSize(64);

    event.create('thermoplastic_starch').maxStackSize(64);

    event.create('polydimethylsiloxane_pulp').maxStackSize(64);

    event.create('mercury_dust').maxStackSize(64);

    event.create('mercury_rosin').maxStackSize(64);

    event.create('compacted_sawdust').maxStackSize(64);

    event.create('void_shard').maxStackSize(64);

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

    event.create('powder/fly_ash').maxStackSize(32);

    event.create('brick/unfired_ash_brick').maxStackSize(64);

    event.create('powder/bloomery').maxStackSize(32);

    event.create('brick/unfired_bloomery_brick').maxStackSize(64);

    event.create('powder/coke_oven').maxStackSize(32);

    event.create('brick/unfired_coke_oven_brick').maxStackSize(64);

    event.create('powder/fire').maxStackSize(32);

    event.create('brick/unfired_fire_brick').maxStackSize(64);

    event.create('brick/tfcfire_brick').maxStackSize(64);

    event.create('powder/gypsum').maxStackSize(32);

    event.create('powder/bauxite').maxStackSize(32);

    event.create('powder/bismuthinite').maxStackSize(32);

    event.create('powder/cassiterite').maxStackSize(32);

    event.create('powder/garnierite').maxStackSize(32);

    event.create('powder/cryolite').maxStackSize(32);

    event.create('powder/bituminous_coal').maxStackSize(32);

    event.create('powder/lignite').maxStackSize(32);

    event.create('powder/cursecoal').maxStackSize(32);

    event.create('powder/ender_pearl').maxStackSize(32);

    event.create('powder/alumina').maxStackSize(32);

    event.create('underclay_ball').maxStackSize(64);

    global.scrapingItems.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));

    global.tfcGemTypes.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));

    global.colors.forEach(i => event.create('transition_' + i + '_block', 'create:sequenced_assembly').maxStackSize(1));

    global.framesTypes.forEach(i => event.create('frame/' + i).maxStackSize(64));

    event.create('frame/iron').maxStackSize(64)
    event.create('frame/steel').maxStackSize(64)
    event.create('frame/aluminum').maxStackSize(64)
    event.create('frame/compressed_iron').maxStackSize(64)

    global.stoneToolsTypes.forEach(i => {
        let result = i.split('/')
        let stone = result[0]
        let damage = result[1]
        event.create('stone/pickaxe/' + stone, 'pickaxe').tier('custom_' + stone).maxDamage(damage)
        event.create('stone/pickaxe_head/' + stone).maxStackSize(64)
    });

})