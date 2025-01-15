import React from 'react';
import { useDrag } from 'react-dnd';
import { Todo } from '../types';
import { GripVertical } from 'lucide-react';

interface TodoCardProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'todo',
    item: todo,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white p-3 rounded-lg shadow-sm cursor-move border border-gray-200 
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        hover:shadow-md transition-shadow duration-200`}
    >
      <div className="flex items-center gap-2">
        <GripVertical className="w-4 h-4 text-gray-400" />
        <p className="text-sm text-gray-700">{todo.text}</p>
      </div>
    </div>
  );
};

export default TodoCard;
