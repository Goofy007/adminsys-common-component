import React, { Component } from 'react';
import BasicSearch from "./BasicSearch"

const data = [
    {
        type: "text",
        name: "姓名",
        width: 150,
        initialValue: ""
    },
    {
        type: "select",
        name: "城市",
        width: 100,
        initialValue: 0,
        selectList: [{key: "全部", value: 0},{ key: "北京", value: 1 }, { key: "上海", value: 2 }]
    }
]

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
                <BasicSearch onSearch={this.onSearch} data={data} />
            </div>
        );
    }
}

export default BasicSearchExample;