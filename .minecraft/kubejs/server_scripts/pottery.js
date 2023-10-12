// priority: 1100

onEvent('tags.items', event => {

const tools = event.get('tfc:usable_on_tool_rack').getObjectIds()
const vessels = event.get('tfc:vessels').getObjectIds()
const largeVessels = event.get('tfc:large_vessels').getObjectIds()
const unfiredPottery = event.get('tfc:unfired_pottery').getObjectIds()
const molds = event.get('tfc:molds').getObjectIds()

tools.forEach(i => event.add('tfc:placed_item_whitelist', i))
vessels.forEach(i => event.add('tfc:placed_item_whitelist', i))
largeVessels.forEach(i => event.add('tfc:placed_item_whitelist', i))
unfiredPottery.forEach(i => event.add('tfc:placed_item_whitelist', i))
molds.forEach(i => event.add('tfc:placed_item_whitelist', i))

global.extraPotteryItems = [
    'tfc:ceramic/pot',
    'minecraft:flower_pot',
    'supplementaries:flower_box',
    'tfcchannelcasting:mold_table',
    'tfc:crucible',
    'tfc:ceramic/fire_brick',
    'minecraft:brick',
    'kubejs:brick/unfired_ash_brick',
    'kubejs:brick/unfired_bloomery_brick',
    'kubejs:brick/unfired_coke_oven_brick',
    'kubejs:brick/bloomery_brick',
    'kubejs:brick/coke_oven_brick',
    'kubejs:brick/tfcfire_brick',
    'kubejs:brick/unfired_fire_brick',
    'supplementaries:ash_brick'
]

global.extraPotteryItems.forEach(i => event.add('tfc:placed_item_whitelist', i))

})

onEvent('recipes', event => {

    function fireCasting(mod, metal) {
        global.addFireCasting(`${mod}:metal/${metal}`, `${mod}:metal/ingot/${metal}`)
    }
    global.tfcMetallumMetalTypes.forEach(i => fireCasting('tfc_metallum', i))
    global.firmalifeMetalTypes.forEach(i => fireCasting('firmalife', i))
})