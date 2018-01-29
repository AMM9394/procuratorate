import React, { Component } from 'react';
import {Table,Input,Icon,Button,Popconfirm,Upload} from 'antd';
import '../../style/style.less';

let pic1=require('../../../../images/tableIcon/icon_beian.png');
let pic2=require('../../../../images/tableIcon/icon_chongxinshangchuan.png');
let pic3=require('../../../../images/tableIcon/icon_chujingrujing.png');
let pic4=require('../../../../images/tableIcon/icon_fangchanguanli.png');
let pic5=require('../../../../images/tableIcon/icon_shanchu.png');
let pic6=require('../../../../images/tableIcon/icon_shangchaun.png');


export default class MessageTable1 extends Component {
  constructor(props) {
    super(props);
    this.columns=[{
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render:(text,record,index)=>index+1,
      width:'7%',
    }, {
      title: '分类编码',
      dataIndex: 'a',
      key: 'a',
      width:'10%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'a')}
        />
      ),
    }, {
      title: '分类名称',
      dataIndex: 'b',
      key: 'b',
      width:'12%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'b')}
        />
      ),
    }, {
      title: '分类图标',
      dataIndex: 'c',
      key: 'c',
      width:'13%',
      render: (text, record) => (
        <img src={text}/>
      ),
    }, {
      title: '分类说明',
      dataIndex: 'd',
      key: 'd',
      width:'30%',
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'd')}
        />
      ),
    }, {
      title: '操作',
      dataIndex: 'f',
      key: 'f',
      width:'20%',
      render: (text, record,index) => (
        <div className="creator">
          {
            record.reload?
              <Upload action="//jsonplaceholder.typicode.com/posts/"
                listType="text"
                onChange={this.handleChange.bind(this,record.key)}
              >
                <span className="re-load same"><img src={pic2} />重新上传</span>
              </Upload>:
              <Upload action="//jsonplaceholder.typicode.com/posts/"
                listType="text"
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                <span className="load same"><img src={pic6} />上传</span>
              </Upload>
          }
          <Popconfirm title="确认删除?" onConfirm={this.onDelete.bind(this,record.key)}>
            <span className="delete same"><img src={pic5} />删除</span>
          </Popconfirm>
        </div>
      ),
    }];



    let dataSource=[{       //初始假数据
      key:0,
      a:'001',
      b:'备案核准',
      c:pic1,
      d:' ',
      reload:true,
    },{
      key:1,
      a:'002',
      b:'出境入境',
      c:pic3,
      d:' ',
      reload:true,
    },{key:2,
      a:'003',
      b:'房产管理',
      c:pic4,
      d:' ',
      reload:false,
    }];
    let count=dataSource.length;
    let previewImage = null;
    this.state = { dataSource,count,previewImage};
  }
  handleChange = (id,{ fileList }) =>{
    console.log(id);
    console.log({ fileList });
    this.setState({ fileList });
  }
  // handleChange = (id,file) => {
  //   console.log(id);
  //   console.log(file);
  //   let data = this.state.dataSource;
  //   this.setState({
  //     previewImage: file.url || file.thumbUrl,
  //     previewVisible: true,
  //   });
  // }


  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  onDelete = (key) => {
    console.log(key);
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }


  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      a:'',
      b:'',
      c:null,
      d:' ',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  render() {

    const {dataSource} = this.state;
    return (
      <div className="fwfl">
        <Button onClick={this.handleAdd} className="btn"><span className="text">增加分类</span></Button>&nbsp;&nbsp;
        <Button className="btn"><span className="text">保存</span></Button>
        <Table
          dataSource={dataSource}
          columns={this.columns}
          bordered
          className="table1 mt10"
        />
      </div>
    );
  }
}


class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="my-editable-cell1">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
