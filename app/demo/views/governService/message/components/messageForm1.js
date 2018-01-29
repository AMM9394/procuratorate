import React, { Component } from 'react';
import {Form,Button,Input,Row,Col,Icon} from 'antd';
import '../../style/style.less';

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
        <Row gutter={0} type="flex" align="middle">
          <Col span={5} className="padding-top-4">
            <FormItem label="分类编码" {...formItemLayout}>
              {getFieldDecorator('a')(
                <Input/>
              )}
            </FormItem>
          </Col>
          <Col span={5} className="padding-top-4">
            <FormItem label="分类名称" {...formItemLayout}>
              {getFieldDecorator('b')(
                <Input/>
              )}
            </FormItem>
          </Col>
          <Col span={4} offset={1}>
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
    sm: { span: 9 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};
const MessageForm1 = Form.create()(MyForm1);
export default MessageForm1;
