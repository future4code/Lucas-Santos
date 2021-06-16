import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
  width: 50vw;

  button {
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
  }
`

const Main = styled.div`
  width: 100%;
  border: solid 1px black;
  text-align: center;
  padding: 0% 3% 3% 3%;

  h1 {
    font-size: 1.8rem;
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

  button{
    margin-top: 3%;
    border: none;
    height: 30px;
    width: 225px;
    background-color: green;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
    }
  }
`

export { Container, Main }