import React, { useState } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap"
import UploadElectives from "../../Functions/AddElectives"
import { CSVReader } from "react-papaparse"

const UploadModal = props => {
  const { buttonLabel, className } = props
  let fileInput = React.createRef()
  const [modal, setModal] = useState(false)
  const [file, setFile] = useState(false)

  const toggle = () => setModal(!modal)

  const handleReadCSV = data => {
    console.log("--------------------------------------------------")
    console.log(data)
    setFile(data)
    console.log("--------------------------------------------------")
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const onSubmit = e => {
    console.log(file)

    UploadElectives(file)
    e.preventDefault()
    toggle()
  }

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Upload Electives</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="Select Semester">Select Semester</Label>
              <Input type="select" name="Semester" id="Semester Select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
              <FormText color="muted">Enter any instructions.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="electivefile">File</Label>
              <CSVReader
                onFileLoaded={handleReadCSV}
                inputRef={fileInput}
                // style={{ display: "none" }}
                onError={handleOnError}
                configOptions={{ header: true }}
              />
              {/* <button onClick={handleImportOffer}>Upload</button> */}
              {/* <Input ref={fileInput} type="file" name="file" id="exampleFile" /> */}
              <FormText color="muted">Upload the electives file.</FormText>
            </FormGroup>
            <FormGroup tag="fieldset" name="Department">
              <legend>Select Department</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />
                  MECH
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />
                  CSE
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> CHEM
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> EEE
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> ECE
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default UploadModal
