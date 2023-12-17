StartupEvents.registry('item', e => {
    e.create('diamonded_coal', 'basic')
        .displayName('Diamonded Coal')
        .unstackable()
        .texture('kubejs:item/diamonded_coal')

    e.create('bang', 'hoe')
        .displayName('Bang')
        .unstackable()
        .attackDamageBonus(0-4)
        .parentModel('kubejs:item/bang')
        .tier('bang_tier')
})

ItemEvents.modification(e => {
    e.modify('kubejs:charcoal_block', item => {
        item.burnTime = 1600 * 10
    })
})