import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class Channel extends Component {
    render() {
        return (
            <Menu.menu>
                <Menu.Item>
                    <span>
                        <Icon name="exchange"/> CHANNELS
                    </span>
                </Menu.Item>
            </Menu.menu>
        )
    }
}
