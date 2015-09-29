'use strict';

var jsonwebtoken = require('jsonwebtoken');

var user = require('mongoose').model('User');

module.exports.createUser = function(username, password, email, callback){
    user.create({ 'username': username , 'password': user.generateHash(password), 'email': email},
    function(err, user){
        if (err) {
          callback(err, null);
        } else {
          callback(err, user);
        }
    });
};

module.exports.findUser = function(username, password, callback){
    user.find({ 'username': username , 'password' : user.generateHash(password)}).find(function(err, user){
        if (err) {
          callback(err, null);
        } else {
          callback(null, user[0]);
        }
    });
};

module.exports.checkUserForLogin = function(username, password, callback){
    module.exports.findUser(username, password, function(err, user){
        if (user) {
          var token = err ? null : jsonwebtoken.sign(user, 'fcyheIBdgWhIiuhcZ1GaSmd2YZF9MyNHgnHt1Las1WET4x8VlUTgkPShArwT', { expiresInMinutes: 60*24 });
          callback(err, token, user);
        } else {
          callback(err, null, null);
        }
    });
};
