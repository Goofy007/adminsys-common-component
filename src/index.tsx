import React from 'react'
import ReactDOM from 'react-dom'
import Buttonantd from "./Buttonantd";
import BasicSearch from "./BasicSearch"
import "./index.scss"

const App = () => {
  return (
    <div>
      <p>Hello world!</p>
      <Buttonantd />
      <BasicSearch />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
