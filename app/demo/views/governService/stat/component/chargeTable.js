import React, { Component } from 'react';
import {Table} from 'antd';
import '../../style/style.less';


export default class ChargeTable extends Component {
  constructor(props) {
    super(props);
     
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render:(text,record,index)=>{
        if(index===7){
          return '';
        }else{
          return index+1;
        }
      },
    }, {
      title: '服务部门',
      dataIndex: 'a',
      key: 'a',
    }, {
      title: '1月',
      dataIndex: 'c',
      key: 'c',
    }, {
      title: '2月',
      dataIndex: 'd',
      key: 'd',
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
      c:87515,
      d:58951,
      f:71452,
      g:95387,
      h:54916,
      i:57423,
      j:60367,
      l:91779,
      m:85324,
      n:73082,
      o:71788,
      p:null,
      q:807987,
    },{
      key:1,
      a:'城乡建设委',
      c:88164,
      d:86692,
      f:67543,
      g:87568,
      h:56683,
      i:87847,
      j:92149,
      l:98759,
      m:66619,
      n:76245,
      o:79004,
      p:null,
      q:896573,
    },{
      key:2,
      a:'工商局',
      c:81163,
      d:61228,
      f:53782,
      g:74560,
      h:54608,
      i:76226,
      j:83140,
      l:53787,
      m:99677,
      n:92021,
      o:60028,
      p:null,
      q:790220,
    },{
      key:3,
      a:'发改委',
      c:96801,
      d:92201,
      f:67962,
      g:65183,
      h:67067,
      i:50278,
      j:57494,
      l:52166,
      m:64706,
      n:62680,
      o:80723,
      p:null,
      q:757261,
    },{
      key:4,
      a:'文化局',
      c:73715,
      d:86630,
      f:92034,
      g:60077,
      h:88941,
      i:93356,
      j:88473,
      l:67269,
      m:92802,
      n:99098,
      o:93876,
      p:null,
      q:936271,
    },{
      key:5,
      a:'水务局',
      c:94323,
      d:63315,
      f:52759,
      g:69276,
      h:86726,
      i:86703,
      j:64521,
      l:62079,
      m:57437,
      n:98464,
      o:63374,
      p:null,
      q:798977,
    },{
      key:6,
      a:'公安局',
      c:76737,
      d:89396,
      f:79884,
      g:75169,
      h:82422,
      i:58106,
      j:73103,
      l:60971,
      m:58886,
      n:75999,
      o:71854,
      p:null,
      q:802527,
    },{
      key:7,
      a:'合计',
      c:598418,
      d:538713,
      f:494422,
      g:527214,
      h:509939,
      i:509939,
      j:519247,
      l:486810,
      m:525454,
      n:577589,
      o:520647,
      p:null,
      q:5789816,
    }];
    return (
      <Table 
        dataSource={data}
        columns={columns}
        bordered
        className="table1 table2"
        rowClassName={(record, index)=>{
          if(index===7){
            return 'font-style';
          }
          else{
            return '';
          }
        }}
        
      />
    );
  }
}

 