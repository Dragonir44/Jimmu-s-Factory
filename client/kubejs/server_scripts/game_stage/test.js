GameStageEvents.stageAdded(event => {

    console.log("Stage added")

    const { player } = event
    console.log(typeof player.stages.getAll(), player.stages.getAll())
    let tellTest = "You have now the following stage :\n"
    
    for (const stage of player.stages.getAll()) {
        tellTest += `- ${stage}\n`
    }
    player.tell(tellTest)
})
