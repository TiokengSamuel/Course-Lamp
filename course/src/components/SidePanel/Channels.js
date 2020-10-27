import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class Channels extends Component {
    state = {
        channels: []
    }
    

    render() {
        const { channels } = this.state;

        return (
            <Menu.menu>
                <Menu.Item>
                    <span>
                        <Icon name="exchange"/> CHANNELS
                    </span>{ " " }
                    ({ channels.length }) <Icon name="add"/>
                </Menu.Item>
            </Menu.menu>
        )
    }
}
