onEvent('recipes', event => {

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'botania:terrasteel_ingot', 'tfc_metalwork:metal/plate/blutonium')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'botania:terrasteel_ingot', 'tfc_metalwork:metal/plate/blutonium')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'botania:terrasteel_nugget', 'tfc_metallum:metal/rod/blutonium')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'botania:terrasteel_nugget', 'tfc_metalwork:metal/rod/blutonium')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'botania:elementium_ingot', 'tfc_metalwork:metal/plate/pink_slime')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'botania:elementium_ingot', 'tfc_metalwork:metal/plate/pink_slime')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'botania:elementium_nugget', 'tfc_metallum:metal/rod/pink_slime')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'botania:elementium_nugget', 'tfc_metalwork:metal/rod/pink_slime')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'botania:manasteel_ingot', 'tfc_metalwork:metal/plate/mithril')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'botania:manasteel_ingot', 'tfc_metalwork:metal/plate/mithril')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'botania:manasteel_nugget', 'tfc_metallum:metal/rod/mithril')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'botania:manasteel_nugget', 'tfc_metalwork:metal/rod/mithril')

    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'botania:manasteel_block', 'tfc_metalwork:metal/block/mithril')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'botania:manasteel_block', 'tfc_metalwork:metal/block/mithril')
});