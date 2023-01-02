export type Post = {
	id: string,
	title: string,
	content: string,
	date: string,
	userId: string,
	reactions: {
		thumbsUp: number,
		wow: number,
		heart: number,
		rocket: number,
		coffee: number
	}
}
