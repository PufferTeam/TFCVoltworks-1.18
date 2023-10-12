// priority: 1100

onEvent('recipes', event => {

    global.colors.forEach(i => event.recipes.createMixing(Fluid.of(`tfc:${i}_dye`, 1000), [`minecraft:${i}_dye`, Fluid.of(`minecraft:water`, 1000)]).heated())

    function dyeMixing(first, second, result) {
        event.recipes.createMixing(Fluid.of(`tfc:${result}_dye`, 2), [Fluid.of(`tfc:${first}_dye`, 1), Fluid.of(`tfc:${second}_dye`, 1)])
        event.recipes.tfc.barrel_instant_fluid(Fluid.of(`tfc:${result}_dye`, 2), Fluid.of(`tfc:${second}_dye`, 1), Fluid.of(`tfc:${first}_dye`, 1))

        event.shapeless(`2x minecraft:${result}_dye`, [`minecraft:${first}_dye`, `minecraft:${second}_dye`])
    }
    dyeMixing('red', 'yellow', 'orange')
    dyeMixing('red', 'blue', 'purple')
    dyeMixing('red', 'white', 'pink')
    dyeMixing('blue', 'white', 'light_blue')
    dyeMixing('blue', 'green', 'cyan')
    dyeMixing('black', 'white', 'gray')
    dyeMixing('white', 'gray', 'light_gray')
    dyeMixing('green', 'white', 'lime')
    dyeMixing('purple', 'pink', 'magenta')
    dyeMixing('blue', 'orange', 'brown')

    global.dyeItem = function dyeItem(prefix, suffix, color, item, mod, tag, dtag, nodye, skipcolor) {

        if (skipcolor != color) {
            if (item == 'concrete') {
                event.remove({ id: `thermal:machines/bottler/bottler_${color}_${item}` })
            }

            if (prefix != '' && suffix == '') {
                global.iteminput = `${mod}${color}${prefix}${item}`;
            } else if (suffix != '' && prefix == '') {
                global.iteminput = `${mod}${item}${suffix}${color}`;
            }

            if (dtag == null) {
                if (tag == null) {
                    global.coloredtag = `tfc:colored_${item}`;
                } else {
                    global.coloredtag = `tfc:colored_${tag}`;
                }
            } else {
                global.coloredtag = `${dtag}`;
            }

            if (item == 'unfired_vessel') {
                global.dyeingid = `glazed_vessel`;
            } else if (item == 'ceramic/unfired_large_vessel') {
                global.dyeingid = `glazed_large_vessel`;
            } else if (item == 'alabaster/raw' || item == 'alabaster/bricks' || item == 'alabaster/polished') {
                global.dyeingid = tag;
            } else if (item == 'shulker_box') {
                global.dyeingid = 'shulker'
            } else if (item == 'concrete') {
                global.dyeingid = 'concrete_powder'
            } else {
                global.dyeingid = item;
            }

            event.remove({ output: global.iteminput })
            event.remove({ id: `tfc:barrel/dye/${color}_${tag}` })
            event.remove({ id: `tfc:barrel/dye/${color}_${item}` })
            event.remove({ id: `botania:dye_${color}` })
            event.remove({ id: `tfc:barrel/dye/${color}_glazed_vessel` })
            event.remove({ id: `tfc:barrel/dye/${color}_glazed_large_vessel` })
            event.remove({ id: `tfc:barrel/dye/${color}_concrete_powder` })
            event.remove({ id: `tfc:barrel/dye/bleach_${item}` })

            if (nodye !== global.iteminput) {
                //dyeing
                //global.addBarrelSealed('item', nodye, `tfc:${color}_dye`, 125, global.iteminput, global.dyeingDuration)
                event.recipes.tfc.barrel_sealed([`1x ${global.iteminput}`], [Fluid.of(`tfc:${color}_dye`, 125), nodye], global.dyeingDuration).id(`tfc:barrel/dye/${color}_${global.dyeingid}`)
                event.recipes.createFilling(`1x ${global.iteminput}`, [nodye, Fluid.of(`tfc:${color}_dye`, 125)]).id(`tfc:filling/dye/${color}_${global.dyeingid}`)
            }

            //lyeing
            //global.addBarrelSealed('item', nodye, `tfc:lye`, 125, `${nodye}`, global.lyeingDuration)
            event.recipes.tfc.barrel_sealed([nodye], [Fluid.of(`tfc:lye`, 125), `#${global.coloredtag}`], global.lyeingDuration).id(`tfc:barrel/dye/bleach_${global.dyeingid}`)
            event.recipes.createFilling(nodye, [`#${global.coloredtag}`, Fluid.of(`tfc:lye`, 125)]).id(`tfc:filling/dye/bleach_${global.dyeingid}`)
            //shapeless crafting
            //event.shapeless(global.iteminput, [`#${global.coloredtag}`, `minecraft:${color}_dye`])
            //painting machine
            global.addPainting(global.coloredtag, `mekanism:${color}`, 125, global.iteminput)
        }
    }

    global.colors.forEach(colors => {
        global.addPigmentExtracting(`minecraft:${colors}_dye`, `mekanism:${colors}`, 1000);
        global.addPainting('mekanism:dye_base', `mekanism:${colors}`, 1000, `minecraft:${colors}_dye`)

        global.dyeItem('_', '', colors, 'wool', 'minecraft:', null, null, 'minecraft:white_wool', null);
        event.shaped(`12x minecraft:${colors}_carpet`, [
            'SS'
        ], {
            S: `minecraft:${colors}_wool`
        }).id(`minecraft:${colors}_carpet`)

        global.dyeItem('_', '', colors, 'carpet', 'minecraft:', null, null, 'minecraft:white_carpet', null);

        //remove when unfired terracotta
        global.dyeItem('_', '', colors, 'glazed_terracotta', 'minecraft:', null, null, 'minecraft:white_glazed_terracotta', null);
        global.dyeItem('_', '', colors, 'bed', 'minecraft:', null, null, 'minecraft:white_bed', null);
        event.shaped('minecraft:white_bed', [
            'SSS',
            'LLL'
        ], {
            S: '#tfc:high_quality_cloth',
            L: '#tfc:lumber'
        }).id('minecraft:white_bed')

        global.dyeItem('_', '', colors, 'banner', 'minecraft:', null, null, 'minecraft:white_banner', null);
        event.shaped('minecraft:white_banner', [
            'S',
            'S',
            'L'
        ], {
            S: '#tfc:high_quality_cloth',
            L: '#tfc:firepit_sticks'
        }).id('minecraft:white_banner')

        global.dyeItem('_', '', colors, 'stained_glass', 'minecraft:', null, null, 'minecraft:glass', null);
        event.shaped(`minecraft:${colors}_stained_glass`, [
            'SS',
            'SS'
        ], {
            S: `quark:${colors}_shard`
        }).id(`minecraft:${colors}_stained_glass_from_shard`)
        global.dyeItem('_', '', colors, 'stained_glass_pane', 'minecraft:', null, null, 'minecraft:glass_pane', null);
        event.shaped(`16x minecraft:${colors}_stained_glass_pane`, [
            'SSS',
            'SSS'
        ], {
            S: `minecraft:${colors}_stained_glass`
        }).id(`minecraft:${colors}_stained_glass_pane_from_full_glass`)

        event.shaped('16x minecraft:glass_pane', [
            'SSS',
            'SSS'
        ], {
            S: 'minecraft:glass'
        }).id('minecraft:glass_pane')
        global.dyeItem('_', '', colors, 'terracotta', 'minecraft:', null, null, 'minecraft:terracotta', null);
        global.dyeItem('_', '', colors, 'concrete', 'minecraft:', null, null, 'immersiveengineering:concrete', null);
        global.dyeItem('_', '', colors, 'shulker_box', 'minecraft:', 'shulker_boxes', null, 'minecraft:shulker_box', null);
        global.dyeItem('', '/', colors, 'candle', 'tfc:', 'candles', null, 'tfc:candle', null);
        global.dyeItem('', '/', colors, 'alabaster/raw', 'tfc:', 'raw_alabaster', null, 'tfc:alabaster/raw', null);
        global.dyeItem('', '/', colors, 'alabaster/bricks', 'tfc:', 'bricks_alabaster', null, 'tfc:alabaster/bricks', null);
        global.dyeItem('', '/', colors, 'alabaster/polished', 'tfc:', 'polished_alabaster', null, 'tfc:alabaster/polished', null);
        global.dyeItem('_', '', colors, 'toolbox', 'create:', null, 'create:toolboxes', 'create:brown_toolbox', null);
        event.remove({ output: 'create:brown_toolbox' })
        event.shaped('create:brown_toolbox', [
            ' S ',
            'SBS',
            'LLL'
        ], {
            S: '#forge:leather',
            B: '#forge:sheets/brass',
            L: '#tfc:lumber'
        }).id('create:brown_toolbox')
        global.dyeItem('', '_', colors, 'sleeping_bag', 'comforts:', null, null, 'comforts:sleeping_bag_white', null);
        event.shaped('comforts:sleeping_bag_white', [
            'SSS',
        ], {
            S: '#tfc:high_quality_cloth'
        }).id('comforts:sleeping_bag_white')
        global.dyeItem('', '_', colors, 'hammock', 'comforts:', null, null, 'comforts:hammock_white', null);
        event.shaped('comforts:hammock_white', [
            'A A',
            'SSS',
            'A A'
        ], {
            S: '#tfc:high_quality_cloth',
            A: '#tfc:firepit_sticks'
        }).id('comforts:hammock_white')
        global.dyeItem('_', '', colors, 'valve_handle', 'create:', null, 'create:valve_handles', 'create:copper_valve_handle', null);
        global.dyeItem('', '/', colors, 'wattle', 'tfc:', null, null, 'tfc:wattle/unstained', null);
        event.shapeless('tfc:wattle/unstained', ['tfc:wattle', '#tfc:firepit_sticks', '#tfc:firepit_sticks', '#tfc:firepit_sticks', '#tfc:firepit_sticks', 'tfc:daub'])
        global.dyeItem('_', '', colors, 'unfired_vessel', 'tfc:ceramic/', null, null, 'tfc:ceramic/unfired_vessel', null);
        global.dyeItem('', '/', colors, 'ceramic/unfired_large_vessel', 'tfc:', null, null, 'tfc:ceramic/unfired_large_vessel', null);
        global.dyeItem('', '_', colors, 'plastic_brick', 'pneumaticcraft:', null, 'pneumaticcraft:smooth_plastic_bricks', 'pneumaticcraft:plastic_brick_white', null);
        global.dyeItem('', '_', colors, 'smooth_plastic_brick', 'pneumaticcraft:', null, 'pneumaticcraft:plastic_bricks', 'pneumaticcraft:smooth_plastic_brick_white', null);
        global.dyeItem('', '_', colors, 'present', 'supplementaries:', null, 'supplementaries:presents', 'supplementaries:present', null);
        global.dyeItem('', '_', colors, 'flag', 'supplementaries:', null, 'supplementaries:flags', 'supplementaries:flag_white', null);
        event.shaped('supplementaries:flag_white', [
            'LS',
            'LS'
        ], {
            S: '#tfc:high_quality_cloth',
            L: '#tfc:firepit_sticks'
        }).id('supplementaries:flag_white')
        if(!global.isNewCreate) {
            global.dyeItem('_', '', colors, 'brass_flywheel', 'extendedflywheels:', null, 'forge:flywheels/brass_painted_flywheels', 'extendedflywheels:flywheel', 'brown');
            global.dyeItem('_', '', colors, 'steel_flywheel', 'extendedflywheels:', null, 'forge:flywheels/steel_painted_flywheels', 'extendedflywheels:steelflywheel', 'brown');
            global.dyeItem('_', '', colors, 'iron_flywheel', 'extendedflywheels:', null, 'forge:flywheels/iron_painted_flywheels', 'extendedflywheels:ironflywheel', 'brown');
        }
        global.dyeItem('_', '', colors, 'conductor_cap', 'railways:', null, 'railways:conductor_caps', 'railways:white_conductor_cap', null);
        global.dyeItem('', '_', colors, 'sheetmetal_colored', 'immersiveengineering:', null, null, 'immersiveengineering:sheetmetal_colored_white', null);
        global.dyeItem('_', '', colors, 'seat', 'create:', null, 'create:seats', 'create:white_seat', null);
        global.dyeItem('_', '', colors, 'rockwool', 'thermal:', null, 'thermal:rockwool', 'thermal:white_rockwool', null);
        global.dyeItem('_', '', colors, 'shingles', 'quark:', null, null, 'quark:shingles', null);
        global.dyeItem('_', '', colors, 'framed_glass', 'quark:', null, null, 'quark:framed_glass', null);
        event.remove({ output: 'quark:framed_glass' })
        event.shaped('8x quark:framed_glass', [
            'LLL',
            'LSL',
            'LLL'
        ], {
            S: '#forge:rods/cast_iron',
            L: 'minecraft:glass'
        }).id('quark:framed_glass')

        event.remove({ output: 'create:ornate_iron_window' })
        event.shaped('8x create:ornate_iron_window', [
            'LLL',
            'LSL',
            'LLL'
        ], {
            S: '#forge:rods/cast_iron',
            L: 'quark:framed_glass'
        }).id('create:ornate_iron_window')
        global.dyeItem('_', '', colors, 'framed_glass_pane', 'quark:', null, null, 'quark:framed_glass_pane', null);
        event.shaped(`16x quark:${colors}_framed_glass_pane`, [
            'SSS',
            'SSS'
        ], {
            S: `quark:${colors}_framed_glass`
        }).id(`quark:${colors}_framed_glass_pane_from_full_block`)
        global.dyeItem('_', '', colors, 'shard', 'quark:', null, null, 'quark:clear_shard', null);
        global.dyeItem('_', '', colors, 'chalk', 'chalk:', null, 'chalk:chalk', 'chalk:white_chalk', null);
        //event.recipes.tfc.damage_inputs_shapeless_crafting('2x chalk:white_chalk', ['tfc:brick/chalk', Item.of('#tfc:chisels').ignoreNBT()])
        global.addDamageInputShapeless(1, 'tfc:brick/chalk', 'chalk:white_chalk', "tfc:chisels", 2)



    })

})

onEvent('tags.items', event => {

    global.tagDyeItem = function tagDyeItem(prefix, suffix, color, item, mod, nodye) {

        event.add(`tfc:colored_${item}`, `${nodye}`)
        event.add('tfc:colored_ceramic/unfired_large_vessel', 'tfc:ceramic/unfired_large_vessel')
        event.add('tfc:colored_unfired_vessel', 'tfc:ceramic/unfired_vessel')
        event.add('tfc:colored_bed', 'minecraft:white_bed')
        //event.add('tfc:colored_concrete', 'immersiveengineering:concrete')
        event.add('tfc:colored_wool', 'minecraft:white_wool')
        event.add('tfc:colored_terracotta', 'minecraft:white_terracotta')
        event.add('tfc:colored_stained_glass', 'minecraft:white_stained_glass')
        event.add('tfc:colored_carpet', 'minecraft:white_carpet')
        event.add('tfc:colored_stained_glass_pane', 'minecraft:white_stained_glass_pane')
        event.add('tfc:colored_glazed_terracotta', 'minecraft:white_glazed_terracotta')
        event.add('tfc:colored_banner', 'minecraft:white_banner')
        if(!global.isNewCreate) {
            event.add('forge:flywheels/brass_painted_flywheels', 'extendedflywheels:flywheel')
            event.add('forge:flywheels/steel_painted_flywheels', 'extendedflywheels:steelflywheel')
            event.add('forge:flywheels/iron_painted_flywheels', 'extendedflywheels:ironflywheel')
        }

        if (prefix != '' && suffix == '') {
            event.add(`tfc:colored_${item}`, `${mod}${color}${prefix}${item}${suffix}`)
        } else if (suffix != '' && prefix == '') {
            event.add(`tfc:colored_${item}`, `${mod}${item}${suffix}${color}`)
        }
    }


    global.colors.forEach(colors => {
        event.remove(`forge:dyes/${colors}`, `chalk:${colors}_chalk`)

        global.tagDyeItem('_', '', colors, 'concrete', 'minecraft:', 'immersiveengineering:concrete');
        global.tagDyeItem('', '_', colors, 'sleeping_bag', 'comforts:', 'comforts:sleeping_bag_white');
        global.tagDyeItem('', '_', colors, 'hammock', 'comforts:', 'comforts:hammock_white');
        global.tagDyeItem('', '/', colors, 'wattle', 'tfc:', 'tfc:wattle');
        global.tagDyeItem('_', '', colors, 'unfired_vessel', 'tfc:ceramic/', 'tfc:ceramic/unfired_vessel');
        global.tagDyeItem('', '/', colors, 'ceramic/unfired_large_vessel', 'tfc:', 'tfc:ceramic/unfired_large_vessel');
        global.tagDyeItem('', '_', colors, 'sheetmetal_colored', 'immersiveengineering:', 'immersiveengineering:sheetmetal_colored_white');
        global.tagDyeItem('_', '', colors, 'shingles', 'quark:', 'quark:shingles');
        global.tagDyeItem('_', '', colors, 'framed_glass', 'quark:', 'quark:framed_glass');
        global.tagDyeItem('_', '', colors, 'framed_glass_pane', 'quark:', 'quark:framed_glass_pane');
        global.tagDyeItem('_', '', colors, 'shard', 'quark:', 'quark:clear_shard');

    })
})