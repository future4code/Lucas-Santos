import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Admin } from './pages/admin'
import { CreateTrip } from './pages/createTrip'
import { EnterTrip } from './pages/enterTrip'
import { Home } from './pages/home'
import { ListTrips } from './pages/listTrips'
import { Login } from './pages/login'
import { TripDetails } from './pages/tripDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/trips' component={ListTrips} />
        <Route path='/subscribe' component={EnterTrip} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route path='/createtrip' component={CreateTrip} />
        <Route path='/tripdetails' component={TripDetails} />
      </Switch>
    </BrowserRouter>
  )
}