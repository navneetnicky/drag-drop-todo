import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from '../CustomComponent/Column';
import { Todo, ColumnType } from '../types';
import { Loader } from '../CustomComponent/Loader';

const initialTodos: Todo[] = [
  { id: 1, text: 'Design new feature', status: 'todo' },
  { id: 2, text: 'Design new feature', status: 'todo' },
  { id: 3, text: 'Design new feature', status: 'todo' },
  { id: 4, text: 'Design new feature', status: 'todo' },
  { id: 5, text: 'Design new feature', status: 'todo' },
  { id: 6, text: 'Design new feature', status: 'todo' },
  { id: 7, text: 'Design new feature', status: 'todo' },
  { id: 8, text: 'Design new feature', status: 'todo' },
  { id: 9, text: 'Design new feature', status: 'todo' },
  { id: 10, text: 'Design new feature', status: 'todo' },
  { id: 11, text: 'Fix bug in login', status: 'today' },
  { id: 12, text: 'Write documentation', status: 'working' },
  { id: 13, text: 'Deploy to production', status: 'done' },
];

function KanbanBoard() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleDrop = (item: Todo, newStatus: ColumnType) => {
    if (item.status === newStatus) return;

    if(newStatus === 'working') {
      return 
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const columns = [
    { title: 'To Do', status: 'todo' as ColumnType },
    { title: 'Today', status: 'today' as ColumnType },
    { title: 'Working On', status: 'working' as ColumnType },
    { title: 'Done', status: 'done' as ColumnType },
  ];

  return (
    <>
   {/* {false ? <Loader/>:  */}
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Task Board
        </h1>
        <div className="flex gap-6 justify-center">
          {columns.map((column) => (
            <Column
              key={column.status}
              title={column.title}
              status={column.status}
              todos={todos.filter((todo) => todo.status === column.status)}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </DndProvider>
{/* } */}
    </>
  );
}

export default KanbanBoard;
