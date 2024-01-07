PlayerEvents.tick(event => {
    const {player, player: {inventory}} = event

    player.hasRing = inventory.contains('kubejs:ascended_flight_ring')

    if (inventory.contains('kubejs:ascended_flight_ring') && !player.hasRing) {
        if (player.gameMode != 'creative' && !player.abilities.mayfly) {
            player.abilities.mayfly = true
            player.hasRing = true
        }
    }

    if (!inventory.contains('kubejs:ascended_flight_ring') && player.hasRing) {
        if (player.gameMode != 'creative' && player.abilities.mayfly) {
            player.abilities.mayfly = false
            player.abilities.flying = false
            player.hasRing = false
        }
    }
    player.onUpdateAbilities()
})