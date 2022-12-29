import type { FC } from 'react';
import { useSelector } from 'react-redux';
import Modal from './features/modal/components/Modal';
import { TodoContainer } from './features/todos/components/TodoContainer';


const App: FC = () => {
	const { isOpen } = useSelector((store) => store.modal);
  return (
<<<<<<< HEAD
			<>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
				<p>直前の修正</p>
			</>
  )
}
=======
    <div className="modal-container bg-red-500">
      <TodoContainer />
			{isOpen && <Modal />}
    </div>
  );
};
>>>>>>> modal

export default App;