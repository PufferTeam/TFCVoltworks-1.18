const ItemDescription = java('com.simibubi.create.foundation.item.ItemDescription');
const Palette = java('com.simibubi.create.foundation.item.ItemDescription$Palette');

onEvent('item.tooltip', event => {
  event.addAdvanced('minecraft:carved_pumpkin', (item, _, tooltip) => {
    new ItemDescription(Palette.Gray)
    .withSummary(Component.translate('item.minecraft.carved_pumpkin.tooltip.summary'))
    
    .withControl(Component.translate('item.minecraft.carved_pumpkin.tooltip.condition').string,

    Component.translate('item.minecraft.carved_pumpkin.tooltip.behaviour').string)
      .createTabs()
      .addInformation(tooltip);
  });
});