import React, { PropTypes } from 'react'

const renderDataAsBars = (data, max) => data.map((point, i) => (
  <path
    key={`data-bar-${i}`}
    className='data-bar'
    d={`M${point[0]},${max} L${point[0]},${max - point[1]}`}
    data-point={point[2]}
  />
))

export default function BarData (props) {
  const { data, xScale, yScale, max } = props

  return (
    <g>
      {renderDataAsBars(data.map(p => [xScale(p[0]), yScale(p[1])]), yScale(max))}
    </g>
  )
}

BarData.propTypes = {
  data: PropTypes.array.isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired
}
