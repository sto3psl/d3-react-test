import React, { PropTypes } from 'react'

const renderDataPoints = (data, max) => data.map((point, i) => (
  <circle
    key={`data-point-${i}`}
    cx={point[0]}
    cy={max - point[1]}
    r={4}
    strokeWidth='1'
    className='data-point'
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
      {renderDataPoints(data.map(p => [xScale(p[0]), yScale(p[1])]), yScale(max))}
    </g>
  )
}

LineData.propTypes = {
  data: PropTypes.array.isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired
}
