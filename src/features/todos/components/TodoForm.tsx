import { useState, FC } from 'react';
import { createTodo } from '../crud/create';
import type { Todo, TodoInput } from '../types';

type Props = {
  onSubmit: (todo: Todo) => void;
};

export const TodoForm: FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = useState<TodoInput>({
    title: '',
  });

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!input.title) {
      alert('タイトルを入力してください');
      return;
    }

    const todo = createTodo(input);
    onSubmit(todo);
    setInput({
      title: '',
    });
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInput({
      title: event.target.value,
    });
  };

  return (
    <form method="post" onSubmit={onSubmitHandler}>
      <label htmlFor="inputTitle">タイトル : </label>
      <input
        id="inputTitle"
        type="text"
        value={input.title}
        onChange={onChangeHandler}
      />
      <input className="p-3 bg-blue-300 rounded m-3 border border-blue-500 cursor-pointer" type="submit" value="作成" />
    </form>
  );
};
