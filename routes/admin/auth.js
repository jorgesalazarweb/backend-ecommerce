const express = require('express');
const router = express.Router();
const { signup, signin } = require ('../../controllers/admin/authController');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validations/users');

router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);


module.exports = router;