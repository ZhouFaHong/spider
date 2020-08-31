'use strict';

module.exports = {
  getIP() {
    console.log(this.request.ip);
    return this.request.ip;
  },
};
