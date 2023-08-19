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

})

onEvent('recipes', event => {
    global.addBlasting('tfc:ceramic/unfired_vessel', 'tfc:ceramic/vessel')
    global.colors.forEach(i => global.addBlasting(`tfc:ceramic/${i}_unfired_vessel`, `tfc:ceramic/${i}_glazed_vessel`))
    global.addBlasting('tfc:ceramic/unfired_large_vessel', 'tfc:ceramic/large_vessel')
    global.colors.forEach(i => global.addBlasting(`tfc:ceramic/unfired_large_vessel/${i}`, `tfc:ceramic/large_vessel/${i}`))
    global.tfcMoldTypes.forEach(i => global.addBlasting(`tfc:ceramic/unfired_${i}_mold`, `tfc:ceramic/${i}_mold`))
    global.addBlasting("tfc:ceramic/unfired_bowl", "tfc:ceramic/bowl")
    global.addBlasting("tfc:ceramic/unfired_fire_brick", "tfc:ceramic/fire_brick")
    global.addBlasting("tfc:ceramic/unfired_pot", "tfc:ceramic/pot")
    global.addBlasting("tfc:ceramic/unfired_spindle_head", "tfc:ceramic/spindle_head")
    global.addBlasting("tfc:ceramic/unfired_brick", "minecraft:brick")
    global.addBlasting("tfc:ceramic/unfired_crucible", "tfc:crucible")
    global.addBlasting("tfc:ceramic/unfired_flower_pot", "minecraft:flower_pot")
    global.addBlasting("tfc:ceramic/unfired_jug", "tfc:ceramic/jug")
    global.addBlasting("tfc:ceramic/unfired_pan", "tfc:pan/empty")

    function fireCasting(mod, metal) {
        global.addFireCasting(`${mod}:metal/${metal}`, `${mod}:metal/ingot/${metal}`)
    }
    global.tfcMetallumMetalTypes.forEach(i => fireCasting('tfc_metallum', i))
    global.firmalifeMetalTypes.forEach(i => fireCasting('firmalife', i))
})