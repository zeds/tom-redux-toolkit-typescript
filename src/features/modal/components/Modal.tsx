import React from 'react'
//ストアからデータを読み込むために、useSelectorを設定します。
import { RootState } from '../../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../modalSlice'
import { remove } from '../../todos/todosSlice';

const Modal = () => {
	const dispatch = useDispatch();
	//Modalを呼び出すとき、todo.idをModalのStateに格納していて、
	//削除する時にそのidを利用する
	const id = useSelector((state: RootState) => state.modal.todoId);

	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>削除してよろしいですか？</h4>
				<div className="btn-container">
					<button
						type="button"
						className="btn confirm-btn"
						onClick={()=>{
							dispatch(remove(id.toString()));
							dispatch(closeModal());
						}}>
						Okay
					</button>
					<button
						type="button"
						className="btn clear-btn"
						onClick={()=>{
							dispatch(closeModal())
						}}>
						Cancel
					</button>
				</div>
			</div>

		</aside>
	)
}

export default Modal