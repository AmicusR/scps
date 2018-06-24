let spawner = require('spawner');
let workerTemplate = require('workerTemplate');

let controller = {
    run: function() {
        for(let spawnName in Game.spawns)
        {
            let spawn = Game.spawns[spawnName];
            spawner.spawnRole(spawn, workerTemplate.BASIC)
        }
    },
};

module.exports = controller;