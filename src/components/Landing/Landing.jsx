import React from 'react'
import Modal from 'react-modal'
import Header from '../Header/Header'
import Toolbar from '../ToolBar/ToolBar'
import CallContainer from '../CallContainer/CallContainer'

const customStyles = {
  content: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%'
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-20%',
    // transform: 'translate(-20%, -20%)'
  }
}

// spot the station rss feed: https://spotthestation.nasa.gov/sightings/xml_files/United_States_California_Oakland.xml

class Landing extends React.Component {
  constructor () {
    super()

    this.state = {
      cdsModalIsOpen: false
    }

    this.openClearDarkSkyModal = this.openClearDarkSkyModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeClearDarkSkyModal = this.closeClearDarkSkyModal.bind(this)
  }

  openClearDarkSkyModal () {
    console.log('[LANDING] openClearDarkSkyModal')
    this.setState({cdsModalIsOpen: true})
  }

  afterOpenModal () { // references are now sync'd and can be accessed.
    console.log('[LANDING] afterOpenModal')
    this.subtitle.style.color = '#f00'
  }

  closeClearDarkSkyModal () {
    console.log('[LANDING] closeClearDarkSkyModal')
    this.setState({cdsModalIsOpen: false})
  }

  render () {
    // const widgets = {
    //   spotthestation: {
    //     title: 'Spot the Station',
    //     content: <div className='spotthestation'><iframe src='https://spotthestation.nasa.gov/widget/widget.cfm?country=United_States&region=California&city=Oakland&theme=2' width='310' height='450' frameBorder='0' /></div>
    //   },
    //   twitter: {
    //     title: 'Twitter',
    //     content: <div><a href='https://twitter.com/EastbayAstro'>Tweets by EastbayAstro</a> <script async src='//platform.twitter.com/widgets.js' charSet='utf-8' /></div>
    //   }
    // }
    return (
      <div className='container'>
        <Header />
        <Toolbar cdsClick={this.openClearDarkSkyModal} />
        {/* <Widget widgetTitle='Twitter' widgetContent={[<div><a href='https://twitter.com/EastbayAstro'>Tweets by EastbayAstro</a> <script async src='//platform.twitter.com/widgets.js' charSet='utf-8' /></div>]} />
        <Widget widgetTitle='Spot the Station' widgetContent={[<div style='display:inline-block; border: 1px solid #CCC; border-radius: 6px; -webkit-border-radius: 6px; -o-border-radius: 6px; position: relative; overflow: hidden; width: 310px; height: 450px;'> <iframe src='https://spotthestation.nasa.gov/widget/widget.cfm?country=United_States&region=California&city=Oakland&theme=2' width='310' height='450' frameBorder='0' /></div>]} /> */}
        {/* <Widget widgetContent={widgets.twitter} />
        <Widget widgetContent={widgets.spotthestation} /> */}
        <div className='spotthestation'><iframe title='spotthestation' src='https://spotthestation.nasa.gov/widget/widget.cfm?country=United_States&region=California&city=Oakland&theme=2' width='310' height='450' frameBorder='0' /></div>

        <CallContainer />

        <Modal
          isOpen={this.state.cdsModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeClearDarkSkyModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <button onClick={this.closeClearDarkSkyModal}>close</button>
          <iframe title='cleardarksky' src='http://www.cleardarksky.com/c/ChbtSPCCAkey.html' width='100%' height='100%' frameBorder='0' ref={subtitle => this.subtitle = subtitle} />
        </Modal>

      </div>
    )
  }
}

Modal.setAppElement('body');

export default Landing
