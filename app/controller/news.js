'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const page = this.ctx.query.page;
    // 获取数据显示到页面
    const list = await this.service.news.getNewsList(page);
    const api = this.config.api;
    console.log(api);
    // console.log(list);
    await this.ctx.render('news', { list, api });
  }
  async content() {
    const aid = this.ctx.query.aid;
    const newsContent = await this.service.news.getNewsContent(aid);
    await this.ctx.render('newscontent', { newsContent });
  }
}

module.exports = NewsController;
