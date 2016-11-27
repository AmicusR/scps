var roleHarvester = require('role.harvester');

var roleSpawn = {
    run: function() {
        for(var spawn in Game.spawns) {
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