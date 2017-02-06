import React from 'react'
import { render } from 'react-dom'

class MainApp extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>It's Working!</h1>
        <p>And it's awesome!!!</p>
      </div>
    )
  }
}

render(<MainApp />, document.getElementById('app'))
