import type { ProjectItem } from '../../types'

export const zhProject: ProjectItem[] = [
  {
    id: 'project-1',
    name: 'Biteshare - 餐厅点评应用',
    summary: 'BiteShare 是一款全栈餐厅点评应用，采用 Kotlin Multiplatform、Jetpack Compose、Ktor 和 Supabase 开发，支持餐厅搜索、用户认证以及评论发布等核心功能。',
    tech: ['kotlin', 'android', 'git', 'supabase'],
    link: 'https://www.youtube.com/shorts/On8riUHww5Q',
    linkKind: 'youtube',
  },
  {
    id: 'project-2',
    name: 'CC3K - 地牢冒险游戏',
    summary: 'CC3K 是一款使用 C++ 开发的回合制 Rogue-like 地牢探索游戏，采用面向对象设计模式，并实现随机地牢生成、敌人行为、物品交互以及多楼层游戏机制。',
    tech: ['c++', 'git'],
    link: 'https://github.com/Kevin-Zhang1124/Game_Project_cc3k',
    linkKind: 'github',
  },
  
  /** Add more project entries as needed */
];