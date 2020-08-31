'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList(page) {
    const { config, ctx, app } = this;
    // 通过抓取接口返回数据
    const api = config.api + 'appapi.php?a=getPortalList&catid=20&page=' + page;
    const response = await ctx.curl(api, {
      dataType: 'json',
    });
    // response.data 返回的是 Buffer ,添加“ dataType: 'json', ” 之后返回正常的 json

    console.log(response.data);
    const collection = app.mongo.db.collection('newslist');
    collection.insertMany(response.data.result);
    return response.data.result;
  }

  // 获取新闻详情
  async getNewsContent(aid) {
    const { config, ctx } = this;
    // 通过抓取接口返回数据
    const api = config.api + 'appapi.php?a=getPortalList&aid=' + aid;
    console.log(api);
    const response = await ctx.curl(api, {
      dataType: 'json',
    });
    // response.data 返回的是 Buffer ,添加“ dataType: 'json', ” 之后返回正常的 json

    console.log(response.data);
    return response.data.result;
  }
}

module.exports = NewsService;
