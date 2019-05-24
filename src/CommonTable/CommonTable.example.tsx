import React, { Component } from 'react';
import CommonTable from "./CommonTable";

class CommonTableExample extends Component {

    render() {
        let columns: any = [
            {
                title: 'ID',
                dataIndex: 'id',
                width: 100,
                key: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                width: 100,
                key: 'name'
            }
        ]

        let dataSource = [
            {
                id: '1',
                name: 'Goofy'
            },
            {
                id: '2',
                name: 'Goofy023'
            }
        ]
        return (
            <div>
                <CommonTable dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default CommonTableExample;