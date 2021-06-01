import styled from 'styled-components'

const SmallCardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 80px;
`

const Image = styled.img`
  width: 35px;
  margin-right: 10px;
  border-radius: 50%;
`

const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
`

const Dados = styled.h4`
  margin-right: 5px;
`

export { SmallCardContainer, Image, ContainerText, Dados }