import React, { Component, PropTypes } from 'react'
import './interactive-data-point.css'

export default class InteractiveDataPoint extends Component {
  constructor () {
    super()

    this.state = {
      visibleText: false
    }

    this.toggleText = this.toggleText.bind(this)
  }

  toggleText () {
    this.setState({ visibleText : !this.state.visibleText })
  }

  render () {
    const { x, y, content } = this.props
    const r = this.state.visibleText ? 10 : 4

    return (
      <g>
        <circle
          cx={x}
          cy={y}
          r={r}
          strokeWidth='1'
          className='data-point'
          onClick={this.toggleText}
        />
        {this.state.visibleText &&
          <text
            x={x}
            y={y - 20}
            className='data-point-label'
          >
            {content}
          </text>
        }
      </g>
    )

  }
}

InteractiveDataPoint.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  content: PropTypes.node
}
