import React, {Component} from 'react'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <div id='stars'>&nbsp;</div>
        <div id='stars2'>&nbsp;</div>
        <div id='stars3'>&nbsp;</div>
        <div id='titles'>
          <div id='title'>Eastbay Astronomical Society</div>
          <div id='subtitle'>Stargazing since 1924</div>
        </div>
      </header>
    )
  }
}

export default Header
