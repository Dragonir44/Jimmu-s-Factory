ServerEvents.recipes((event) => {
    event.forEachRecipe({mod: "create", type: "crafting_shaped" || "crafting_shapeless"}, r => {
        let recipes = r.json

        recipes.addProperty("type", r.getType() == "minecraft:crafting_shaped" ? "kubejs:shaped" : r.getType() == "minecraft:crafting_shapeless" ? "kubejs:shapeless" : null)
        
        event.custom(recipes).id(r.getId()).stage("create")
    })

    event.forEachRecipe({mod: 'ars_nouveau'}, r => {
        let recipes = r.json

        recipes.addProperty("type", r.getType() == "minecraft:crafting_shaped" ? "kubejs:shaped" : r.getType() == "minecraft:crafting_shapeless" ? "kubejs:shapeless" : null)

        event.custom(recipes).id(r.getId()).stage("ars_nouveau")
    })

    event.forEachRecipe({mod: 'mna'}, r => {
        let recipes = r.json
        
        recipes.addProperty("type", r.getType() == "minecraft:crafting_shaped" ? "kubejs:shaped" : r.getType() == "minecraft:crafting_shapeless" ? "kubejs:shapeless" : null)

        event.custom(recipes).id(r.getId()).stage("mna")
    })

    event.forEachRecipe({mod: 'botania'}, r => {
        let recipes = r.json

        recipes.addProperty("type", r.getType() == "minecraft:crafting_shaped" ? "kubejs:shaped" : r.getType() == "minecraft:crafting_shapeless" ? "kubejs:shapeless" : null)

        event.custom(recipes).id(r.getId()).stage("botania")
    })

    event.forEachRecipe({mod: 'mekanism'}, r => {
        let recipes = r.json

        recipes.addProperty("type", r.getType() == "minecraft:crafting_shaped" ? "kubejs:shaped" : r.getType() == "minecraft:crafting_shapeless" ? "kubejs:shapeless" : null)

        event.custom(recipes).id(r.getId()).stage("mekanism")
    })

    event.forEachRecipe({mod: 'bigreactors'}, r => {
        let recipes = r.json

        recipes.addProperty("type", r.getType() == "minecraft:crafting_shaped" ? "kubejs:shaped" : r.getType() == "minecraft:crafting_shapeless" ? "kubejs:shapeless" : null)

        event.custom(recipes).id(r.getId()).stage("bigreactors")
    })

    event.forEachRecipe({mod: 'mysticalagriculture'}, r => {
        let recipes = r.json

        recipes.addProperty("type", r.getType() == "minecraft:crafting_shaped" ? "kubejs:shaped" : r.getType() == "minecraft:crafting_shapeless" ? "kubejs:shapeless" : null)

        event.custom(recipes).id(r.getId()).stage("mysticalagriculture")
    })
})