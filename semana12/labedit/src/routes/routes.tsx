import { Switch, Redirect, Route } from 'react-router-dom'
import { Err } from '../pages/error'
import { Feed } from '../pages/feed'
import { Login } from '../pages/login'
import { Post } from '../pages/post'
import { SignUp } from '../pages/signUp'

type PrivateRoutesType = {
  component: Function,
  path: string,
  exact?: boolean
}

export const Routes = () => {
  const token = localStorage.getItem('token')

  const PrivateRoute = ({ component: Component, ...rest }: PrivateRoutesType) => {
    return (
      <Route 
        {...rest}
        render={props =>
          token !== null ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
          )
        }
      />
    )
  }

  return (
    <Switch>
      <Route path={'/login'} component={Login} />
      <Route path={'/cadastro'} component={SignUp} />
      <PrivateRoute path={'/'} exact component={Feed} />
      <PrivateRoute path={'/post/:id'} component={Post} />
      <Route component={Err} />
    </Switch>
  )
}