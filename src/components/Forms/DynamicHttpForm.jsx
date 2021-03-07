import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import BackendsObj from '../JsonObjects/BackendsObj';

import LoginRequest from '../Forms/SubHttpRequests/LoginRequest';
import LogoutRequest from '../Forms/SubHttpRequests/LogoutRequest';
import GetUserRequest from '../Forms/SubHttpRequests/GetUserRequest';
import GetAllDemoDataRequest from '../Forms/SubHttpRequests/GetAllDemoDataRequest';
import PostNewDemoDataRequest from '../Forms/SubHttpRequests/PostNewDemoDataRequest';
import UpdateDemoDataRequest from '../Forms/SubHttpRequests/UpdateDemoDataRequest';
import SoftDeleteDemoDataRequest from '../Forms/SubHttpRequests/SoftDeleteDemoDataRequest';

class DynamicHttpForm extends Component {

    state = { 
        curBackend: '1',
        curHttpMethod: '1',
     }

    constructor(props) {
        super(props);
        this.selectRef = React.createRef();
    }

    render() { 

        return ( 
            <React.Fragment>
                <Row>
                    <Col md={12}>
                        <h1 className="text-center">Dynamic Http Form</h1> 
                    </Col>
                    <Col md={{ span: 6, offset: 3 }} sm={12}>
                        <Form>

                            <Form.Group controlId="dynamicHttpForm.BackendSelect">
                                <Form.Label>Select Backend</Form.Label>
                                { this.renderBackendSelectOptions() }
                            </Form.Group>

                            <Form.Group controlId="dynamicHttpForm.MethodSelect">
                                <Form.Label>Select HTTP Method</Form.Label>
                                { this.renderMethodSelectOptions() }
                            </Form.Group>

                        </Form>
                    </Col>

                    <Col md={{ span: 6, offset: 3 }} sm={12}>
                        { this.handleHomePageRendering() }    
                    </Col>

                </Row>
            </React.Fragment>
         );
    }

    handleHomePageRendering() {

        const { curBackend , curHttpMethod } = this.state;

        switch(this.state.curHttpMethod) {
            case '1':
              return <LoginRequest curBackend={curBackend} curHttpMethod={curHttpMethod}/>;
            case '2':
                return <LogoutRequest curBackend={curBackend} curHttpMethod={curHttpMethod}/>;
            case '3':
                return <GetUserRequest curBackend={curBackend} curHttpMethod={curHttpMethod}/>;
            case '4':
                return <GetAllDemoDataRequest curBackend={curBackend} curHttpMethod={curHttpMethod}/>;
            case '5':
                return <PostNewDemoDataRequest curBackend={curBackend} curHttpMethod={curHttpMethod}/>;
            case '6':
                return <UpdateDemoDataRequest curBackend={curBackend} curHttpMethod={curHttpMethod}/>;
            case '7':
                return <SoftDeleteDemoDataRequest curBackend={curBackend} curHttpMethod={curHttpMethod}/>;
            default:
              return <h1>Component not found, please check code</h1>;
        }

    }

    // Change the backend dropdowns and compoenents based on selection
    handleBackendSelect(event) {
        event.preventDefault();
        const selectedBackend = event.target.value;
        this.setState({ curBackend: selectedBackend });
    }

     // Change the method dropdowns and compoenents based on selection
     handleMethodSelect(event) {
        event.preventDefault();
        const selectedMethod = event.target.value;
        this.setState({ curHttpMethod: selectedMethod });
    }

    // Change the method options based on selection of backend
    renderMethodSelectOptions() {

        const httpMethodsFilter = BackendsObj.backends.filter((backend) => backend.id === Number(this.state.curBackend) )
        const httpMethods = httpMethodsFilter[0].httpMethods;

        if ( httpMethods.length === 0) return <p>No backend methods, please check API</p>;

        return (
            <Form.Control as="select" onChange={this.handleMethodSelect.bind(this)}>
                { httpMethods.map(httpMethod => <option key={httpMethod.id} value={httpMethod.id}>Backend: { httpMethod.name }</option>) }
            </Form.Control>
        )

    }

    // Render select options for backend from an imported object
    renderBackendSelectOptions() {

        if ( BackendsObj.length === 0) return <p>No backends, please check API</p>;

        return ( 
            <Form.Control as="select" onChange={this.handleBackendSelect.bind(this)}>
                { BackendsObj.backends.map(backend => 
                <option key={backend.id} value={backend.id}>Backend: { backend.title }</option>
                ) }
            </Form.Control>
        )
        
    }

}

export default DynamicHttpForm;