const router = require('express').Router();

router.use('/armors', require('./armor'));
router.use('/weapons', require('./weapon'));
router.use('/weak-magical-properties', require('./weak-magical-property'));

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
  });
 
module.exports = router;