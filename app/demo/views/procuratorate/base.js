/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import React, { Component } from 'react';
import './visiblePlat.less';

const userIcon = require('./imgs/用户.png');
const exitIcon = require('./imgs/退出.png');
const fiberHome = require('./imgs/logo.png');
const logoFont = require('./imgs/LOGO字体.png');

export default class Pbase extends Component {

  constructor(props) {
    super(props);
    this.state={
      flag:false,
      city:'',
    };
  }


  render() {
    return (
      <div className="visiblePlat">
        <div className="header">
          <div className="main-title">
            <img  src={fiberHome} />
            <img className="logo-font" src={logoFont} />
          </div>
          <div className="header-info">
            <div className="info"><img src={userIcon}/><span className="user-name">admin</span></div>
            <div className="info"><img src={exitIcon}/><span>退出</span></div>
          </div>
        </div>
        <div className="contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}
