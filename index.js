import React from 'react'
import ReactDOM from 'react-dom'

class YayItWorks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  handleButton() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h1>A counter example</h1>
        <div>Current value is {this.state.counter}</div>
        <button onClick={this.handleButton.bind(this)}>
          Increase
        </button>
      </div>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<YayItWorks />, root)
