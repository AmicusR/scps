var roleHarvester = {
    run: function() {

    },

    spawnDefaultHarvester: function(spawn) {
        this.spawnHarvester(spawn, this.DEFAULT_PARTS, this.DEFAULT_TYPE);
    },

    spawnHarvester: function(spawn, bodyParts, typeValue) {
        var creepName = spawn.createCreep(bodyParts);
        var creep = Game.creeps[creepName];
        creep.memory.role = this.ROLE_NAME;
        creep.memory.type = typeValue;
        creep.memory.ownerId = spawn.id;
    },

    DEFAULT_PARTS: [MOVE, CARRY, WORK],
    ROLE_NAME: 'harvester',
    DEFAULT_TYPE: 'default_type',
}

module.exports = roleHarvester;