export const webiste = {
  title: '',
  subtitle: '',
  isFirstPage: true, // 配置首页不可关闭
  encPassword: '', // 前后端数据传输的密钥
  formLoginClient: '', // 用户名密码登录的 client 信息
  whiteList: ['/login', '/404'], // 配置无权限可以访问的页面
  whiteTagList: ['/login', '/404'], // 配置不添加tags页面 （'/advanced-router/mutative-detail/*'——*为通配符）
  fistPage: {
    label: '首页',
    value: '/index',
    params: {},
    query: {},
    group: [],
    close: false,
  },
  // 配置菜单的属性
  menu: {
    props: {
      label: 'label',
      path: 'path',
      icon: 'icon',
      children: 'children',
    },
  },
}
