import React from 'react'
import ReactDOM from 'react-dom'
import Buttonantd from "./Buttonantd";
import BasicSearch from "./BasicSearch"
import "./index.scss"

const App = () => {
  const handleSearch = (values: any) => {
    console.log("values", values)
  }

  const handleReset = () => {

  }
  return (
    <div>
      <p>Hello world!</p>
      <Buttonantd />
      <BasicSearch onSearch={handleSearch} onReset={handleReset} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
