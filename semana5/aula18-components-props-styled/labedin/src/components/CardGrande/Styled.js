import styled from 'styled-components'

const BigcardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`
const Image = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`

const Nome = styled.h4`
  margin-bottom: 15px;
`

export { BigcardContainer, Image, ContainerText, Nome }