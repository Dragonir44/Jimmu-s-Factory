ServerEvents.recipes((event) => {
    event.forEachRecipe({mod: "create"}, r => {
        let recipes = r.json

        if (r.getType() == "minecraft:crafting_shaped" || r.getType() == "minecraft:crafting_shapeless") {
            if (r.getType() == "minecraft:crafting_shaped") {
                recipes.addProperty("type", "kubejs:shaped")
            }
            if (r.getType() == "minecraft:crafting_shapeless") {
                recipes.addProperty("type", "kubejs:shapeless")
            }
            
            event.custom(recipes).id(r.getId()).stage("create")
        }
    })

    event.forEachRecipe({mod: 'ars_nouveau'}, r => {
        let recipes = r.json

        if (r.getType() == "minecraft:crafting_shaped" || r.getType() == "minecraft:crafting_shapeless") {
            if (r.getType() == "minecraft:crafting_shaped") {
                recipes.addProperty("type", "kubejs:shaped")
            }
            if (r.getType() == "minecraft:crafting_shapeless") {
                recipes.addProperty("type", "kubejs:shapeless")
            }
            
            event.custom(recipes).id(r.getId()).stage("ars_nouveau")
        }
    })

    event.forEachRecipe({mod: 'mna'}, r => {
        let recipes = r.json
        
        if (r.getType() == "minecraft:crafting_shaped" || r.getType() == "minecraft:crafting_shapeless") {
            if (r.getType() == "minecraft:crafting_shaped") {
                recipes.addProperty("type", "kubejs:shaped")
            }
            if (r.getType() == "minecraft:crafting_shapeless") {
                recipes.addProperty("type", "kubejs:shapeless")
            }
            event.custom(recipes).id(r.getId()).stage("mna")
        }
    })

    event.forEachRecipe({mod: 'botania'}, r => {
        let recipes = r.json

        if (r.getType() == "minecraft:crafting_shaped" || r.getType() == "minecraft:crafting_shapeless") {
            if (r.getType() == "minecraft:crafting_shaped") {
                recipes.addProperty("type", "kubejs:shaped")
            }
            if (r.getType() == "minecraft:crafting_shapeless") {
                recipes.addProperty("type", "kubejs:shapeless")
            }
            event.custom(recipes).id(r.getId()).stage("botania")
        }
    })

    event.forEachRecipe({mod: 'mekanism'}, r => {
        let recipes = r.json

        if (r.getType() == "minecraft:crafting_shaped" || r.getType() == "minecraft:crafting_shapeless") {
            if (r.getType() == "minecraft:crafting_shaped") {
                recipes.addProperty("type", "kubejs:shaped")
            }
            if (r.getType() == "minecraft:crafting_shapeless") {
                recipes.addProperty("type", "kubejs:shapeless")
            }
            
            event.custom(recipes).id(r.getId()).stage("mekanism")
        }
    })

    event.forEachRecipe({mod: 'bigreactors'}, r => {
        let recipes = r.json

        if (r.getType() == "minecraft:crafting_shaped" || r.getType() == "minecraft:crafting_shapeless") {
            if (r.getType() == "minecraft:crafting_shaped") {
                recipes.addProperty("type", "kubejs:shaped")
            }
            if (r.getType() == "minecraft:crafting_shapeless") {
                recipes.addProperty("type", "kubejs:shapeless")
            }
            
            event.custom(recipes).id(r.getId()).stage("bigreactors")
        }
    })

    event.forEachRecipe({mod: 'mysticalagriculture'}, r => {
        let recipes = r.json

        if (r.getType() == "minecraft:crafting_shaped" || r.getType() == "minecraft:crafting_shapeless") {
            if (r.getType() == "minecraft:crafting_shaped") {
                recipes.addProperty("type", "kubejs:shaped")
            }
            if (r.getType() == "minecraft:crafting_shapeless") {
                recipes.addProperty("type", "kubejs:shapeless")
            }
            
            event.custom(recipes).id(r.getId()).stage("mysticalagriculture")
        }
    })
})