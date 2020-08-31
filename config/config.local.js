'use strict';

module.exports = {
  redis: {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      // password: 'auth',
      db: 0,
    },
  },
  mongo: {
    client: {
      host: '127.0.0.1',
      port: '27017',
      name: 'egg-spider',
      // user: 'user',
      // password: 'password',
      // options: {},
    },
  },
};
