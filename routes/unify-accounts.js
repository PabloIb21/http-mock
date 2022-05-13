const { Router } = require('express');
const { getAccountNumber, sendData } = require('../controllers/unify-accounts');

const router = Router();

router.get('/get-account', getAccountNumber);
router.post('/send-data', sendData);

module.exports = router;