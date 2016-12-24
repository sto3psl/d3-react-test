import '../Chart/chart.css'
import React, { PropTypes, Component } from 'react'
import * as d3 from 'd3'
import Chart from '../Chart/chart.js'
import LineData from '../LineData/line-data.js'

export default class LineChart extends Component {
  constructor () {
    super()

    this.state = {
      width: document.body.getBoundingClientRect().width,
      height: 300
    }

    this.windowResize = this.windowResize.bind(this)
  }

  windowResize (e) {
    this.setState({
      width: document.body.getBoundingClientRect().width
    })
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize, { passive: true })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.windowResize, false)
  }

  render () {
    const { width, height } = this.state
    const { data } = this.props

    const xMax = d3.max(data.map(d => d[0]))

    const xScale = d3.scaleLinear()
      .domain([0, xMax])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, height])

    return (
      <Chart data={data}>
        <LineData data={data} yScale={yScale} xScale={xScale} max={1} />
      </Chart>
    )
  }
}

LineChart.propTypes = {
  data: PropTypes.array.isRequired
}
