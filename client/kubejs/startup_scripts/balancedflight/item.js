StartupEvents.registry('item', e => {
    e.create('ascended_flight_ring')
        .displayName('Ascended Flight Ring')
        .unstackable()
        .tooltip(Text.gold('An incridibly dense golden ring. Despite its weight, it allows you to fly anywhere (Angel Ring)'))
        .tooltip('Allows both creative and enabled Elytra flight')
        .texture('balancedflight:item/ascended_flight_ring')
})