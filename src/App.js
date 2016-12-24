import React, { Component } from 'react'
import './App.css'
import LineChart from './Components/LineChart/line-chart.js'
import BarChart from './Components/BarChart/bar-chart.js'

const randomizeData = () => {
  const d = []

  for (var i = 25; i >= 0; i--) {
    d.push([i, Math.floor(Math.random() * 100) / 100])
  }

  return d
}

class App extends Component {
  constructor () {
    super()

    this.state = {
      data: randomizeData()
    }
    this.newData = this.newData.bind(this)
    // setInterval(this.newData, 500)
  }

  newData () {
    this.setState({ data: randomizeData() })
  }

  render () {
    return (
      <div className='App'>
        <button onClick={this.newData}>New Data</button>
        <LineChart data={this.state.data} />
        <BarChart data={this.state.data} />
      </div>
    )
  }
}

export default App
