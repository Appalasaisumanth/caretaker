const express = require('express');
const router = express.Router();
const {populate_patient}=require('../controllers/patient_controller')
router.get('/populate',populate_patient);
module.exports = router;