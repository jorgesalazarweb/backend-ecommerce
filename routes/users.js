const express = require('express');
const router = express.Router();
const { signup } = require ('../controllers/userController');

router.get('/signin', (req, res, next) => {


});
router.post('/signup', signup);

module.exports = router;
