import {Link} from 'react-router-dom'
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import Lifecycle from './Lifecycle';
import Home from './Home'
import Component from '../component'
import Hooks from './Hooks'
import Welcome from '../welcome'
import Calculator from './calculator'

const App = () => {
    return (
       <Router>
           <Switch>
               <Route path='/LIfecycle' component={Lifecycle} />
               <Route path='/Hooks' component={Hooks} />
               <Route path='/Welcome/:name' component={Welcome} />
               {/* <Route path='/Component' component={Component} /> */}
               <Route path='/calculator' component={Calculator} />
               <Route path='/' exact component={Home} />

           </Switch>
       </Router>
    )
}
export default App