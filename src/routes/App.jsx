import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';


// stateless component
const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <LayOut>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="recovery-password" component={RecoveryPassword} />
                    <Route component={NotFound} />
                </LayOut>
            </Switch>  
        </BrowserRouter>
    );
}

export default App;