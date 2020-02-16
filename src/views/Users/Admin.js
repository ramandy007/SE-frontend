import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardHeader,
  CardBody,
  Container,
  CardImg
} from "reactstrap";

const container_style = {
  margin: "5%"
};

const Admin = props => {
  return (
    <Container style={container_style}>
      <Row className="justify-content-center">
        <Col md="4" sm={{ size: 6, order: 2, offset: 1 }}>
          <Card>
            <CardHeader className="text-center" tag="h4">
              Upload elective lists
            </CardHeader>
            <CardBody className="text-center">
              <CardText>electives list placeholder</CardText>
              <Button>Upload electives</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" sm={{ size: 6, order: 2, offset: 1 }}>
          <Card>
            <CardHeader className="text-center" tag="h4">
              Register Users
            </CardHeader>

            <CardBody className="text-center">
              <Button>Register Students</Button>
            </CardBody>
            <CardBody className="text-center">
              <Button>Register Teachers</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;