import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
  	return(
  		<Form horizontal>
    		<FormGroup controlId="formHorizontalName">
      			<Col componentClass={ControlLabel} sm={2}>
        			Name
      			</Col>
      			<Col sm={10}>
        			<FormControl type="name" placeholder="Name" />
      			</Col>
    		</FormGroup>

        <FormGroup controlId="formHorizontalNumber">
            <Col componentClass={ControlLabel} sm={2}>
              Number
            </Col>
            <Col sm={10}>
              <FormControl type="number" placeholder="Number" />
            </Col>
        </FormGroup>

    		<FormGroup controlId="formHorizontalEmail">
      			<Col componentClass={ControlLabel} sm={2}>
        			Email
      			</Col>
      			<Col sm={10}>
        			<FormControl type="email" placeholder="Email" />
      			</Col>
    		</FormGroup>

    		<FormGroup>
      			<Col smOffset={2} sm={10}>
        			<Button type="submit">
          				Submit
        			</Button>
      			</Col>
    		</FormGroup>
  		</Form>
  	);
  }
}

export default Contact;