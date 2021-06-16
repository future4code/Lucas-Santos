import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 25px;

  span {
    font-weight: 500;
  }
`

const Users = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Button = styled.button`
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: white;
`

export { Container, Users, Button }