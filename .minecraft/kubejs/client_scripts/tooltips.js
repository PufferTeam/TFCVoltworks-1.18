const ItemDescription = java('com.simibubi.create.foundation.item.ItemDescription');
const Palette = java('com.simibubi.create.foundation.item.ItemDescription$Palette');

onEvent('item.tooltip', event => {
  event.addAdvanced('minecraft:carved_pumpkin', (item, _, tooltip) => {
    new ItemDescription(Palette.Gray)
      .withSummary(Component.translate('item.minecraft.carved_pumpkin.tooltip.summary'))

      .withBehaviour(Component.translate('item.minecraft.carved_pumpkin.tooltip.condition').string,
        Component.translate('item.minecraft.carved_pumpkin.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('immersiveengineering:hammer', (item, _, tooltip) => {
    new ItemDescription(Palette.Red)
      .withBehaviour(Component.translate('item.immersiveengineering.hammer.tooltip.condition').string,
        Component.translate('item.immersiveengineering.hammer.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:firestarter', (item, _, tooltip) => {
    new ItemDescription(Palette.Red)
      .withBehaviour(Component.translate('item.tfc.firestarter.tooltip.condition').string,
        Component.translate('item.tfc.firestarter.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:large_raw_hide', (item, _, tooltip) => {
    new ItemDescription(Palette.Yellow)
      .withBehaviour(Component.translate('item.tfc.large_raw_hide.tooltip.condition').string,
        Component.translate('item.tfc.large_raw_hide.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:bellows', (item, _, tooltip) => {
    new ItemDescription(Palette.Red)
      .withBehaviour(Component.translate('item.tfc.bellows.tooltip.condition').string,
        Component.translate('item.tfc.bellows.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:wattle', (item, _, tooltip) => {
    new ItemDescription(Palette.Gray)
      .withBehaviour(Component.translate('item.tfc.wattle.tooltip.condition').string,
        Component.translate('item.tfc.wattle.tooltip.behaviour').string)

      .withBehaviour(Component.translate('item.tfc.wattle.tooltip2.condition').string,
        Component.translate('item.tfc.wattle.tooltip2.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:composter', (item, _, tooltip) => {
    new ItemDescription(Palette.Green)
      .withBehaviour(Component.translate('item.tfc.composter.tooltip.condition').string,
        Component.translate('item.tfc.composter.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('firmalife:iron_composter', (item, _, tooltip) => {
    new ItemDescription(Palette.Green)
      .withBehaviour(Component.translate('item.tfc.composter.tooltip.condition').string,
        Component.translate('item.tfc.composter.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:ceramic/pot', (item, _, tooltip) => {
    new ItemDescription(Palette.Green)
      .withBehaviour(Component.translate('item.tfc.pot.tooltip.condition').string,
        Component.translate('item.tfc.pot.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:wrought_iron_grill', (item, _, tooltip) => {
    new ItemDescription(Palette.Green)
      .withBehaviour(Component.translate('item.tfc.grill.tooltip.condition').string,
        Component.translate('item.tfc.grill.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:barrel_rack', (item, _, tooltip) => {
    new ItemDescription(Palette.Gray)
      .withBehaviour(Component.translate('item.tfc.barrel_rack.tooltip.condition').string,
        Component.translate('item.tfc.barrel_rack.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:powderkeg', (item, _, tooltip) => {
    new ItemDescription(Palette.Red)
      .withBehaviour(Component.translate('item.tfc.powderkeg.tooltip.condition').string,
        Component.translate('item.tfc.powderkeg.tooltip.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  event.addAdvanced('tfc:pan/empty', (item, _, tooltip) => {
    new ItemDescription(Palette.Blue)
      .withBehaviour(Component.translate('item.tfc.pan.tooltip.condition').string,
        Component.translate('item.tfc.pan.tooltip.behaviour').string)

      .withBehaviour(Component.translate('item.tfc.pan.tooltip2.condition').string,
        Component.translate('item.tfc.pan.tooltip2.behaviour').string)

      .createTabs()
      .addInformation(tooltip);
  });

  function metalTooltip(mod, metal) {
    event.addAdvanced(`${mod}:metal/anvil/${metal}`, (item, _, tooltip) => {
      new ItemDescription(Palette.Yellow)
        .withSummary(Component.translate('item.tfc.anvil.tooltip.summary'))
        .withSummary(Component.translate('item.kubejs.none'))

        .withBehaviour(Component.translate('item.tfc.anvil.tooltip.condition').string,
          Component.translate('item.tfc.anvil.tooltip.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.anvil.tooltip2.condition').string,
          Component.translate('item.tfc.anvil.tooltip2.behaviour').string)

        .createTabs()
        .addInformation(tooltip);
    });

    event.addAdvanced(`${mod}:metal/lamp/${metal}`, (item, _, tooltip) => {
      new ItemDescription(Palette.Yellow)
        .withBehaviour(Component.translate('item.tfc.lamp.tooltip.condition').string,

          Component.translate('item.tfc.lamp.tooltip.behaviour').string)

        .createTabs()
        .addInformation(tooltip);
    });
  }

  global.tier1MetalTypes.forEach(i => metalTooltip('tfc', i));
  global.tier1MetallumMetalTypes.forEach(i => metalTooltip('tfc_metallum', i));

  function largeVesselsTooltip(vessel) {
    event.addAdvanced(vessel, (item, _, tooltip) => {
      new ItemDescription(Palette.Yellow)
        .withSummary(Component.translate('item.tfc.large_vessel.tooltip.summary'))
        .withSummary(Component.translate('item.kubejs.none'))

        .withBehaviour(Component.translate('item.tfc.large_vessel.tooltip.condition').string,
          Component.translate('item.tfc.large_vessel.tooltip.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.large_vessel.tooltip2.condition').string,
          Component.translate('item.tfc.large_vessel.tooltip2.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.large_vessel.tooltip3.condition').string,
          Component.translate('item.tfc.large_vessel.tooltip3.behaviour').string)

        .createTabs()
        .addInformation(tooltip);
    });
  }

  largeVesselsTooltip('tfc:ceramic/large_vessel')
  global.colors.forEach(i => largeVesselsTooltip(`tfc:ceramic/large_vessel/${i}`));

  function woodTooltip(wood) {
    event.addAdvanced(`tfc:wood/barrel/${wood}`, (item, _, tooltip) => {
      new ItemDescription(Palette.Yellow)
        .withSummary(Component.translate('item.tfc.barrel.tooltip.summary'))
        .withSummary(Component.translate('item.kubejs.none'))

        .withBehaviour(Component.translate('item.tfc.barrel.tooltip.condition').string,
          Component.translate('item.tfc.barrel.tooltip.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.barrel.tooltip2.condition').string,
          Component.translate('item.tfc.barrel.tooltip2.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.barrel.tooltip3.condition').string,
          Component.translate('item.tfc.barrel.tooltip3.behaviour').string)

        .createTabs()
        .addInformation(tooltip);
    });

    event.addAdvanced(`tfc:wood/planks/${wood}_bookshelf`, (item, _, tooltip) => {
      new ItemDescription(Palette.Yellow)
        .withSummary(Component.translate('item.tfc.bookshelf.tooltip.summary'))
        .withSummary(Component.translate('item.kubejs.none'))

        .withBehaviour(Component.translate('item.tfc.bookshelf.tooltip.condition').string,
          Component.translate('item.tfc.bookshelf.tooltip.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.bookshelf.tooltip2.condition').string,
          Component.translate('item.tfc.bookshelf.tooltip2.behaviour').string)

        .createTabs()
        .addInformation(tooltip);
    });
  }

  global.tfcWoodTypes.forEach(i => woodTooltip(i));

  function vesselsTooltip(vessel) {
    event.addAdvanced(vessel, (item, _, tooltip) => {
      new ItemDescription(Palette.Yellow)
        .withSummary(Component.translate('item.tfc.vessel.tooltip.summary'))
        .withSummary(Component.translate('item.kubejs.none'))

        .withBehaviour(Component.translate('item.tfc.vessel.tooltip.condition').string,
          Component.translate('item.tfc.vessel.tooltip.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.vessel.tooltip2.condition').string,
          Component.translate('item.tfc.vessel.tooltip2.behaviour').string)

        .withBehaviour(Component.translate('item.tfc.vessel.tooltip3.condition').string,
          Component.translate('item.tfc.vessel.tooltip3.behaviour').string)

        .createTabs()
        .addInformation(tooltip);
    });
  }

  vesselsTooltip('tfc:ceramic/vessel')
  global.colors.forEach(i => vesselsTooltip(`tfc:ceramic/${i}_glazed_vessel`));

});