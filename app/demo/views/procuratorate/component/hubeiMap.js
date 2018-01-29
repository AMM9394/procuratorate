/**
 * Created by GuoMiaomiao on 2018/1/24.
 */
import React, { Component } from 'react';
import echarts from 'echarts';
const geoJson = require('./hubei.json');
echarts.registerMap('hubei', geoJson);
import {Charts} from 'yrui';
const Echarts=Charts(echarts);
const jiefangshi = require('../imgs/接访室小.png');
const tixunshi = require('../imgs/提讯室小.png');
const jingyuan = require('../imgs/警员.png');
export default class HubeiMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      city:'',
    };
  }

  convertData=(data) =>{
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };

  render() {
    /*湖北省地图*/
    const option = {
      /*legend: {
        orient: 'horizontal',
        left: '50',
        top:'50',
        data: ['接访室', '提讯室', '警员'],
        textStyle:{
          color:'#ffffff',
        },
      },*/
/*      tooltip: {
        trigger: 'item',
        show: false,
       /!* formatter:function (params){
          return <div><span>接访室</span><span>提讯室</span><span>警 员</span></div>;
        },*!/
      },*/
      series: [
        {
          type: 'map',
          mapType: 'hubei',
          label: {
            position: 'inside',
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
              areaColor: '#5743a4',
              label:{show:true},
            },
            emphasis: {
              borderColor: '#fff',
              areaColor: '#331f76',
              label:{show:true},
            },
          },
          animation: true,
          // animationDurationUpdate: 1000,
          // animationEasingUpdate: 'quinticInOut'
        },
        {
          name: '接访室',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol:'image://'+jiefangshi,
          z:999,
          // symbolSize:15,
          data:this.convertData(jiefangdata),
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
        },
      ],
    };
    return <Echarts option={option} style={{ height:800}} onEvents={{
      click:(param)=>{
        if(this.state.city!==param.data.name){
          this.setState({city:param.data.name});
          this.props.getCity(param.data.name);
        }
      },
    }}
    />;
  }
}


const jiefangdata = [
  {name: '武汉市', value: 45},
  {name: '十堰市', value: 46},
  {name: '襄阳市', value: 47},
  {name: '随州市', value: 47},
  {name: '荆门市', value: 47},
  {name: '宜昌市', value: 49},
  {name: '孝感市', value: 50},
  {name: '恩施土家族苗族自治州', value: 50},
  {name: '潜江市', value: 50},
  {name: '仙桃市', value: 51},
  {name: '咸宁市', value: 51},
  {name: '黄石市', value: 52},
  {name: '黄冈市', value: 52},
  {name: '鄂州市', value: 52},
];
export const geoCoordMap = {
  // '十堰市':[320,250],
  '十堰市':[320,250],
  '襄阳市':[450,310],
  '随州市':[570,300],
  '孝感市':[610,400],
  '黄冈市':[760,480],
  '神农架林区':[300,345],
  '宜昌市':[350,480],
  '恩施土家族苗族自治州':[200,550],
  '荆州市':[465,540],
  '荆门市':[490,410],
  '天门市':[540,465],
  '潜江市':[505,500],
  '仙桃市':[575,515],
  '咸宁市':[645,600],
  '武汉市':[660,470],
  '鄂州市':[695,495],
  '黄石市':[725,550],
};

