StartupEvents.registry('item', e => {
    e.create('diamonded_coal', 'basic')
        .displayName('Diamonded Coal')
        .unstackable()
        .texture('kubejs:item/diamonded_coal')
})

ItemEvents.modification(e => {
    e.modify('kubejs:charcoal_block', item => {
        item.burnTime = 1600 * 10
    })
})