const { Router } = require('express');
const { sendData } = require('../controllers/data-updating');

const router = Router();

router.post('/send-data', sendData);

module.exports = router;