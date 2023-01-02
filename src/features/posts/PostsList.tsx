import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import { Post } from './postType'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

	//localCompareはStringの関数なので、stringをStringに変換する必要がある。
	const orderedPost = posts.slice().sort((a:any,b:any) => String(b.date).localeCompare(a.date))

  const renderedPosts = orderedPost.map((post: Post) => (
    <article key={post.id}>
			<div>{post.userId}</div>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
			<p className="postCredit">
				{/*投稿のidを渡す*/}
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButtons post={post} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList