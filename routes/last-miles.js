const { Router } = require('express');
const { validCard, buyWithMoney, status } = require('../controllers/last-miles');

const router = Router();

router.post('/valid-card', validCard);
router.post('/buy-with-money', buyWithMoney);
router.post('/status', status);

module.exports = router;