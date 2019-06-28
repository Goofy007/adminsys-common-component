import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import "./index.scss"

class BasicHeader extends Component {
    render() {
        return (
            <div className="header">
                <Menu mode="horizontal">
                    <Menu.Item key="mail">
                        <Icon type="mail" />
                        消息中心
                </Menu.Item>
                    <Menu.Item key="user">
                        <Icon type="user" />
                        个人中心
                </Menu.Item>
                    <Menu.Item key="login">
                        <Icon type="login" />

                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default BasicHeader;