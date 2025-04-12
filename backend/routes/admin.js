const express = require('express');
const router = express.Router();

const {create_table_admin,
    create_table_appointments,
    create_table_patient,
    create_table_doctor,
    create_table_treatment,
    create_table_test,
    create_table_fdo,
    create_table_room,
create_table_deo} = require('../controllers/admin_controller');
router.get('/create-admin',create_table_admin) ;
router.get('/create-patient',create_table_patient) ;
router.get('/create-appointment',create_table_appointments);
router.get('/create-doctor',create_table_doctor);
router.get('/create-treatment',create_table_treatment);
router.get('/create-test',create_table_test);
router.get('/create-fdo',create_table_fdo);
router.get('/create-deo',create_table_deo);
router.get ('/create-room',create_table_room);
router.get('/create/admins',)
module.exports = router;
