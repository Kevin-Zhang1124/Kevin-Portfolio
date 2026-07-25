import type { WorkItem } from '../../types'

export const zhWork: WorkItem[] = [
  /** Compass Digital */
  {
    id: 'work-1',
    company: 'Compass Digital',
    role: '移动应用开发实习生',
    location: '多伦多, 安大略， 加拿大',
    start: '2026年 5月',
    end: '2026年 8月',
    bullets: [
      '使用 Flutter 和 Dart 开发面向 Web、iOS 与 Android 的跨平台功能，重点提升界面的响应性、易用性与整体性能。',
      '参与完整的软件开发生命周期，编写整洁且易维护的代码，并在测试、可扩展性、可靠性和无障碍设计方面遵循工程最佳实践。',
      '在敏捷开发环境中与开发人员和设计师协作，参与构建覆盖搜索、点餐、支付与配送流程的数字化餐饮技术解决方案。',
    ],
    tech: ['flutter', 'dart', 'typescript', 'git', 'firebase'],
  },

  /** Squint Cognition */
  {
    id: 'work-2',
    company: 'Squint Cognition',
    role: '机器学习软件开发工程师',
    location: '滑铁卢, 安大略, 加拿大',
    start: '2025年 9月',
    end: '2025年 12月',
    bullets: [
      '开发 Python SDK，将机器学习模型输出标准化为 JSON 格式，并为 PyTorch 与 TensorFlow/Keras 模型集成 Grad-CAM 可解释性分析功能。',
      '编写自动化测试脚本并开发 SQLite 数据访问工具，同时使用 Docker 构建一致、稳定且可靠的开发与测试环境。',
      '与高级开发人员协作完成调试、模型训练、代码审查和 Pull Request 流程，持续提升代码质量与开发效率。',
    ],
    tech: ['python', 'pytorch', 'tensorflow', 'docker', 'git', 'sqlite'],
  },

  /** Emdoor Digital Technology Co., Ltd. */
  {
    id: 'work-3',
    company: '深圳市亿道数码科技有限公司',
    role: '软件工程师',
    location: '深圳, 中国',
    start: '2024年 10月',
    end: '2025年 4月',
    bullets: [
      '使用 C#、.NET、WPF 和 XAML 开发及维护 Windows 桌面应用，实现可复用的用户界面组件和应用功能。',
      '运用面向对象程序设计与 MVVM 架构进行软件开发，提高代码组织性、可维护性以及不同模块之间的职责分离。',
      '对集成人工智能功能的软件进行功能性、LLM 响应准确性、可靠性及性能测试，并通过问题识别与反馈提升产品质量。',
    ],
    tech: ['csharp', 'python', '.net', 'git'],
  },

  /** Add more work entries as needed */
];