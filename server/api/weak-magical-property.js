const router = require('express').Router();
const { armor, trinket, weapon } = require('../data/weak-magical-properties/index');
const getRandom = require('./utils');

router.get('/armors/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(armor, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

router.get('/trinkets/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(trinket, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

router.get('/weapons/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(weapon, req.params.numEntries));
    }
    catch(err) {
        next(err);
    }
});

module.exports = router;