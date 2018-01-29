import React, { Component } from 'react';
import {Icon } from 'antd';
import './style/innerCard.less';
export default class InnerCard extends Component {

  constructor(props) {
    super(props);
    this.state={
      flag:false,
    };
  }

  render() {
    const {title,icon,more,className} = this.props;
    let flag = this.state.flag;
    if(more){
      flag=true;
    }
    return (
      <div className={`inner-card ${className?className:''}`}>
        <div className="inner-title">
          {typeof icon !== 'undefined'&&<span><img className="img" src={icon} /></span>}
          <span className="s1">{title}</span>
          {flag?<span><a className="s21 a-style1">更多<Icon type="double-right" /></a></span>:''}
        </div>
        <div className="inner-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
