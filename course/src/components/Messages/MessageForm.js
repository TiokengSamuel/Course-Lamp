import React, { Component } from 'react'
import { Segment, Button, Input } from 'semantic-ui-react'
import firebase from '../../Firebase'

export default class MessageForm extends Component {
    state = {
        message: '',
        channel: this.props.currentChannel,
        user: this.props.currentUser,
        laoding: false,
        errors: []
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    createMessage = () => {
        const message = {
            timestamp: firebase.dataase.ServerValue.TIMESTAMP,
            user: {
                id: this.state.user.uid,
                name: this.state.user.displayName,
                avatar: this.state.user.photoURL
            },
            content: this.state.message
        }

        return message
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
                .then(() => {
                    this.setState({ loading: false, message: '', errors: []})
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        errors: this.state.concat(err)
                    })
                })
        } else {
            this.state({
                errors: this.state.errors.concat({ message: 'Add a message' })
            })
        }
    }

    render() {
        const { errors } = this.state;
        return(
            <Segment className = "message__form">
                <Input
                fluid
                name=""
                onChange={this.handleChange}
                style={{ marginBottom: '0.7em'}}
                label={<Button icon={'add'} />}
                labelPosition="left"
                className={
                    errors.some(error => error.message.includes('message')) ? 'error' : ''
                }
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


