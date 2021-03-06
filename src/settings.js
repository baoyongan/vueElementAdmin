module.exports = {
  title: '后台管理系统',
  showSettings: true, // 是否显示设置选项
  tagsView: true, // 是否显示顶部tab
  fixedHeader: true, // 是否固定顶部导航
  sidebarLogo: true, // 是否显示侧边栏 Logo
  sidebarLogoURL: 'http://image.tupian114.com/20140522/11384947.png', // 侧边栏顶部logo
  errorLog: 'production', // 错误日志生成环境
  publicPath: '/adminVueElement/', // 部署跟路由
  routeWhiteList: ['/login', '/auth-redirect', '/public-chart'] // 免登录页面
}
