const express = require('express');
const router = express.Router();
const {populate_deo}=require('../controllers/deo_controller')
router.get('/populate',populate_deo);
module.exports = router;