const { Router } = require('express');
const { sendFiles } = require('../controllers/corporate-profile');

const router = Router();

router.post('/send-files', sendFiles);

module.exports = router;