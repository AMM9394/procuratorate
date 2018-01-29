import * as React from 'react';
import {
    Route,
    IndexRoute,
} from 'react-router';


import MMBase from './demo/base/base';

/*首页*/
import Home from './demo/views/home/home';
import MySchedule from './demo/views/home/workCenter/mySchedule';
import MyAlready from './demo/views/home/workCenter/myAlready';
import WorkCount from './demo/views/home/workCenter/workCount';

// 政务服务
import Catalogue from './demo/views/governService/message/catalogue';
import Publication from './demo/views/governService/message/publication';

import TodoService from './demo/views/governService/handle/todoService';
import doneService from './demo/views/governService/handle/domeService';
import Monitor from './demo/views/governService/handle/monitor';
import Surveilance from './demo/views/governService/handle/surveilance';
import Consultation from './demo/views/governService/handle/consultation';
import Evaluation from './demo/views/governService/handle/evaluation';

import StateStat from './demo/views/governService/stat/stateStat';
import NumberStat from './demo/views/governService/stat/numberStat';
import ChargeStat from './demo/views/governService/stat/chargeStat';

import Pbase from './demo/views/procuratorate/base';
import VisiblePlat from './demo/views/procuratorate/visiblePlat';
import BaiduMap from './demo/views/procuratorate/baiduMap';
import MainPage from './demo/views/procuratorate/mainPage';

export default (
    <Route>

      <Route path="/" component={Pbase}>
        <IndexRoute component={VisiblePlat}/>
        <Route path="visiblePlat" component={VisiblePlat} />
        <Route path="baiduMap" component={BaiduMap} />
        <Route path="mainPage" component={MainPage} />
      </Route>

{/*
      <Route path="/" component={MMBase}>
        <IndexRoute component={Home}/>
        首页
        <Route path="home">
          <IndexRoute component={Home}/>
          <Route path="mySchedule" component={MySchedule}/>我的待办
          <Route path="myAlready" component={MyAlready}/>我的已办
          <Route path="workCount" component={WorkCount}/>工作统计
        </Route>
        外部用户
        <Route path="outUsers">
          <IndexRoute component={Home}/>
        </Route>
        政务服务
        <Route path="governmentService">
          <IndexRoute component={Home}/>
          <Route component={Catalogue} path="serviceClass"/>//服务分类
          <Route component={Publication} path="servicePublish"/>服务发布
          <Route component={TodoService} path="serviceSchedule"/>待办服务
          <Route component={doneService} path="serviceAlready"/>已办服务
          <Route component={Monitor} path="serviceMonitor"/>服务监控
          <Route component={Surveilance} path="supervision"/>电子监察
          <Route component={Consultation} path="adviceReply"/>咨询回复
          <Route component={Evaluation} path="commentReply"/>评价回复
          <Route component={StateStat} path="serviceState"/>服务办理状态统计
          <Route component={NumberStat} path="serviceCount"/>服务办理数量态统计
          <Route component={ChargeStat} path="serviceCharge"/>服务办理收费态统计
        </Route>
        <Route path="gradeManagement">
          <IndexRoute component={Home}/>
        </Route>
        <Route path="systemManagement">
          <IndexRoute component={Home}/>
        </Route>

      </Route>
*/}
    </Route>


);
