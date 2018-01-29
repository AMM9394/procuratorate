/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import React, { Component } from 'react';
import {Icon } from 'antd';
import './style.less';
export default class ChartCard extends Component {

  constructor(props) {
    super(props);
    this.state={
      flag:false,
    };
  }

  render() {
    const {title,className} = this.props;
    return (
      <div className={`chart-card ${className?className:''}`}>
        <div className="chart-title">{title}</div>
        <div className="chart-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
