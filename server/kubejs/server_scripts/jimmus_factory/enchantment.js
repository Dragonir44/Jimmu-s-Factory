MoreJSEvents.filterAvailableEnchantments(e => {
    const item = e.getItem()

    if (item.id == 'kubejs:bang') {
        e.remove([
            'minecraft:sharpness', 
            'minecraft:efficiency', 
            'minecraft:silk_touch', 
            'minecraft:fortune', 
            'minecraft:binding_curse',
            'cyclic:excavate',
            'cyclic:auto_smelt',
            'cyclic:magnet',
            'cyclic:growth',
            'cyclic:experience_boost',
            'createchromaticreturn:wrenching',
            'createchromaticreturn:super_silk_touch',
            'createchromaticreturn:durable'
        ])
    }
})