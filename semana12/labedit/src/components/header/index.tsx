import { useHistory } from 'react-router-dom'
import { AppBar, Button } from '@material-ui/core'
import { StyledToolbar } from './styles'

export const Header = () => {
  const history = useHistory()

  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.clear()
    history.replace('/login')
    window.location.reload();
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color="inherit" onClick={() => history.push('/')}>Labedit</Button>
        {token === null ? (
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
        ) : (
          <Button color="inherit" onClick={logout}>Logout</Button>
        )}
      </StyledToolbar>
    </AppBar>
  )
}