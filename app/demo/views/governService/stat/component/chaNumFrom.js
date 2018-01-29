import React, { Component } from 'react';
import {Select,Form,Button,Row,Col,Icon} from 'antd';
import {year,serivePart} from '../../../../modal/data';

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
          <Col span={5}>
            <FormItem label="年度" {...formItemLayout}>
              {getFieldDecorator('a')(
                <Select allowClear>
                  {
                    year.map(function (s, j) {
                      return <Option key={j} value={`y${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={5}>
            <FormItem label="服务部门" {...formItemLayout}>
              {getFieldDecorator('b')(
                <Select placeholder="全部" allowClear>
                  {
                    serivePart.map(function (s, j) {
                      return <Option key={j} value={`se${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col offset={1} span={4}>
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
const ChaNumForm = Form.create()(MyForm1);
export default ChaNumForm;
 