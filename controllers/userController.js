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

  }
};
