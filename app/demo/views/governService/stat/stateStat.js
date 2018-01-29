import React, { Component } from 'react';
import Card from '../../component/Card1';
import StateForm from './component/stateForm';
import StateTable from './component/stateTable';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img2 = require('../../../images/icon_fuwutongji_selected.png');

export default class StateStat extends Component {
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
        {/*政务服务->服务统计->服务办理状态统计*/}
        <div className="my-header">
          <Card title="查询条件" icon={img1} >
            <StateForm getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card  title="服务办理状态统计" icon={img2} >
            <StateTable/>
          </Card>
        </div> 
        
      </div>
    );
  }
}
