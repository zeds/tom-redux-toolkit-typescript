import { createSlice } from "@reduxjs/toolkit";
import { User } from './userType'

const initialState: User[] = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state:any) => state.users;

export default usersSlice.reducer