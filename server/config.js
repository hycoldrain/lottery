/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "领导特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "一等奖",
    title: "Steam Deck（512G)",
    img: "../img/steamdeck.png"
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "DJI mini3 Pro 标配版",
    img: "../img/djmini3.png"
  },
  {
    type: 3,
    count: 1,
    text: "一等奖",
    title: "PlayStation5 国行版",
    img: "../img/ps5.png"
  },
  {
    type: 4,
    count: 1,
    text: "二等奖",
    title: "Dyson 吹风机",
    img: "../img/Dyson.png"
  },
  {
    type: 5,
    count: 1,
    text: "二等奖",
    title: "极米坚果K6 家用投影仪",
    img: "../img/jimik6.png"
  },
  {
    type: 6,
    count: 1,
    text: "二等奖",
    title: "SONY 无线智能降噪 头戴耳机",
    img: "../img/earphone.png"
  },
  {
    type: 7,
    count: 4,
    text: "三等奖",
    title: "京东礼品卡（800元）",
    img: "../img/card.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1, 4];

/**
 * 卡片公司名称标识
 */
const COMPANY = "H工作室";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
