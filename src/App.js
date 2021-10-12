import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import login from './components/loginScreen.js/login'
import SignUp from './components/SignUpScreen/Signup'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={login} />
        <Route path='/' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
