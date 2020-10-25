import React, { Component } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

export default class UserPanel extends Component {
    render() {
        return (
            <Grid style = {{ background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '0.5em', margin:0 }}>
                        <Header inverted floated="left" as="h2">
                            <Icon name="lightbulb outline"/>
                            <Header.Content>Course Lamp</Header.Content>
                        </Header>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}
