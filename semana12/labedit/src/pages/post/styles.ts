import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  .containerPost {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 60vw;
    padding: 5px;
    gap: 10px;

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
  }
`