StartupEvents.registry('item', e => {
    e.create('elysium_sword', 'sword')
        .displayName('Elysium Sword')
        .tooltip('A sword made of Elysium')
        .maxStackSize(1)
        .tier('elysium_tier')
})