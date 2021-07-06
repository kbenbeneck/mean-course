const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

router.post('/login', (req, res, next) => {
  let fetchedUser;
  let userValid = false;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          ok: 0,
          message: 'Auth failed'
        });
      }
      fetchedUser = user;
  // Validate password.
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (!result) {
          return res.status(401).json({
            ok: 0,
            message: 'Auth failed'
          });
        } else {
          const token = jwt.sign({
            email: user.email,
            userId: user._id },
            'secret_this_should_be_longer',
            { expiresIn: '1h' }
          );
          res.status(200).json({
            ok: 1,
            message: 'User Authenticated',
            token: token
          });
        }
      });
    })
    .catch(err => {
      console.log('Catch: login db failure', err);
      return res.status(401).json({
        ok: 0,
        message: 'Auth Failed'
      });
    });
 });

module.exports = router;