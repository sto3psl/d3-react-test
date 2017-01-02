import React from 'react'

const renderDataAsBars = (data, max, onHighlightClick) => data.map((point, i) => {
  const className = point[2] ? 'data-bar highlight' : 'data-bar'
  return (
    <path
      key={`data-bar-${i}`}
      className={className}
      d={`M${point[0]},${max} L${point[0]},${max - point[1]}`}
      onClick={() => onHighlightClick(i)}
    />
  )
})

export default function BarData (props) {
  const { data, xScale, yScale, max, onHighlightClick } = props

  return (
    <g>
      {renderDataAsBars(data.map(p => [xScale(p[0]), yScale(p[1]), p[2].highlight]), yScale(max), onHighlightClick)}
    </g>
  )
}
