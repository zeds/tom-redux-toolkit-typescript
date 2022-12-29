import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Modal from './features/modal/components/Modal';
import { TodoContainer } from './features/todos/components/TodoContainer';

const App: FC = () => {
	//const { isOpen } = useSelector((store) => store.todos);
	const isOpen = useSelector((state: RootState) => state.modal.isOpen);
	
  return (
    <div className="modal-container bg-red-500">
      <TodoContainer />
			{isOpen && <Modal />}
    </div>
  );
};

export default App;