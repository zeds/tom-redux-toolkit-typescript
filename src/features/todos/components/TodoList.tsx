import type { FC } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { remove, update, restore } from '../todosSlice';
import { Todo } from '../types';
import { openModal } from '../../modal/modalSlice'

type Props = {
  todos: Todo[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <table className="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-400 p-2">id</th>
            <th className="border border-slate-400 p-2">タイトル</th>
            <th className="border border-slate-400 p-2">本文</th>
            <th className="border border-slate-400 p-2">ステータス</th>
            <th className="border border-slate-400 p-2">作成日時</th>
            <th className="border border-slate-400 p-2">更新日時</th>
            <th className="border border-slate-400 p-2">削除日時</th>
            <th className="border border-slate-400 p-2">更新ボタン</th>
            <th className="border border-slate-400 p-2">削除ボタン</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
          <tr>
						<td className="bg-red-400" colSpan={9} style={{ textAlign: 'center' }}>
                データなし
              </td>
            </tr>
          ) : (
            todos.map((todo) => {
              return (
                <tr className="text-center" key={todo.id}>
                  <td className="border border-slate-500">{todo.id}</td>
                  <td className="border border-slate-500">{todo.title}</td>
                  <td className="border border-slate-500">{todo.body}</td>
                  <td className="border border-slate-500">{todo.status}</td>
                  <td className="border border-slate-500">{todo.createdAt}</td>
                  <td className="border border-slate-500">{todo.updatedAt ?? '無し'}</td>
                  <td className="border border-slate-500">{todo.deletedAt ?? '無し'}</td>
                  <td>
                    <button className="bg-blue-400 p-2 rounded"
                      onClick={() => {
                        // ここでは決め打ちでtitleとbodyのみを更新しているが、
                        // 最終的にはtitle, body, statusに好きな値を入力できるようにする
                        const updateAction = update({
                          id: todo.id,
                          input: {
                            title: '更新したtitle' + Date.now(),
                            body: '更新したbody ' + Date.now(),
                          },
                        });
                        dispatch(updateAction);
                      }}
                    >
                      更新
                    </button>
                  </td>
                  <td>
                    {isDeletedTodo(todo) ? (
                      <button
                        onClick={() => {
                          dispatch(restore(todo.id));
                        }}
                      >
                        復元
                      </button>
                    ) : (
                      <button className="bg-red-600 p-2 rounded"
                        onClick={() => {
													//todo.idはstring
                          dispatch(openModal(todo.id));
                        }}
                      >
                        削除
                      </button>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

const isDeletedTodo = (todo: Todo) => {
  return todo.deletedAt !== undefined;
};

export default TodoList;