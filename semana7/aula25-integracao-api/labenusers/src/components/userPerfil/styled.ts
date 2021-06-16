import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  border: 1px solid black;
  padding: 0 3% 3% 3%;

  h1 {
    font-size: 1.8rem;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 50%;

  span {
    margin-right: 2%;
  }
`

const Button = styled.button`
  border: none;
  height: 30px;
  margin-left: 8%;
  border-radius: 10%;
  background-color: blueviolet;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.8;
  }
`

export {
  Container,
  Header,
  User,
  Button
}