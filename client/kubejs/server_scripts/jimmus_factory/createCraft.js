ServerEvents.recipes(e => {
	e.recipes.createEmptying([
		'minecraft:bucket', 
		Fluid.of('createchromaticreturn:refined_mixture', 1000)
	], 'createchromaticreturn:refined_mixture_bucket')

	e.recipes.createEmptying([
		'minecraft:bucket', 
		Fluid.of('createchromaticreturn:shadow_essence', 1000)
	], 'createchromaticreturn:shadow_essence_bucket')

	e.recipes.createEmptying([
		'minecraft:bucket', 
		Fluid.of('create_things_and_misc:diluted_bonemeal', 1000)
	], 'kubejs:diluted_bonemeal_bucket')

	e.recipes.createFilling('kubejs:diluted_bonemeal_bucket', [
		'minecraft:bucket',
		Fluid.of('create_things_and_misc:diluted_bonemeal', 1000),
	])

	e.recipes.createMixing('minecraft:cobblestone', [
		Fluid.of('minecraft:water', 1000),
		Fluid.of('minecraft:lava', 1000)
	])
})