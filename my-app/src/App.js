import React from 'react'
import './app.css'

import { Header, Feature, Projects } from './containers'
import { NavBar, Skills } from './components'
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
        <Skills />

        </div>
    <Feature />
    <Projects />
    </div>
    )
}

export default App