import React, { Component } from 'react';
import {Table,Modal,Button} from 'antd';
import FwfbDetail from './msgTb2Detail/fwfbDetail';
import '../../style/style.less';

export default class MessageTable2 extends Component {
  constructor(props) {
    super(props);
    this.state={
      visible:false,
      index:null,
      count:data.length,
      dataSource:data,
    };
  }
  showModal=(index)=>{
    this.setState({
      index:index,
      visible:true,
    });
  }
  handleOk=()=>{
    this.setState({visible:false});
  }
  handleCancel= () =>{
    this.setState({visible:false});
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
    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render:(text,record,index)=>index+1,
      }, {
        title: '服务编号',
        dataIndex: 'a',
        key: 'a',
      }, {
        title: '服务名称',
        dataIndex: 'c',
        key: 'c',
      }, {
        title: '服务分类',
        dataIndex: 'd',
        key: 'd',
      }, {
        title: '责任部门',
        dataIndex: 'f',
        key: 'f',
      }, {
        title: '服务对象',
        dataIndex: 'g',
        key: 'g',
      }, {
        title: '发布人',
        dataIndex: 'h',
        key: 'h',
      }, {
        title: '发布日期',
        dataIndex: 'i',
        key: 'i',
      }, {
        title: '状态',
        dataIndex: 'j',
        key: 'j',
      }, {
        title: '操作',
        dataIndex: 'q',
        key: 'q',
        render:(text,record,index)=>{
          let that=this;
          return <ul className="list-style">
            <li onClick={this.showModal.bind(this,record.key)}>查看</li>
            <li>编辑</li>
            <li>删除</li>
            {
              record.j==='未发布'?<li className="publish">发布</li>:<li className="back">撤回</li>
            }
          </ul>;
        },
      },
    ];

    const visible = this.state.visible;
    return (
      <div className="">
        <Button onClick={this.handleAdd} className="btn"><span className="text">新增服务</span></Button>
        <Table
          dataSource={this.state.dataSource}
          columns={columns}
          bordered
          className="table1 fwfb mt10"
          //pagination={false}
        />
        <Modal title="服务详情"
          visible={visible}
          onOk={this.handleOk}
          width={1100}
          onCancel={this.handleCancel}
          footer={null}
          className="fwfb-detail-modal modal"
        >
          <FwfbDetail/>
        </Modal>
      </div>

    );
  }
}
const data = [
  {
    key:0,
    a:'0101',
    c:'燃气工程施工及燃气设施改动许可',
    d:'备案核准',
    f:'城管委',
    g:'企业',
    h:'张枫',
    i:'2017-06-20',
    j:'未发布',
  },{
    key:1,
    a:'0102',
    c:'建筑起重机械备案和使用登记',
    d:'备案核准',
    f:'城乡建设委',
    g:'企业',
    h:'李政',
    i:'2017-06-20',
    j:'已发布',
  },{
    key:2,
    a:'0201',
    c:'中华人民共和国普通护照的签发',
    d:'出境入境',
    f:'公安局',
    g:'个人',
    h:'王蓉蓉',
    i:'2017-06-16',
    j:'已发布',
  },
];
