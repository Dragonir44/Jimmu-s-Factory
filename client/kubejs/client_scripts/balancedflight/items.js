const FireworkRocketEntity = Java.loadClass('net.minecraft.world.entity.projectile.FireworkRocketEntity')
const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')

NetworkEvents.dataReceived('useFireworks', event => {
    const {player} = event
    console.log(new FireworkRocketEntity(player.getLevel(), player.x, player.y, player.z, Item.of('minecraft:firework_rocket')))
    player.level.addFreshEntity(new FireworkRocketEntity(player.getLevel(), player.x, player.y, player.z, Item.of('minecraft:firework_rocket')))
})