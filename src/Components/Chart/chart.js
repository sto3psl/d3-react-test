import './chart.css'
import React, { PropTypes, Component } from 'react'
import * as d3 from 'd3'
import XAxis from '../XAxis/x-axis.js'
import YAxis from '../YAxis/y-axis.js'
import LineData from '../LineData/line-data.js'
import BarData from '../BarData/bar-data.js'

export default class Chart extends Component {
  constructor () {
    super()

    this.state = {
      width: document.body.getBoundingClientRect().width,
      height: 300
    }

    this.padding = 50
  }

  componentDidMount () {
    window.addEventListener('resize', (e) => {
      this.setState({
        width: document.body.getBoundingClientRect().width
      })
    }, { passive: true })
  }

  render () {
    const { width, height } = this.state
    const { data, type } = this.props

    const xMax = d3.max(data.map(d => d[0]))

    const xScale = d3.scaleLinear()
      .domain([0, xMax])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, height])

    return (
      <div>
        <svg viewBox={`-${this.padding} -${this.padding} ${width + this.padding * 2} ${height + this.padding * 2}`}>
          <XAxis data={data.map(p => p[0])} scale={xScale} yPos={yScale(1)} />
          <YAxis ticks={5} scale={yScale} xPos={0} width={width} />

          <g id='data'>
            {type === 'line' && <LineData data={data} yScale={yScale} xScale={xScale} max={1} />}
            {type === 'bar' && <BarData data={data} yScale={yScale} xScale={xScale} max={1} />}
          </g>
        </svg>
      </div>
    )
  }
}

Chart.defaultProps = {
  type: 'line'
}

Chart.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array.isRequired
}
