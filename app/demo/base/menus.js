//配置左侧菜单
export const menus = {

  //首页菜单
  home:[
    {
      title:'工作中心',
      defaultIcon:require('./imgs/icon_gongzuozhongxin_default.png'),
      selectedIcon:require('./imgs/icon_gongzuozhongxin_selected.png'),
      SubMenu:[
        {
          title:'我的待办',
          url:'home/mySchedule',
        },{
          title:'我的已办',
          url:'home/myAlready',
        },{
          title:'工作统计',
          url:'home/workCount',
        },
      ],
    },{
      title:'消息中心',
      defaultIcon:require('./imgs/icon_xiaoxi_default.png'),
      selectedIcon:require('./imgs/icon_xiaoxi_selected.png'),
      // url:'home/mySchedule',
      SubMenu:[
        {
          title:'通知公告',
          url:'home/mySchedule',
        },{
          title:'新闻资讯',
          url:'home/myAlready',
        },{
          title:'内部文件',
          url:'home/workCount',
        },
      ],
    },
  ],

  //外部用户菜单
  outUsers:[
    {
      title:'外部用户',
      SubMenu:[
        {
          title:'menu1',
          url:'governmentService/serviceClass',
        },{
          title:'menu2',
          url:'governmentService/servicePublish',
        },
      ],
    },
  ],

  //政务服务菜单
  governmentService:[
    {
      title:'服务信息',
      defaultIcon:require('./imgs/icon_fuwuxinxi_default.png'),
      selectedIcon:require('./imgs/icon_fuwuxinxi_selected.png'),
      SubMenu:[
        {
          title:'服务分类',
          url:'governmentService/serviceClass',
        },{
          title:'服务发布',
          url:'governmentService/servicePublish',
        },
      ],
    },{
      title:'服务办理',
      defaultIcon:require('./imgs/icon_fuwubanli_default.png'),
      selectedIcon:require('./imgs/icon_fuwubanli_selected.png'),
      SubMenu:[
        {
          title:'待办服务',
          url:'governmentService/serviceSchedule',
        },{
          title:'已办服务',
          url:'governmentService/serviceAlready',
        },{
          title:'服务监控',
          url:'governmentService/serviceMonitor',
        },{
          title:'电子监察',
          url:'governmentService/supervision',
        },{
          title:'咨询回复',
          url:'governmentService/adviceReply',
        },{
          title:'评价回复',
          url:'governmentService/commentReply',
        },
      ],
    },{
      title:'服务统计',
      defaultIcon:require('./imgs/icon_fuwutongji_default.png'),
      selectedIcon:require('./imgs/icon_fuwutongji_selected.png'),
      SubMenu:[
        {
          title:'服务办理状态统计',
          url:'governmentService/serviceState',
        },{
          title:'服务办理数量态统计',
          url:'governmentService/serviceCount',
        },{
          title:'服务办理收费态统计',
          url:'governmentService/serviceCharge',
        },
      ],
    },
  ],

  //绩效管理菜单
  gradeManagement:[
    {
      title:'绩效管理',
      SubMenu:[
        {
          title:'menu1',
          url:'governmentService/serviceClass',
        },{
          title:'menu2',
          url:'governmentService/servicePublish',
        },
      ],
    },
  ],

  //系统管理菜单
  systemManagement:[
    {
      title:'系统管理',
      SubMenu:[
        {
          title:'menu1',
          url:'governmentService/serviceClass',
        },{
          title:'menu2',
          url:'governmentService/servicePublish',
        },
      ],
    },
  ],
};
