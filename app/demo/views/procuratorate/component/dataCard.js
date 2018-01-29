/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import React, { Component } from 'react';
import './style.less';
export default class DataCard extends Component {

  constructor(props) {
    super(props);
    this.state={
      flag:false,
    };
  }

  render() {
    const {number,data} = this.props;
    return (
      <div className="data-card">
        <span className="number">{'0'+number}</span>
        <span className="city">{data.city}</span>
        <span className="using-rate">{data.using+'/'+data.total}（小时）</span>
        <span  className="tendency">
          <img className="flag" src={require(`../imgs/${data.tendency==='up'?'上箭头':'下箭头'}.png`)}/>
          {/*<img className="flag" src={require(`../imgs/${data.tendency==='up'?'↑':'↓'}.png`)}/>*/}
          <span className="percent">{data.percent+'%'}</span>
        </span>
      </div>
    );
  }
}
