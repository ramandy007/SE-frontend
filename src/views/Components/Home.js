import React from "react"
import "./Home.css"
import { Col, Row } from "reactstrap"

var Home = () => {
  return (
    <div className="home">
      <div>
        <Row className="flex-div ">
          <Col className="title flex-div">
            <>EMS</>
          </Col>
          <Col className="instructions">
            <h1>Instructions</h1>
            <p>
              The View Electives tab will allow you to view all the available
              electives for the respective semester and department
            </p>
            <p>
              You will be allowed to choose any three electives as your top
              three preference
            </p>
            <p>You will be allowed to change preferences only one more time</p>
            <p>
              After a particular deadline, you will not be allowed to change
              your preference
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
