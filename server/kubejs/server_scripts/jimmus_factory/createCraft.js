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

	e.recipes.createEmptying([
		'minecraft:bucket', 
		Fluid.of('create_things_and_misc:diluted_bonemeal', 1000)
	], 'kubejs:diluted_bonemeal_bucket')

	e.recipes.createFilling('kubejs:diluted_bonemeal_bucket', [
		'minecraft:bucket',
		Fluid.of('create_things_and_misc:diluted_bonemeal', 1000),
	])

	e.recipes.createMechanicalCrafting('create:creative_crate', [
		"MNCNM",
		"NNRNN",
		"NRWRN",
		"NNRNN",
		"MNCNM"
	],{
		N: 'minecraft:netherite_block',
		M: 'extendedcrafting:the_ultimate_ingot',
		R: 'createchromaticreturn:refined_mechanism',
		W: 'cyclic:crate',
		C: 'createchromaticreturn:creative_flour'
	})

	e.recipes.createMechanicalCrafting('create:creative_fluid_tank', [
		"MNFNM",
		"NNRNN",
		"NRTRN",
		"NNRNN",
		"MNFNM"
	],{
		N: 'minecraft:netherite_block',
		M: 'extendedcrafting:the_ultimate_ingot',
		R: 'createchromaticreturn:refined_mechanism',
		T: 'create:fluid_tank',
		F: 'create_sa:creative_filling_tank'
	})

	e.remove({output: 'createaddition:creative_energy', type: "create:mechanical_crafting"})

	e.recipes.createMechanicalCrafting('createaddition:creative_energy', [
		"MNFNM",
		"NNRNN",
		"NRERN",
		"NNRNN",
		"MNTNM"
	],{
		N: 'minecraft:netherite_block',
		M: 'extendedcrafting:the_ultimate_ingot',
		R: 'createchromaticreturn:refined_mechanism',
		T: 'create:shaft',
		F: 'create:creative_motor',
		E: 'createaddition:alternator'
	})

	e.remove({output: 'create:creative_motor', type: "create:mechanical_crafting"})

	e.recipes.createMechanicalCrafting('create:creative_motor', [
		"MNFNM",
		"NNRNN",
		"NRTRN",
		"NNRNN",
		"MNTNM"
	],{
		N: 'minecraft:netherite_block',
		M: 'extendedcrafting:the_ultimate_ingot',
		R: 'createchromaticreturn:refined_mechanism',
		T: 'create:shaft',
		F: 'create:rotation_speed_controller'
	})

	e.recipes.createMechanicalCrafting('createcasing:creative_cogwheel', [
		"MNFNM",
		"NNRNN",
		"NRTRN",
		"NNRNN",
		"MNFNM"
	],{
		N: 'minecraft:netherite_block',
		M: 'extendedcrafting:the_ultimate_ingot',
		R: 'createchromaticreturn:refined_mechanism',
		T: 'create:cogwheel',
		F: 'create:rotation_speed_controller'
	})

	e.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
		"  NNNNNN",
		"  WFFFFF",
		"UUGNNNNN",
		"UUCFFFFF",
		"  RR    "
	],{
		N: "minecraft:netherite_block",
		F: 'createchromaticreturn:creative_flour',
		W: 'createcasing:creative_cogwheel',
		G: 'createaddition:creative_energy',
		C: 'create:creative_crate',
		R: 'createchromaticreturn:refined_mechanism',
		U: 'extendedcrafting:ultimate_singularity'
	})
})