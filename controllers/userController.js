"use strict";

const User = require('../models/User');
const shortid = require('shortid');

exports.signup = async (req, res, next) => {
  try {
    const { email, firstName, password, lastName } = req.body;
    const user = await User.findOne({ email });
    if(user){
        const error = new Error ('User already registered');
        error.status = 401;
        next(error);
        return;
    }
    const hash_password = await User.hasPassword(password);
    const _user = new User ({
        firstName,
        lastName,
        email,
        hash_password,
        username:shortid.generate()
    });
    const userCreated = await _user.save();
    res.status(201).json({ result: userCreated });
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req,res,next) =>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user || !(await user.comparePassword(password))){
      const error = new Error('Invalid credentials');
      error.status = 401;
      next(error);
      return;
  }
    res.status(201).json({
      message: 'OK'
    })
  } catch (err) {
    next(err);
  }


};
