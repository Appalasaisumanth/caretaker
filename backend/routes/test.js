const express = require('express');
const router = express.Router();
const {populate_test,get_test,update_test,create_test,delete_test}=require('../controllers/test_controller')
router.post('/populate',populate_test);
router.get('/:aid',get_test);
router.patch('/update',update_test);
router.delete('/delete/:aid',delete_test);
router.post('/create',create_test);
module.exports = router;