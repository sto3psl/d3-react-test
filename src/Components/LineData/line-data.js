import React, { PropTypes } from 'react'
import InteractiveDataPoint from '../InteractiveDataPoint/interactive-data-point.js'

const renderDataPoints = (data, max) => data.map((point, i) => (
  <InteractiveDataPoint
    key={`data-point-${i}`}
    x={point[0]}
    y={max - point[1]}
    content={Math.floor(point[2] * 100) + '%'}
  />
))

export default function LineData (props) {
  const { data, xScale, yScale, max } = props

  let d = ''

  let lastPoint = data.length - 1

  for (let i = lastPoint; i >= 0; i--) {
    d += `L${xScale(data[i][0])} ${yScale(max) - yScale(data[i][1])}`
  }

  return (
    <g>
      <path
        d={`M${xScale(data[lastPoint][0])},${yScale(max) - yScale(data[lastPoint][1])}${d}`}
        strokeWidth={3}
        className='data-line'
      />
      {renderDataPoints(data.map(p => [xScale(p[0]), yScale(p[1]), p[1]]), yScale(max))}
    </g>
  )
}

LineData.propTypes = {
  data: PropTypes.array.isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired
}
