import React, { useState } from "react";
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
} from "reactstrap";
let csvToJson = require("convert-csv-to-json");
const fs = require("fs");

const UploadModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(false);

  let fileReader;

  const handleFileChosen = file => {
    fileReader = new FileReader();
    fileReader.onloadend = write_to_file;
    fileReader.readAsText(file);
  };

  const toggle = () => setModal(!modal);

  const write_to_file = () => {
    fs.writeFileSync("./uploaded_CSV.csv", "hello hahah");
  };

  let onChangeHandler = event => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    handleFileChosen(event.target.files[0]);
  };

  let convertJson = () => {
    let csv_text = fileReader.result;
    console.log(csv_text);
    console.log(file.name);
    let json = csvToJson.fieldDelimiter(",").getJsonFromCsv(file);
    return json;
  };

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Upload Electives</ModalHeader>
        <ModalBody>
          <Form>
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
              <Input
                type="file"
                name="file"
                id="exampleFile"
                webkitdirectory
                directory
                multiple
                onChange={onChangeHandler}
              />
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
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UploadModal;
