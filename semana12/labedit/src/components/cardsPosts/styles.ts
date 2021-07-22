import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  a {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 60vw;
    gap: 10px;
    color: black;

    .button {
      display: flex;
      justify-content: space-between;
      
      button {
        width: 30px;
        cursor: pointer;
        color: green;
        border: 1px solid green;
        border-radius: 3px;
  
        &:last-child {
          color: red;
          border: 1px solid red;
        }
      }
    }
  
    .comments {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 10px;
      border: 1px solid black;
  
      hr:last-child {
        display: none;
      }
    }
  }
`