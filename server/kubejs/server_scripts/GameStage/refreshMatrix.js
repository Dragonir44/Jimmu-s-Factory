PlayerEvents.loggedIn(event => {
    event.server.runCommandSilent('/sync_recipe_stages')
})