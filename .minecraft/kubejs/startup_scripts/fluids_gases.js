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
    'styrene/0xA9A199/true',
    'cumene/0x7D5B44/true',
    'methanol/0x875D75/true',
    'octane/0xC5DFE1/true',
    'ammonia/0x7C61C1/true',
    'nitrogen/0x9C82DD/true',
    'helium/0xFFE16D/true',
    'carbon_dioxide/0x747376/true',
    'sodium_chloride/0xC5E0E1/true',
    'bisphenol_a/0xC39300/true',
    'phosphorus_pentoxide/0xC6871F/true',
    'phosphoric_acid/0xC39300/true',
    'nitric_acid/0xC5C136/true',
    'nitration_mixture/0xFFFC9C/true',
    'tetrafluoroethylene/0x98A0A6/true',
    'polydimethylsiloxane/0x98A0A6/true',
    'polytetrafluorene/0x636363/true',
    'chloroform/0xE0852D/true',
    'acetylene/0xEAB3C2/false',
    'bioethylene/0xD5AFC4/false',
    'biopolyethylene/0xAC8D9E/false',
    'vinyl_chloride/0xCCF9F7/true',
    'polyvinyl_chloride/0xA9D0CE/true',
    'polyethylene/0xBFA6CC/true',
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
    'rubber/0xC4B593/false',
    'vulcanized_rubber/0x3E373D/false',
    'silicon_rubber/0x7F6D61/false',
    'isoprene_rubber/0x8F552F/false',
    'styrene_butadiene_rubber/0xD49858/false'
)