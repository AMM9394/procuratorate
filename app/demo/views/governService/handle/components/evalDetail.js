import React, { Component } from 'react';
import {Table,Button,Modal,Tabs,Form,Row,Col,Input} from 'antd';
import InnerCard from '../../../component/innerCard';
import Common from './common';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const { TextArea } = Input;
let logo = require('../../../../images/icon_fuwuxiangqing.png');
let save = require('../../../../images/btn-save.png');
let commit = require('../../../../images/btn-submit.png');

export default class EvalDetail extends Component {
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
      title: '评价时间',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '服务评分',
      dataIndex: 'i',
      key: 'i',
    }, {
      title: '回复状态',
      dataIndex: 'j',
      key: 'j',
    }, {
      title: '操作',
      dataIndex: 'q',
      key: 'q',
      width:150,
      render:(text,record,index)=>{
        let that=this;
        return <div className="mm-operation">
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
      g:'张鑫',
      h:'2017-11-20 14:23:33',
      i:5,
      j:'待回复',
    },{
      key:1,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq170621',
      f:'石河子市天源燃气有限公司',
      g:'张鑫',
      h:'2017-06-21 15:34:23',
      i:4,
      j:'已回复',
    },{
      key:2,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq170611',
      f:'石河子市天源燃气有限公司',
      g:'张鑫',
      h:'2017-06-21 13:44:53',
      i:5,
      j:'已回复',
    }];
    return (
      <div>
        <Modal title="服务评价回复详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          width={1086}
          onCancel={this.handleCancel}
          footer={null}
          className="modal"
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="评价信息" key="1"><Key1Content/></TabPane>
            <TabPane tab="服务信息" key="2"><Common flag={2}/></TabPane>
          </Tabs>
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

class myForm extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.form.setFieldsValue({
      a: 'cgsq171101',
      b: '齐强',
      c: '18987676523',
      d: 5,
      e: 5,
      f: 5,
      g:5,
      h:'2017-11-23 16:12',
      i:'非常满意',
      j:'杨晓',
      k:'2016-11-23 16:23',
      l:'待回复',
      m:'',
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="mt10">
        <InnerCard title="评价信息">
          <br/>
          <Row gutter={8} type="flex" align="middle" className="mt30">
            <Col span={8}>
              <FormItem label="申请编号" {...formItemLayout}>
                {getFieldDecorator('a')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="评价人" {...formItemLayout}>
                {getFieldDecorator('b')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="评价人手机号" {...formItemLayout}>
                {getFieldDecorator('c')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={8} type="flex" align="middle">
            <Col span={8}>
              <FormItem label="总评分" {...formItemLayout}>
                {getFieldDecorator('d')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="办理速度评分" {...formItemLayout}>
                {getFieldDecorator('e')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="服务态度评分" {...formItemLayout}>
                {getFieldDecorator('f')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={8} type="flex" align="middle">
            <Col span={8}>
              <FormItem label="服务质量评分" {...formItemLayout}>
                {getFieldDecorator('g')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="评价时间" {...formItemLayout}>
                {getFieldDecorator('h')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{marginLeft:12}}>
              <FormItem label="评价内容" {...Layout}>
                {getFieldDecorator('i')(
                  <TextArea rows={4}/>
                )}
              </FormItem>
            </Col>
          </Row>
        </InnerCard>
        <div className="mt30"/><br/>
        <InnerCard title="评价信息">
          <br/>
          <Row gutter={8} type="flex" align="middle">
            <Col span={8}>
              <FormItem label="回复人" {...formItemLayout}>
                {getFieldDecorator('j')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="回复时间" {...formItemLayout}>
                {getFieldDecorator('k')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="回复状态" {...formItemLayout}>
                {getFieldDecorator('l')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{marginLeft:12}}>
              <FormItem label="咨询内容" {...Layout}>
                {getFieldDecorator('m')(
                  <TextArea  rows={4}/>
                )}
              </FormItem>
            </Col>
          </Row>
        </InnerCard>
        <Row style={{textAlign:'center'}}>
          <Button className="btn"><span className="text"> <img src={save}/> 保存</span></Button>
          <Button className="btn ml15"><span className="text"> <img src={commit}/> 提交</span></Button>
        </Row>
      </Form>
    );
  }
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};
const Layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 21 },
  },
};
const Key1Content = Form.create()(myForm);
