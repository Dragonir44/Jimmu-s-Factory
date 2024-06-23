/**
 * const $DeferredRegister = Java.loadClass('dev.architectury.registry.registries.DeferredRegister')
const $Registry = Java.loadClass('net.minecraft.core.registries.Registries')
const $EntityTypeBuilder = Java.loadClass('net.minecraft.world.entity.EntityType$Builder')
const $MobCategory = Java.loadClass('net.minecraft.world.entity.MobCategory')
const $Arrow = Java.loadClass('net.minecraft.world.entity.projectile.Arrow')
//Create the deferred register, so that the entity can be registered
const ENTITIES = $DeferredRegister.create('kubejs', $Registry.ENTITY_TYPE)
//Use the existing Arrow entity registry and name it "dummy"
const DUMMY_ENTITY = () => $EntityTypeBuilder.of((entityType, level) => new $Arrow(entityType, level), $MobCategory.MISC).sized(0.5, 0.5).build('dummy')
//Pass it to a global variable so that the client can read it and make an entity renderer
global.ENTITY = {
    DUMMY: ENTITIES['register(java.lang.String,java.util.function.Supplier)']('dummy', DUMMY_ENTITY)
}
StartupEvents.init(event => {
    ENTITIES.register()
	if (!Platform.isClientEnvironment()) return;
	const $TippableArrowRenderer = Java.loadClass('net.minecraft.client.renderer.entity.TippableArrowRenderer')
	const $EntityRendererRegistry = Java.loadClass('dev.architectury.registry.client.level.entity.EntityRendererRegistry')
	$EntityRendererRegistry.register(global.ENTITY.DUMMY, (context) => new $TippableArrowRenderer(context))
})
 */