/* eslint valid-jsdoc: "off" */

'use strict';

const fs = require('fs');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598001339906_2844';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 方法二：以读取本地文件的方式修改
  config.siteFile = {
    '/favicon.ico': fs.readFileSync('favicon.ico'),
  };
  // 关闭CSRF
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    // defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  };

  // 方法：以读取本地文件的方式修改
  config.siteFile = {
    '/favicon.ico': fs.readFileSync('favicon.ico'),
  };

  // 配置公共的api
  config.api = 'http://www.phonegap100.com/';

  return {
    ...config,
    ...userConfig,
  };
};
