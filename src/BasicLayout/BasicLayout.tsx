import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio } from 'antd'
import NavLeft from "../NavLeft/NavLeft";
import BasicHeader from "../BasicHeader/index";
import "./BasicLayout.scss";

class BasicLayout extends React.Component<any, any> {

    render() {
        return (
            <div className="basic-layout">
                <div className="basic-layout-side"><NavLeft /></div>
                <div className="basic-layout-content">
                    <div className="basic-layout-header"><BasicHeader /></div>
                    <div className="basic-layout-mainContent">{this.props.children}</div>
                </div>
            </div>
        )
    }
}



export default BasicLayout;
