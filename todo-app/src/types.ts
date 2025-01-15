export interface Todo {
    id: number;
    text: string;
    status: 'todo' | 'today' | 'working' | 'done';
  }
  
  export type ColumnType = 'todo' | 'today' | 'working' | 'done';
