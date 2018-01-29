import React, { Component } from 'react';
import {Form,Button,Input,Row,Col,Icon,Select} from 'antd';
import '../../style/style.less';
import {selectValue1,zerenPart,status} from '../../../../modal/data';

const Option = Select.Option;
const FormItem = Form.Item;

class MyForm1 extends Component {
  constructor(props) {
    super(props);
  }
  handleSearch=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        this.props.getSValue(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="my-form1" onSubmit={this.handleSearch}>
        <Row gutter={8} type="flex" align="middle">
          <Col span={5} className="padding-top-4">
            <FormItem label="服务分类" {...formItemLayout} >
              {getFieldDecorator('a')(
                <Select allowClear>
                  {
                    selectValue1.map(function (s, j) {
                      return <Option key={j} value={`f${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={5} className="padding-top-4">
            <FormItem label="服务名称" {...formItemLayout}>
              {getFieldDecorator('b')(
                <Input/>
              )}
            </FormItem>
          </Col>
          <Col span={5} className="padding-top-4">
            <FormItem label="责任部门" {...formItemLayout}>
              {getFieldDecorator('c')(
                <Select allowClear>
                  {
                    zerenPart.map(function (s, j) {
                      return <Option key={j} value={`z${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={5} className="padding-top-4">
            <FormItem label="状态" {...formItemLayout}>
              {getFieldDecorator('d')(
                <Select allowClear>
                  {
                    status.map(function (s, j) {
                      return <Option key={j} value={`zt${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col offset={1} span={3}>
            <Button htmlType="submit" className="btn"><span className="text"><Icon type="search" />&nbsp;&nbsp;查询</span></Button>
          </Col>
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
const MessageForm2 = Form.create()(MyForm1);
export default MessageForm2;
