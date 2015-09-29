var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'boardr'
    },
    port: 3000,
    db: 'mongodb://localhost/boardr-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'boardr'
    },
    port: 3000,
    db: 'mongodb://localhost/boardr-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'boardr'
    },
    port: 3000,
    db: 'mongodb://memo:memo@ds051843.mongolab.com:51843/heroku_9bc0771h'
  }
};

module.exports = config[env];
