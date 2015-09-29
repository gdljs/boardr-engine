'use strict';

var express  = require('express'),
    router   = express.Router();

var usersCtrl = require('../lib/userCtrl');

module.exports = function (app) {
  app.use('/api/auth', router);

};

router.post('/login', function (req, res) {
  if (req.body.username && req.body.password) {
      usersCtrl.checkUserForLogin(req.body.username, req.body.password, function(err, token, user){
      if (err) {
        res.status(401).send('Wrong user or password');
      }
      else {
        if (token && user) {
          res.json({ 'auth_token': token, 'user': user});
        } else {
          res.status(401).send('No user here');
        }
      }
  });
  } else{
      res.status(401).send('No user or password');
  }
});

router.post('/signup', function (req, res) {
  usersCtrl.createUser(req.body.username, req.body.password, req.body.email, function(err, user){
      if (user) {
        res.status(200).send(user);
      }
      res.status(499).send(err);
  });
});
