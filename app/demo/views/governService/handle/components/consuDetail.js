import React, { Component } from 'react';
import {Table,Button,Modal,Form,Input,Row,Col} from 'antd';
import InnerCard from '../../../component/innerCard';
import './style/style.less';
const FormItem = Form.Item;
const { TextArea } = Input;
let logo = require('../../../../images/icon_fuwuxiangqing.png');
let save = require('../../../../images/btn-save.png');
let commit = require('../../../../images/btn-submit.png');
export default class ConsuDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      visible:false,
      index:null,
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
      className:'cell-text-left',
    }, {
      title: '咨询编号',
      dataIndex: 'd',
      key: 'd',
    }, {
      title: '咨询用户',
      dataIndex: 'f',
      key: 'f',
    }, {
      title: '咨询时间',
      dataIndex: 'g',
      key: 'g',
    }, {
      title: '回复人员',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '回复时间',
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
            {record.j==='待回复'?<a className="a-detail reply">回复</a>:null}
          </div>;
      },
    }];
    const data = [{
      key:0,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'zx171101',
      f:'张峰',
      g:'2017-11-20 14:23:33',
      h:'张鑫',
      i:'2017-11-20 14:23:33',
      j:'待回复',
    },{
      key:1,
      a:'备案审核',
      c:'建筑起重机械备案和使用登记',
      d:'zx170621',
      f:'李吉',
      g:'2017-06-21 14:34:11',
      h:'张鑫',
      i:'2017-06-21 15:34:23',
      j:'已回复',
    },{
      key:2,
      a:'备案审核',
      c:'中华人民共和国普通护照的签发',
      d:'zx170611',
      f:'刘上轩',
      g:'2017-06-21 10:41:25',
      h:'张鑫',
      i:'2017-06-21 13:44:53',
      j:'已回复',
    }];
    return (
      <div>
        <Modal title="服务咨询回复详情"
          visible={this.state.visible}
          onOk={this.handleOk}
          width={1086}
          onCancel={this.handleCancel}
          footer={null}
          className="modal"
        >
          <MsgReply/>
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

class Form1 extends Component{
  constructor(props) {
    super(props);
    this.state={
    };
  }
  componentDidMount(){
    this.props.form.setFieldsValue({
      a: 'zx171101',
      b: '张峰',
      c: 18987676523,
      d: '备案审核',
      e: '燃气工程施工许可',
      f:'2017-11-20 13:23:12',
      g: '个人能否申请燃气工程施工许可？',
      h:'张鑫',
      i:'2017-11-20 14:23:33',
      j:'待回复',
      k:'只有通过实名认证的企业申请才能燃气工程施工许可',
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="mt10">
        <InnerCard title="咨询信息">
          <br/>
          <Row gutter={8} type="flex" align="middle">
            <Col span={8}>
              <FormItem label="申请编号" {...formItemLayout}>
                {getFieldDecorator('a')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="咨询用户" {...formItemLayout}>
                {getFieldDecorator('b')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="咨询人手机号" {...formItemLayout}>
                {getFieldDecorator('c')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row gutter={8} type="flex" align="middle">
            <Col span={8}>
              <FormItem label="咨询服务类型" {...formItemLayout}>
                {getFieldDecorator('d')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="服务名称" {...formItemLayout}>
                {getFieldDecorator('e')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="咨询时间" {...formItemLayout}>
                {getFieldDecorator('f')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{marginLeft:12}}>
              <FormItem label="咨询内容" {...Layout}>
                {getFieldDecorator('g')(
                  <TextArea rows={4}/>
                )}
              </FormItem>
            </Col>
          </Row>
        </InnerCard>
        <div className="mt30"/>
        <InnerCard title="咨询回复">
          <br/>
          <Row gutter={8} type="flex" align="middle">
            <Col span={8}>
              <FormItem label="回复人" {...formItemLayout}>
                {getFieldDecorator('h')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="回复时间" {...formItemLayout}>
                {getFieldDecorator('i')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="回复状态" {...formItemLayout}>
                {getFieldDecorator('j')(
                  <Input readOnly className="dis-input"/>
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{marginLeft:12}}>
              <FormItem label="咨询内容" {...Layout}>
                {getFieldDecorator('k')(
                  <TextArea rows={4}/>
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
const MsgReply = Form.create()(Form1);
