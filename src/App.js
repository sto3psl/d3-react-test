import React, { Component } from 'react'
import './App.css'
import LineChart from './Components/LineChart/line-chart.js'
import BarChart from './Components/BarChart/bar-chart.js'

const randomizeData = () => {
  const d = []

  for (var i = 25; i >= 0; i--) {
    d.push([
      i,
      Math.floor(Math.random() * 100) / 100,
      {
        highlight: false
      }
    ])
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
    this.onHighlightClick = this.onHighlightClick.bind(this)
    // setInterval(this.newData, 500)
    console.log(this.state.data)
  }

  onHighlightClick (i) {
    let data = this.state.data
    console.log(data[i])
    data[i][2].highlight = !data[i][2].highlight
    this.setState({ data: data })
  }

  newData () {
    this.setState({ data: randomizeData() })
  }

  render () {
    return (
      <div className='App'>
        <button onClick={this.newData}>New Data</button>
        <LineChart data={this.state.data} onHighlightClick={this.onHighlightClick} />
        <BarChart data={this.state.data} onHighlightClick={this.onHighlightClick} />
      </div>
    )
  }
}

export default App
