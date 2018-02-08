// import dependencies
import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

// import stylesheet
import './App.css'

// import components
import WelcomePage from './pages/WelcomePage/WelcomePage'
import ListView from './pages/ListView/ListView'
import About from './pages/About/About'
import VideoView from './pages/VideoView/VideoView'

// create component
class App extends Component {
  // initialize state
  state = {
    year: ''
  }

  // I like this method. Simple, but smart.
  // get date when component mounts
  componentDidMount = () => {
    let year = new Date().getFullYear()
    this.setState({
      year: year
    })
  }

  // You could have embeded the Navbar and the Footer component here, instead of embding them in each page.
  // render components
  render = () => {
    return (
      <main>
        <Switch>
          {/* routes */}
          <Route
            exact
            path="/"
            render={props => <WelcomePage {...props} year={this.state.year} />}
          />
          <Route
            exact
            path="/shops"
            render={props => <ListView {...props} year={this.state.year} />}
          />
          <Route
            exact
            path="/videos"
            render={props => <VideoView {...props} year={this.state.year} />}
          />
          <Route
            exact
            path="/about"
            render={props => <About {...props} year={this.state.year} />}
          />
        </Switch>
      </main>
    )
  }
}

// export component
export default App
