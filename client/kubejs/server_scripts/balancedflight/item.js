let hasRing = {}
let isFallFlying = {}

PlayerEvents.tick(event => {
    const {player, player: {inventory}} = event

    if (hasRing[player.name] == undefined) {
        hasRing[player.name] = false
    }

    if (inventory.contains('kubejs:ascended_flight_ring') && !hasRing[player.name]) {
        if (player.gameMode != 'creative' && !player.abilities.mayfly) {
            player.abilities.mayfly = true
            hasRing[player.name] = true
        }
    }
    
    if (hasRing[player.name] && !player.onGround() && !isFallFlying[player.name] && !player.abilities.flying) {
        event.server.scheduleInTicks(2, () => {
            if (player.fallDistance > 0.0 && Client.isKeyDown(32)) {
                event.server.scheduleInTicks(1, () => {
                    if (!Client.isKeyDown(32)) {
                        isFallFlying[player.name] = true
                    }
                })
            }
        })
        
    }
    else if (!hasRing[player.name] || player.onGround() || player.abilities.flying) {
        isFallFlying[player.name] = false
        player.stopFallFlying()
    }
    
    if (isFallFlying[player.name]) {
        player.startFallFlying()
        if (player.sprinting) {
            player.sendData('useFireworks')
        }
    }

    if (!inventory.contains('kubejs:ascended_flight_ring') && hasRing[player.name]) {
        if (player.gameMode != 'creative' && player.abilities.mayfly) {
            player.abilities.mayfly = false
            player.abilities.flying = false
            hasRing[player.name] = false
        }
    }
    player.onUpdateAbilities()
})

// Fonction pour convertir degrés en radians
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};