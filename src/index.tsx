import React from 'react';
import ReactDOM from 'react-dom';
import BasicSearchExample from "./BasicSearchForm/BasicSearch.example";
import BasicLayout from "./BasicLayout/BasicLayout";
import CommonTableExample from "./CommonTable/CommonTable.example";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";

const App = () => {

  const handleSearch = (values: any) => {
    console.log("values", values)
    // getData(values)
  };

  const handleReset = () => {
    // getData()
  };
  return (
    <Router>
      <BasicLayout>
        <Route path="/basic/component/searchform" component={BasicSearchExample} />
        <Route path="/common/component/commonTable" component={CommonTableExample} />
      </BasicLayout>
    </Router>
  )
  return (
    <div>
      <p>Hello world!</p>
      <div>
        <h3>搜索框：</h3>
        <BasicSearchExample />
      </div>
      <BasicLayout>content</BasicLayout>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
