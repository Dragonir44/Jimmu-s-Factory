ServerEvents.recipes(e => {
    e.recipes.create.sequenced_assembly([
        Item.of('kubejs:flight_anchor').withChance(100.0)
    ], 'minecraft:beacon', [
        e.recipes.createDeploying('minecraft:beacon', ['minecraft:beacon', 'create:precision_mechanism']),
        e.recipes.createDeploying('minecraft:beacon', ['minecraft:beacon', 'create:railway_casing']),
        e.recipes.createDeploying('minecraft:beacon', ['minecraft:beacon', 'create:brass_block']),
        e.recipes.createDeploying('minecraft:beacon', ['minecraft:beacon', 'minecraft:glass']),
        e.recipes.createDeploying('minecraft:beacon', ['minecraft:beacon', 'minecraft:feather'])
    ]).transitionalItem('minecraft:beacon').loops(1)

    e.recipes.create.mechanical_crafting('kubejs:ascended_flight_ring', [
        ' GGGGG ',
        'GGGNGGG',
        'GGBIBGG',
        'GNIEING',
        'GGBIBGG',
        'GGGNGGG',
        ' GGGGG '
    ], {
        G: 'minecraft:gold_block',
        N: 'minecraft:nether_star',
        B: 'minecraft:netherite_block',
        I: 'minecraft:netherite_ingot',
        E: 'minecraft:elytra'
    })
})