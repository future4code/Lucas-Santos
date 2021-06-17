import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  background-color: #003967;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  border: none;
  padding: 15px 32px;
  margin: 4px 2px;
  min-width: 150px;
  max-height: 40px;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    opacity: 0.8;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  @media(max-height: 800px) {
    font-size: 1rem;
  }
`

export default Button