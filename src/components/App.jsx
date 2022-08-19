import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';


// stateless component
const App = () => {
    return(
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;