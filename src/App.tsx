import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Modal from './features/modal/components/Modal';
import { TodoContainer } from './features/todos/components/TodoContainer';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm'

const App: FC = () => {
	//const { isOpen } = useSelector((store) => store.todos);
	const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  return (
		<main className="App">
			<AddPostForm />
			<PostsList />
      {/*<TodoContainer />
			{isOpen && <Modal />}*/}
		</main>
  );
};

export default App;