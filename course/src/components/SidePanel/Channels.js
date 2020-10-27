import React, { Component } from 'react'
import { Icon, Menu, Modal } from 'semantic-ui-react'

export default class Channels extends Component {
    state = {
        channels: [],
        modal: false
    }

    closeModal = () => this.setState({ modal: false});
    

    render() {
        const { channels, modal } = this.state;

        return (
            <div>
            <Menu.Menu style={{ paddingBottom: '2em' }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange"/> CHANNELS
                    </span>{ " " }
                    ({ channels.length }) <Icon name="add"/>
                </Menu.Item>
            </Menu.Menu>
            
                <Modal basic open={modal} onClose = { this.closeModal }>
                
                </Modal>
            
            </div>  
        )
    }
}
