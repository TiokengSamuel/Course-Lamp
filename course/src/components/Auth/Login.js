import React from 'react'
import firebase from '../../Firebase'
import {Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    state = {
        
        email: "",
        password: "",
        errors: [],
        loading: false
    }

    

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);


    handleChange =  event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit = event => {
        event.preventDefault();
        if(this.isFormValid()) {
        this.setState({ errors: [], loading: true})
        
        }
    }

    saveUser = createdUser => {
        return this.state.usersRef.child(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        })
    }


    handleInputError = (errors, inputName) => {
        return errors.some(error => 
                                
            error.message.toLowerCase().includes(inputName)
        ) 
            
            ? 'error'
            : ""
    }
    
    
    render() {

        const { 
            username, 
            email, 
            password, 
            passwordConfirmation, 
            errors,
            loading
        } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450}}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange"/>
                        Register for CourseLamp
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input 
                            fluid name="username" 
                            icon="user" 
                            iconPosition="left"
                            placeholder="Username" 
                            onChange={this.handleChange} 
                            type="text"
                            value={username}
                            className={this.handleInputError(errors, 'username')}
                            />


                            <Form.Input 
                            fluid name="email" 
                            icon="mail" 
                            iconPosition="left"
                            placeholder="Email Address" 
                            onChange={this.handleChange} 
                            type="email"
                            value={email}
                            className={this.handleInputError(errors, 'email')
                            }
                            />


                            <Form.Input fluid name="password"
                             icon="lock"
                             iconPosition="left"
                            placeholder="Password" 
                            onChange={this.handleChange} 
                            type="password"
                            value={password}
                            className={this.handleInputError(errors, 'password')}
                            />


                            <Form.Input 
                            fluid name="passwordConfirmation" 
                            icon="repeat" 
                            iconPosition="left"
                            placeholder="Password Confirmation" 
                            onChange={this.handleChange} 
                            type="password"
                            value={passwordConfirmation}
                            className={this.handleInputError(errors, 'password')}
                            />
                        

                            <Button disabled={loading} className={loading ? 'loading' : ''} color="orange" fluid size="large" onSubmit={this.handleSubmit}>
                                Submit
                            </Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Already a user? <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register
