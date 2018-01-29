import React, { Component } from 'react';
import {Table,Modal,Button,Row} from 'antd';
import Common from './common';
import '../../style/style.less';
import './style/style.less';
let logo = require('../../../../images/icon_fuwuxiangqing.png');

export default class MonitorDetail extends Component {
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
      title: '提交时间',
      dataIndex: 'g',
      key: 'g',
    }, {
      title: '办理期限',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '办理人',
      dataIndex: 'i',
      key: 'i',
    }, {
      title: '操作',
      dataIndex: 'q',
      key: 'q',
      render:(text,record,index)=>{
        let that=this;
        return <div>
            <a onClick={that.showModal.bind(that,index)} className="a-detail">查看详情</a>
            {record.j==='待回复'?<a className="a-detail reply">回复</a>:''}
          </div>;
      },
    }];
    const data = [{
      key:0,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171101',
      f:'石河子市天源燃气有限公司',
      g:'2017-11-20 14:23:33',
      h:'2017-11-24 14:23:33',
      i:'张鑫',
    },{
      key:1,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171121',
      f:'石河子市天源燃气有限公司',
      g:'2017-11-21 15:34:23',
      h:'2017-11-25 15:34:23',
      i:'李明',
    },{
      key:2,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171111',
      f:'石河子市天源燃气有限公司',
      g:'2017-11-21 13:44:53',
      h:'2017-11-25 13:44:53',
      i:'张鑫',
    },{
      key:3,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171111',
      f:'石河子市天源燃气有限公司',
      g:'2017-11-22 15:23:33',
      h:'2017-11-26 15:23:33',
      i:'李明',
    }];
    return (
      <div>
        <Modal title="服务监控详情"
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
            <Button className="btn"><span className="text">服务催办</span></Button>
          </Row>
        </Modal>
        <Table
        dataSource={data}
        columns={columns}
        bordered
        className="table1 fwjk"
        rowClassName={(record, index)=>{
          if(index===0){
            return 'color1';
          }
          if(index===1||index===2){
            return 'color2';
          }
          else
            return 'color3';
        }}
      />
      </div>


    );
  }
}
