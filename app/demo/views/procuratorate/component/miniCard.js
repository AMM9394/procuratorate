/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import React, { Component } from 'react';
import './style.less';
export default class MiniCard extends Component {

  constructor(props) {
    super(props);
    this.state={
      flag:false,
    };
  }

  render() {
    const {title,total,using,Icon} = this.props;
    return (
      <div className="mini-card">
        <div className="card-content">
          <img src={Icon} />
          <div className="card-right">
            <p className="number">
              <span className="using">{using}</span>
              <span className="split">/</span>
              <span className="total">{total}</span>
            </p>
            <p className="desp">(已使用/总数)</p>
          </div>
        </div>
        <div className="card-title">{title}</div>
      </div>
    );
  }
}
