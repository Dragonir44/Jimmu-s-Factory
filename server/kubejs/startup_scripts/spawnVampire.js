// increase spawn rate of vampire baron in the vampire forest
WorldgenEvents.add(event => {
    event.addSpawn(prop => {
        prop.category = 'monster'
        prop.entity = 'vampirism:vampire_baron'
        prop.biomes = ['vampirism:vampire_forest']
        prop.maxCount = 10
        prop.minCount = 1
        prop.weight = 100
    })

    event.addSpawn(prop => {
        prop.category = 'monster'
        prop.entity = 'vampirism:vampire'
        prop.maxCount = 10
        prop.minCount = 1
        prop.weight = 80
        prop.biomes = "#minecraft:is_overworld"
    })
    event.addSpawn(prop => {
        prop.category = 'monster'
        prop.entity = 'vampirism:advanced_vampire'
        prop.maxCount = 10
        prop.minCount = 1
        prop.weight = 80
        prop.biomes = "#minecraft:is_overworld"
    })
})