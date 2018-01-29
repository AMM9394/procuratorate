import React, { Component } from 'react';
import Card from '../../component/Card1';
import ConsuDTable from './components/consuDTable';
import ConsuDetail from './components/consuDetail';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img4 = require('../../../images/icon_fuwuxinxi_selected.png');

export default class Consultation extends Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
  }

  getSValue = (value)=>{
    // console.log(value);
  }
  render() {

    return (
      <div className="page1">
        {/*政务服务->服务办理->咨询回复*/}
        <div className="my-header">
          <Card title="查询条件" icon={img1} >
            <ConsuDTable getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card className="second-card" title="服务咨询信息" icon={img4} >
            <ConsuDetail />
          </Card>
        </div>
      </div>
    );
  }
}
