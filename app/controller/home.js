'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    const list = await this.app.mongo.findOne('news', { id: '5f4c7b18354fe56392437a1e' });
    console.log(list);
    this.app.foo('-------------------');
    this.ctx.getIP();
    const { ctx } = this;
    await ctx.render('index', {
      data: '我是传过来的数据',
    });
  }
}

module.exports = HomeController;
