import React, { Component, PropTypes } from 'react'
import './interactive-data-point.css'

export default class InteractiveDataPoint extends Component {
  constructor () {
    super()

    this.toggleText = this.toggleText.bind(this)
  }

  toggleText () {
    this.props.onHighlightClick(this.props.point)
  }

  render () {
    const { x, y, content, highlight } = this.props
    const r = highlight ? 10 : 4
    const className = highlight ? 'data-point highlight' : 'data-point'

    return (
      <g>
        <circle
          cx={x}
          cy={y}
          r={r}
          strokeWidth='1'
          className={className}
          onClick={this.toggleText}
        />
        {highlight &&
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
