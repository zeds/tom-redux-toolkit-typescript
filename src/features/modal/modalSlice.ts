import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
	todoId: 0
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true;
			//openの時だけ、payloadを登録する
			state.todoId = action.payload;
		},
		// (state, action)とした時、closeModal()と引数なしでは呼び出せない。
		closeModal: (state) => {
			state.isOpen = false
		}
	}
})

export const isOpenModal = (state: { iOpen: any; }) => state.iOpen;
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
