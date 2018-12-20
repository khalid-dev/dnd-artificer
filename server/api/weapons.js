const router = require('express').Router();
const { martialMelee, martialRanged, simpleMelee, simpleRanged } = require('../data/weapon-types/index');
const getRandom = require('./utils');

router.get('/martial-melee/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(martialMelee, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

router.get('/martial-ranged/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(martialRanged, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

router.get('/simple-melee/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(simpleMelee, req.params.numEntries));
    }
    catch(err) {
        next(err);
    }
});

router.get('/simple-ranged/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(simpleRanged, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

module.exports = router;