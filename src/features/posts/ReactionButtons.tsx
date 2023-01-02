import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'
import { Reaction } from './reactionType'
import { Post } from './postType'


export type Emoji = {
	thumbsUp: string,
	wow: string,
	heart: string,
	rocket: string,
	coffee: string
}


const reactionEmoji: Emoji = {
	thumbsUp: '👍',
	wow: '😮',
	heart: '❤️',
	rocket: '🚀',
	coffee: '☕️'
}

interface Props {
	post: Post
}

const ReactionButtons = (props: Props) => {
	const dispatch = useDispatch()

	console.log("p=", props.post.reactions.coffee)


	//nameはthumbsUpとかwowとか
	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				type="button"
				className="reactionButton"
				onClick={() =>
					dispatch(reactionAdded({ postId: props.post.id, reaction: name}))
				}
				>
					{/*👍 4*/}
				{/*{emoji} {props.post.reactions['wow']}*/}
				{emoji} <span>{props.post.reactions[name]}</span>
			</button>
		)
	})
	return <div>{reactionButtons}</div>
}

export default ReactionButtons