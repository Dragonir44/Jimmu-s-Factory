PlayerEvents.tick(event => {
    const {player, player: {inventory}} = event

    if (inventory.contains('kubejs:ascended_flight_ring')) {
        if (!player.gameMode.isCreative()) {
            player.abilities.mayfly = true
        }
    }
    
    if (!inventory.contains('kubejs:ascended_flight_ring') && !player.vampAtts.vampSpecial.bat) {
        if (!player.gameMode.isCreative()) {
            player.abilities.mayfly = false
            player.abilities.flying = false
        }
    }
    player.onUpdateAbilities()
})