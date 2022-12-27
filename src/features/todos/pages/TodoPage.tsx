import { FC, useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Todo, TodoUpdateInput } from '../types';

export const TodoPage: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmit = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const onChangeTodoCompleted = (updateTodoInput: TodoUpdateInput) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== updateTodoInput.id) return todo;
      if (updateTodoInput.completed === undefined) return todo;

      return {
        ...todo,
        completed: updateTodoInput.completed,
      };
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="bg-gray-200 w-full h-screen p-20">
			<div className="flex justify-center">
	      <h1>簡易Todoアプリ</h1>
			</div>

			<div className="bg-gray-400">
				<TodoForm onSubmit={onSubmit} />
				<hr />
				<TodoList todos={todos} onChangeCompleted={onChangeTodoCompleted} />
			</div>
    </div>
  );
};
