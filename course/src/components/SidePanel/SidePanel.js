import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class SidePanel extends Component {
    render() {
        return (
            <Menu
                size="large"
                inverted
                fixed="left"
                vertical
                style={{ background}}
            >

            </Menu>
        )
    }
}
