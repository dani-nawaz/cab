import { HomeIcon, UsersIcon } from '@heroicons/react/outline'
import DashboardLayout from './Layout/DashboardLayout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardMain from './DashboardMain'
import ActiveDrivers from './ActiveDrivers'
import SingleDriver from '../SingleDriver'
import AllUsers from './Layout/AllUsers'
import DriverManagement from './DriverManagement'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  {
    name: 'Driver Management',
    href: '/drivermanagement',
    icon: UsersIcon,
    current: false,
  },
  {
    name: 'Active Drivers',
    href: '/activedrivers',
    icon: UsersIcon,
    current: false,
  },
  {
    name: 'All Users',
    href: '/allusers',
    icon: UsersIcon,
    current: false,
  },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Dashboard() {
  return (
    <Router>
      <DashboardLayout userNavigation={userNavigation} navigation={navigation}>
        <Switch>
          <Route exact path='/'>
            <DashboardMain />
          </Route>
          <Route exact path='/drivermanagement'>
            <DriverManagement />
          </Route>
          <Route exact path='/usermanagement/:id'>
            <SingleDriver />
          </Route>
          <Route exact path='/activedrivers'>
            <ActiveDrivers />
          </Route>
          <Route exact path='/allusers'>
            <AllUsers />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  )
}
