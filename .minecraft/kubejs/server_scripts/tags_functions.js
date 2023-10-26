onEvent('tags.items', event => {
    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
    global.tfcFoodSeeds.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.tfcSaplings.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.waxingAgents.forEach(i => event.add('tfc:waxing_agents', i));
    global.tfcWoodTypes.forEach(i => event.add('quark:seed_pouch_holdable', `dttfc:${i}_seed`));
    global.tfcWoodTypes.forEach(i => event.add('tfc:flammable_lumber', `tfc:wood/lumber/${i}`));
    global.anvilRockTypes.forEach(i => event.add('tfc:rock_magma_blocks', `tfc:rock/magma/${i}`));
    event.add('tfc:rock_magma_blocks', 'minecraft:magma_block')

    global.tfcRockTypes.forEach(i => event.add('tfc:brick', `tfc:brick/${i}`));
    global.tfcGemTypes.forEach(i => event.add('tfc:cut_gems', `tfc:gem/${i}`));

    event.add('tfc:placed_item_whitelist', 'kubejs:unfired_flower_box')
    event.add('tfc:unfired_pottery', 'kubejs:unfired_flower_box')

    event.add('tfc:ash', 'supplementaries:ash')
    event.add('tfc:ash', 'tfc:powder/wood_ash')

    event.add('forge:biomass', 'createaddition:biomass')

    event.add('forge:dusts/wood', 'immersiveengineering:sawdust')
    event.add('forge:dusts/mercury', 'kubejs:mercury_dust')

    event.remove('create:windmill_sails', 'create:sail_frame')
    event.remove('forge:storage_blocks/gold', 'minecraft:gold_block')

    event.remove('forge:ingots/brick', 'supplementaries:ash_brick')

    global.stoneToolsTypes.forEach(i => {
        let result = i.split("/")
        let stone = result[0]
        event.add('tfc:pickaxes', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:usable_on_tool_rack', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:placed_item_whitelist', `kubejs:stone/pickaxe/${stone}`)

        event.add('tfc:stone_pickaxes', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:stone_axes', `tfc:stone/axe/${stone}`)
        event.add('tfc:stone_shovels', `tfc:stone/shovel/${stone}`)
        event.add('tfc:stone_knives', `tfc:stone/knife/${stone}`)
        event.add('tfc:stone_javelins', `tfc:stone/javelin/${stone}`)
        event.add('tfc:stone_hoes', `tfc:stone/hoe/${stone}`)
        event.add('tfc:stone_hammers', `tfc:stone/hammer/${stone}`)
    });

    global.tfcWoodTypes.forEach(i => event.remove('forge:chests/wooden', `everycomp:q/tfc/${i}_chest`));
    global.vanillaWoodTypes.forEach(i => {
        let log = 'log'
        if(i == 'crimson' || i == 'warped') {
            log = 'stem'
        }
        let wood = 'wood'
        if(i == 'crimson' || i == 'warped') {
            wood = 'hyphae'
        }

        global.woodTagList.forEach(tag => {
            event.remove(tag, `minecraft:${i}_${log}`)
            event.remove(tag, `minecraft:stripped_${i}_${log}`)
            event.remove(tag, `minecraft:${i}_${wood}`)
            event.remove(tag, `minecraft:stripped_${i}_${wood}`)
        })

        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${wood}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${wood}`)

        event.remove('create:vanilla_stripped_logs', `minecraft:stripped_${i}_${log}`)

        event.remove('forge:chests/wooden', `quark:${i}_chest`)
        event.remove('forge:chests/wooden', `quark:${i}_trapped_chest`)

        event.remove(`minecraft:planks`, `minecraft:${i}_planks`)
    });
    global.quarkWoodTypes.forEach(i => {
        event.remove('forge:chests/wooden', `quark:${i}_chest`)
        event.remove('forge:chests/wooden', `quark:${i}_trapped_chest`)
    });

})

onEvent('tags.blocks', event => {
    event.remove('create:windmill_sails', 'create:sail_frame')

    event.remove('minecraft:needs_diamond_tool', 'minecraft:obsidian')
    event.add('tfc:needs_copper_tool', 'minecraft:obsidian')

    global.vanillaWoodTypes.forEach(i => {
        let log = 'log'
        if(i == 'crimson' || i == 'warped') {
            log = 'stem'
        }
        let wood = 'wood'
        if(i == 'crimson' || i == 'warped') {
            wood = 'hyphae'
        }
        global.woodTagList.forEach(tag => {
            event.remove(tag, `minecraft:${i}_${log}`)
            event.remove(tag, `minecraft:stripped_${i}_${log}`)
            event.remove(tag, `minecraft:${i}_${wood}`)
            event.remove(tag, `minecraft:stripped_${i}_${wood}`)
        })

        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${wood}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${wood}`)

        event.remove('create:vanilla_stripped_logs', `minecraft:stripped_${i}_${log}`)

        event.remove(`minecraft:planks`, `minecraft:${i}_planks`)

    });

    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
})

onEvent('tags.fluids', event => {

    global.extraTagFluidsWater = [
        'immersivepetroleum:crudeoil',
        'immersivepetroleum:diesel_sulfur',
        'immersivepetroleum:diesel',
        'immersivepetroleum:lubricant',
        'immersivepetroleum:gasoline',
        'immersivepetroleum:naphtha',
        'immersivepetroleum:naphtha_cracked',
        'immersivepetroleum:lubricant_cracked',
        'immersivepetroleum:kerosene',
        'immersivepetroleum:gasoline_additives',
        'immersivepetroleum:napalm',
        'immersiveengineering:creosote',
        'immersiveengineering:plantoil',
        'immersiveengineering:ethanol',
        'immersiveengineering:biodiesel',
        'immersiveengineering:concrete',
        'immersiveengineering:herbicide',
        'immersiveengineering:redstone_acid',
        'immersiveengineering:acetaldehyde',
        'immersiveengineering:phenolic_resin',
        'mekanism:hydrogen',
        'mekanism:oxygen',
        'mekanism:chlorine',
        'mekanism:sulfur_dioxide',
        'mekanism:sulfur_trioxide',
        'mekanism:sulfuric_acid',
        'mekanism:hydrogen_chloride',
        'mekanism:hydrofluoric_acid',
        'mekanism:uranium_oxide',
        'mekanism:uranium_hexafluoride',
        'mekanism:sodium',
        'mekanism:lithium',
        'mekanism:brine',
        'mekanism:steam',
        'mekanism:heavy_water',
        'mekanism:nutritional_paste',
        'mekanismgenerators:bioethanol',
        'mekanism:ethene'
    ]

    global.extraTagFluidsLava = [
        'mekanism:superheated_sodium',
        'mekanismgenerators:deuterium',
        'mekanismgenerators:fusion_fuel',
        'mekanismgenerators:tritium'
    ]

    global.extraTagFluidsWater.forEach(i => {
        global.tagFluids.push(`${i}/minecraft:water/no`)
    });

    global.extraTagFluidsLava.forEach(i => {
        global.tagFluids.push(`${i}/minecraft:lava/no`)
    });
    
    global.fluidsToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]

        global.tagFluids.push(`kubejs:${name}/minecraft:water`)
    });

    global.tagFluids.forEach(i => {
        let result = i.split('/')
        let name = result[0]
        let tag = result[1]
        let selfTag = result[2]
        let nameCut = name.split(':')
        let nameResult = nameCut[0] + ':flowing_' + nameCut[1]
        let nameTag = 'forge:' + nameCut[1]

        if(name == 'pneumaticcraft:plastic') {
            nameResult = 'pneumaticcraft:plastic_flowing'
        }

        console.log(nameCut[0])
        if(nameCut[0] == 'immersiveengineering' || nameCut[0] == 'immersivepetroleum') {
            nameResult = nameCut[0] + ':' + nameCut[1] + '_flowing'
        }

        if(tag == 'minecraft:water' || tag == 'minecraft:lava') {
            event.add(tag, nameResult)

            if(selfTag !== 'no') {
                event.add(nameTag, nameResult)
                event.add(nameTag, name)
            }
        }

        event.add(tag, name)
    });

});
