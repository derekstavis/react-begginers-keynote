import React from 'react'
import ReactDOM from 'react-dom'

class YayItWorks extends React.Component {
  handleButton() {
    alert('Yay! It works!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButton.bind(this)}>
          Click Me!
        </button>
      </div>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<YayItWorks />, root)
