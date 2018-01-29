/**
 * Created by GuoMiaomiao on 2017/12/12.   工作中心-》我的待办
 */
import * as React from 'react';

export default class MySchedule extends React.Component{
  constructor(props){
    super(props);
    this.state={
      menuIndex:'home',
      currentTabKey:0,
      openKeys:[],
      // clientHeight:document.body.clientHeight,
    };
  }

  render(){
    return(
      <div>
        我的待办
      </div>
    );
  }
}
