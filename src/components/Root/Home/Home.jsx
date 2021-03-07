import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import DynamicHttpForm from '../../Forms/DynamicHttpForm';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Container fluid>
                <DynamicHttpForm/>
            </Container>
        );
    }
}
 
export default Home;