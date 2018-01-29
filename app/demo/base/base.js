import * as React from 'react';
import './base.less';
import {Menu}  from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import {menus} from './menus';
import {tools} from 'yrui';
const contain = tools.contain;
const session = tools.$session;
const userImg = require('./imgs/photo.png');
const userName = '赵鸿燊';

export default class MMBase extends React.Component{
  constructor(props){
    super(props);
    let indexes = this.props.location.pathname.split('/');
    // console.log(indexes);
    this.state={
      menuIndex:indexes[1]?indexes[1]:'home',/*当前菜单index*/
      currentTabKey:0,/*当前菜单key值*/
      openKeys:[],
      currentBread:[],
      defaultOpenKeys:[],/*默认展开的菜单*/
      defaultSelectedKeys:[],/*默认选中的菜单*/
      content:this.props.children,
      update:false,/*是否更新子页面*/
      crumb:'',/*导航面包屑*/
      // currentBreadFlag:indexes.length>2,
      // clientHeight:document.body.clientHeight,
    };
  }
  onNavClick=(item,k)=>{
    location.hash='#/'+(item.index?item.index:'');
    this.setState(
      {
        currentTabKey:k,
        menuIndex:item.index,
        currentBread:[],
        defaultOpenKeys:[],
        defaultSelectedKeys:[],
        update:false,
      }
    );
    session.clear();
    if(item.index==='home'){
      this.setState({update:true,crumb:''});
    }
  };
  menuClick=({ item, key, keyPath })=>{
    let {menuIndex,currentTabKey} = this.state;
    let currentBread=[];
    let currentMenu = menus[menuIndex];
    let crumb='';
    if(keyPath.length===1){
      let index = keyPath[0].replace(menuIndex,'');
      session.set('index0',index);
      if(currentMenu[index].url){
        location.hash='#/'+(currentMenu[index].url);
        currentBread.push(currentMenu[index].title);
        crumb=`${tabs[currentTabKey].title}/${currentBread[0]}`;
      }
    }else if(keyPath.length===2){
      let index = keyPath[0].replace(menuIndex,'');
      let arrays = index.split('sub');
      if(currentMenu[arrays[0]].SubMenu[arrays[1]].url){
        session.set('index0',arrays[0]);
        session.set('index1',arrays[1]);
        let href = currentMenu[arrays[0]].SubMenu[arrays[1]].url;
        location.hash='#/'+href;
        currentBread.push(currentMenu[arrays[0]].title,currentMenu[arrays[0]].SubMenu[arrays[1]].title);
        crumb=`${tabs[currentTabKey].title}/${currentBread[0]}/${currentBread[1]}`;
      }
    }
    this.setState({update:true,crumb});
  };
  onTitleClick=({ key, domEvent })=>{
    // debugger
  }
  onOpenChange=(keys)=>{
    this.setState({openKeys:keys});
  };

  componentWillMount(){
    /*刷新页面时用到的sessionStorage*/
    let {menuIndex,defaultSelectedKeys,defaultOpenKeys,crumb,currentTabKey} = this.state;
    // let currentBread=[];
    // let currentMenu = menus[menuIndex];
    let [currentBread,currentMenu,index0,index1,storage] = [[],menus[menuIndex],'','',sessionStorage];
    // let store=sessionStorage;
    if(storage.index0){
      index0=storage.index0;
      if(storage.index1){
        index1=storage.index1;
        currentBread.push(currentMenu[index0].title,currentMenu[index0].SubMenu[index1].title);
        defaultOpenKeys=[menuIndex+index0];
        defaultSelectedKeys = [menuIndex+index0+'sub'+index1];
        crumb=`${tabs[currentTabKey].title}/${currentBread[0]}/${currentBread[1]}`;
      }else {
        currentBread.push(currentMenu[index0].title);
        defaultSelectedKeys = [menuIndex+index0+'sub'+index1];
        crumb=`${tabs[currentTabKey].title}/${currentBread[0]}`;
      }
    }
    this.setState({currentBread,defaultOpenKeys,defaultSelectedKeys,crumb});
  }

  componentWillReceiveProps(newProps){
    let {update} = this.state;
    if(update){
      this.setState({content:newProps.children});
    }
  }

  render(){
    const {menuIndex,openKeys,defaultOpenKeys,defaultSelectedKeys,crumb,content} = this.state;
    return(
      <div className="mmbase">
        <div className="banner">
          {/*<img className="banner-img" src={require('./imgs/img_nav.png')}/>*/}
          <img className="logo" src={require('./imgs/img_guohui.png')}/>
          <div className="app-name">智慧石河子政务服务平台</div>
        </div>
        <div className="mmleft">
          <Menu mode="inline" onClick={this.menuClick} onOpenChange={this.onOpenChange}
                defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}>
            {menus[menuIndex] && menus[menuIndex].map((menu,k)=>{
              if(menu.SubMenu){
                return (<SubMenu key={`${menuIndex}${k}`} title={<div className="sub-div"><img src={contain(openKeys,`${menuIndex}${k}`)===-1?menu.defaultIcon:menu.selectedIcon}/>
                  <span className="sub-title">{menu.title}</span></div>}
                                 onTitleClick={this.onTitleClick}>
                  {menu.SubMenu.map((sub,k1)=>{
                    if(sub.SubMenu){
                      return (<SubMenu key={`${menuIndex}${k}sub${k1}`} title={<div><img src={menu.icon}/><span>{sub.title}</span></div>}>
                        {sub.SubMenu.map((sub2,k2)=><MenuItem key={`${menuIndex}${k}sub${k1}sub2${k2}`}>{sub2.title}</MenuItem>)}
                      </SubMenu>);
                    }else{return (<MenuItem key={`${menuIndex}${k}sub${k1}`}>{sub.title}</MenuItem>);}
                  })}
                </SubMenu>);
              }else{return (<MenuItem className="sub-MenuItem" key={`${menuIndex}${k}`}>
                <div className="sub-div"><img src={contain(openKeys,`menu${k}`)===-1?menu.defaultIcon:menu.selectedIcon}/>
                <span className="sub-title">{menu.title}</span></div>
              </MenuItem>);}
            })}
          </Menu>
        </div>
        <div className="mmright">
          <div className="right-header">
            <div className="nav-group">
              {tabs.map((item,k)=><div className={'mmnav '+`${item.index===menuIndex?'active':''}`} key={k}
                                       onClick={this.onNavClick.bind(this,item,k)}>
                <img src={item.index===menuIndex?item.selectedIcon:item.defaultIcon}/>
                <span className="tab-title">{item.title}</span></div>)}
            </div>
            <div className="rheader-right">
              <img className="userImg" src={userImg}/>
              <span className="userName">{userName}</span>
              <span className="rh-line"/>
              <span className="help"><img src={require('./imgs/icon_bangzhu.png')}/>帮助</span>
            </div>
          </div>
          <div className="mmcontent">
            {crumb!==''?<div className="breadcrumb">{crumb}</div>:''}
            {content}
          </div>
        </div>
      </div>
    );
  }
}

const tabs = [
  {
    defaultIcon:require('./imgs/icon_shouye_default.png'),
    selectedIcon:require('./imgs/icon_shouye_selected.png'),
    title:'首页',
    index:'home',
  },{
    defaultIcon:require('./imgs/icon_waibuyonghu_default.png'),
    selectedIcon:require('./imgs/icon_waibuyonghu_selected.png'),
    title:'外部用户',
    index:'outUsers',
  },{
    defaultIcon:require('./imgs/icon_zhengwufuwu_default.png'),
    selectedIcon:require('./imgs/icon_zhengwufuwu_selected.png'),
    title:'政务服务',
    index:'governmentService',
  },{
    defaultIcon:require('./imgs/icon_jixiao_default.png'),
    selectedIcon:require('./imgs/icon_jixiao_selected.png'),
    title:'绩效管理',
    index:'gradeManagement',
  },{
    defaultIcon:require('./imgs/icon_xitongguanli_default.png'),
    selectedIcon:require('./imgs/icon_xitongguanli_selected.png'),
    title:'系统管理',
    index:'systemManagement',
  },
];
