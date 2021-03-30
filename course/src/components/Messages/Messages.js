import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react' 
import MessageForm from './MessageForm'
import MessagesHeader from './MessagesHeader'
import firebase from '../../Firebase'

export default class Messages extends Component {
   state = {
       messagesRef: firebase.database().ref('messages'),
       channel: this.props.currentChannel
   } 
    
    render() {
        const { messagesRef, channel } = this.state;


        return (
            <React.Fragment>
                <MessagesHeader/>

                <Segment>
                    <Comment.Group className="messages">

                    </Comment.Group>
                </Segment>

                <MessageForm
                 messagesRef={messagesRef}
                 currentChannel={channel}
                />
            </React.Fragment>
        )
    }
}
