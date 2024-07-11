const { Router } = require('express');
const { getChains, getBrands, getRequiredFields } = require('../controllers/retroactive-accreditations');

const router = Router();

router.post('/get-chains', getChains);
router.post('/get-brands', getBrands);
router.get('/get-required-fields/:airlineName', getRequiredFields);

module.exports = router;