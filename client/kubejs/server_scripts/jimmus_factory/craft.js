ServerEvents.recipes(event => {
    // Remove
    event.remove({output: "buildersaddition:table_oak", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_spruce", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_birch", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_dark_oak", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_jungle", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_acacia", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_crimson", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_warped", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_mangrove", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_cherry", type: "minecraft:crafting_shaped"})
    event.remove({output: "buildersaddition:table_bamboo", type: "minecraft:crafting_shaped"})

    // Shaped
    event.shaped(
        Item.of("buildersaddition:table_oak", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:oak_planks',
            B: 'minecraft:oak_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_spruce", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:spruce_planks',
            B: 'minecraft:spruce_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_birch", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:birch_planks',
            B: 'minecraft:birch_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_dark_oak", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:dark_oak_planks',
            B: 'minecraft:dark_oak_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_jungle", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:jungle_planks',
            B: 'minecraft:jungle_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_acacia", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:acacia_planks',
            B: 'minecraft:acacia_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_crimson", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:crimson_planks',
            B: 'minecraft:crimson_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_warped", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:warped_planks',
            B: 'minecraft:warped_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_mangrove", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:mangrove_planks',
            B: 'minecraft:mangrove_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_cherry", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:cherry_planks',
            B: 'minecraft:cherry_fence'
        }
    )

    event.shaped(
        Item.of("buildersaddition:table_bamboo", 2),
        [
            'AA ',
            'BB ',
            'BB '
        ],
        {
            A: 'minecraft:bamboo',
            B: 'minecraft:bamboo_fence'
        }
    )

    // Shapless
    event.shapeless(
        Item.of("minecraft:pointed_dripstone", 4),
        [
            "minecraft:dripstone_block"
        ]
    )

    event.shapeless(
        Item.of("minecraft:charcoal", 9),
        [
            "kubejs:charcoal_block"
        ]
    )
    event.shapeless(
        Item.of("kubejs:charcoal_block", 1),
        [
            "9x minecraft:charcoal"
        ]
    )
})