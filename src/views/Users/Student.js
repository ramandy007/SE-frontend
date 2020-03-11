import React from "react"
import {
  Card,
  Button,
  CardText,
  Row,
  Col,
  CardHeader,
  CardBody,
  Container,
  CardImg
} from "reactstrap"

const container_style = {
  margin: "5%"
}

const Student = props => {
  return (
    <Container style={container_style}>
      <Row className="justify-content-center">
        <Col md="4">
          <Card>
            <CardImg
              src="/home/darknorth/Software engineering/elective-management/assets/proof.jpeg"
              alt="Card image cap"
            ></CardImg>
          </Card>
        </Col>
        <Col md="6" className="text-center">
          <Card>
            <CardHeader tag="h4">Details :</CardHeader>
            <CardBody>
              <CardText>Name :placeholder</CardText>
              <CardText>Roll.No: placeholder</CardText>
              <CardText>Section:placeholder</CardText>
              <CardText>Semester:placeholder</CardText>
              <CardText>Department:placeholder</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="4" sm={{ size: 6, order: 2, offset: 1 }}>
          <Card>
            <CardHeader className="text-center" tag="h4">
              Selected Electives
            </CardHeader>
            <CardBody className="text-center">
              <CardText>electives list placeholder</CardText>
              <Button>Change electives</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" sm={{ size: 6, order: 2, offset: 1 }}>
          <Card>
            <CardHeader className="text-center" tag="h4">
              Electives deadline
            </CardHeader>

            <CardBody className="text-center">
              <CardText>Date placeholder.</CardText>
              <Button>Select Electives</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Student
