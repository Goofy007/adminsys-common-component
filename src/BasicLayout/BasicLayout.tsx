import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio } from 'antd'
import NavLeft from "../NavLeft/NavLeft";
import BasicHeader from "../BasicHeader/index"

class BasicLayout extends React.Component<any, any> {

    render() {
        return (
            <div style={{ display: "flex" }}>
                <div style={{width: "10%"}}><NavLeft /></div>
                <div>
                    <BasicHeader />
                    {this.props.children}
                </div>
            </div>
        )
    }
}



export default BasicLayout;
