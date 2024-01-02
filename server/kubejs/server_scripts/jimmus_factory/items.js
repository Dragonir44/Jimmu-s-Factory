ItemEvents.firstRightClicked(e => {
    const {player} = e
    if (e.item.id == 'kubejs:bang') {
        player.addEffect(new MobEffectInstance('minecraft:absorption', 20*20, e.item.damageValue))
        e.item.damageValue++
        console.log(e.item.damageValue)
        if (e.item.damageValue >= 10) {
            player.tell('Bang!')
            player.mainHandItem.setCount(0)
        }
    }
})