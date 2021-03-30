import React from 'react';
import { Header, Segment, Input, Icon} from 'semantic-ui-react'


class MessagesHeader extends React.component {
    render() {
        return(
            <Segment clearing>
                <Header fluid = "true" as="h2" floated="left" style={{ marginBottom: 0 }}>
                    <span>
                    Channel
                    <Icon name={"star outline"} color="black"/>
                </Header>
            </Segment>
        )
    }
}

export default MessagesHeader;