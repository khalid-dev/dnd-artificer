const router = require('express').Router();

router.use('/armor', require('./armor'));
router.use('/weapon', require('./weapon'));
router.use('/weak-magical-property', require('./weak-magical-property'));

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
  });
 
module.exports = router;