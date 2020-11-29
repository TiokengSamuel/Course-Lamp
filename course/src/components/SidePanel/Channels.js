import React, { Component } from 'react'
import { Icon, Menu, Modal, Form, Input, Button } from 'semantic-ui-react'

export default class Channels extends Component {
    state = {
        channels: [],
        channelName: '',
        channelDetails: '',
        modal: false
    }

    handleChange = event => {
        this.setState ({[event.target.name]: event.target.value });
    }

    closeModal = () => this.setState({ modal: false});
    

    render() {
        const { channels, modal } = this.state;

        return (
            <React.Fragment>
            <div>
            <Menu.Menu style={{ paddingBottom: '2em' }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange"/> CHANNELS
                    </span>{ " " }
                    ({ channels.length }) <Icon name="add" onClick={this.openModal}/>
                </Menu.Item>
            </Menu.Menu>
            
                {/* Add Channel */}
                <Modal basic open={modal} onClose = { this.closeModal }>
                    <Modal.Header>Add a Channel</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <Input
                                fluid
                                labael="Name of Channel"
                                name="ChannelName"
                                onChange={this.handleChange}
                                >
                                </Input>
                            </Form.Field>

                            <Form.Field>
                                <Input
                                fluid
                                labael="About Channel"
                                name="ChannelDeatails"
                                onChange={this.handleChange}
                                >
                                </Input>
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button color="green" inverted>
                            <Icon name="checkmark" /> Add
                        </Button>
                        <Button color="red" inverted>
                            <Icon name="remove" /> Cancel
                        </Button>
                    </Modal.Actions>
                </Modal>
            
            </div>  
            </React.Fragment>
        )
    }
}
