import React, { Component } from 'react';
import Card from '../../component/Card1';
import ChaNumForm from './component/chaNumFrom';
import NumberTable from './component/numberTable';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img2 = require('../../../images/icon_fuwutongji_selected.png');

export default class NumberStat extends Component {
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
        {/*政务服务->服务统计->服务办理数量统计*/}
        <div className="my-header">
          <Card title="查询条件" icon={img1} >
            <ChaNumForm getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card  title="服务办理数量统计" icon={img2} >
            <NumberTable/>
          </Card>
        </div> 
        
      </div>
    );
  }
}
