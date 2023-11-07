StartupEvents.registry('item', e => {
    e.create('elysium_sword_op', 'sword')
        .displayName('Elysium Sword')
        .tooltip('A sword made of Elysium')
        .unstackable()
        .tier('elysium_tier')
        .texture('kubejs:item/elysium_sword')
})