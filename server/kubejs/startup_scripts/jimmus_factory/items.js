StartupEvents.registry('item', e => {
    e.create('diamonded_coal', 'basic')
        .displayName('Diamonded Coal')
        .unstackable()
        .texture('jimmus_factory:item/diamonded_coal')

    e.create('bang', 'hoe')
        .displayName('Bang')
        .unstackable()
        .attackDamageBonus(0-4)
        .parentModel('jimmus_factory:item/bang')
        .tier('bang_tier')

    e.create('diluted_bonemeal_bucket', 'basic')
        .displayName('Diluted Bonemeal Bucket')
        .unstackable()
        .texture('jimmus_factory:item/diluted_bonemeal_bucket')
})

ItemEvents.modification(e => {
    e.modify('jimmus_factory:charcoal_block', item => {
        item.burnTime = 1600 * 10
    })
})