import './y-axis.css'
import React, { PropTypes } from 'react'

const textOffsetY = 4
const textOffsetX = -10

export default function YAxis (props) {
  const { width, ticks, scale, xPos } = props
  const yTicks = scale.ticks(ticks)

  return (
    <g id='y-axis'>
      {yTicks.map((y, i) => (
        <g key={`y-axis-key-${i}`}>
          <path
            className='y-axis'
            d={`M${xPos},${scale(y)}L${width},${scale(y)}`}
          />
          <text
            className='y-axis-label'
            x={xPos + textOffsetX}
            y={scale(y) + textOffsetY}
          >
            {100 - Math.floor(y * 100) + '%'}
          </text>
        </g>
      ))}
    </g>
  )
}

YAxis.propTypes = {
  scale: PropTypes.func,
  ticks: PropTypes.number,
  width: PropTypes.number,
  xPos: PropTypes.number
}
