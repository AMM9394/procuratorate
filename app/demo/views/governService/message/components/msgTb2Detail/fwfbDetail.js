import React, { Component } from 'react';
import {Form,Button,Input,Row,Col,Tabs ,Select,Radio,Icon,Table } from 'antd';
import {selectValue2,zerenPart,countries,zhichi,dateType} from '../../../../../modal/data';
import InnerCard from '../../../../component/innerCard';
import './style.less';
const { TextArea } = Input;
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const img = require('../../../../../images/xxfw_tabs3.png');
let save = require('../../../../../images/btn-save.png');
let commit = require('../../../../../images/btn-publish.png');
let delete1 = require('../../../../../images/btn-delete.png');
let add = require('../../../../../images/btn-add.png');

export default class FwfbDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <Tabs className="mytab1" defaultActiveKey="1">
          <TabPane tab="基本资料" key="1"><Key1Content/></TabPane>
          <TabPane tab="提交材料" key="2"><Key2Content/></TabPane>
          <TabPane tab="审批流程" key="3"><Key3Content/></TabPane>
        </Tabs>
      </div>
    );
  }
}


class Form1 extends Component{
  constructor(props) {
    super(props);
  }
  handleSearch=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        console.log(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="fwxq-modal" onSubmit={this.handleSearch}>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="服务编号" {...formItemLayout}>
              {getFieldDecorator('a')(
                <Input readOnly className="dis-input"/>
              )}
            </FormItem>
          </Col>
          <Col span={16}>
            <FormItem label="服务名称" {...formItemLayout}>
              {getFieldDecorator('b')(
                <Input style={{width: '557px'}}/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="服务分类" {...formItemLayout} >
              {getFieldDecorator('c')(
                <Select allowClear>
                  {
                    selectValue2.map(function (s, j) {
                      return <Option key={j} value={`a${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="责任部门" {...formItemLayout}>
              {getFieldDecorator('d')(
                <Select allowClear>
                  {
                    zerenPart.map(function (s, j) {
                      return <Option key={j} value={`b${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="服务对象" {...formItemLayout}>
              {getFieldDecorator('e')(
                <RadioGroup>
                  <Radio value={1}>企业</Radio>
                  <Radio value={2}>个人</Radio>
                </RadioGroup>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={23}>
            <FormItem label="收费依据" {...formItemLayout}>
              {getFieldDecorator('f')(
                <Input style={{width:' 902px'}}/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="收费标准" {...formItemLayout}>
              {getFieldDecorator('g')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col offset={1} span={15}>
            <FormItem label="收费标准相关附件" {...formItemLayout}>
              {getFieldDecorator('h')(
                <div className="upload">
                  <Input className="width1"/>
                  <div className="upload-text">
                    <a style={{paddingRight:10}}>上传附件</a>
                    <a >预览</a>
                  </div>
                </div>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="证照快递费用" {...formItemLayout}>
              {getFieldDecorator('i')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="法定审批期限" {...formItemLayout}>
              <Col span={18}>
                <FormItem>
                  {getFieldDecorator('j')(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col offset={1} span={5}>
                工作日
              </Col>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="承诺审批期限" {...formItemLayout}>
              <Col span={18}>
                <FormItem>
                  {getFieldDecorator('k')(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col offset={1} span={5}>
                工作日
              </Col>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={16}>
            <FormItem label="颁发证照" {...formItemLayout}>
              {getFieldDecorator('l')(
                <Input style={{width:' 557px'}}/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="证照期限" {...formItemLayout}>
              <Col span={15}>
                <FormItem>
                  {getFieldDecorator('m')(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col offset={1} span={8}>
                <Select className="date-line" allowClear>
                  {
                    dateType.map(function (s, j) {
                      return <Option key={j} value={`c1${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              </Col>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="建设单位" {...formItemLayout}>
              {getFieldDecorator('n')(
                <Select allowClear>
                  {
                    countries.map(function (s, j) {
                      return <Option key={j} value={`c${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="技术支持" {...formItemLayout}>
              {getFieldDecorator('o')(
                <Select allowClear>
                  {
                    zhichi.map(function (s, j) {
                      return <Option key={j} value={`d${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="工作时间" {...formItemLayout}>
              {getFieldDecorator('p')(
                <Select allowClear>
                  {
                    zhichi.map(function (s, j) {
                      return <Option key={j} value={`e${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={16}>
            <FormItem label="地址" {...formItemLayout}>
              {getFieldDecorator('q')(
                <Input  style={{width:' 557px'}}/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="联系电话" {...formItemLayout}>
              {getFieldDecorator('r')(
                <Input/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <FormItem label="服务编号" {...formItemLayout1}>
              {getFieldDecorator('s')(
                <TextArea rows={3}/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle">
          <Col span={8}>
            <FormItem label="编制时间" {...formItemLayout}>
              {getFieldDecorator('t')(
                <Input readOnly className="dis-input"/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="发布时间" {...formItemLayout}>
              {getFieldDecorator('u')(
                <Input readOnly className="dis-input"/>
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="状态" {...formItemLayout}>
              {getFieldDecorator('p')(
                <Input readOnly className="dis-input"/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{textAlign:'center'}}>
          <Button className="btn"><span className="text"> <img src={save}/> 保存</span></Button>
          <Button className="btn ml15"><span className="text"> <img src={commit}/> 发布</span></Button>
          <Button className="btn-o ml15"><span className="text"> <img src={delete1}/> 清空</span></Button>
        </Row>
      </Form>
    );
  }
}
const Key1Content = Form.create()(Form1);
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 9 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};

const formItemLayout1= {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3},
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 21 },
  },
};


class Key2Content extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="up-part">
          <InnerCard title="必须提交的材料">
            <div className="btn-grounp">
              <Button className="btn"><span className="text"> <img src={add}/> 增加</span></Button>
              <Button className="btn ml15"><span className="text"> <img src={save}/> 保存</span></Button>
              <Button className="btn-o ml15"><span className="text"> <img src={delete1}/> 删除</span></Button>
            </div>
            <UpTable/>
          </InnerCard>
        </div>
        <div className="down-part mt30">
          <InnerCard title="选择提交的材料">
            <div className="btn-grounp">
              <Button className="btn"><span className="text"> <img src={add}/> 增加</span></Button>
              <Button className="btn ml15"><span className="text"> <img src={save}/> 保存</span></Button>
              <Button className="btn-o ml15"><span className="text"> <img src={delete1}/> 删除</span></Button>
            </div>
            <DownTable/>
          </InnerCard>
        </div>

      </div>
    );
  }
}

class UpTable extends Component {
  constructor(props) {
    super(props);

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
      className:'cell-text-left',
    }, {
      title: '材料说明',
      dataIndex: 'b',
      key: 'b',
      className:'cell-text-left',
    }, {
      title: '示范文本',
      dataIndex: 'c',
      key: 'c',
      render:(text,record,index)=>(
        <span><a>上传</a>
        <a style={{marginLeft:30}}>预览</a></span>
      ),
    }, {
      title: '表格附件',
      dataIndex: 'd',
      key: 'd',
      render:(text,record,index)=>(
        <span><a>上传</a>
        <a style={{marginLeft:30}}>预览</a></span>
      ),
    }];
    const dataSource = [];
    upTableData.map((v,k)=>{
      let data={
        id:k,
        a:v[0],
        b:v[1],
      };
      dataSource.push(data);
    });
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        className="table1"
        //pagination={false}
      />
    );
  }
}

let upTableData=[
  ['《石河子市燃气热力工程施工许可申报表》','如更改，需按手印'],
  ['石河子市燃气热力工程质量监督登记表','无特殊说明'],
  ['石河子市燃气热力工程质监站工程报监收取资料清单','施工图设计文件、施工组织、监理规划、施工合同等'],
  ['工程区域方位图','无特殊说明'],
  ['总平面布置图','规划红线'],
  ['施工图设计文件审查合格书','无特殊说明'],
  ['设计、施工、监理、勘察单位资质文件','加盖单位印章'],
];

class DownTable extends Component {
  constructor(props) {
    super(props);

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
      className:'cell-text-left',
    }, {
      title: '材料说明',
      dataIndex: 'b',
      key: 'b',
      className:'cell-text-left',
    }, {
      title: '示范文本',
      dataIndex: 'c',
      key: 'c',
      render:(text,record,index)=>(
        <span><a>上传</a>
        <a style={{marginLeft:30}}>预览</a></span>
      ),
    }, {
      title: '表格附件',
      dataIndex: 'd',
      key: 'd',
      render:(text,record,index)=>(
        <span><a>上传</a>
        <a style={{marginLeft:30}}>预览</a></span>
      ),
    }];
    const dataSource = [];
    downTableData.map((v,k)=>{
      let data={
        id:k,
        a:v[0],
        b:v[1],
      };
      dataSource.push(data);
    });
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        className="table1"
        //pagination={false}
      />
    );
  }
}

let downTableData=[
  ['建设工程规划许可证','场站工程需要提交'],
  ['消防施工图审核意见书','场站工程需要提交'],
];




class Key3Content extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <img src={img} alt="流程图片"/>
        <div className="clear" style={{marginTop:20}}>
          <Button className="btn"><span className="text"> <img src={save}/> 保存</span></Button>
          <Button className="btn-o ml15"><span className="text"> <img src={delete1}/> 删除</span></Button>
        </div>
      </div>
    );
  }
}


