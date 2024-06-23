const modsWithCraftingTable = [
    'com.refinedmods.refinedstorage',
    'net.p3pp3rf1y.sophisticatedcore',
    'com.lothrazar.storagenetwork',
    'com.tom.storagemod.network',
    'mekanism.api',
    'mcjty.rftools.api',
    'mcjty.rftools.api.general',
    'mcjty.rftools',
]

ClientEvents.loggedIn(event => {
    var player_stages = event.player.getStages().getAll()
    var all_stages = Java.loadClass('com.blamejared.recipestages.RecipeStages').PACKAGE_STAGES;
    for (var mod of modsWithCraftingTable) {
        all_stages.putIfAbsent(mod, Java.loadClass("java.util.HashSet")())
        var mod_stages = all_stages[mod]
        mod_stages.clear()
        mod_stages.addAll(player_stages)
    }
})