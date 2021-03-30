import React, { Component } from 'react'
import { Segment, Button, Input } from 'semantic-ui-react'
import firebase from '../../Firebase'

export default class MessageForm extends Component {
    state = {
        message: '',
        channel: this.props.currentChannel,
        user: this.props.currentUser,
        laoding: false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    createMessage = () => {
        const message = {
            timestamp: firebase.dataase.ServerValue.TIMESTAMP,
            content: this.state.message
        }
    }

    sendMessage = () => {
        const { messagesRef } = this.props;
        const { message, channel } = this.state;

        if (message) {
            this.setState({ loading: true});
            messagesRef
                .child(channel.id)
                .push()
                .set(this.createMessage())
        }
    }

    render() {
        return(
            <Segment className = "message__form">
                <Input
                fluid
                name=""
                onChange={this.handleChange}
                style={{ marginBottom: '0.7em'}}
                label={<Button icon={'add'} />}
                labelPosition="left"
                placeholder="Write your message"
                />

                <Button.Group icon widths="2">
                    <Button
                    onClick={this.sendMessage}
                      color="orange"
                      content="Add Reply"
                      labelPosition="left"
                      icon="edit"
                    />
                    <Button
                        color="teal"
                        content="Upload Media"
                        labelPosition="right"
                        icon="cloud upload"
                    />
                </Button.Group>

            </Segment>
        )
    }
}


