// Chinese UI strings - same keys as en/common.ts (required so TypeScript stays in sync)
export const zhCommon = {
  brandName: '张凯文',
  navBrandName: 'Kevin Zhang',

  // 大号姓名上方的短问候语
  heroGreeting: '你好，我是',

  // 首屏底部提示：向下滚动查看简介
scrollHint: '向下探索',

  taglines: [
    '滑铁卢大学计算机学生',
    '软件开发与机器学习',
    '将想法转换为真实产品',
  ],

  toggleLanguage: 'EN',

  navAbout: '关于',
  navEducation: '教育',
  navWork: '工作',
  navProject: '项目',
  navContact: '联系', 

  projectLink: '链接',

  eyebrowAbout: '简介',
  eyebrowEducation: '学习轨迹',
  eyebrowWork: '职业信号',
  eyebrowProject: '构建记录',
  eyebrowContact: '联系',

  // 联系表单
  formNameLabel: '姓名',
  formNamePlaceholder: '请输入您的姓名',
  formEmailLabel: '邮箱',
  formEmailPlaceholder: 'you@example.com',
  formMessageLabel: '留言',
  formMessagePlaceholder: '想和我聊些什么？',
  formSubmit: '发送消息',
  formSending: '正在发送...',
  formSuccess: '消息发送成功！感谢您的联系！',
  formError: '发送失败，请稍后再试。',

  // Footer — English-only (same as en/common.ts)
  footerBrandName: 'Kevin Zhang',
  footerNote: 'Built with ❤️ in UWaterloo, ON.',
  footerCopyright: '© 2026 Kevin Zhang. All rights reserved.',
} as const