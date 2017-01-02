import React, { Component } from 'react'
import '../Components/Chart/chart.css'
import * as d3 from 'd3'
import XAxis from '../Components/XAxis/x-axis.js'
import YAxis from '../Components/YAxis/y-axis.js'

export default function ChartHOC (WrappedComponent) {
  return class Chart extends Component {
    constructor () {
      super()

      this.state = {
        width: document.body.getBoundingClientRect().width,
        height: 300
      }

      this.padding = 50

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
        <svg viewBox={`-${this.padding} -${this.padding} ${width + this.padding * 2} ${height + this.padding * 2}`}>
          <XAxis data={data.map(p => p[0])} scale={xScale} yPos={yScale(1)} />
          <YAxis ticks={5} scale={yScale} xPos={0} width={width} />
          <WrappedComponent
            xScale={xScale}
            yScale={yScale}
            max={1}
            {...this.props}
          />
        </svg>
      )
    }
  }
}
