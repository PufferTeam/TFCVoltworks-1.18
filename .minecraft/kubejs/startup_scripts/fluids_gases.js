global.customFluidGas = [
    'benzene/0x626262/false',
    'propylene/0xCDA97C/false',
    'isoprene/0x7C5f31/false',
    'methane/0xAD80B2/true',
    'methanol/0x875D75/true',
    'ammonia/0x7C61C1/true',
    'nitrogen/0x9C82DD/true',
    'carbon_dioxide/0x747376/true',
    'nitric_acid/0xC5C136/true',
    'nitration_mixture/0xFFFC9C/true',
    'polydimethylsiloxane/0x565656/true',
    'polytetrafluorene/0x687070/true',
    'acetylene/0xEAB3C2/true'
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
    'polycaprolactam/0x6D6C60/false',
    'thermoplastic_starch/0x9D9D89/false'
)