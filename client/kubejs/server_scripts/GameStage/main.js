ServerEvents.recipes((event) => {
    event.stage({mod: 'create', type: 'crafting_shaped'}, 'create')
    event.stage({mod: 'create', type: 'crafting_shapeless'}, 'create')
    event.stage({mod: 'ars_nouveau', type: 'crafting_shaped'}, 'ars_nouveau')
    event.stage({mod: 'ars_nouveau', type: 'crafting_shapeless'}, 'ars_nouveau')
    event.stage({mod: 'mna', type: 'crafting_shaped'}, 'mna')
    event.stage({mod: 'mna', type: 'crafting_shapeless'}, 'mna')
    event.stage({mod: 'botania', type: 'crafting_shaped'}, 'botania')
    event.stage({mod: 'botania', type: 'crafting_shapeless'}, 'botania')
    event.stage({mod: 'mekanism', type: 'crafting_shaped'}, 'mekanism')
    event.stage({mod: 'mekanism', type: 'crafting_shapeless'}, 'mekanism')
    event.stage({mod: 'bigreactors', type: 'crafting_shaped'}, 'bigreactors')
    event.stage({mod: 'bigreactors', type: 'crafting_shapeless'}, 'bigreactors')
    event.stage({mod: 'mysticalagriculture', type: 'crafting_shaped'}, 'mysticalagriculture')
    event.stage({mod: 'mysticalagriculture', type: 'crafting_shapeless'}, 'mysticalagriculture')
    event.stage({mod: 'minecolonies', type: 'crafting_shaped'}, 'minecolonies')
    event.stage({mod: 'minecolonies', type: 'crafting_shapeless'}, 'minecolonies')
})

const modsWithCraftingTable = [
    'com.refinedmods.refinedstorage',
    'net.p3pp3rf1y.sophisticatedcore',
    'com.lothrazar.storagenetwork',
    'mekanism.api',
    // 'com.tom.storagemod',
    // 'com.tom.storagemod.platform',
    // 'com.tom.storagemod.block',
    // 'com.tom.storagemod.emi',
    // 'com.tom.storagemod.gui',
    // 'com.tom.storagemod.util',
    // 'com.tom.storagemod.network',
    // 'com.tom.storagemod.tile',
    // 'com.tom.storagemod.item',
    // 'com.tom.storagemod.jei',
    // 'com.tom.storagemod.model',
    // 'com.tom.storagemod.rei',
    // 'com.tom.storagemod.components',
    // 'com.tom.storagemod.platform',
]

ServerEvents.commandRegistry(event => {
    event.register(event.getCommands().literal('sync_recipe_stages')
        .executes(function (command) {
            var player_stages = command.getSource().getEntity().getStages().getAll()
            var all_stages = Java.loadClass('com.blamejared.recipestages.RecipeStages').PACKAGE_STAGES;
            for (var mod of modsWithCraftingTable) {
                all_stages.putIfAbsent(mod, Java.loadClass("java.util.HashSet")())
                var mod_stages = all_stages[mod]
                mod_stages.clear()
                mod_stages.addAll(player_stages)
            }
            return 1
        })
    )
    event.register(event.getCommands().literal('add_recipe_stages')
        .executes(function (command) {
            var player_stages = command.getSource().getEntity().getStages().getAll()
            var all_stages = Java.loadClass('com.blamejared.recipestages.RecipeStages').PACKAGE_STAGES;
            all_stages.putIfAbsent('com.refinedmods.refinedstorage', Java.loadClass("java.util.HashSet")())
            var rs_stages = all_stages['com.refinedmods.refinedstorage'];
            rs_stages.addAll(player_stages)
            return 1
        })
    )
})