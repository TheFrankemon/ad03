import { ItemStatus } from './item.model';

export const mockData = [
  {
    title: 'Spring Boot 🍃',
    description: 'Open-source framework for developing web applications a...',
    status: ItemStatus.BackEnd,
    creation_date: new Date('2025-02-09 09:25:50')
  },
  {
    title: 'HTML 🍊',
    description: 'Markup language that defines the structure and content of...',
    status: ItemStatus.FrontEnd,
    creation_date: new Date('2025-02-09 09:35:15')
  },
  {
    title: 'Type Script 🛹',
    description: 'Open-source high-level programming language developed...',
    status: ItemStatus.FrontEnd,
    creation_date: new Date('2025-02-09 09:45:15'),
    update_date: new Date('2025-02-09 09:45:15')
  }
];
