import React, { Component } from 'react';
import {Select,Form,Button,DatePicker,Row,Col,Icon} from 'antd';
import {selectValue1} from '../../../../modal/data';

const Option = Select.Option;
const FormItem = Form.Item;
class MyForm1 extends Component {
  constructor(props) {
    super(props);
    this.state={
      endValue:null,
      startValue:null,
    };
  }

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }
  onChangeDate = (field, value) => {
    this.setState({
      [field]: value,
    });
  }
  onStartChange = (value) => {
    this.onChangeDate('startValue', value);
  }
  onEndChange = (value) => {
    this.onChangeDate('endValue', value);
  }
  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
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
      <Form onSubmit={this.handleSearch} className="my-form1">
        <Row gutter={8} type="flex" align="middle">
          <Col span={5}>
            <FormItem label="服务类型" {...formItemLayout}>
              {getFieldDecorator('a')(
                <Select placeholder="全部" allowClear>
                  {
                    selectValue1.map(function (s, j) {
                      return <Option key={j} value={`s${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
           
          <Col span={9}>
            <FormItem
              label="申请时间"
              {...formItemLayout1}
            >
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('startDate')(
                    <DatePicker
                      disabledDate={this.disabledStartDate}
                      onChange={this.onStartChange}
                      placeholder="开始日期" />
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  -
                </span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('endDate')(
                    <DatePicker
                      disabledDate={this.disabledEndDate}
                      onChange={this.onEndChange}
                      placeholder="结束日期" />
                  )}
                </FormItem>
              </Col>
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
const formItemLayout1 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};
const StateForm = Form.create()(MyForm1);
export default StateForm;
 