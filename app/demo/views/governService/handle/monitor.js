import React, { Component } from 'react';
import Card from '../../component/Card1';
import CommTable from './components/commTable';
import MonitorDetail from './components/monitorDetail';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img5 = require('../../../images/icon_fuwubanli_selected.png');

export default class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
  }

  getSValue = (value)=>{
    console.log(value);
  }
  render() {

    return (
      <div className="page1">
        {/*政务服务->服务办理->服务监控*/}
        <div className="my-header fwjk">
          <Card title="查询条件" icon={img1} >
            <CommTable getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card className="second-card" title="待办理服务" icon={img5} >
            <ul className="tips">
              {
                status.map((v,k)=>{
                  return <li key={k}><span className={`bc-color${k+1} rect`}/><span className="a-style1">{v}</span></li>;
                })
              }
            </ul>
            <MonitorDetail />
          </Card>
        </div>
      </div>
    );
  }
}

let status=['逾期未办','即将逾期','正常'];
