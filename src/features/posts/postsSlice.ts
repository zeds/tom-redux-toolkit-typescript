import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { Post } from './postType'
import { Reaction } from './reactionType'
import { sub } from 'date-fns'



const initialState: Post[] = [
	{
		id: '1',
		title: 'Learning Redux Toolkit',
		content: "I've heard good things.",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		userId: '-1',
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0
		}
	},
	{
		id: '2',
		title: 'Slices...',
		content: "The more I say slice, the more I want pizza.",
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		userId: '-1',
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0
		}
	}
]



//const initialState = {
//	posts: [],
//	status: 'idle',	// idle loading succeeded failed
//	error: null
//}

//const postsSlice = createSlice({
//	name: 'posts',
//	initialState,
//	reducers: {
//		postAdded(state, action) {
//			state.push(action.payload)
//		}
//	}
//})

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action: PayloadAction<Post>) {
				state.push(action.payload)
			},
			prepare(title: string, content: string, userId: string) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						userId,
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0
						}
					}
				}
			}
		},
		reactionAdded(state, action: PayloadAction<Reaction>) {
			const { postId, reaction } = action.payload
			let existingPost = state.find(post => post.id === postId)
			if (existingPost) {
				existingPost.reactions[reaction]++
			}
		}
	}
})

//TODO (state: any)としているが、anyは使わないようにしたい
export const selectAllPosts = (state: any) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer