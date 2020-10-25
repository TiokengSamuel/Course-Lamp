import React, { Component } from 'react'
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react'

export default class UserPanel extends Component {
    dropdownOptions = () => [
        {
            text: <span>Signed in as <strong>User</strong></span>,
            disabled: true
        },
        {
            text: <span>Change Avatar</span>
        },
        {
            text: <span>Sign Out</span>
        }
    ]

    render() {
        return (
            <Grid style = {{ background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '0.7em', margin:0 }}>
                        <Header inverted floated="left" as="h2">
                            <Icon name="lightbulb outline"/>
                            <Header.Content>CourseLamp</Header.Content>
                        </Header>
                    </Grid.Row>

                    <Header style={{ padding: '0.25em' }} as="h4" inverted>
                        <Dropdown trigger={
                            <span>User</span>
                        } options={this.dropdownOptions()}/>
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}
