/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import React, { Component } from 'react';
import BMap from 'BMap';
import {Icon } from 'antd';
import './mainPage.less';
export default class BaiduMap extends Component {

  constructor(props) {
    super(props);
    this.state={

    };
  }

  componentDidMount(){
    const that = this;
    // let setVisible = this.props;
    let map = new BMap.Map('bMap');
    let point = new BMap.Point(114.361006,30.516163);
    map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
    let marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);//添加标注
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity('武汉'); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    function showInfo(e){
      that.props.setVisible(true);
    }
    map.addEventListener('click', showInfo);
  }

  render() {
    return (
      <div className="BMap" >
        <div id="bMap" className="map"/>
      </div>
    );
  }
}
