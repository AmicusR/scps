let spawner = {


    spawnRole: function(spawn, roleTemplate) {
        if (typeof roleTemplate.cost === 'undefined')
        {
            console.log('Calculating cost of ' + roleTemplate.name);
            roleTemplate.cost = this.calculateSpawnEnergy(roleTemplate.parts);
        }

        if (this.isEnoughEnergy(spawn, roleTemplate.cost))
        {
            spawn.spawnCreep(
                roleTemplate.parts,
                roleTemplate.name + Game.time.toString(),
                {});
        }
    },

    calculateSpawnEnergy: function(parts) {
        return parts.reduce(function(cost, part) {
           return cost + BODYPART_COST[part];
        }, 0);
    },

    isEnoughEnergy: function(spawn, energyValue) {
        return spawn.energy >= energyValue;
    },

    isFullEnergy: function(spawn) {
        return spawn.energy == spawn.energyCapacity;
    },

};

module.exports = spawner;