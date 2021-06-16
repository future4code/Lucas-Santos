import styled from 'styled-components'

const GlobalStyle = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`

const ContainerUserList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
  width: 50vw;

  h1 {
    font-size: 1.8rem;
  }
`

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  padding: 0 3% 3% 3%;
  height: 30.4vh;
`

const ButtonUserList = styled.button`
  margin-bottom: 3%;
  border: none;
  height: 30px;
  width: 225px;
  background-color: blueviolet;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.8;
  }
`

export {
  GlobalStyle,
  ContainerUserList,
  UserList,
  ButtonUserList
}