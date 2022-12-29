import { useState, FC } from 'react';
import type { TodoInput } from '../types';
import { useAppDispatch } from '../../../app/hooks';
import { create } from '../todosSlice';

export const TodoForm: FC = () => {
  const [todoInput, setTodoInput] = useState<TodoInput>({
    title: '',
    body: '',
  });

  const dispatch = useAppDispatch();

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTodoInput({
      ...todoInput,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    try {
      dispatch(create(todoInput));
      setTodoInput({
        title: '',
        body: '',
      });
      // input:textにあたっているフォーカスを解除
      // エンターキーでTodoを追加したときの対処
      const activeElement = document.activeElement;
      if (!activeElement) return;
      (activeElement as HTMLInputElement).blur();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="bg-green-200 p-2" onSubmit={onSubmitHandler} method="post">
      <div className="mb-2">
        <label>
          タイトル :{' '}
          <input
            onChange={onChangeHandler}
            type="text"
            name="title"
            value={todoInput.title}
          />
        </label>
      </div>
      <div className="mb-2">
        <label>
          本文 :{' '}
          <input
            onChange={onChangeHandler}
            type="text"
            name="body"
            value={todoInput.body}
          />
        </label>
      </div>
      <div>
        <input className="bg-blue-500 p-2 rounded text-white hover:bg-blue-300 cursor-pointer" type="submit" value="作成" />
      </div>
    </form>
  );
};

export default TodoForm;