import React from 'react'
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';

class Register extends React.Component {
    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450}}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon/>
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register
