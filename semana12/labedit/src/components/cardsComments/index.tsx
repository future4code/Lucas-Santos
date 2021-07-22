import { Container } from './styles'

type commentsProps = {
  id: string,
  username: string,
  body: string,
  createdAt: string,
  userId: string,
  postId: string,
  voteSum: null | string,
  userVote: null | string
}

export const CardsComments = (comments: commentsProps) => {
  return (
    <Container>
      <h3>{comments.username}</h3>
      <p>{comments.body}</p>
      <div className='button'>
        <p><button><b>+</b></button> {comments.voteSum} <button><b>-</b></button></p>
      </div>
    </Container>
  )
}