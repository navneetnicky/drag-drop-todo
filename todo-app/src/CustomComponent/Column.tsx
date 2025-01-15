import React from 'react';
import { useDrop } from 'react-dnd';
import { Todo, ColumnType } from '../types';
import TodoCard from './TodoCard';

interface ColumnProps {
  title: string;
  todos: Todo[];
  status: ColumnType;
  onDrop: (item: Todo, status: ColumnType) => void;
}

const Column: React.FC<ColumnProps> = ({ title, todos, status, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'todo',
    drop: (item: Todo) => onDrop(item, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex flex-col w-72 h-96 custom-scrollbar overflow-y-auto bg-gray-100 rounded-lg p-4 ${
        isOver ? 'bg-gray-200' : ''
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Column;
