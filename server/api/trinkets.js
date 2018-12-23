const router = require('express').Router();
const { normalTrinket } = require('../data/trinket-types/index');
const getRandom = require('./utils');

router.get('/normal/random/:numEntries', async (req, res, next) => {
    try {
        res.json(getRandom(normalTrinket, req.params.numEntries));
    }
    catch(err) {
        next(err);
    };
});

module.exports = router;
