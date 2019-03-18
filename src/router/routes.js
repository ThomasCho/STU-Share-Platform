let routes = [
  {
    path: '/',
    component: resolve => require(['../components/login.vue'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    title: '系统登录',
    component: resolve => require(['../components/login.vue'], resolve)
  },
  {
    path: '/register',
    name: 'register',
    title: '系统注册',
    component: resolve => require(['../components/register.vue'], resolve)
  },
  {
    path: '/shell',
    name: 'shell',
    title: '汕大学习资料分享系统',
    component: resolve => require(['../components/shell.vue'], resolve),
    children: [
      {
        path: 'main',
        name: 'main',
        title: '首页',
        component: resolve => require(['../components/main.vue'], resolve)
      },
      {
        path: 'personalData',
        name: 'personalData',
        title: '个人资料',
        component: resolve => require(['../components/personalData.vue'], resolve)
      },
      {
        path: 'IWantLearning',
        name: 'IWantLearning',
        title: '我要学习',
        component: resolve => require(['../components/IWantLearning.vue'], resolve)
      },
      {
        path: 'upload',
        name: 'upload',
        title: '上传页面',
        component: resolve => require(['../components/upload.vue'], resolve)
      },
      {
        path: 'download',
        name: 'download',
        title: '下载页面',
        component: resolve => require(['../components/download.vue'], resolve)
      },
      {
        path: 'fileDetail',
        name: 'fileDetail',
        title: '文件页面',
        component: resolve => require(['../components/fileDetail.vue'], resolve)
      },
      {
        path: '403',
        name: '403',
        meta: {
          title: '无权限访问',
          nav: false
        },
        component: resolve => require(['../components/error/403-error.vue'], resolve)
      }
    ]
  }
]

// 导出路由集合
export default routes
