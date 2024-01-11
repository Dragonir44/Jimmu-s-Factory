ServerEvents.recipes(event => {
    
    // The ultimate ingot
    event.custom({
        type: 'extendedcrafting:shapeless_table',
        ingredients:[
            {item: "minecraft:iron_ingot"},
            {item: "minecraft:copper_ingot"},
            {item: "minecraft:gold_ingot"},
            {item: "minecraft:netherite_ingot"},

            {item: "aquaculture:neptunium_ingot"},

            {item: "magistuarmory:steel_ingot"},

            {item: "undergarden:cloggrum_ingot"},
            {item: "undergarden:froststeel_ingot"},
            {item: "undergarden:forgotten_ingot"},

            {item: "bigreactors:yellorium_ingot"},
            {item: "bigreactors:blutonium_ingot"},
            {item: "bigreactors:graphite_ingot"},
            {item: "bigreactors:magentite_ingot"},
            {item: "bigreactors:ludicrite_ingot"},
            {item: "bigreactors:insanite_ingot"},
            {item: "bigreactors:inanite_ingot"},
            {item: "bigreactors:cyanite_ingot"},
            {item: "bigreactors:ridiculite_ingot"},

            {item: "create:andesite_alloy"},
            {item: "create:brass_ingot"},
            {item: "create:zinc_ingot"},
            {item: "createaddition:electrum_ingot"},
            {item: "createbigcannons:cast_iron_ingot"},

            {item: "blue_skies:ventium_ingot"},
            {item: "blue_skies:falsite_ingot"},
            {item: "blue_skies:horizonite_ingot"},
        ],
        result: {item: 'extendedcrafting:the_ultimate_ingot'}
    })

    // Cosmic blade
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "       TT",
            "      TET",
            "     TFT ",
            "    TET  ",
            "   TFT   ",
            "  TET    ",
            " TFT     ",
            "TET      ",
            "TT       "
        ],

        key: {
            T: {item: "extendedcrafting:the_ultimate_ingot"},
            E: {item: "extendedcrafting:ender_star"},
            F: {item: "extendedcrafting:flux_star"}
        },
        result: { item: 'kubejs:cosmic_blade' }
    })

    // infinity guard
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "TT     TT",
            "TST   TST",
            "TFHT THFT",
            " TERTRET ",
            "  TNSNT  ",
            "   TTT   "
        ],

        key: {
            T: {item: "extendedcrafting:the_ultimate_ingot"},
            E: {item: "extendedcrafting:ender_star"},
            F: {item: "extendedcrafting:flux_star"},
            S: {item: "extendedcrafting:ultimate_singularity"},
            H: {item: "minecraft:heart_of_the_sea"},
            N: {item: "minecraft:nether_star"},
            R: {item: "createchromaticreturn:refined_radiance"}
        },
        result: { item: 'kubejs:infinity_guard' }
    })

    // baton de la verite
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "       WS",
            "      WTW",
            "     WTW ",
            "    WTW  ",
            "   WSW   ",
            "  WTW    ",
            " WTW     ",
            "WTW      ",
            "SW       "
        ],

        key: {
            T: {item: "extendedcrafting:the_ultimate_ingot"},
            W: {tag: "minecraft:planks"},
            S: {item: "extendedcrafting:ultimate_singularity"}
        },
        result: { item: 'kubejs:baton_de_la_verite' }
    })

    // cosmic sword
    event.custom({
        type: "extendedcrafting:combination",
        powerCost: 1000000,
        input: {item: 'kubejs:infinity_guard'},
        ingredients: [
            {item: "kubejs:cosmic_blade"},
            {item: "kubejs:baton_de_la_verite"},
        ],
        result: { item: 'kubejs:cosmic_sword' }
    })
})