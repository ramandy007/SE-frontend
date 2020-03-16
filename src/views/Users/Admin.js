import React, { useState } from "react"
import {
  Card,
  Button,
  CardText,
  Row,
  Col,
  CardHeader,
  CardBody,
  Container,
  InputGroup,
  InputGroupText,
  Input
} from "reactstrap"
import { Link } from "react-router-dom"
import UploadModal from "../Components/Modals"
import Axios from "axios"

const container_style = {
  margin: "5%"
}

const allotment = () => {
  return Axios.post("", {}).then(res => {
    console.log(res)
    alert(res.data)
  })
}

const email_report = mail => {
  console.log(mail)
  return Axios.get("/generatePDF", { tomail: mail }).then(res => {
    console.log(res)
    alert(res.data)
  })
}

const Admin = props => {
  const [email, setEmail] = useState(null)
  return (
    <Container style={container_style}>
      {" "}
      <Row className="justify-content-center">
        <Col md="4" sm={{ size: 6, order: 2, offset: 1 }}>
          <Card>
            <CardHeader className="text-center" tag="h4">
              Upload elective lists
            </CardHeader>
            <CardBody className="text-center">
              <CardText>electives list placeholder</CardText>
              <UploadModal buttonLabel="upload electives list " />
            </CardBody>
          </Card>
        </Col>
        <Col md="4" sm={{ size: 6, order: 2, offset: 1 }}>
          <Card>
            <CardHeader className="text-center" tag="h4">
              Register Users
            </CardHeader>

            <CardBody className="text-center">
              <Link to={"/register"}>
                <Button>Register Students </Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Button onClick={allotment}>Run Allotment</Button>
            </CardBody>
            <CardBody className="text-center">
              <InputGroup>
                <InputGroupText>Enter your email. </InputGroupText>

                <Input
                  type="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                ></Input>
              </InputGroup>
              <Button onClick={() => email_report(email)}>
                Generate Report
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Admin
