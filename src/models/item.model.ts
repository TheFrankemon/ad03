export enum ItemStatus {
  FrontEnd,
  BackEnd,
  FullStack,
  DevOps,
  QA,
  Architect
}

export interface Item {
  title: string;
  description: string;
  status: ItemStatus;
  creation_date: Date;
  update_date?: Date;
}
