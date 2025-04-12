const express = require('express');
const router = express.Router();
const {populate_doctors}=require('../controllers/doctor_controller')
router.get('/populate',populate_doctors);
module.exports = router;