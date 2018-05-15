import React from 'react'
import PropTypes from 'prop-types'
import Menu from '../Menu/Menu'

const LinksMenu = [
  {
    name: 'Link 1',
    link: 'http://eastbayastro.org/1'
  }, {
    name: 'Link 2',
    link: 'http://eastbayastro.org/2'
  }, {
    name: 'Link 3',
    link: 'http://eastbayastro.org/3'
  }
]
const AboutMenu = [
  {
    name: 'EAS History',
    link: 'http://eastbayastro.org/history'
  }, {
    name: 'Contacts',
    link: 'http://eastbayastro.org/contacts'
  }, {
    name: 'Directions',
    link: 'http://eastbayastro.org/directions'
  }]
const ArchivesMenu = [
  {
    name: 'The Refractor',
    link: 'http://eastbayastro.org/refractor'
  }, {
    name: 'Advice',
    link: 'http://eastbayastro.org/advice'
  }, {
    name: 'Beware!',
    link: 'http://eastbayastro.org/beware'
  }, {
    name: 'Constellation Chronicles',
    link: 'http://eastbayastro.org/constellation'
  }, {
    name: 'Library',
    link: 'http://eastbayastro.org/library'
  }
]
const mediaLinks = {
  'facebook': 'https://www.facebook.com/EastbayAstronomicalSociety/?fref=ts',
  'twitter': 'https://twitter.com/EastbayAstro',
  'instagram': 'https://www.instagram.com/eastbayastrosociety/'
}

// const ToolBar = React.createClass({
class ToolBar extends React.Component {
  constructor () {
    super()
    this.clearDarkSkyClick = this.clearDarkSkyClick.bind(this)
  }
  clickHandler (e) {
    console.log('You clicked an item:', e.target.parentElement.title, mediaLinks[e.target.parentElement.title])
    // FB:              https://www.facebook.com/EastbayAstronomicalSociety/?fref=ts
    // FB?:             https://www.facebook.com/search/top/?q=eastbay%20astronomical%20society
    // Twitter:         https://twitter.com/EastbayAstro
    // Instagram:       https://www.instagram.com/eastbayastrosociety/
    // Clear Dark Sky:  http://www.cleardarksky.com/c/ChbtSPCCAkey.html
  }

  clearDarkSkyClick () {
    if (this.props.cdsClick) {
      this.props.cdsClick()
    }
  }

  render () {
    return (
      <div className='toolbar'>
        <div className='toolbar_left'>
          <Menu menuTitle='Calendar' />
          <Menu menuTitle='Photo Gallery' />
          <Menu menuTitle='Archives' menuOptions={ArchivesMenu} />
          <Menu menuTitle='Links' menuOptions={LinksMenu} />
          <Menu menuTitle='About' menuOptions={AboutMenu} />
        </div>
        <div className='toolbar_right social_media'>
          <div className='item logo logo_twitter' title='twitter' onClick={this.clickHandler}><img src='../img/Twitter_Logo_White_On_Blue.svg' alt='Twitter logo' /></div>
          <div className='item logo logo_facebook' title='facebook' onClick={this.clickHandler}><img src='../img/FB-f-Logo__blue_29.png' alt='Facebook logo' /></div>
          <div className='item logo logo_instagram' title='instagram' onClick={this.clickHandler}><img src='../img/FB-f-Logo__blue_29.png' alt='Instagram logo' /></div>
          <div className='item logo logo_cleardarksky' title='cleardarksky' onClick={this.clearDarkSkyClick}><img src='http://www.cleardarksky.com/c/ChbtSPCCAcs0.gif?1' alt='Clear Dark Sky' /></div>
        </div>
      </div>
    )
  }
}

// define propTypes
ToolBar.propTypes = {
  cdsModalIsOpen: PropTypes.func
}

export default ToolBar
