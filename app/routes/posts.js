'use strict';

var express  = require('express'),
    router   = express.Router(),
    mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/api/posts', router);

};

router.get('/', function (req, res) {
  res.status(200).send({version: "0.0.1 posts"});
});
