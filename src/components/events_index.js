import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    console.log("hi!")
    this.props.readEvents()
  }

  render() {
    const props = this.props

    return (
      <>
        <div>count: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    )
  }
}

const mapStateToProps = state => ({})


const mapoDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapoDispatchToProps)(EventsIndex)

export default EventsIndex;
 