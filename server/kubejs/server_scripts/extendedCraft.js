ServerEvents.recipes(event => {
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "XXXXXXXXX",
            "X       X",
            "X       X",
            "X       X",
            "X       X",
            "X       X",
            "X       X",
            "X       X",
            "XXXXXXXXX"
        ],

        key: {
            X: {tag: "forge:ingots/gold"}
        },
        result: { item: 'minecraft:stone', count: 7 }
    })
})