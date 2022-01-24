const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if request to endpoint doesn't exist, 404 error
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;