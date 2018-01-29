import React, { Component } from 'react';
import {Table,Modal,Row,Button} from 'antd';
import Common from './common';
import './style/style.less';
let logo = require('../../../../images/icon_fuwuxiangqing.png');


export default class SurvDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      index:null,
      visible:false,
    };
  }
  showModal=(index)=>{
    this.setState({
      index:index,
      visible:true,
    });
  }
  handleOk=()=>{
    this.setState({
      visible:false,
    });
  }
  handleCancel=()=>{
    this.setState({
      visible:false,
    });
  }

  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render:(text,record,index)=>index+1,
    }, {
      title: '服务类型',
      dataIndex: 'a',
      key: 'a',
    }, {
      title: '服务名称',
      dataIndex: 'c',
      key: 'c',
    }, {
      title: '申请单号',
      dataIndex: 'd',
      key: 'd',
    }, {
      title: '申请单位',
      dataIndex: 'f',
      key: 'f',
    }, {
      title: '办理人员',
      dataIndex: 'g',
      key: 'g',
    }, {
      title: '办理时间',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '状态',
      dataIndex: 'i',
      key: 'i',
    }, {
      title: '操作',
      dataIndex: 'q',
      key: 'q',
      render:(text,record,index)=>{
        let that=this;
        return <a onClick={that.showModal.bind(that,index)} className="a-detail">查看详情</a>;
      },
    }];
    const data = [{
      key:0,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171101',
      f:'石河子市天源燃气有限公司',
      g:'张鑫',
      h:'2017-11-20 14:23:33',
      i:'办理中',
    },{
      key:1,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq170621',
      f:'石河子市天源燃气有限公司',
      g:'张鑫',
      h:'2017-06-21 15:34:23',
      i:'已完成',
    },{
      key:2,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq170611',
      f:'石河子市天源燃气有限公司',
      g:'张鑫',
      h:'2017-06-21 13:44:53',
      i:'已完成',
    }];
    return (
      <div>
        <Modal title="电子监察详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          width={1086}
          onCancel={this.handleCancel}
          footer={null}
          className="modal"
        >
          <Common flag={0}/>
          <br/>
          <Row style={{textAlign:'center'}}>
            <Button className="btn"><span className="text">问题记录</span></Button>
          </Row>
        </Modal>
        <Table
          dataSource={data}
          columns={columns}
          bordered
          className="table1"
          //pagination={false}
        />
      </div>


    );
  }
}
