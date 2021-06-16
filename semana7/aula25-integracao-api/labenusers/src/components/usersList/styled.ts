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

const Button = styled.button`
  border: none;
  height: 20px;
  cursor: pointer;
  background-color: white;
  
  img {
    border-radius: 10%;
    height: 100%;
  }
`

export { Container, Button }