const FireworkRocketEntity = Java.loadClass('net.minecraft.world.entity.projectile.FireworkRocketEntity')
const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const Items = Java.loadClass('net.minecraft.world.item.Items')

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
            // player.sendData('useFireworks')
            FireRocket(player.uuid, event)
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


function FireRocket(uuid, event) {
    const player = event.server.getPlayerList().getPlayer(uuid);

    if (player == null)
        return;

    const itemstack = new ItemStack(Items.FIREWORK_ROCKET, 64);
    player.level.addFreshEntity(new FireworkRocketEntity(player.level, itemstack, player));
}
