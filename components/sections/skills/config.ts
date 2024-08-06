import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon
} from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Web Development',
    description: 'Building beautiful and functional websites.',
    Icon: CodeIcon
  },
  {
    name: 'Database Management',
    description: 'Storing and organizing data efficiently.',
    Icon: DatabaseIcon
  },
  {
    name: 'Data Structures & Algorithms',
    description: 'Solving complex problems with code.',
    Icon: LayoutIcon
  }
];

export { skills };
