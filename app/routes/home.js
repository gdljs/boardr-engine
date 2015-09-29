var express  = require('express'),
    router   = express.Router(),
    mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res) {
  res.status(200).send({please: "use /api"});
});
