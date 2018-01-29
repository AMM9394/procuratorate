/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import React, { Component } from 'react';
import MiniCard from './component/miniCard';
import ChartCard from './component/chartCard';
import DataCard from './component/dataCard';
import HubeiMap from './component/hubeiMap';
import echarts from 'echarts';
import {Charts} from 'yrui';
const Echarts=Charts(echarts);
import './visiblePlat.less';
import {roomCount,leftCharts,rightCharts,usageRate,geoCoordMap,blueRooms,pinkRooms,policeMen} from './mock/data';
import {hubeiMap,chart4} from './mock/charts';

const userIcon = require('./imgs/用户.png');
const exitIcon = require('./imgs/退出.png');
const fiberHome = require('./imgs/logo.png');
const logoFont = require('./imgs/LOGO字体.png');

export default class VisiblePlat extends Component {

  constructor(props) {
    super(props);
    this.state={
      flag:false,
      city:'',
    };
  }
  getCity =(params)=>{
    this.setState({city:params});
  }

  render() {
    const {city} = this.state;
    return (
      <div className="contents">
        <div className="left-list">
          {
            leftCharts.map((item,key)=><ChartCard className={key===2?'no-margin':''} title={item.title} key={key}>
              <Echarts option={item.option} style={{ height:222}}/>
            </ChartCard>)
          }
        </div>
        <div className="center-content">
          <div className="room-using">
            {
              roomCount.map((item,key)=><div key={key} className="room">
                <MiniCard title={item.title} total={item.total} using={item.using} Icon={item.Icon} />
              </div>)
            }
          </div>
          <div className="hubei-map">
            <div className="lengend">
              <img src={require('./imgs/接访室小.png')} /><span>接访室</span>
              <img src={require('./imgs/提讯室小.png')} /><span>提讯室</span>
              <img src={require('./imgs/警员.png')} /><span>警员</span>
            </div>
            {
              city?<div className="detail">
                <p className="city">{city}</p>
                <p>接访室：<span className="using">{15}</span><span className="split">/</span><span className="total">{23}</span></p>
                <p>提讯室：<span className="using">{28}</span><span className="split">/</span><span className="total">{52}</span></p>
                <p>警&nbsp;&nbsp;&nbsp;员：<span className="using">{428}</span><span className="split">/</span><span className="total">{768}</span></p>
              </div>:null
            }
            <HubeiMap getCity={this.getCity} />
            {
              blueRooms.map((item,key)=><img key={key} className="blueRooms" src={require('./imgs/接访室小.png')} style={{left:item.left,top:item.top}}/>)
            }
            {
              pinkRooms.map((item,key)=><img key={key} className="blueRooms" src={require('./imgs/提讯室小.png')} style={{left:item.left,top:item.top}}/>)
            }
            {
              policeMen.map((item,key)=><img key={key} className="blueRooms" src={require('./imgs/警员.png')} style={{left:item.left,top:item.top}}/>)
            }
          </div>
        </div>
        <div className="right-list">
          {
            rightCharts.map((item,key)=><div key={key}>
              <ChartCard title={item.title}>
                <Echarts option={item.option} style={{ height:222}}/>
              </ChartCard>
            </div>)
          }
          <ChartCard title="资源使用率排名" className="no-margin">
            {
              usageRate.map((item,key)=><DataCard data={item} number={key+1} key={key}/>)
            }
          </ChartCard>
        </div>
      </div>
    );
  }
}
