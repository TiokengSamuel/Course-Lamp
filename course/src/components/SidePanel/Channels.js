import React, { Component } from 'react'
import { Icon, Menu, Modal, Form, Input, Button } from 'semantic-ui-react'
import firebase from '../../Firebase';

export default class Channels extends Component {
    state = {
        channels: [],
        channelName: '',
        channelDetails: '',
        channelsRef: firebase.database().ref('channels'),
        modal: false
    }

    addChannel = () => {
        const { channelsRef } = this.state;
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            this.addChannel();
        }
    }

    handleChange = event => {
        this.setState ({[event.target.name]: event.target.value });
    }

    isFormValid = ({ channelName, channelDetails }) => channelName && channelDetails;

    openModal = () => this.setState({ modal: true});

    closeModal = () => this.setState({ modal: false});
    

    render() {
        const { channels, modal } = this.state;

        return (
            <React.Fragment>
            <Menu.Menu style={{ paddingBottom: '2em' }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange"/> CHANNELS
                    </span>{ " " }
                    ({ channels.length }) <Icon name="add" onClick={this.openModal}/>
                </Menu.Item>
            </Menu.Menu>
            
                {/* Add Channel */}
                <Modal basic open={modal} onClose = { this.closeModal } className = "modal">
                    <Modal.Header>Add a Channel</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <Input
                                fluid
                                label="Name of Channel"
                                name="channelName"
                                onChange={this.handleChange}
                                />
                                
                            </Form.Field>

                            <Form.Field>
                                <Input
                                fluid
                                label="About Channel"
                                name="channelDetails"
                                onChange={this.handleChange}
                                />
                                
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button color="green" inverted onClick={this.handleSubmit}>
                            <Icon name="checkmark" /> Add
                        </Button>
                        <Button color="red" inverted onClick = {this.closeModal}>
                            <Icon name="remove" /> Cancel
                        </Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}
