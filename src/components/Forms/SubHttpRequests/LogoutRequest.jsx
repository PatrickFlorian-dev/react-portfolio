import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class LogoutRequest extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Alert variant="info">
                    <Alert.Heading>Logout Method: (POST)</Alert.Heading>
                    <p>
                        Click the button to logout
                    </p>
                </Alert>
                <Button variant="primary">Logout</Button>
            </React.Fragment>
         );
    }
}
 
export default LogoutRequest;