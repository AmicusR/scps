var roleHarvester = require('Default/role.harvester');

var roleSpawn = {
    run: function() {
        for(var spawnName in Game.spawns) {
            let spawn = Game.spawns[spawnName];
            if(this.isEnergyFull(spawn)) {
                roleHarvester.spawnDefaultHarvester(spawn);
            }
        }
    },

    
    isEnergyFull: function(spawn) {
        return spawn.energy == spawn.energyCapacity;
    }
};

module.exports = roleSpawn;