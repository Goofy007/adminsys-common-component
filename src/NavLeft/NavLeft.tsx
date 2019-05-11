import React from 'react'
import { Menu } from 'antd'
import menuList from "../config/menuData"
import { Link } from "react-router-dom";


const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component<any, any> {
    renderMenu = (menuData: any) => {
        return menuData.map((item: any) => {
            if (item.children) {
                return <SubMenu key={item.key} title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            } else {
                return (
                    <Menu.Item
                        key={item.key} 
                    >
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }
        })
    }

    render() {
        return (
            <Menu theme="dark">
                {this.renderMenu(menuList)}
            </Menu>
        )
    }
}



export default NavLeft;