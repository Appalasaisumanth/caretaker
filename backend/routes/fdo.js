const express = require('express');
const router = express.Router();
const {populate_fdo}=require('../controllers/fdo_controller')
router.get('/populate',populate_fdo);
module.exports = router;