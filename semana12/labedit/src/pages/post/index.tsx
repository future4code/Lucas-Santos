import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardsComments } from "../../components/cardsComments"
import { getHandlePostsComments, getHandlePosts } from "../../services/api"
import { Container } from './styles'

type postType = {
  username: string,
  body: string,
  commentCount: null | string,
  voteSum: string | null
}

export const Post = () => {
  const [ comments, setComments ] = useState([])
  const [ posts, setPosts ] = useState([])
  const { id } = useParams<{id: string}>()
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    getHandlePostsComments(id, setComments, token)
    getHandlePosts(setPosts, token)
  }, [])
  
  const post = posts.filter((post: {id: string}) => {
    return id === post.id
  }) as postType[]

  return (
    <Container>
      <h1>Post</h1>
      {post.length === 1 && (
        <div className='containerPost'>
          <h3>{post[0].username}</h3>
          <p>{post[0].body}</p>
          <div className='button'>
            <p><button><b>+</b></button> {post[0].voteSum} <button><b>-</b></button></p>
            <p>{post[0].commentCount ? post[0].commentCount : 0} comentários</p>
          </div>
        </div>
      )}
      {comments.length > 0 && comments.map(({id, username, body, createdAt, userId, postId, voteSum, userVote}) => {
        return (
          <CardsComments
            key={id}
            id={id}
            username={username}
            body={body}
            createdAt={createdAt}
            userId={userId}
            postId={postId}
            voteSum={voteSum}
            userVote={userVote}
          />
        )
      })}
    </Container>
  )
}