import React, { Component } from 'react';
import CommonTable from "./CommonTable";
import { request } from 'http';

class CommonTableExample extends Component {

    state = {
        currentPage: 1,
        pageSize: 10
    }

    requestApi = (selection: any, currentPage: any, pageSize: any) => {
        console.log("size", pageSize)
        //  request({ ...selection, currentPage: 1, pageSize: 10 })
    }
    changePage = (currentPage: any, pageSize: any) => {
        this.setState({
            currentPage,
            pageSize
        })
    }

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

        let { currentPage, pageSize } = this.state
        return (
            <div>
                <CommonTable
                    dataSource={dataSource}
                    columns={columns}
                    totalCount={2}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    selection={{}}
                    requestApi={this.requestApi}
                    changePage={this.changePage}
                />
            </div>
        );
    }
}

export default CommonTableExample;