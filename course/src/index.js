import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import 'semantic-ui-css/semantic.min.css';
import firebase from './Firebase'

class Root extends React.Component {
    conponentDidMoutn() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                
            }
        })
    }

    render() {
       return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </Router>
        )
    }
} 


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
