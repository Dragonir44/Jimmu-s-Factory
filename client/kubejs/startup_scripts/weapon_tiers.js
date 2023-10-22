ItemEvents.toolTierRegistry(e => {
    e.add('elysium_tier', tier => {
        tier.uses = 100000
        tier.speed = 6.0
        tier.attackDamageBonus = 46.0
        tier.level = 4
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/netherite'
    })
})