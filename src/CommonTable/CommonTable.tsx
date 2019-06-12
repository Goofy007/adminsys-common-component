import * as React from "react";
import { Table } from "antd";

function pagination(data: any, changePage?: any, changeSize?: any) {
    return {
        onChange: (current: any) => {
            changePage(current);
        },
        current: data.current,
        pageSize: data.pageSize,
        total: data.totalCount ? data.totalCount : null,
        showQuickJumper: true,
        showSizeChanger: true,
        onShowSizeChange: (currentPage: any, size: any) => {
            changeSize(size);
        },
        pageSizeOptions: ["5", "10", "20"]
    };
}

class ETable extends React.Component<any, any> {
    // state = {
    //     currentPage: this.props.currentPage,
    //     pageSize: this.props.pageSize
    // }

    render() {
        let { currentPage, pageSize } = this.props
        let { selection, totalCount } = this.props

        let data = {
            totalCount: totalCount,
            current: currentPage,
            pageSize: pageSize
        };

        let changePage = (current: any) => {
            // this.setState({
            //     currentPage: current
            // })
            this.props.changePage(current, this.props.pageSize)
            this.props.requestApi(selection, current, pageSize)
        }

        let changeSize = (size: any) => {
            // this.setState({
            //     pageSize: size,
            //     currentPage: 1
            // });
            this.props.changePage(this.props.currentPage, size)
            this.props.requestApi(selection, currentPage, size)
        };
        let currentPagination = pagination(
            data,
            changePage,
            changeSize
        );
        return (
            <div>
                <Table
                    columns={this.props.columns}
                    dataSource={this.props.dataSource}
                    rowKey="id"
                    pagination={currentPagination}
                />
            </div>
        )
    }
}

export default ETable;