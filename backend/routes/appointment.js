const express = require('express');
const router = express.Router();

const {populate_appointments,get_appointment,get_slots} = require('../controllers/appointment_controller');
router.post('/populate',populate_appointments);
router.post('/',get_appointment);
router.get('/slots',get_slots);

module.exports=router;