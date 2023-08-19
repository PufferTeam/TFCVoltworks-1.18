// priority: 10

function removeAndHide(prefix, suffix, item, type, mod, sbvalid, color, seconditem) {

    if (sbvalid) {
        global.removeAndHide.push(
            `${mod}:${item}_slab`,
            `${mod}:${item}_stairs`
        )
    }

    if (mod == 'mcwroofs') {
        global.removeAndHide.push(
            `${mod}:${item}_roof`,
            `${mod}:${item}_attic_roof`,
            `${mod}:${item}_top_roof`,
            `${mod}:${item}_lower_roof`,
            `${mod}:${item}_steep_roof`,
            `${mod}:${item}_upper_lower_roof`,
            `${mod}:${item}_upper_steep_roof`
        )
    }

    if(type == 'tfcwood') {
        global.removeAndHide.push(
            `everycomp:q/tfc/wood/planks/${item}_post`,
            `everycomp:q/tfc/stripped_wood/planks/${item}_post`,
            `everycomp:q/tfc/${item}_hedge`,
            `everycomp:q/tfc/${item}_chest`,
            `everycomp:q/tfc/${item}_trapped_chest`,
            `everycomp:cfm/tfc/stripped_${item}_mail_box`,
            `${mod}:wood/sapling/${item}`
        );
    }

    if (type == 'food') {
        global.removeAndHide.push(
            `${mod}:cooked_${item}`,
            `${mod}:${item}`
        );
    }

    if (type == 'coral') {
        global.removeAndHide.push(
            `${mod}:${item}_coral`,
            `${mod}:${item}_coral_fan`,
            `${mod}:dead_${item}_coral`,
            `${mod}:dead_${item}_coral_fan`
        );
    }

    if (prefix != '' && suffix == '') {
        global.removeAndHide.push(`${mod}:${color}${prefix}${item}`);
    } else if (suffix != '' && prefix == '') {
        global.removeAndHide.push(`${mod}:${item}${suffix}${color}`);
    }

    if (type == 'cast') {
        global.removeAndHide.push(
            `${mod}:${item}${seconditem}`
        )
    }

    if (type == 'ore') {

        if (item != 'redstone') {
            global.removeAndHide.push(
                `${mod}:${item}`
            );
        }

        global.removeAndHide.push(
            `${mod}:raw_${item}`,
            `create:crushed_${item}_ore`
        )

        if (mod != 'minecraft') {
            global.removeAndHide.push(
                `${mod}:${item}_block`
            )
        }

        if (mod == 'tconstruct') {
            global.removeAndHide.push(
                `${mod}:${item}_reinforcement`
            )
        }

        if (mod != 'immersiveengineering') {
            global.removeAndHide.push(
                `create:${item}_nugget`,
                `thermal:${item}_nugget`,
                //`tconstruct:${item}_nugget`,

                `${mod}:raw_${item}_block`,
                `${mod}:${item}_ore`,
                `${mod}:deepslate_${item}_ore`,
                `${mod}:${item}_nugget`,
                `${mod}:${item}_ingot`,
                `${mod}:${item}_sword`,
                `${mod}:${item}_shovel`,
                `${mod}:${item}_pickaxe`,
                `${mod}:${item}_axe`,
                `${mod}:${item}_hoe`,
                `${mod}:${item}_sword`,
                `${mod}:${item}_helmet`,
                `${mod}:${item}_chestplate`,
                `${mod}:${item}_leggings`,
                `${mod}:${item}_boots`
            );
        }

        if (mod == 'create' || mod == 'minecraft') {
            global.removeAndHide.push(
                `createaddition:${item}_rod`,
                `createaddition:${item}_sheet`,
                `create:${item}_sheet`
            )
        }

        if (mod == 'mekanism' || mod == 'minecraft') {
            global.removeAndHide.push(
                `mekanism:block_raw_${item}`,
                `mekanism:block_${item}`,
                `mekanism:clump_${item}`,
                `mekanism:dirty_dust_${item}`,
                `mekanism:crystal_${item}`,
                `mekanism:shard_${item}`,
                `mekanism:nugget_${item}`,
                `mekanism:ingot_${item}`,
                `mekanism:dust_${item}`
            )
        }

        if (mod == 'thermal' || mod == 'minecraft') {
            global.removeAndHide.push(
                `thermal:${item}_plate`,
                `thermal:${item}_coin`,
                `thermal:${item}_dust`,
                `thermal:${item}_gear`
            )
        }

        if (mod == 'immersiveengineering' || mod == 'minecraft') {
            global.removeAndHide.push(
                `immersiveengineering:plate_${item}`,
                `immersiveengineering:dust_${item}`,
                `immersiveengineering:ore_${item}`,
                `immersiveengineering:deepslate_ore_${item}`,
                `immersiveengineering:ingot_${item}`,
                `immersiveengineering:nugget_${item}`,
                `immersiveengineering:raw_block_${item}`,
                `immersiveposts:stick_${item}`,
                `immersiveengineering:stick_${item}`
            )

            if (item == 'steel') {
                global.removeAndHide.push(
                    `immersiveengineering:armor_${item}_head`,
                    `immersiveengineering:armor_${item}_chest`,
                    `immersiveengineering:armor_${item}_legs`,
                    `immersiveengineering:armor_${item}_feet`,
                    `immersiveengineering:pickaxe_${item}`,
                    `immersiveengineering:shovel_${item}`,
                    `immersiveengineering:axe_${item}`,
                    `immersiveengineering:hoe_${item}`,
                    `immersiveengineering:sword_${item}`
                )
            }

            if (item == 'uranium' || item == 'electrum' || item == 'constantan' || item == 'lead') {
                global.removeAndHide.push(
                    `immersiveposts:fence_${item}`
                )
            }
        }
    }

    if (type == 'wood') {

        if (mod != 'botania' && mod != 'quark') {
            global.removeAndHide.push(
                `${mod}:${item}_planks`,
                `${mod}:${item}_log`,
                `${mod}:${item}_stem`,
                `${mod}:stripped_${item}_log`,
                `${mod}:stripped_${item}_stem`,
                `${mod}:stripped_${item}_wood`,
                `${mod}:stripped_${item}_hyphae`,
                `${mod}:${item}_wood`,
                `${mod}:${item}_hyphae`,
                `${mod}:${item}_door`,
                `${mod}:${item}_trapdoor`,
                `${mod}:${item}_button`,
                `${mod}:${item}_pressure_plate`,
                `${mod}:${item}_sign`,
                `${mod}:${item}_fence`,
                `${mod}:${item}_fence_gate`,
                `${mod}:${item}_sapling`,
                `${mod}:${item}_leaves`,
                `${mod}:${item}_boat`
            );
        }

        if (mod == 'minecraft') {
            global.removeAndHide.push(
                `mcwroofs:${item}_planks_roof`,
                `mcwroofs:${item}_planks_attic_roof`,
                `mcwroofs:${item}_planks_top_roof`,
                `mcwroofs:${item}_planks_lower_roof`,
                `mcwroofs:${item}_planks_steep_roof`,
                `mcwroofs:${item}_planks_upper_lower_roof`,
                `mcwroofs:${item}_planks_upper_steep_roof`,
                `mcwroofs:${item}_roof`,
                `mcwroofs:${item}_attic_roof`,
                `mcwroofs:${item}_top_roof`,
                `mcwroofs:${item}_lower_roof`,
                `mcwroofs:${item}_steep_roof`,
                `mcwroofs:${item}_upper_lower_roof`,
                `mcwroofs:${item}_upper_steep_roof`,
                `cfm:${item}_table`,
                `cfm:stripped_${item}_table`,
                `cfm:${item}_chair`,
                `cfm:stripped_${item}_chair`,
                `cfm:${item}_coffee_table`,
                `cfm:stripped_${item}_coffee_table`,
                `cfm:${item}_cabinet`,
                `cfm:stripped_${item}_cabinet`,
                `cfm:${item}_bedside_cabinet`,
                `cfm:stripped_${item}_bedside_cabinet`,
                `cfm:${item}_desk`,
                `cfm:stripped_${item}_desk`,
                `cfm:${item}_desk_cabinet`,
                `cfm:stripped_${item}_desk_cabinet`,
                `cfm:${item}_blinds`,
                `cfm:stripped_${item}_blinds`,
                `cfm:${item}_upgraded_fence`,
                `cfm:stripped_${item}_upgraded_fence`,
                `cfm:${item}_upgraded_gate`,
                `cfm:stripped_${item}_upgraded_gate`,
                `cfm:${item}_crate`,
                `cfm:stripped_${item}_crate`,
                `cfm:${item}_park_bench`,
                `cfm:stripped_${item}_park_bench`,
                `cfm:${item}_mail_box`,
                `cfm:stripped_${item}_mail_box`,
                `cfm:${item}_kitchen_counter`,
                `cfm:stripped_${item}_kitchen_counter`,
                `cfm:${item}_kitchen_drawer`,
                `cfm:stripped_${item}_kitchen_drawer`,
                `cfm:${item}_kitchen_sink_light`,
                `cfm:stripped_${item}_kitchen_sink_light`,
                `cfm:${item}_kitchen_sink_dark`,
                `cfm:stripped_${item}_kitchen_sink_dark`,
                `cfm:${item}_hedge`,
                `dynamictrees:${item}_seed`,
                `extendedflywheels:${item}_flywheel`,
                `extendedflywheels:${item}_plated_flywheel`,
                `extendedflywheels:large_${item}_flywheel`,
                `create:${item}_window`,
                `create:${item}_window_pane`,
                `supplementaries:${mod}/hanging_sign_${item}`,
                `supplementaries:hanging_sign_${item}`,
                `supplementaries:${mod}/sign_post_${item}`,
                `supplementaries:sign_post_${item}`,
                `applecrates:${item}_crate`
            )
        }

        if (item != 'oak') {
            global.removeAndHide.push(
                `smallships:${item}_cog`,
                `smallships:${item}_brigg`,
                `railways:track_${item}`,
                `extendedgears:${item}_cogwheel`,
                `extendedgears:large_${item}_cogwheel`,
                `vs_eureka:${item}_ship_helm`,
                `storagedrawers:${item}_full_drawers_1`,
                `storagedrawers:${item}_full_drawers_2`,
                `storagedrawers:${item}_full_drawers_4`,
                `storagedrawers:${item}_half_drawers_1`,
                `storagedrawers:${item}_half_drawers_2`,
                `storagedrawers:${item}_half_drawers_4`,
                `storagedrawers:${item}_trim`
            )
        }
    }

    if (type == 'rock' && mod == 'create') {
        global.removeAndHide.push(
            `${mod}:${item}`,
            `${mod}:cut_${item}`,
            `${mod}:cut_${item}_stairs`,
            `${mod}:cut_${item}_slab`,
            `${mod}:cut_${item}_wall`,
            `${mod}:polished_cut_${item}`,
            `${mod}:polished_cut_${item}_stairs`,
            `${mod}:polished_cut_${item}_slab`,
            `${mod}:polished_cut_${item}_wall`,
            `${mod}:cut_${item}_bricks`,
            `${mod}:cut_${item}_brick_stairs`,
            `${mod}:cut_${item}_brick_slab`,
            `${mod}:cut_${item}_brick_wall`,
            `${mod}:small_${item}_bricks`,
            `${mod}:small_${item}_brick_stairs`,
            `${mod}:small_${item}_brick_slab`,
            `${mod}:small_${item}_brick_wall`,
            `${mod}:layered_${item}`,
            `${mod}:${item}_pillar`
        )
    }

    if (type == 'rock' && mod == 'minecraft') {

        global.removeAndHide.push(
            `${mod}:${item}`,
            `${mod}:${item}s`
        )

        if (item == 'sandstone' || item == 'red_sandstone' || item == 'quartz' || item == 'stone') {
            global.removeAndHide.push(
                `${mod}:smooth_${item}_slab`,
                `${mod}:cut_${item}_slab`,
                `${mod}:cut_${item}`,
                `${mod}:smooth_${item}_stairs`,
                `${mod}:cut_${item}_stairs`
            )
        }

        if(item == 'stone' || item == 'granite' || item == 'diorite' || item == 'andesite') {
            global.removeAndHide.push(
                `cfm:${item}_table`,
                `cfm:${item}_chair`,
                `cfm:${item}_coffee_table`,
                `cfm:${item}_cabinet`,
                `cfm:${item}_bedside_cabinet`,
                `cfm:${item}_desk`,
                `cfm:${item}_desk_cabinet`,
            )
        }

        if (item == 'granite' || item == 'diorite' || item == 'andesite' || item == 'deepslate' || item == 'basalt') {
            global.removeAndHide.push(
                `${mod}:polished_${item}`,
                `${mod}:polished_${item}_slab`,
                `${mod}:polished_${item}_stairs`,
                `${mod}:polished_${item}_wall`
            )
        }

        global.removeAndHide.push(
            `${mod}:${item}_wall`,
            `${mod}:cracked_${item}s`,
            `${mod}:smooth_${item}`,
            `${mod}:${item}_button`,
            `${mod}:${item}_pressure_plate`,
            `${mod}:chiseled_${item}`,
            `${mod}:chiseled_${item}s`
        )
    }

}

global.vanillaWoodTypes.forEach(i => removeAndHide('', '', i, 'wood', 'minecraft', true, null, null));

global.quarkWoodTypes.forEach(i => removeAndHide('', '', i, 'wood', 'quark', true, null, null));

global.tfcWoodTypes.forEach(i => removeAndHide('', '', i, 'tfcwood', 'tfc', true, null, null));

global.vanillaRockTypes.forEach(i => removeAndHide('', '', i, 'rock', 'minecraft', true, null, null));

global.vanillaOreTypes.forEach(i => removeAndHide('', '', i, 'ore', 'minecraft', false, null, null));

global.thermalOreTypes.forEach(i => removeAndHide('', '', i, 'ore', 'thermal', false, null, null));

global.ieOreTypes.forEach(i => removeAndHide('', '', i, 'ore', 'immersiveengineering', false, null, null));

global.mekanismOreTypes.forEach(i => removeAndHide('', '', i, 'ore', 'mekanism', false, null, null));

global.vanillaFoodTypes.forEach(i => removeAndHide('', '', i, 'food', 'minecraft', false, null, null));

global.vanillaCoralTypes.forEach(i => removeAndHide('', '', i, 'coral', 'minecraft', false, null, null));

global.createRockTypes.forEach(i => removeAndHide('', '', i, 'rock', 'create', true, null, null));

global.createOreTypes.forEach(i => removeAndHide('', '', i, 'ore', 'create', true, null, null));

global.vanillaItems.forEach(i => global.removeAndHide.push(`minecraft:${i}`));

global.ieItems.forEach(i => global.removeAndHide.push(`immersiveengineering:${i}`));

global.caItems.forEach(i => global.removeAndHide.push(`createaddition:${i}`));

global.modFluids.forEach(i => global.removeAndHideFluid.push(`${i}`));

global.modFluids.forEach(i => global.removeAndHide.push(`${i}_bucket`));

global.mekanismItems.forEach(i => global.removeAndHide.push(`mekanism:${i}`));

global.duplicateAnimals.forEach(i => global.removeAndHide.push(`minecraft:${i}_spawn_egg`));

global.tfcGlobalMetalTypes.forEach(i => global.removeAndHide.push(`tfc_metalwork:metal/large_plate/${i}`));

global.miscRoofTypes.forEach(i => removeAndHide('', '', i, 'roofs', 'mcwroofs', false, null, null));

global.colors.forEach(colors => {

    removeAndHide('_', '', 'candle', 'candle', 'minecraft', false, colors);
    removeAndHide('_', '', 'concrete_powder', 'concrete_powder', 'minecraft', false, colors);

})

