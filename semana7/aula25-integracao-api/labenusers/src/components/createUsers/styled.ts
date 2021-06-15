import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
  width: 50vw;
`

const Main = styled.div`
  width: 100%;
  border: solid 1px black;
  margin-bottom: 5vh;
  padding: 2%;
  text-align: center;

  h1 {
    margin-bottom: 3vh;
  }

  div {
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;

    input {
      margin-left: 1%;
    }
  }
`

export { Container, Main }