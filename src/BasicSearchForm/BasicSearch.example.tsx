import React, { Component } from 'react';
import BasicSearch from "./BasicSearch"

class BasicSearchExample extends Component {
    getDataList = (params: any) => {
        // TO DO...
        console.log("params", params)
    }

    onSearch = (values: any) => {
        this.getDataList(values)
    }
    render() {
        return (
            <div>
                <BasicSearch onSearch={this.onSearch} />
            </div>
        );
    }
}

export default BasicSearchExample;