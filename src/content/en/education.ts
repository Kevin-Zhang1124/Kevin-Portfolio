import type { EducationItem } from '../../types'

/** Education list (English). Add a new object to grow this section. */
export const enEducation: EducationItem[] = [
  {
    id: 'school-1',
    school: 'University of Waterloo',
    degree: 'Bachelor of Computer Science',
    location: 'Waterloo, ON, Canada',
    start: '2023',
    end: '2028',
    details: [
      'GPA: 3.9/4.0',
      'Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Architecture, Probability & Statistics.',
      'Academic interests: Software Engineering, Machine Learning, and Artificial Intelligence.',
    ],
  },
  /** Add more education entries as needed */
];