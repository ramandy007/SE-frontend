import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create student account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        
                          {/* <i className="icon-user"></i> */}
                          <InputGroupText>Name</InputGroupText>
                       
                      </InputGroupAddon>
                      <Input type="text" placeholder="Student Name" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Reg.No</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Registration Number" autoComplete="Registration Number" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          {/* <i className="icon-"></i> */}
                          Password
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                  
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        Section
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Text" placeholder="Section" autoComplete="section" maxLength="1" />
                    </InputGroup>
                    
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        Semester
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Number" placeholder="Semester" autoComplete="Semester" maxLength="1"  min="1" max="8"/>
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
