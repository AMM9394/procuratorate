import React, { Component } from 'react';
import {Table,Modal,Form,Input,Button,Row} from 'antd';
import Common from './common';
import './style/style.less';

let logo = require('../../../../images/icon_fuwuxiangqing.png');
const FormItem = Form.Item;
const TextArea = Input.TextArea;

export default class TodoDetail extends Component {
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
      title: '申请人',
      dataIndex: 'g',
      key: 'g',
    }, {
      title: '提交时间',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '操作',
      dataIndex: 'q',
      key: 'q',
      width:150,
      render:(text,record,index)=>{
        let that=this;
        return <div className="mm-operation">
            <a onClick={that.showModal.bind(that,index)} className="a-detail">查看详情</a>
            <a className="a-detail reply">审批</a>
          </div>;
      },
    }];
    const data = [{
      key:0,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171101',
      f:'石河子市天源燃气有限公司',
      g:'张枫',
      h:'2017-11-20 14:23:33',
    },{
      key:1,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171121',
      f:'石河子市天源燃气有限公司',
      g:'陈敏',
      h:'2017-11-21 15:34:23',
    },{
      key:2,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171111',
      f:'石河子市天源燃气有限公司',
      g:'陈晓丹',
      h:'2017-11-21 13:44:53',
    },{
      key:3,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq171112',
      f:'石河子市天源燃气有限公司',
      g:'孔二磊',
      h:'2017-11-26 15:23:33',
    }];
    const formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 },
      },
    };
    return (
      <div>
        <Modal title="待办服务详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          width={1086}
          onCancel={this.handleCancel}
          footer={null}
          className="modal"
        >
          <Common flag={0}/>
          <br/>
          <FormItem label="审批意见" {...formLayout}>
            <TextArea rows={4}/>
          </FormItem>
          <Row style={{textAlign:'center'}} className="mt30">
            <Button className="btn"><span className="text">审批通过</span></Button>
            <Button className="btn-o ml15"><span className="text">驳回</span></Button>
          </Row>
        </Modal>
        <Table
          dataSource={data}
          columns={columns}
          bordered
          className="table1 dbfw"
        />
      </div>
    );
  }
}

