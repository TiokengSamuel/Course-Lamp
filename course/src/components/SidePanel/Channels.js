import React, { Component } from 'react'
import { Icon, Menu, Modal, Form, Input } from 'semantic-ui-react'

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
            
                // Add Channel
                <Modal basic open={modal} onClose = { this.closeModal }>
                    <Modal.Header>Add a Channel</Modal.Header>
                    <Modal.Content>
                        
                    </Modal.Content>
                </Modal>
            
            </div>  
        )
    }
}
