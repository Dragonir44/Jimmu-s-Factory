LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/.*chest.*/)
        .randomChance(0.001)
        .addLoot('kubejs:elysium_sword_op')
})