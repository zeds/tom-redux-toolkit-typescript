import type { FC } from 'react';
import { useSelector } from 'react-redux';
import Modal from './features/modal/components/Modal';
import { TodoContainer } from './features/todos/components/TodoContainer';


const App: FC = () => {
	const { isOpen } = useSelector((store) => store.modal);
  return (
    <div className="modal-container bg-red-500">
      <TodoContainer />
			{isOpen && <Modal />}
    </div>
  );
};

export default App;