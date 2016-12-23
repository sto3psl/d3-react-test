import './x-axis.css'
import React, { PropTypes } from 'react'

export default function XAxis (props) {
  const { data, scale, yPos } = props
  const offset = 20

  return (
    <g id='x-axis'>
      {data.map((x, i) => (
        <text
          className='x-axis-label'
          key={`x-axis-key-${x}`}
          x={scale(x)}
          y={yPos + offset}
        >
          {x}
        </text>
      ))}
    </g>
  )
}

XAxis.propTypes = {
  data: PropTypes.array,
  scale: PropTypes.func,
  yPos: PropTypes.number
}
