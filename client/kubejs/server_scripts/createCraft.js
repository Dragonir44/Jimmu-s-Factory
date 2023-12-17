ServerEvents.recipes(e => {
	e.recipes.create.sequenced_assembly([
		Item.of('minecraft:diamond').withChance(130.0),
        Item.of('minecraft:coal').withChance(50.0),
	], 'kubejs:charcoal_block', [
        e.recipes.createPressing('kubejs:diamonded_coal', 'kubejs:diamonded_coal'),
	]).transitionalItem('kubejs:diamonded_coal').loops(64)

	e.recipes.createEmptying([
		'minecraft:bucket', 
		Fluid.of('createchromaticreturn:refined_mixture', 1000)
	], 'createchromaticreturn:refined_mixture_bucket')

	e.recipes.createEmptying([
		'minecraft:bucket', 
		Fluid.of('createchromaticreturn:shadow_essence', 1000)
	], 'createchromaticreturn:shadow_essence_bucket')
})