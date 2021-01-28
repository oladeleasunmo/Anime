import React from 'react'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import EventClass from './eventClass'
import Component from './component'
import Course from './course'

const App = () => {
    return (
      <Router>
          <Switch>
              <Route path= "/course/:name" component= {Course} />
              <Route path= "/event" component= {EventClass} />
              <Route path= "/" exact component= {Component} />
          </Switch>
      </Router>

    )
}

export default App