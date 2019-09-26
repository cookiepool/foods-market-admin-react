import Mock from 'mockjs';

// 配置ajax请求时的响应时间
Mock.setup({ 
  timeout: '300-600'
});

// 自定义Random中的占位符
Mock.Random.extend({
  // 整个星座列表
  constellation: function(date) {
    let constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(constellations);
  }
});
Mock.Random.constellation();

Mock.mock("http://test.com/test", {
  "name": "@CNAME",
  "female|1": true,
  "age|25-30": 18,
  "cup|36-66.2": 36,
  "cities|2": {
    "2950100": "sc",
    "2950101": "cq",
    "2950102": "hun",
    "2950103": "hen",
    "2950104": "sx",
  },
  "stature|1": ['148', '158', '168', '178'],
  "isBeauty": function() {
    if(this.stature === '158') {
      return 'perfect';
    }else {
      return 'general';
    }
  },
  "ID": /[5]\d{18}/,
  "email": "@EMAIL",
  "constellation": '@CONSTELLATION',
  "isMarried": "@BOOLEAN",
  "luckyLetter": "@CHARACTER('upper')",
  "randomStr": "@STRING('lower', 13)",
  "birthday": "@DATETIME('yyyy/MM/dd hh:mm:ss')",
  "description": "@CPARAGRAPH(3, 7)",
  "list|2-10": [{ // 注意：这个地方要生成不一样的列表需要使用函数，不然生成的都是重复的，当然你可以写占位符号的形式，这样也可以实现生成不一样的列表数据，如下
    "id": "@INTEGER(11)",
    "name": "@CTITLE",
    "date": "@DATE('yyyy-MM-dd')"
  }],
  "listData|2-10": [{
    "id": () => Mock.Random.integer(11),
    "name": function() { return Mock.Random.ctitle() },
    "date": () => Mock.Random.date('yyyy-MM-dd')
  }]
});

// 用户消息
Mock.mock("http://xiaocai.com/user/msg", {
  "notificationList|4": [{
    "id|+1": "@INTEGER(5)"
  }]
});
