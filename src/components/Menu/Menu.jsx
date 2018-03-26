import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router-dom'

class Menu extends React.Component {
  constructor () {
    super()

    this.state = {
      menuActive: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    let menuState = !this.state.menuActive
    this.setState({
      menuActive: menuState
    })
  }

  iterateOverMenuOptions (menuItems) {
    let menu = []
    for (var i = 0; i < menuItems.length; i++) {
      menu.push(<li key={i}><Link to={menuItems[i].link}>{menuItems[i].name}</Link></li>)
    }
    return menu
  }

  render () {
    let menu = ''
    if (this.state.menuActive && this.props.menuOptions) {
      const menuItems = this.iterateOverMenuOptions(this.props.menuOptions)
      menu = <div className='itemList'>
        <ul>
          {menuItems}
        </ul>
      </div>
    }
    return (
      <div className='item' onClick={this.toggleMenu} onMouseEnter={this.toggleMenu} onMouseLeave={this.toggleMenu}>
        <span>{this.props.menuTitle}</span>
        <ReactCSSTransitionGroup transitionName='menu' transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {menu}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Menu.propTypes = {
  menuTitle: PropTypes.string,
  menuOptions: PropTypes.array
}

export default Menu
