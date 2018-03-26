// based on code found at https://www.codementor.io/reactjs/tutorial/how-to-build-a-sliding-menu-using-react-js-and-less-css

const React = require('react')
const {string} = React.PropTypes

const MenuItem = React.createClass({
  propTypes: {
    hash: string,
    children: string
  },

  navigate (hash) {
    window.location.hash = hash
  },

  clickHandler (e) {
    console.log('menu item clicked: ', e)
  },

  render () {
    // return <div className="menu-item" onClick={this.navigate.bind(this, this.props.hash)}>{this.props.children}</div>
    return <div className="menu-item" onClick={this.clickHandler}>{this.props.children}</div>
  }
})

module.exports = MenuItem
