const express = require('express');
const router = express.Router();
const { signup, signin } = require ('../controllers/authController');
const jwtAuth = require('../lib/jwtAuth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validations/users');

router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated,signin);
// router.post('/profile',jwtAuth, async (req,res,next)=>{
//     res.status(201).json({
//         user:'profile'
//     })
// });

module.exports = router;
