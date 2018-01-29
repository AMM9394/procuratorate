/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import { chart1, chart2, chart3, chart4, chart5 } from './charts';
export const roomCount = [{
  title: '接访室',
  total: 342,
  using: 239,
  Icon: require('../imgs/接访室.png'),
}, {
  title: '提讯室',
  total: 562,
  using: 418,
  Icon: require('../imgs/接访室.png'),
}, {
  title: '案件讨论室',
  total: 385,
  using: 304,
  Icon: require('../imgs/案件讨论室.png'),
}, {
  title: '警力统计',
  total: 8286,
  using: 7362,
  Icon: require('../imgs/警力统计.png'),
}, {
  title: '公务用车',
  total: 18412,
  using: 12043,
  Icon: require('../imgs/公务用车.png'),
} ];
export const leftCharts = [{
  title: '业务类别占比图',
  option: chart1,
  height: 220,
}, {
  title: '业务量数据统计',
  option: chart2,
  height: 220,
}, {
  title: '业务类别趋势图',
  option: chart3,
  height: 220,
} ];
export const rightCharts = [{
  title: '接访案件交办流统计',
  option: chart4,
}, {
  title: '资源使用时长说明',
  option: chart5,
} ];
export const usageRate = [{
  city: '武汉',
  using: 4287,
  total: 4490,
  tendency: 'up',
  percent: 98,
}, {
  city: '十堰',
  using: 3462,
  total: 3687,
  tendency: 'down',
  percent: 98,
}, {
  city: '宜昌',
  using: 3123,
  total: 3426,
  tendency: 'down',
  percent: 98,
}, {
  city: '恩施',
  using: 2980,
  total: 3210,
  tendency: 'up',
  percent: 98,
}, {
  city: '咸宁',
  using: 2785,
  total: 3017,
  tendency: 'up',
  percent: 98,
} ];
export const geoCoordMap = {
    // '十堰市':[320,250],
  '十堰市': [320, 250],
  '襄阳市': [450, 310],
  '随州市': [570, 300],
  '孝感市': [610, 400],
  '黄冈市': [760, 480],
  '神农架林区': [300, 345],
  '宜昌市': [350, 480],
  '恩施土家族苗族自治州': [200, 550],
  '荆州市': [465, 540],
  '荆门市': [490, 410],
  '天门市': [540, 465],
  '潜江市': [505, 500],
  '仙桃市': [575, 515],
  '咸宁市': [645, 600],
  '武汉市': [660, 470],
  '鄂州市': [695, 495],
  '黄石市': [725, 550],
};



//for Google地图点
export const blueRooms = [
  {city: '十堰市', top: 250, left: 320},
  {city: '襄阳市', top: 310, left: 450},
  // {city: '随州市', top: 300, left: 570},
  {city: '孝感市', top: 400, left: 610},
  {city: '黄冈市', top: 480, left: 760},
  {city: '神农架林区', top: 325, left: 280},
  // {city: '宜昌市', top: 480, left: 350},
  {city: '恩施土家族苗族自治州', top: 550, left: 200},
  {city: '荆州市', top: 540, left: 465},
  {city: '荆门市', top: 410, left: 490},
  // {city: '天门市', top: 465, left: 540},
  {city: '潜江市', top: 500, left: 505},
  // {city: '仙桃市', top: 510, left: 575},
  {city: '咸宁市', top: 600, left: 645},
  // {city: '武汉市', top: 470, left: 660},
  {city: '鄂州市', top: 490, left: 675},
  {city: '黄石市', top: 550, left: 725},
];
//for Google地图点
export const pinkRooms = [
  {city: '随州市', top: 340, left: 540},
  {city: '宜昌市', top: 480, left: 350},
  {city: '武汉市', top: 485, left: 640},
  {city: '襄阳市', top: 325, left: 410},
];
//for Google地图点
export const policeMen = [
  {city: '荆门市', top: 375, left: 465},
  {city: '宜昌市', top: 400, left: 335},
  {city: '恩施土家族苗族自治州', top: 530, left: 235},
  {city: '襄阳市', top: 300, left: 360},
];

/*//for IE 地图点
export const blueRooms = [
    { city: '十堰市', top: 250, left: 290 },
    { city: '襄阳市', top: 310, left: 450 },
    // {city: '随州市', top: 300, left: 570},
    { city: '孝感市', top: 400, left: 560 },
    { city: '黄冈市', top: 480, left: 650 },
    { city: '神农架林区', top: 325, left: 280 },
    // {city: '宜昌市', top: 480, left: 350},
    { city: '恩施土家族苗族自治州', top: 515, left: 200 },
    { city: '荆州市', top: 540, left: 465 },
    { city: '荆门市', top: 410, left: 490 },
    // {city: '天门市', top: 465, left: 540},
    { city: '潜江市', top: 500, left: 505 },
    // {city: '仙桃市', top: 510, left: 575},
    { city: '咸宁市', top: 570, left: 610 },
    // {city: '武汉市', top: 470, left: 660},
    { city: '鄂州市', top: 490, left: 675 },
    { city: '黄石市', top: 550, left: 675 },
];
//for IE 地图点
export const pinkRooms = [
    { city: '随州市', top: 340, left: 540 },
    { city: '宜昌市', top: 480, left: 350 },
    { city: '武汉市', top: 475, left: 600 },
    { city: '襄阳市', top: 325, left: 410 },
];
//for IE 地图点
export const policeMen = [
    { city: '荆门市', top: 375, left: 465 },
    { city: '宜昌市', top: 400, left: 335 },
    { city: '恩施土家族苗族自治州', top: 530, left: 235 },
    { city: '襄阳市', top: 300, left: 360 },
];*/

export const treeDatas = [
  {
    colName:'湖北省',
    children:[
      {
        colName: '湖北检察院',
        children: [{
          colName: '提讯',
          children: [
            { colName: '提讯室1' },
            { colName: '提讯室2' },
            { colName: '提讯室3' },
            { colName: '提讯室4' },
          ],
        }, {
          colName: '接访',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        }, {
          colName: '开庭',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        }, {
          colName: '移动执法',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        } ],
      }, {
        colName: '武汉市',
        children: [{
          colName: '提讯',
          children: [
            { colName: '提讯室1' },
            { colName: '提讯室2' },
            { colName: '提讯室3' },
            { colName: '提讯室4' },
          ],
        }, {
          colName: '接访',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        }, {
          colName: '开庭',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        }, {
          colName: '移动执法',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        } ],
      }, {
        colName: '黄石市',
        children: [{
          colName: '提讯',
          children: [
            { colName: '提讯室1' },
            { colName: '提讯室2' },
            { colName: '提讯室3' },
            { colName: '提讯室4' },
          ],
        }, {
          colName: '接访',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        }, {
          colName: '开庭',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        }, {
          colName: '移动执法',
          children: [
            { colName: '接访室1' },
            { colName: '接访室2' },
            { colName: '接访室3' },
            { colName: '接访室4' },
          ],
        } ],
      },
    ],
  },
];

export const tixunRoom = {
  suspectInfo:{
    suspectName: '王某某',
    suspectCardNumber: '420125478963214578',
  },
  suspectName: '王某某',
  suspectID: '420125478963214578',
  asker: '李四',
  askerID: 'XX112',
  recorder: '刘涛',
  recorderID: 'XX113',
  caseFiles: {
    caseName: 'XX抢劫案',
    caseNum: 'XA2017659841',
    caseTypeDesp: '抢劫',
    caseStartTime: '2017-10-11',
    suspectName: '王某某',
    history: [{
      title: '提讯01',
      date: '2017-10-20',
    }, {
      title: '提讯02',
      date: '2017-10-25',
    } ],
  },
  recordFiles: {
    askTimeStart: '2017 年 11 月 7 日 9 时 10分',
    askTimeEnd: '9 时 40分',
    address: '武汉看守所',
    recordContent: '',
  },
};
