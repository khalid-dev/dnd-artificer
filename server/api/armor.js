const router = require('express').Router();
const { lightArmor, mediumArmor, heavyArmor, shield } = require('../data/armor-types/index');
const getRandom = require('./utils');

router.get('/light-armor/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(lightArmor, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

router.get('/medium-armor/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(mediumArmor, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

router.get('/heavy-armor/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(heavyArmor, req.params.numEntries));
    }
    catch(err) {
        next(err);
    }
});

router.get('/shield/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(shield, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

module.exports = router;