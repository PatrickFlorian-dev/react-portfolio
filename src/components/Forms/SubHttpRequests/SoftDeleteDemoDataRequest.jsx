import React, { Component } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

class SoftDeleteDemoDataRequest extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Alert variant="info">
                    <Alert.Heading>Soft Delete Demo Data Method: (POST)</Alert.Heading>
                    <p>
                        Soft deletes a user (You are limited to 3 submissions daily by your IP in local storage, change this code to override)
                        *** V2 Replace this with code block snippet rendered on screen with Prism - https://prismjs.com/ ***
                    </p>
                </Alert>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="form-email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                            {errors.email && touched.email && errors.email}
                        </Form.Group>

                        <Form.Group controlId="form-password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter password" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>
                            <Form.Text className="text-muted">
                            Your password is safe with us.
                            </Form.Text>
                            {errors.password && touched.password && errors.password}
                        </Form.Group>

                        <button className="btn btn-primary btn-submit" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                        </Form>
                    )}
                </Formik>
            </React.Fragment>
         );
    }
}
 
export default SoftDeleteDemoDataRequest;
