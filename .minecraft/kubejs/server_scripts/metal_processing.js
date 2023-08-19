// priority: 1103

onEvent('tags.items', event => {
    function taggingTools(mod, metal, tier) {
        event.add(`forge:${tier}pickaxes`, `${mod}:metal/pickaxe/${metal}`)
        event.add(`forge:${tier}pickaxe_heads`, `${mod}:metal/pickaxe_head/${metal}`)
        event.add(`forge:${tier}propicks`, `${mod}:metal/propick/${metal}`)
        event.add(`forge:${tier}propick_heads`, `${mod}:metal/propick_head/${metal}`)
        event.add(`forge:${tier}axes`, `${mod}:metal/axe/${metal}`)
        event.add(`forge:${tier}axe_heads`, `${mod}:metal/axe_head/${metal}`)
        event.add(`forge:${tier}shovels`, `${mod}:metal/shovel/${metal}`)
        event.add(`forge:${tier}shovel_heads`, `${mod}:metal/shovel_head/${metal}`)
        event.add(`forge:${tier}hoes`, `${mod}:metal/hoe/${metal}`)
        event.add(`forge:${tier}hoe_heads`, `${mod}:metal/hoe_head/${metal}`)
        event.add(`forge:${tier}chisels`, `${mod}:metal/chisel/${metal}`)
        event.add(`forge:${tier}chisel_heads`, `${mod}:metal/chisel_head/${metal}`)
        event.add(`forge:${tier}hammers`, `${mod}:metal/hammer/${metal}`)
        event.add(`forge:${tier}hammer_heads`, `${mod}:metal/hammer_head/${metal}`)
        event.add(`forge:${tier}saws`, `${mod}:metal/saw/${metal}`)
        event.add(`forge:${tier}saw_blades`, `${mod}:metal/saw_blade/${metal}`)
        event.add(`forge:${tier}javelins`, `${mod}:metal/javelin/${metal}`)
        event.add(`forge:${tier}javelin_heads`, `${mod}:metal/javelin_head/${metal}`)
        event.add(`forge:${tier}swords`, `${mod}:metal/sword/${metal}`)
        event.add(`forge:${tier}sword_blades`, `${mod}:metal/sword_blade/${metal}`)
        event.add(`forge:${tier}maces`, `${mod}:metal/mace/${metal}`)
        event.add(`forge:${tier}mace_heads`, `${mod}:metal/mace_head/${metal}`)
        event.add(`forge:${tier}knifes`, `${mod}:metal/knife/${metal}`)
        event.add(`forge:${tier}knife_blades`, `${mod}:metal/knife_blade/${metal}`)
        event.add(`forge:${tier}scythes`, `${mod}:metal/scythe/${metal}`)
        event.add(`forge:${tier}scythe_blades`, `${mod}:metal/scythe_blade/${metal}`)
        event.add(`forge:${tier}shears`, `${mod}:metal/shears/${metal}`)
        event.add(`forge:${tier}unfinished_helmets`, `${mod}:metal/unfinished_helmet/${metal}`)
        event.add(`forge:${tier}unfinished_chestplates`, `${mod}:metal/unfinished_chestplate/${metal}`)
        event.add(`forge:${tier}unfinished_greavess`, `${mod}:metal/unfinished_greaves/${metal}`)
        event.add(`forge:${tier}unfinished_bootss`, `${mod}:metal/unfinished_boots/${metal}`)
        event.add(`forge:${tier}shields`, `${mod}:metal/shield/${metal}`)
        event.add(`forge:${tier}chains`, `${mod}:metal/chain/${metal}`)
        event.add(`forge:${tier}lamps`, `${mod}:metal/lamp/${metal}`)
        event.add(`forge:${tier}anvil`, `${mod}:metal/anvil/${metal}`)

        event.add(`forge:${tier}rods`, `${mod}:metal/rod/${metal}`)
        event.add(`forge:${tier}double_sheets`, `${mod}:metal/double_sheet/${metal}`)
        event.add(`forge:${tier}double_ingots`, `${mod}:metal/double_ingot/${metal}`)
        event.add(`forge:${tier}tuyeres`, `${mod}:metal/tuyere/${metal}`)
        event.add(`forge:${tier}fish_hooks`, `${mod}:metal/fish_hook/${metal}`)
    }
    //global.tfcMetalTypes.forEach(i => taggingTools('tfc', i, ''));
    //global.tfcMetallumMetalTypes.forEach(i => taggingTools('tfc', i, ''));

    global.tier1MetalTypes.forEach(i => taggingTools('tfc', i, 'tier1_'));
    global.tier2MetalTypes.forEach(i => taggingTools('tfc', i, 'tier2_'));
    global.tier3MetalTypes.forEach(i => taggingTools('tfc', i, 'tier3_'));
    global.tier4MetalTypes.forEach(i => taggingTools('tfc', i, 'tier4_'));
    global.tier5MetalTypes.forEach(i => taggingTools('tfc', i, 'tier5_'));
    global.tier6MetalTypes.forEach(i => taggingTools('tfc', i, 'tier6_'));

    global.tier1MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier1_'));
    global.tier2MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier2_'));
    global.tier3MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier3_'));
    global.tier4MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier4_'));
    global.tier5MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier5_'));
    global.tier6MetallumMetalTypes.forEach(i => taggingTools('tfc_metallum', i, 'tier6_'));

    global.tfcMetalTypes.forEach(i => event.remove('forge:plates', `tfc:metal/sheet/${i}`));
    global.tfcMetalTypes.forEach(i => event.remove(`forge:plates/${i}`, `tfc:metal/sheet/${i}`));
    global.tfcMetalTypes.forEach(i => event.remove(`forge:plates/iron`, `tfc:metal/sheet/${i}`));

    const knifes = event.get('tfc:knifes').getObjectIds()
    knifes.forEach(i => event.add('tfc:sharp_tools', i))
    knifes.forEach(i => event.add('tfc:deals_piercing_damage', i))
    knifes.forEach(i => event.add('tfc:knives', i))

    event.add(`forge:plates/iron`, 'tfc_metalwork:metal/plate/wrought_iron')
})   

onEvent('recipes', event => {
    //Duplicate chain recipe
    global.tfcMetallumMetalTypes.forEach(i => event.remove({ id: `tfc_metallum:anvil/${i}_chain.json` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `immersiveengineering:crafting/hammercrushing_${i}` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:heating/metal/${i}_large_plate` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:anvil/${i}_large_plate` }));
    global.tfcGlobalMetalTypes.forEach(i => event.remove({ id: `tfc_metalwork:quern/${i}_dust` }));

    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')

    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')

    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

})