import React from 'react'
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import '../bootstrap.min.css'
import './style.css'
import Home from './screens/Home'
import Contact from './screens/Contact'
import About from './screens/About'
import Login from './screens/Log-in'
import Registration from './screens/Registration'
import Header from './component/header'
import Reviews from './screens/review'

const App = () => {
    return (
            <Router>
                <Header />
                <main className="main">
                    <Switch>
                        <Route path='/Contact' component={Contact}/>
                        <Route path='/About' component={About} />
                        <Route path='/Login' component={Login} />
                        <Route path='/Reviews' component={Reviews} />
                        <Route path='/Registration' component={Registration} />
                        <Route path='/' component={Home} />
                    </Switch>
                </main>
            </Router>
    )
}
export default App