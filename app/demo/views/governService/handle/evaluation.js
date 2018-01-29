import React, { Component } from 'react';
import Card from '../../component/Card1';
import EvalDTable from './components/evalDTable';
import EvalDetail from './components/evalDetail';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img4 = require('../../../images/icon_fuwuxinxi_selected.png');

export default class Evaluation extends Component {
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
        {/*政务服务->服务办理->评价回复*/}
        <div className="my-header">
          <Card title="查询条件" icon={img1} >
            <EvalDTable getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card className="second-card" title="服务办理信息" icon={img4} >
            <EvalDetail />
          </Card>
        </div>

      </div>
    );
  }
}
