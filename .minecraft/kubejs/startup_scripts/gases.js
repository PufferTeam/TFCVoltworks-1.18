const $EventBuses = java('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = java('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = java('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = java('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')
const SLURRY = new $SlurryDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')

global.gasesToAdd.forEach(i => {
    let result = i.split('/')
    let name = result[0]
    let color = result[1]

    GASES.register(name, color)
});

GASES.register('example_gas', 0xA020F0)
//SLURRY.register('example_slurry', builder => builder.color(0xA020F0))
//INFUSETYPE.register('example_infuse_type', 0xA020F0)

GASES.register($EventBuses.getModEventBus('kubejs').get())
SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())
