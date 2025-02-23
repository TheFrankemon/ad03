export enum ItemStatus {
  FrontEnd = 'FrontEnd',
  BackEnd = 'BackEnd',
  FullStack = 'FullStack',
  DevOps = 'DevOps',
  QA = 'QA',
  Architect = 'Architect'
}

export interface Item {
  title: string;
  description: string;
  status: ItemStatus;
  creation_date: Date;
  update_date?: Date;
}
