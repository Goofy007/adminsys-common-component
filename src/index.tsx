import React from 'react'
import ReactDOM from 'react-dom'
import BasicSearchExample from "./BasicSearchForm/BasicSearch.example"
import "./index.scss"

const App = () => {

  const handleSearch = (values: any) => {
    console.log("values", values)
    // getData(values)
  }

  const handleReset = () => {
    // getData()
  }
  return (
    <div>
      <p>Hello world!</p>
      <div>
          <h3>搜索框：</h3>
          <BasicSearchExample />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
