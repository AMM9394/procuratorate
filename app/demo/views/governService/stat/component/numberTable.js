import React, { Component } from 'react';
import {Table} from 'antd';

export default class NumberTable extends Component {
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
      title: '服务部门',
      dataIndex: 'a',
      key: 'a',
    //   width:180,
    }, {
      title: '服务名称',
      dataIndex: 'b',
      key: 'b',
    //   width:30,
    }, {
      title: '1月',
      dataIndex: 'c',
      key: 'c',
    //   width:30,
    }, {
      title: '2月',
      dataIndex: 'd',
      key: 'd',
    //   width:50,
    }, {
      title: '3月',
      dataIndex: 'f',
      key: 'f',
    }, {
      title: '4月',
      dataIndex: 'g',
      key: 'g',
    }, {
      title: '5月',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '6月',
      dataIndex: 'i',
      key: 'i',
    }, {
      title: '7月',
      dataIndex: 'j',
      key: 'j',
    }, {
      title: '8月',
      dataIndex: 'l',
      key: 'l',
    }, {
      title: '9月',
      dataIndex: 'm',
      key: 'm',
    }, {
      title: '10月',
      dataIndex: 'n',
      key: 'n',
    }, {
      title: '11月',
      dataIndex: 'o',
      key: 'o',
    }, {
      title: '12月',
      dataIndex: 'p',
      key: 'p',
    }, {
      title: '合计',
      dataIndex: 'q',
      key: 'q',
    }];
    const data = [{
      key:0,
      a:'城管委',
      b:'燃气工程施工许可',
      c:37,
      d:69,
      f:65,
      g:31,
      h:29,
      i:61,
      j:23,
      l:30,
      m:30,
      n:21,
      o:79,
      p:null,
      q:475,
    },{
      key:1,
      a:'城乡建设委',
      b:'建筑起重机械备案和使用登记',
      c:45,
      d:32,
      f:60,
      g:77,
      h:90,
      i:30,
      j:41,
      l:95,
      m:93,
      n:79,
      o:67,
      p:null,
      q:709,
    },{
      key:2,
      a:'发改委',
      b:'企业投资项目核准',
      c:73,
      d:38,
      f:41,
      g:84,
      h:49,
      i:37,
      j:81,
      l:91,
      m:64,
      n:30,
      o:31,
      p:null,
      q:619,
    },{
      key:3,
      a:'水务局',
      b:'水土保持方案审批',
      c:13,
      d:23,
      f:48,
      g:24,
      h:50,
      i:24,
      j:42,
      l:25,
      m:32,
      n:15,
      o:16,
      p:null,
      q:312,
    },{
      key:4,
      a:'水务局',
      b:'取水许可',
      c:36,
      d:17,
      f:34,
      g:36,
      h:26,
      i:47,
      j:15,
      l:14,
      m:20,
      n:46,
      o:43,
      p:null,
      q:334,
    },{
      key:5,
      a:'公安局',
      b:'中华人民共和国普通护照的签发',
      c:465,
      d:476,
      f:255,
      g:143,
      h:363,
      i:136,
      j:190,
      l:362,
      m:390,
      n:450,
      o:492,
      p:null,
      q:3722,
    },{
      key:6,
      a:'公安局',
      b:'内地居民往来港澳地区审批',
      c:79,
      d:151,
      f:58,
      g:139,
      h:84,
      i:156,
      j:190,
      l:149,
      m:70,
      n:142,
      o:160,
      p:null,
      q:1378,
    },{
      key:7,
      a:'公安局',
      b:'大陆居民往来台湾地区审批',
      c:93,
      d:97,
      f:96,
      g:39,
      h:80,
      i:88,
      j:89,
      l:35,
      m:41,
      n:46,
      o:38,
      p:null,
      q:752,
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

 