import React, { Component } from 'react';
import Card from '../../component/Card1';
import MessageForm1 from './components/messageForm1';
import MessageTable1 from './components/messageTable1';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img4 = require('../../../images/icon_fuwuxinxi_selected.png');

export default class Catalogue extends Component {
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
        {/*政务服务->服务信息->服务分类*/}
        <div className="my-header">
          <Card title="查询条件" icon={img1} >
            <MessageForm1 getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card className="second-card"  title="分类信息" icon={img4} >
            <MessageTable1 />
          </Card>
        </div>
      </div>
    );
  }
}
