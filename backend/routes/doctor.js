const express = require('express');
const router = express.Router();
const {populate_doctors,
    login_doctor,
    register_doctor,
    update_doctor,
    delete_doctor,
    get_doctor,
    get_doctor_by_username,
    get_doctor_by_department,
    get_depts
}=require('../controllers/doctor_controller');
router.get('/',get_doctor);
router.get('/:username',get_doctor_by_username);
router.get('//dept',get_depts);
router.get('//dept/:department',get_doctor_by_department);
router.post('/populate',populate_doctors);

router.post('/register',register_doctor);
router.patch('/update',update_doctor);
router.delete('/delete/:username',delete_doctor);
router.post('/login',login_doctor);
module.exports = router;