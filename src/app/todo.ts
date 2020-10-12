
export enum Status {
    TODO = 'TODO',
    INPROGRESS = 'INPROGRESS',
    DONE = 'DONE',
    ARCHIVE = 'ARCHIVE'
}
export interface Todo {
    id: number;
    title: string;
    desc?: string;
    status: Status;
  }

export class TodoItem {

    constructor(
      public id: number,
      public title: string,
      public status: Status,
      public desc?: string,
      public allStatus?: Status[],
    ) {  }

  }
