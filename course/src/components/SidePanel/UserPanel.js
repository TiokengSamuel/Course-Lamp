import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

export default class UserPanel extends Component {
    render() {
        return (
            <Grid style = {{ background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2em', margin:0 }}>
                        <Header>
                            <Header.Content>Course Lamp</Header.Content>
                        </Header>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}
