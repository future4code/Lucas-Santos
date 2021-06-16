import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
  width: 50vw;

  h1 {
    font-size: 1.8rem;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid black;
  padding: 0 3% 3% 3%;
  min-height: 30.4vh;
`

const Button = styled.button`
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
  Container,
  List,
  Button
}