StartupEvents.registry('item', e => {
    e.create('elysium_sword_op', 'sword')
        .displayName('Elysium Sword')
        .tooltip('A sword made of Elysium')
        .unstackable()
        .rarity('rare')
        .tier('elysium_tier')
        .texture('jimmus_factory:item/elysium_sword')

    e.create('cosmic_sword', 'sword')
        .displayName('Cosmic Sword')
        .tooltip('A sword made of Cosmic Energy (WIP)')
        .unstackable()
        .rarity('epic')
        .tier('cosmic_tier')
        .parentModel('jimmus_factory:item/cosmic_sword')
        
    e.create('cosmic_blade', 'sword')
        .displayName('Cosmic blade')
        .tooltip('A piece of the Cosmic Sword (WIP)')
        .unstackable()
        .rarity('epic')
        .tier('cosmic_tier')
        .attackDamageBonus(500-4)
        .parentModel('jimmus_factory:item/cosmic_blade')
    
    e.create('infinity_guard', 'basic')
        .displayName('Infinity Guard')
        .tooltip('A piece of the Cosmic Sword (WIP)')
        .unstackable()
        .rarity('epic')
        .parentModel('jimmus_factory:item/infinity_guard')
        
    e.create('baton_de_la_verite', 'basic')
        .displayName('Baton de la vérité')
        .tooltip('A piece of the Cosmic Sword (WIP)')
        .unstackable()
        .rarity('epic')
        .parentModel('jimmus_factory:item/baton_de_la_verite')
})