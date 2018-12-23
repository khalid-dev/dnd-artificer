const router = require('express').Router();

router.use('/armors', require('./armors'));
router.use('/weapons', require('./weapons'));
router.use('/weak-magical-properties', require('./weak-magical-properties'));
router.use('/trinkets', require('./trinkets'));

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
  });
 
module.exports = router;