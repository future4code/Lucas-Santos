import { Link } from "react-router-dom"
import { Container } from './styles'

type postProps = {
  id: string,
  username: string,
  body: string,
  title: string,
  createdAt: string,
  userId: string,
  voteSum: null | string,
  commentCount: null | string,
  userVote: null | string
}

export const CardsPosts = (post: postProps) => {
  const commentCount = Number(post.commentCount)

  return (
    <Container>
      <Link to={`post/${post.id}`} >
        <h3>{post.username}: {post.title}</h3>
        <p>{post.body}</p>
        <div className='button'>
          <p><button><b>+</b></button> {post.voteSum} <button><b>-</b></button></p>
          <p>{commentCount === 0 ? 0 : post.commentCount} comentários</p>
        </div>
      </Link>
    </Container>
  )
}