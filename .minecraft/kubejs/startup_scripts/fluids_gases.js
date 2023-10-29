global.customFluidGas = [
    'benzene/0x5C5A57/true',
    'butadiene/0x6D6551/true',
    'propylene/0xB8905F/true',
    'propane/0xCDA97C/true',
    'butane/0x652715/true',
    'toluene/0x895411/true',
    'isoprene/0x7C5f31/true',
    'methane/0xAD80B2/true',
    'ethane/0x5E797C/true',
    'methanol/0x875D75/true',
    'octane/0xC5DFE1/true',
    'ammonia/0x7C61C1/true',
    'nitrogen/0x9C82DD/true',
    'helium/0xFFE16D/true',
    'carbon_dioxide/0x747376/true',
    'nitric_acid/0xC5C136/true',
    'nitration_mixture/0xFFFC9C/true',
    'polydimethylsiloxane/0x98A0A6/true',
    'polytetrafluorene/0x687070/true',
    'acetylene/0xEAB3C2/false'
]

global.fluidsToAdd = []
global.gasesToAdd = []

global.customFluidGas.forEach(i => {
    global.fluidsToAdd.push(i)
    global.gasesToAdd.push(i)
});

global.fluidsToAdd.push(
    'biomass/0x7DBA60/false',
    'fermented_biomass/0x54873C/false',
    'biogas/0xC0C973/false',
    'rubber/0xAfA88F/false'
)