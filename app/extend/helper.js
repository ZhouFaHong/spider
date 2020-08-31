'use strict';

const sd = require('silly-datetime');

module.exports = {
  format(param) {
    return sd.format(new Date(param * 1000), 'YYYY-MM-DD HH:mm');
  },
};
