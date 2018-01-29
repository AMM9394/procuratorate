import React, { Component } from 'react';
import {Table} from 'antd';

export default class StateTable extends Component {
  constructor(props) {
    super(props);
     
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render:(text,record,index)=>index+1,
      //   width:180,
    }, {
      title: '服务类型',
      dataIndex: 'a',
      key: 'a',
    //   width:180,
    }, {
      title: '服务名称',
      dataIndex: 'b',
      key: 'b',
    //   width:30,
    }, {
      title: '申请总数量',
      dataIndex: 'c',
      key: 'c',
    //   width:30,
    }, {
      title: '待办数量',
      dataIndex: 'd',
      key: 'd',
    //   width:50,
    }, {
      title: '待办比例',
      dataIndex: 'f',
      key: 'f',
    }, {
      title: '办理中数量',
      dataIndex: 'g',
      key: 'g',
    }, {
      title: '办理中比例',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '完结总数',
      dataIndex: 'i',
      key: 'i',
    }, {
      title: '完结比例',
      dataIndex: 'j',
      key: 'j',
    }, {
      title: '逾期数量',
      dataIndex: 'l',
      key: 'l',
    }, {
      title: '逾期比例',
      dataIndex: 'm',
      key: 'm',
    }];
    const data = [{
      key:0,
      a:'备案审核',
      b:'燃气工程施工许可',
      c:36,
      d:1,
      f:'1.94%',
      g:4,
      h:'10.68%',
      i:31,
      j:'87.38%',
      l:2,
      m:'5.56%',
    },{
      key:1,
      a:'备案审核',
      b:'建筑起重机械备案和使用登记',
      c:51,
      d:4,
      f:'6.90%',
      g:7,
      h:'14.34%',
      i:40,
      j:'78.76%',
      l:1,
      m:'1.96%',
    },{
      key:2,
      a:'备案审核',
      b:'企业投资项目核准',
      c:38,
      d:1,
      f:'2.19%',
      g:6,
      h:'16.74%',
      i:31,
      j:'81.07%',
      l:1,
      m:'2.63%',
    },{
      key:3,
      a:'备案审核',
      b:'水土保持方案审批',
      c:50,
      d:4,
      f:'8.73%',
      g:8,
      h:'16.74%',
      i:38,
      j:'74.53%',
      l:1,
      m:'2.00%',
    },{
      key:4,
      a:'备案审核',
      b:'取水许可',
      c:89,
      d:3,
      f:'3.71%',
      g:9,
      h:'10.62%',
      i:77,
      j:'85.67%',
      l:0,
      m:'0.00%',
    },{
      key:5,
      a:'出境入境',
      b:'中华人民共和国普通护照的签发',
      c:155,
      d:8,
      f:'5.33%',
      g:39,
      h:'24.91%',
      i:108,
      j:'69.76%',
      l:3,
      m:'1.94%',
    },{
      key:6,
      a:'出境入境',
      b:'内地居民往来港澳地区审批',
      c:85,
      d:16,
      f:'19.01%',
      g:10,
      h:'11.96%',
      i:108,
      j:'69.03%',
      l:2,
      m:'2.35%',
    },{
      key:7,
      a:'出境入境',
      b:'大陆居民往来台湾地区审批',
      c:80,
      d:14,
      f:'17.53%',
      g:9,
      h:'10.91%',
      i:57,
      j:'71.56%',
      l:1,
      m:'1.25%',
    }];
     
    return (
      <Table 
        dataSource={data}
        columns={columns}
        bordered
        className="table1"
        //pagination={false}
      />
    );
  }
}

 