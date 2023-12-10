ServerEvents.recipes(e => {
	e.recipes.create.sequenced_assembly([
		Item.of('minecraft:diamond').withChance(130.0),
        Item.of('minecraft:charcoal').withChance(50.0),
	], 'minecraft:coal_block', [
		// e.recipes.createDeploying('kubejs:diamonded_coal', ['kubejs:diamonded_coal', '64x minecraft:coal']),
        e.recipes.createPressing('kubejs:diamonded_coal', 'kubejs:diamonded_coal'),
	]).transitionalItem('kubejs:diamonded_coal').loops(64) // set the transitional item and the number of loops
})