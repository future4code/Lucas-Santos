import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { About } from '../pages/about'
import { Admin } from '../pages/admin'
import { CreateTrip } from '../pages/createTrip'
import { Home } from '../pages/home'
import { ListTrips } from '../pages/listTrips'
import { Login } from '../pages/login'
import { SubscribeTrip } from '../pages/subscribeTrip'
import { TripDetails } from '../pages/tripDetails'

type PrivateRoutesType = {
  component: any,
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
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
        }
      />
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/trips' exact component={ListTrips} />
        <Route path='/trips/:id/:name' component={SubscribeTrip} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/admin' exact component={Admin} />
        <PrivateRoute path='/admin/createtrip' component={CreateTrip} />
        <PrivateRoute path='/admin/:tripdetailsid' component={TripDetails} />
      </Switch>
    </BrowserRouter>
  )
}