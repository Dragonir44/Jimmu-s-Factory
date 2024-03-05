const hiddenItems = [
    "cyclic:battery_infinite",
    "bigreactors:reinforced_reactorcreativewatergenerator",
    "bigreactors:basic_turbinecreativesteamgenerator",
    "bigreactors:reinforced_turbinecreativesteamgenerator",
    "storagedrawers:creative_storage_upgrade",
    "storagedrawers:creative_vending_upgrade",
    "born_in_chaos_v1:supreme_measure",
    "create_sa:creative_filling_tank",
    "ars_nouveau:creative_spell_book",
    "ars_nouveau:creative_source_jar",
    "botania:creative_pool",
    "botania:infrangible_platform",
    "botania:corporea_spark_creative",
    "electrodynamics:creativepowersource",
    "electrodynamics:creativefluidsource",
    "mekanism:creative_bin",
    "mekanism:creative_fluid_tank",
    "mekanism:creative_energy_cube",
    "mekanism:creative_chemical_tank",
    "mysticalagriculture:creative_soulium_dagger",
    "mysticalagradditions:creative_essence"
]

JEIEvents.hideItems(event => {
    for(const hiddenItem of hiddenItems) {
        event.hide(hiddenItem)
    }
})

// JEIEvents.removeRecipes(event => {
//     for(const hiddenItem of hiddenItems) {
//         event.remove(hiddenItem)
//     }
// })