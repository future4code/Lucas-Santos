import styled from 'styled-components'

const Main = styled.main`
  display: grid;
  grid-template-rows: 15vh 40vh 45vh;

  @media(max-height: 800px) {
    grid-template-rows: 25vh 40vh 35vh;
  }
`

const Menu = styled.menu`
  display: grid;
  grid-template-columns: 10% 10% 10%;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  background-color: #009DA5;

  @media(max-height: 800px) {
    grid-template-columns: 20% 20% 20%;
  }
`

const Coaching = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  max-width: 100%;
  background-color: #009DA5;

  div {
    position: absolute;
    top: 35.5%;
    left: 37%;
    height: 8vh;
    width: 30vw;

    display: flex;
    align-items: center;

    @media(max-height: 800px) {
      top: 36%;
      left: 32%;
      height: 13vh;
      width: 40vw;
    }

    p {
      color: white;
      font-size: 1.4rem;

      @media(max-height: 800px) {
        font-size: 1.2rem;
      }
    }
  }
`

const Footer = styled.section`
  display: flex;
  justify-content: center;
  background-color: #003967;

  div {
    width: 50vw;
    height: 10vh;
    margin-top: 2%;
    padding: 2%;
    border: 1px solid white;
    border-radius: 1%;
  }

  p {
    font-size: 2rem;
    color: white;

    @media(max-height: 800px) {
      font-size: 1.5rem;
    }
  }
`

export { Main, Menu, Coaching, Footer }