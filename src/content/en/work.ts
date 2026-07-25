import type { WorkItem } from '../../types'

/** Work experience (English). Newest role first is a good default. */
export const enWork: WorkItem[] = [
  /** Compass Digital */
  {
    id: 'work-1',
    company: 'Compass Digital',
    role: 'Mobile Developer Intern',
    location: 'Toronto, ON, Canada',
    start: 'May 2026',
    end: 'August 2026',
    bullets: [
      'Develop cross-platform features for Web, iOS, and Android using Flutter and Dart, focusing on responsive, user-friendly, and high-performance interfaces.',
      'Contribute across the software development lifecycle by writing clean, maintainable code and applying best practices in testing, scalability, reliability, and accessibility.',
      'Collaborate with developers and designers in an Agile environment to build hospitality technology solutions across search, ordering, payment, and delivery workflows.',
    ],
    tech: ['flutter', 'dart', 'typescript', 'git', 'firebase'],
  },
  
  /** Squint Cognition */
  {
    id: 'work-2',
    company: 'Squint Cognition',
    role: 'Machine Learning Software Developer',
    location: 'Waterloo, ON, Canada',
    start: 'September 2025',
    end: 'December 2025',
    bullets: [
      'Developed a Python SDK to standardize machine learning model outputs into JSON and integrate Grad-CAM interpretability for PyTorch and TensorFlow/Keras models.',
      'Built automated test scripts and SQLite data access utilities, using Docker to maintain a consistent and reliable development and testing environment.',
      'Collaborated with senior developers on debugging, model training, code reviews, and pull requests, improving code quality and development efficiency.',
    ],
    tech: ['python', 'pytorch', 'tensorflow', 'docker', 'git', 'sqlite'],
  },

  /** Emdoor Digital Technology Co., Ltd. */
  {
    id: 'work-3',
    company: 'Emdoor Digital Technology Co., Ltd.',
    role: 'Software Engineer',
    location: 'Shenzhen, China',
    start: 'October 2024',
    end: 'April 2025',
    bullets: [
      'Developed and maintained Windows desktop applications using C#, .NET, WPF, and XAML, implementing reusable UI components and application features.',
      'Built software using object-oriented programming and the MVVM architecture to improve code organization, maintainability, and separation of concerns.',
      'Tested AI-embedded software for functionality, LLM response accuracy, reliability, and performance, identifying issues and providing feedback to improve product quality.',
    ],
    tech: ['csharp', 'python', '.net', 'git'],
  },

  /** Add more work entries as needed */
];