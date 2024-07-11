const { Router } = require('express');
const { success, invalidAccount, alreadyRegistered } = require('../controllers/pre-validation-winner');

const router = Router();

router.post('/success', success);
router.post('/invalid-account', invalidAccount);
router.post('/already-registered', alreadyRegistered);

module.exports = router;