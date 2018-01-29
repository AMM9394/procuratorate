/**
 * Created by GuoMiaomiao on 2018/1/22.
 */
import React, { Component } from 'react';
import moment from 'moment';
const dateFormat='YY-MM-DD';
import './mainPage.less';
import { Tree} from 'antd';
import BaiduMap from './baiduMap';
import {$get,url} from '../../fetch';
import {tixunRoom,treeDatas} from './mock/data';
const TreeNode = Tree.TreeNode;

const treeDataUrl = url + '/Column/getTreeList' ;
const caseUrl = url + '/CaseInfo/single/' ;
const suspectUrl = url + '/SuspectInfo/single/' ;

import mydata from './mock/data.json';
const topLeft = require('./imgs/1.png');
const topRight = require('./imgs/2.png');
const bottomLeft = require('./imgs/4.png');
const bottomRight = require('./imgs/3.png');

export default class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      suspect: false,
      askScience: false,
      visible:false,
      // visible: true,
      treeData: [],
      defaultExpandedKeys: [],
      position: [],
      title: '湖北检察院 - 提讯室1',
      caseId: '',
      caseFiles: tixunRoom.caseFiles,
      suspectInfo:tixunRoom.suspectInfo,
    };
  }
  setVisible=(flag)=>{
    // debugger;
    this.setState({
      visible:flag,
    });
  };

  componentWillMount(){
    this.setState({treeData:mydata});
    $get(treeDataUrl,(data)=>{

      /*console.log('============',data);
      console.log('++++++++++++',mydata);*/
      this.setState({treeData:data});
      // console.log(data);
    });
  }
  onLeafSelected=(key,item)=>{
    // console.log('//////////////',key);
    let {treeData} = this.state;
    // console.log(treeData)
    const pos = item.node.props.pos;
    const arry = pos.split('-');
    // let position = [];
    if(arry.length>4){
      // position = arry;
      let title = treeData[arry[1]].children[arry[2]].colName  + ' - ' +
        treeData[arry[1]].children[arry[2]].children[arry[3]].children[arry[4]].colName;
      // console.log('========================',title);
      let caseId = treeData[arry[1]].children[arry[2]].children[arry[3]].children[arry[4]].caseId;
      let suspectId = treeData[arry[1]].children[arry[2]].children[arry[3]].children[arry[4]].suspectId;
      $get(caseUrl+caseId,(data)=>{
        this.setState({caseFiles:data});
      });
      $get(suspectUrl+suspectId,(data)=>{
        this.setState({suspectInfo:data});
      });
      this.setState({title,visible:true});
    }
  }
  treeNodeClassName=(item)=>{
    //树的类名
    if(item.parentColName==='顶级节点'){
      return 'root-node';//根节点
    }else if(item.isAddConlumn === '1'){
      return 'grand-node';//叶节点
    }else{
      return 'parent-node';//中间节点
    }
  }
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.colName} key={item.id} dataRef={item} className={this.treeNodeClassName(item)}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode title={item.colName} key={item.id} dataRef={item} className={this.treeNodeClassName(item)} />;
    });
  }
  render() {
    const {suspect,askScience,visible,treeData,defaultExpandedKeys,caseFiles,title,suspectInfo} = this.state;
    return (
      <div className="main-page">
        <div className="left">
          <div className="tree-title"><img src={require('./imgs/组织树.png')}/>组织树</div>
          <div className="mmtree-content">
            <img className="tree-close" src={require('./imgs/收缩.png')} />
            <Tree showLine defaultExpandedKeys={defaultExpandedKeys} onSelect={this.onLeafSelected}>
              {
                // treeData.map((tree,k)=>this.renderTreeNodes(tree))
                this.renderTreeNodes(treeData)
              }
            </Tree>
          </div>
        </div>
        <div className="right">
          {
            borderCorner.map((item,key)=><img className="corner-img" key={key} src={item.Icon} style={item.position}/>)
          }
          <BaiduMap setVisible={this.setVisible}/>
          <div className={`info-modal ${visible?'show':'hidden'}`} >
            <div className="title">
              <img src={require('./imgs/标题图标.png')}/>
              <span>{title}</span>
              <img className="modal-close" src={require('./imgs/关闭.png')} onClick={()=>this.setVisible(false)}/>
            </div>
            <div className="ask-content">
              {/*嫌疑人现场*/}
              <div className={`suspect inline-div ${suspect?'original':'extend'}`}>
                <div className="suspect-title">
                  <span>嫌疑人现场</span>
                  <img className="button-control" src={require(`./imgs/${suspect?'最小化':'全屏最大化'}.png`)} />
                </div>
                <div className="suspect-message">嫌疑犯：听清楚了</div>
                <div className="case-info">
                  <p>案件类型：{caseFiles.caseTypeDesp}</p>
                  <p>立案时间：{moment(caseFiles.caseStartTime).format(dateFormat)}</p>
                  <p>嫌疑人：{suspectInfo.suspectName}</p>
                </div>
                <div className="case-info suspect-state">
                  <p>心跳：130/M</p>
                  <p>状态：焦虑</p>
                </div>
                <div className="video-buttons">
                  <img src={require('./imgs/33.png')}/>
                  <img src={require('./imgs/22.png')}/>
                  <img src={require('./imgs/11.png')}/>
                </div>
                {/*<img src={require('./imgs/图层576.png')} className="suspec-video"/>*/}
                <video controls className="suspec-video" src={require('./videos/test2.mp4')}  type="video/mp4" />
                <div className="suspect-footer">
                  <img src={require('./imgs/个人.png')} />
                  <div className="suspect-info">
                    <p className="suspectName">嫌疑犯：&nbsp;<span>{suspectInfo.suspectName}</span></p>
                    <p className="suspectID">身份证：&nbsp;<span>{suspectInfo.suspectCardNumber}</span></p>
                  </div>
                </div>
              </div>
               {/*提审现场*/}
              <div className={`ask-science inline-div ${askScience?'original':'extend'}`}>
                <div className="suspect-title">
                  <span>提审现场</span>
                  <img className="button-control" src={require(`./imgs/${suspect?'最小化':'全屏最大化'}.png`)} />
                </div>
                <div className="ask-left">
                  <div className="suspect-message width-short">提审员：你听清楚了</div>
                  <div className="video-buttons width-short">
                    {/*<img src={require('./imgs/11.png')}/>*/}
                    <img src={require('./imgs/33.png')}/>
                    <img src={require('./imgs/22.png')}/>
                  </div>
                  {/*<img src={require('./imgs/图层688.png')} className="ask-video"/>*/}
                  {/*<video className="ask-video"/>*/}
                  <video controls className="ask-video" src={require('./videos/test2.mp4')}  type="video/mp4" />
                  <div className="ask-footer">
                    <div className="suspect-footer">
                      <img src={require('./imgs/个人.png')} />
                      <div className="suspect-info">
                        <p className="suspectName">提讯员：&nbsp;<span>{tixunRoom.asker}</span></p>
                        <p className="suspectID">警员编号：&nbsp;<span>{tixunRoom.askerID}</span></p>
                      </div>
                    </div>
                    <div className="suspect-footer">
                      <img src={require('./imgs/个人.png')} />
                      <div className="suspect-info">
                        <p className="suspectName">笔录员：&nbsp;<span>{tixunRoom.recorder}</span></p>
                        <p className="suspectID">警员编号：&nbsp;<span>{tixunRoom.recorderID}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ask-right">
                  <div className="talking">
                    <img className="yuyin" src={require('./imgs/语音.png')} />
                    <p>语音对讲中...</p>
                  </div>
                  <div className="instant-messaging">
                    <div className="column-title">即时通讯</div>
                    <div className="talking-content">
                      <p className="talker">指挥员&nbsp;&nbsp;09:23:10</p>
                      <p className="message">此处需注意，再提问一次</p>
                      <p className="talker">指挥员&nbsp;&nbsp;09:23:23</p>
                      <p className="message">好的</p>
                    </div>
                    <div className="mminput">
                      <input className="myinput" placeholder="请输入内容"/><img src={require('./imgs/发送.png')} />
                    </div>
                  </div>
                </div>
              </div>
               {/*案件卷宗*/}
              <div className={`case-files inline-div ${askScience?'original':'extend'}`}>
                <div className="suspect-title">
                  <span>案件卷宗</span>
                  <img className="button-control" src={require(`./imgs/${suspect?'最小化':'全屏最大化'}.png`)} />
                </div>
                <div className="case-left">
                  <p>案件名称：<span>{caseFiles.caseName}</span></p>
                  <p>案件编号：<span>{caseFiles.caseNum}</span></p>
                  <p>案件类型：<span>{caseFiles.caseTypeDesp}</span></p>
                  <p>立案时间：<span>{moment(caseFiles.caseStartTime).format(dateFormat)}</span></p>
                  <p>嫌疑人：<span>{suspectInfo.suspectName}</span></p>
                </div>
                <div className="case-right">
                  {
                    tixunRoom.caseFiles.history.map((item,key)=><div key={key} className="history">
                      <div className="history-title">
                        <span>{item.title}</span>
                        <span className="history-date">{item.date}</span>
                      </div>
                      <div>
                        {
                          ['录像','材料','笔录'].map((item,key)=><div key={key} className="inline-div blue-border">{item}</div>)
                        }
                      </div>
                    </div>)
                  }
                </div>
              </div>
               {/*笔录*/}
              <div className={`record-files inline-div ${askScience?'original':'extend'}`}>
                <div className="suspect-title">
                  <span>笔录</span>
                  <img className="button-control" src={require(`./imgs/${suspect?'最小化':'全屏最大化'}.png`)} />
                </div>
                <div className="record-content">
                  <div className="jianchayuan">湖北省人民检察院</div>
                  <div className="content-left">
                    <p>询问时间：{tixunRoom.recordFiles.askTimeStart} 至 {tixunRoom.recordFiles.askTimeEnd}</p>
                    <p>询问地点：{tixunRoom.recordFiles.address}</p>
                    <p>询问人：{tixunRoom.asker}&nbsp;&nbsp;&nbsp;记录人：{tixunRoom.recorder}</p>
                  </div>
                  <div className="content-right">
                    <div className="record-title">询问笔录</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const borderCorner = [
  {
    position:{
      top:0,
      left:0,
    },
    Icon:topLeft,
  },{
    position:{
      top:0,
      right:0,
    },
    Icon:topRight,
  },{
    position:{
      bottom:0,
      left:0,
    },
    Icon:bottomLeft,
  },{
    position:{
      bottom:0,
      right:0,
    },
    Icon:bottomRight,
  },
];
