import React from 'react'
import PropTypes from 'prop-types'

class CallToAction extends React.Component {
  render () {
    return (
      <div className='callToAction'>
        <div className='callTitle'>{this.props.callTitle}</div>
        <div className='callContent'>{this.props.callContent}</div>
      </div>
    )
  }
}

CallToAction.propTypes = {
  callTitle: PropTypes.string,
  callContent: PropTypes.string
}

export default CallToAction
