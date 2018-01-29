/**
 * Created by GuoMiaomiao on 2017/12/12.   工作中心-》我的已办
 */
import * as React from 'react';
import {Button,Input,Row,Col,Icon} from 'antd';
import Card from '../component/Card1';
import InnerCard from '../component/innerCard';
const gongzuozgongxin = require('./imgs/icon_gongzuozhongxin.png');
const tonggao = require('./imgs/icon_tonggao.png');
const xinwen = require('./imgs/icon_xinwen.png');
const wenjian  =require('./imgs/icon_wenjian.png');
import './home.less';
import echarts from 'echarts';
import {Charts} from 'yrui';
const Echarts=Charts(echarts);

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return(
      <div className="mm-home">
        <Row>
          <Col span={8}>
            <Input style={{height:34}}/>
          </Col>
          <Col span={4} style={{paddingLeft:'2%'}}>
            <Button htmlType="submit" className="btn mm-btn"><span className="text"><Icon type="search" />&nbsp;&nbsp;查询</span></Button>
          </Col>
        </Row>
        <Row className="mr-20">
          <Col span={12}>
            <Card title={'工作中心'} icon={gongzuozgongxin}>
              {['我的待办','我的已办'].map((item,k)=><div key={k} className="left-card"><InnerCard title={item} more={true} key={k}>
                  <ul className="mm-list">
                    {mySchedule.map((item,k)=><li key={k}>
                      <a className="name" >{item.name}</a>
                      <span className="person">{item.person}</span>
                      <span className="date">{item.date}</span>
                      <span className="state">{item.state}</span>
                    </li>)}
                  </ul>
                </InnerCard></div>
              )}
              <InnerCard className="work-analysis" title="工作统计" more={true}>
                <Echarts  option={option} style={{ height:200}}/>
              </InnerCard>
            </Card>
          </Col>
          <Col span={12} style={{paddingLeft:40}}>
            {right.map((item,k)=><Row className="right-list" key={k}><Card title={item.title} icon={item.icon} more={true}>
              <ul className="mm-list mm-list2">
                {item.content.map((con,k)=><li key={k}>
                  <a className="name con-title">{con}</a>
                  <span className="con-date">2017/11/23</span>
                </li>)}
              </ul>
            </Card></Row>)}
          </Col>
        </Row>
      </div>
    );
  }
}
const mySchedule = [
  {
    name:'燃气工程施工许可',
    person:'陈小刚',
    date:'2017/11/23 13:23:22',
    state:'待审批',
  },{
    name:'企业投资项目核准',
    person:'李曼声',
    date:'2017/11/23 13:23:22',
    state:'待审批',
  },{
    name:'普通护照签发',
    person:'张弛',
    date:'2017/11/23 13:23:22',
    state:'待审批',
  },
];
const right = [
  {
    title: '通知公告',
    icon: tonggao,
    content: dataMade('关于调整增设市区道路临时停车泊位的公告',4),
  },{
    title:'新闻资讯',
    icon:xinwen,
    content:dataMade('冷空气进入间歇期垦区气温小幅回升',3),
  },{
    title:'内部文件',
    icon:wenjian,
    content:dataMade('石河子市创建全国文明城市实施方案',5),
  },
];
function dataMade(str,count){
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push(str);
  }
  return data;
}
const option = {
  tooltip : {
    trigger: 'item',
    formatter: '{a}--{b} :{d}%',
    color:'#e6e6e6',
  },
  legend: {
    orient: 'horizontal',
    bottom:0,
    right:0,
    data: ['待办','办理中','完结'],
    itemHeight:10,
    itemWidth:10,
  },
  series : [
    {
      name: '工作统计',
      type: 'pie',
      radius : '80%',
      center: ['35%', '60%'],
      data:[
        {value:15, name:'待办'},
        {value:25, name:'办理中'},
        {value:60, name:'完结'},
      ],
      label: {
        normal: {
          formatter: '{d}%',
          textStyle: {
            color: '#b3b3b3',
          },
        },
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#b3b3b3',
            opacity:1,
          },
          //   smooth: 0.2,
          length: 20,
          length2: 20,
        },
      },
    },
  ],
  color:['#eb927a','#9acff0','#d5e5be'],
};
