import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class GetUserRequest extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Alert variant="info">
                    <Alert.Heading>Get user Method: (POST)</Alert.Heading>
                    <p>
                        Click the button to get your user info (Assuming you logged in)
                    </p>
                </Alert>
                <Button variant="primary">Get Current Logged In User Data (Probably you)</Button>
            </React.Fragment>
         );
    }
}
 
export default GetUserRequest;