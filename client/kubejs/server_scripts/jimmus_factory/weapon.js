const MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

PlayerEvents.tick(event => {
    const {player} = event
    // if (player.mainHandItem.id == 'kubejs:infinity_guard' || player.offHandItem.id == 'kubejs:infinity_guard') {
    //     player.addEffect(new MobEffectInstance('minecraft:regeneration', 1, 2))
    //     player.addEffect(new MobEffectInstance('minecraft:resistance', 1, 2))
    //     player.addEffect(new MobEffectInstance('minecraft:fire_resistance', 1, 2))
    // }
    // if (player.mainHandItem.id == 'kubejs:baton_de_la_verite' || player.offHandItem.id == 'kubejs:baton_de_la_verite') {
    //     player.addEffect(new MobEffectInstance('minecraft:strength', 1, 2))
    //     player.addEffect(new MobEffectInstance('minecraft:haste', 1, 2))
    // }
    // if (player.mainHandItem.id == 'kubejs:cosmic_blade') {
    //     player.health = 1
    // }

    // if (player.mainHandItem.id == 'kubejs:cosmic_sword' || player.offHandItem.id == 'kubejs:cosmic_sword') {
    //     player.addEffect(new MobEffectInstance('minecraft:regeneration', 1, 5))
    //     player.addEffect(new MobEffectInstance('minecraft:resistance', 1, 5))
    //     player.addEffect(new MobEffectInstance('minecraft:fire_resistance', 1, 5))
    //     player.addEffect(new MobEffectInstance('minecraft:strength', 1, 5))
    //     player.addEffect(new MobEffectInstance('minecraft:haste', 1, 5))
    // }
})