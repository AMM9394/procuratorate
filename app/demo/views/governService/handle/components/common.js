import React, { Component } from 'react';
import {Table,Modal,Form,Row,Col,Input,Timeline} from 'antd';
import InnerCard from '../../../component/innerCard';
import '../../style/style.less';
import './style/style.less';

let img1 = require('../../../../images/icon_pdf.png');
let img2 = require('../../../../images/icon_word.png');
let picRed = require('../../../../images/icon_red.png');
let picGray = require('../../../../images//icon_gray.png');
let picGreen = require('../../../../images/icon_green.png');
let picBlue = require('../../../../images/icon_blue.png');
const FormItem = Form.Item;


export default class Common extends Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }
  getValue =() =>{
    const flag= this.props.flag;
    if(flag===0){
      return <MsgCheck/>;
    }else if(flag===1){
      return <MsgCheck1/>;
    }else{
      return <MsgCheck2/>;
    }
  }
  render() {
    return(
      <div className="">
        <InnerCard title="申请信息">
          <MsgApply/>
        </InnerCard>
        <br/>
        <InnerCard title="提交的材料">
          <br/>
          <MsgComit/>
        </InnerCard>
        <InnerCard title="审批记录">
          {this.getValue()}
        </InnerCard>
      </div>
    );
  }
}

class Form1 extends  Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }
  componentDidMount(){
    this.props.form.setFieldsValue({
      a: 'cgsq171101',
      b: '燃气工程施工许可',
      c: '石河子市天源燃气有限公司',
      d: '张枫',
      e: 18932121178,
      f: '2017-11-20',
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <Form onSubmit={this.handleSearch}>
        <br/><br/>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="申请单号" {...formItemLayout}>
              {getFieldDecorator('a')(
                <Input className="dis-input"/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="服务名称" {...formItemLayout}>
              {getFieldDecorator('b')(
                <Input className="dis-input"/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="申请单位" {...formItemLayout}>
              {getFieldDecorator('c')(
                <Input className="dis-input"/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="申请人" {...formItemLayout}>
              {getFieldDecorator('d')(
                <Input  className="dis-input"/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="申请人电话" {...formItemLayout}>
              {getFieldDecorator('e')(
                <Input className="dis-input"/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="申请日期" {...formItemLayout}>
              {getFieldDecorator('f')(
                <Input className="dis-input"/>
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};
const MsgApply = Form.create()(Form1);



class MsgComit extends Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render:(text,record,index)=>index+1,
    }, {
      title: '材料名称',
      dataIndex: 'a',
      key: 'a',
    }, {
      title: '表格附件',
      dataIndex: 'b',
      key: 'b',
      render:(text,record)=>(
        <div>
          <img src={record.flag===0?img1:img2}/>
          <span className="text">{text}</span>
          <span className="text-link"><a>预览</a></span>
        </div>
      ),
    }, {
      title: '审批意见',
      dataIndex: 'd',
      key: 'd',
    }];
    let dataSource= [];
    msgComitData.map((v,k)=>{
      let data={
        key:k,
        a:v[0],
        b:v[1],
        flag:v[2],
      };
      dataSource.push(data);
    });
    return(
      <div className="">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          className="table1 table3"
          //pagination={false}
        />
      </div>
    );
  }
}


let msgComitData=[
  ['石河子市燃气热力工程施工许可申报表','石河子市燃气热力工程施工许可申报表',0],
  ['石河子市燃气热力工程质量监督登记表','石河子市燃气热力工程质量监督登记表',0],
  ['石河子市燃气热力工程质监站工程报监收取资料清单','石河子市燃气热力工程质监站工程报监收取资料清单',0],
  ['工程区域方位图','工程区域方位图',1],
  ['总平面布置图','总平面布置图',1],
  ['施工图设计文件审查合格书','施工图设计文件审查合格书',1],
  ['设计、施工、监理、勘察单位资质文件','设计、施工、监理、勘察单位资质文件',1],
];

class MsgCheck extends Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }
  render() {
    return(
      <div className="mt30 my-time-line">
        <Row gutter={16} type="flex" align="middle">
          <Col span={3}>
            <ul className="time">
              <li className="detail time-text">&nbsp;</li>
              <li className="detail time-text">&nbsp;</li>
              <li className="detail time-text">&nbsp;</li>
              <li className="detail time-text">11-20 13:34:32</li>
            </ul>
          </Col>
          <Col span={6} className="line">
            <Timeline>
              <Timeline.Item dot={<img src={picGray} />}>城管委领导审批&nbsp;&nbsp;&nbsp;李平</Timeline.Item>
              <Timeline.Item dot={<img src={picGray} />}>城管委督查人员审查&nbsp;&nbsp;&nbsp;陈金</Timeline.Item>
              <Timeline.Item dot={<img src={picRed} />} className="red-text">城管委业务人员办理&nbsp;&nbsp;&nbsp;张鑫</Timeline.Item>
              <Timeline.Item dot={<img src={picGreen} />} className="green-text">提交申请&nbsp;&nbsp;&nbsp;张枫</Timeline.Item>
            </Timeline>
          </Col>
          <Col style={{textAlign:'center'}} span={15}>
            <img src={require('../../../../images/xxfw_tabs3.png')}/>
          </Col>
        </Row>
      </div>
    );
  }
}

class MsgCheck1 extends Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }
  render() {
    return(
      <div className="mt30 my-time-line">
        <Row gutter={16} type="flex" align="middle">
          <Col span={3}>
            <ul className="time">
              <li className="detail green-text">06-20 13:34:32</li>
              <li className="detail green-text">06-20 13:34:32</li>
              <li className="detail green-text">06-20 13:34:32</li>
              <li className="detail green-text">06-20 13:34:32</li>
            </ul>
          </Col>
          <Col span={6} className="line">
            <Timeline>
              <Timeline.Item dot={<img src={picGreen} />} className="green-text">城管委领导审批&nbsp;&nbsp;&nbsp;李平</Timeline.Item>
              <Timeline.Item dot={<img src={picGreen} />} className="green-text">城管委督查人员审查&nbsp;&nbsp;&nbsp;陈金</Timeline.Item>
              <Timeline.Item dot={<img src={picGreen} />} className="green-text">城管委业务人员办理&nbsp;&nbsp;&nbsp;张鑫</Timeline.Item>
              <Timeline.Item dot={<img src={picGreen} />} className="green-text">提交申请&nbsp;&nbsp;&nbsp;张枫</Timeline.Item>
            </Timeline>
          </Col>
          <Col style={{textAlign:'center'}} span={15}>
            <img src={require('../../../../images/xxfw_tabs3.png')}/>
          </Col>
        </Row>
      </div>
    );
  }
}

class MsgCheck2 extends Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }
  render() {
    return(
      <div className="mt30 my-time-line">
        <Row gutter={16} type="flex" align="middle">
          <Col span={3}>
            <ul className="time">
              <li className="detail time-text">06-20 13:34:32</li>
              <li className="detail time-text">06-20 13:34:32</li>
              <li className="detail time-text">06-20 13:34:32</li>
              <li className="detail time-text">06-20 13:34:32</li>
            </ul>
          </Col>
          <Col span={6} className="line">
            <Timeline>
              <Timeline.Item dot={<img src={picBlue} />}  >城管委领导审批&nbsp;&nbsp;&nbsp;李平</Timeline.Item>
              <Timeline.Item dot={<img src={picBlue} />}  >城管委督查人员审查&nbsp;&nbsp;&nbsp;陈金</Timeline.Item>
              <Timeline.Item dot={<img src={picBlue} />}  >城管委业务人员办理&nbsp;&nbsp;&nbsp;张鑫</Timeline.Item>
              <Timeline.Item dot={<img src={picBlue} />}  >提交申请&nbsp;&nbsp;&nbsp;张枫</Timeline.Item>
            </Timeline>
          </Col>
          <Col style={{textAlign:'center'}} span={15}>
            <img src={require('../../../../images/xxfw_tabs3.png')}/>
          </Col>
        </Row>
      </div>
    );
  }
}
