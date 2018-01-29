import React, { Component } from 'react';
import Card from '../../component/Card1';
import CommTable from './components/commTable';
import DoneDetail from './components/doneDetail';
import '../style/style.less';
const img1 = require('../../../images/icon_cahxuntiaojian.png');
const img5 = require('../../../images/icon_fuwubanli_selected.png');

export default class doneService extends Component {
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
        {/*政务服务->服务办理->已办服务*/}
        <div className="my-header">
          <Card title="查询条件" icon={img1} >
            <CommTable getSValue={this.getSValue}/>
          </Card>
          <div className="mt30" />
          <Card className="second-card" title="已办任务" icon={img5} >
            <DoneDetail />
          </Card>
        </div>

      </div>
    );
  }
}
