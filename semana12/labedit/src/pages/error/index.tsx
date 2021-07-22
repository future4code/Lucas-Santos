import Typography from '@material-ui/core/Typography'
import { error } from '../../assets/images/all'
import { ErrorImage, ErrorPageContainer } from './styles'

export const Err = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error} />
      <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  )
}