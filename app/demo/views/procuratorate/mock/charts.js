/**
 * Created by GuoMiaomiao on 2018/1/23.
 */
import echarts from 'echarts';
import {$get} from '../../../fetch';
/*$get('http://echarts.baidu.com/examples/vendors/echarts/map/json/province/' + 'hubei' + '.json', (geoJson)=>{
  echarts.registerMap('hubei', geoJson);
});*/
/*左侧三个echart图*/
export const chart1 = {
  tooltip : {
    trigger: 'item',
    formatter: '{b}',
  },
  legend: {
    top:'30%',
    right:'10%',
    orient:'vertical',
    data:['提讯 24%','接访 26%','开庭 22%','执法 28%'],
    itemHeight:6,
    itemWidth:16,
    textStyle:{
      fontSize:14,
      color:'#ffffff',
    },
  },
  calculable : true,
  series : [
    {
      name:'半径模式',
      type:'pie',
      radius : [40, 70],
      center : ['30%', '50%'],
      roseType : 'radius',
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      lableLine: {
        normal: {
          show: false,
        },
        emphasis: {
          show: true,
        },
      },
      data:[
        {value:24, name:'提讯 24%'},
        {value:26, name:'接访 26%'},
        {value:22, name:'开庭 22%'},
        {value:28, name:'执法 28%'},
      ],
    },
  ],
  color:['#c162ed','#4136b0','#005dbb','#05dded'],
};
export const chart2 = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis : [
    {
      type : 'category',
      data : ['武汉', '十堰', '襄阳', '宜昌', '恩施', '咸宁', '黄冈','黄石'],
      axisTick: {
        show:false,
      },
      axisLabel:{
        fontSize:12,
        color:'#ffffff',
      },
      axisLine:{
        show:true,
        lineStyle:{
          color: '#163556',
        },
      },
    },
  ],
  yAxis : [
    {
      type : 'value',
      axisLabel:{
        fontSize:12,
        color:'#ffffff',
      },
      axisTick:{
        show:false,
      },
      axisLine:{
        show:true,
        lineStyle:{
          color: '#163556',
        },
      },
      splitLine: {
        show: false,
      },
    },

  ],
  series : [
    {
      name:'业务量',
      type:'bar',
      barWidth: 12,
      data:[45, 35, 40, 25, 42, 44, 38,26],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#c162ed'},
              {offset: 0.5, color: '#7b4fe6'},
              {offset: 1, color: '#353cde'},
            ]
          ),
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#c162ed'},
              {offset: 0.5, color: '#7b4fe6'},
              {offset: 1, color: '#353cde'},
            ]
          ),
        },
      },
    },
  ],
};
export const chart3 = {
/*业务类别趋势图*/
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['0','1','2','3','4','5','6','7'],
    axisLine:{
      show:false,
    },
    axisTick:{
      show:false,
    },
    axisLabel:{
      fontSize:12,
      color:'#ffffff',
    },
  },
  yAxis: {
    type: 'value',
    axisLine:{
      show:true,
      lineStyle:{
        color: '#163556',
      },
    },
    splitLine: {
      show: false,
    },
    axisLabel:{
      fontSize:12,
      color:'#ffffff',
    },
  },

  series: [
    {
      name: '1',
      type: 'line',
      smooth: true,
      data: [8, 10, 9, 8, 15, 6, 9,10,12],
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(237, 238, 94, 1)',
          }, {
            offset: 0.8,
            color: 'rgba(237, 238, 94, 0.8)',
          }], false),
          shadowColor: 'rgba(237, 238, 94, 0.8)',
          shadowBlur: 10,
        },
      },
      symbol: 'emptyCircle',
      symbolSize: 0,

    },
    {
      name: '2',
      type: 'line',
      smooth: true,
      data: [15, 25, 18, 25, 30, 40, 35,28],
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(168, 100, 200, 1)',
          }, {
            offset: 0.8,
            color: 'rgba(168, 100, 200, 0.8)',
          }], false),
          shadowColor: 'rgba(168, 100, 200, 0.1)',
          shadowBlur: 10,
        },
      },
      symbol: 'emptyCircle',
      symbolSize: 0,

    },
    {
      name: '3',
      type: 'line',
      smooth: true,
      data: [25, 19, 21, 30, 20, 18, 20,18],
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(72, 224, 198, 1)',
          }, {
            offset: 0.8,
            color: 'rgba(72, 224, 198, 0.8)',
          }], false),
          shadowColor: 'rgba(168, 100, 200, 0.1)',
          shadowBlur: 10,
        },
      },
      symbol: 'emptyCircle',
      symbolSize: 0,
    },{
      name: '4',
      type: 'line',
      smooth: true,
      data: [40, 45, 38, 48, 40, 43, 45,48],
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(105, 190, 227, 1)',
          }, {
            offset: 0.8,
            color: 'rgba(105, 190, 227, 0.8)',
          }], false),
          shadowColor: 'rgba(105, 190, 227, 0.1)',
          shadowBlur: 10,
        },
      },
      symbol: 'emptyCircle',
      symbolSize: 0,
    }],
  color:['#edee5e','#a864c8','#48e0c6','#69bee3'],
};
/*湖北省地图*/
/*export const hubeiMap = {
  series: [
    {
      type: 'map',
      mapType: 'hubei',
      label: {
        normal: {
          textStyle: {
            color: '#fff',
          },
        },
        emphasis: {
          textStyle: {
            color: '#fff',
          },
        },
      },
      itemStyle: {
        normal: {
          borderColor: '#fff',
          areaColor: '#7b4fe6',
          label:{show:true},
        },
        emphasis: {
          areaColor: '#353cde',
          borderWidth: 0,
          label:{show:true},
        },
      },
      animation: true,
      // animationDurationUpdate: 1000,
      // animationEasingUpdate: 'quinticInOut'
    },
  ],
};*/
/*右侧echart图*/
export const chart4 = {
  series: [
    {
      type: 'pie',
      center: ['25%', '50%'],
      radius: ['50%', '60%'],
      label: {
        normal: {
          position: 'center',
        },
      },
      data: [{
        value: 55,
        name: '立案率',
        itemStyle: {
          normal: {
            color: 'rgba(12, 217, 230, 1)',
          },
        },
        label: {
          normal: {
            formatter: '{d} %',
            textStyle: {
              color: 'rgba(12, 217, 230, 1)',
              fontSize: 30,
            },
          },
        },
      }, {
        value: 45,
        name: '占位',
        tooltip: {
          show: false,
        },
        itemStyle: {
          normal: {
            color: 'rgba(12, 217, 230, 0.1)',
          },
        },
        label: {
          normal: {
            textStyle: {
              color: 'rgba(12, 217, 230, 1)',
              fontSize:20,
            },
            formatter: '立案率',
          },
        },
      }],
    },
    {
      type: 'pie',
      center: ['75%', '50%'],
      radius: ['50%', '60%'],
      label: {
        normal: {
          position: 'center',
        },
      },
      data: [{
        value: 65,
        name: '结案率',
        itemStyle: {
          normal: {
            color: 'rgba(214, 116, 241, 1)',
          },
        },
        label: {
          normal: {
            formatter: '{d} %',
            textStyle: {
              color: 'rgba(214, 116, 241, 1)',
              fontSize: 30,
            },
          },
        },
      }, {
        value: 35,
        name: '占位',
        tooltip: {
          show: false,
        },
        itemStyle: {
          normal: {
            color: 'rgba(214, 116, 241, 0.1)',
          },
        },
        label: {
          normal: {
            textStyle: {
              color: 'rgba(214, 116, 241, 1)',
              fontSize:20,
            },
            formatter: '结案率',
          },
        },
      }],
    },
  ],
};
export const chart5 = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  yAxis : [
    {
      type : 'category',
      data : ['江夏区', '汉阳区','洪山区','武昌区','武汉市'],
      axisTick: {
        show:false,
      },
      axisLabel:{
        fontSize:12,
        color:'#ffffff',
      },
      axisLine:{
        show:false,
      },
    },
  ],
  xAxis : [
    {
      type : 'value',
      axisLabel:{
        show:false,
        fontSize:12,
        color:'#ffffff',
      },
      axisTick:{
        show:false,
      },
      axisLine:{
        show:false,
        lineStyle:{
          color: '#163556',
        },
      },
      splitLine: {
        show: false,
      },
    },

  ],
  series : [
    {
      name:'业务量',
      type:'bar',
      barWidth: 12,
      data:[49, 88, 102, 138, 158],
      markPoint:{
        label: {
          formatter:'{c}小时',
          show: true,
          position: 'right',
          color:'#ffffff',
        },
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [
              {offset: 1, color: '#5a9ee4'},
              {offset: 0.5, color: '#5b7fe9'},
              {offset: 0, color: '#5b60ee'},
            ]
          ),
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#5a9ee4'},
              {offset: 0.5, color: '#5b7fe9'},
              {offset: 1, color: '#5b60ee'},
            ]
          ),
        },
      },
    },
  ],
};
// '江夏区', '汉阳区','洪山区','武昌区'，'武汉市'
