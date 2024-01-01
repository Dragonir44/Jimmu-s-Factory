StartupEvents.registry('block', e => {
    e.create('flight_anchor')
        .displayName("Flight Anchor")
        .requiresTool(true)
        .tagBlock("minecraft:needs_iron_tools")
        .tagBlock("minecraft:minaable/pickaxe")
        .model('balancedflight:block/flight_anchor')
        // .attachCapability(CapabilityBuilder.ENERGY.customBlockEntity()
        //     .canExtract(() => false)
        //     .canReceive(() => true)
        //     .receiveEnergy((be, amount, simulate) => {
        //         let energy = be.persistentData.getInt("energy")
        //         let received = Math.min(1919810 - energy, amount)
        //         console.log(simulate)
        //         if (!simulate) {
        //             be.persistentData.putInt("energy", energy + received)
        //         }
        //         return received

        //     })
        //     .getEnergyStored(be => {
        //         return be.persistentData.getInt("energy")
        //     })
        //     .getMaxEnergyStored(() => 1919810)
        // )
})