import React, {Component} from 'react'
import Landing from './components/Landing/Landing'
import {Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (<div className='App'>
            <Route path='/' component={Landing} />
        </div>)
    }
}

export default App
