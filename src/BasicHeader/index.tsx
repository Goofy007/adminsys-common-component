import React, { Component } from 'react';
import { Row,Col } from 'antd';

class BasicHeader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <span>欢迎，Admin</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>面包屑</Col>
                </Row>
            </div>
        );
    }
}

export default BasicHeader;