import React from 'react'
import ReactDOM from 'react-dom'

class YayItWorks extends React.Component {
  render() {
    return <span>Yay! It works!</span>
  }
}

const root = document.getElementById('root')

ReactDOM.render(<YayItWorks />, root)
