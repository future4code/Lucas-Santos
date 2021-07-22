import { useEffect, useState } from "react"
import { getHandlePosts } from "../../services/api"
import { CardsPosts } from "../../components/cardsPosts"
import { Container } from './styles'

export const Feed = () => {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    getHandlePosts(setPosts, token)
  }, [])

  return (
    <Container>
      <h1>Feed</h1>
      {posts.length > 0 && posts.map(({id, username, body, title, createdAt, userId, voteSum, commentCount, userVote}) => {
        return (
          <CardsPosts
            key={id}
            id={id}
            username={username}
            body={body}
            title={title}
            createdAt={createdAt}
            userId={userId}
            voteSum={voteSum}
            commentCount={commentCount}
            userVote={userVote}
          />
        )
      })}
    </Container>
  )
}