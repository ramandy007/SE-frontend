import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {
  GetElectives,
  SendChangedElectives
} from "../../Functions/AddElectives"
import {
  Table,
  FormGroup,
  Input,
  Label,
  Button,
  PopoverBody,
  UncontrolledPopover
} from "reactstrap"

const ChangeElectives = props => {
  const [pref1, setpref1] = useState(false)
  const [pref2, setpref2] = useState(false)
  const [pref3, setpref3] = useState(false)
  const [electiveList, setElectiveList] = useState(null)
  const [msg, setmsg] = useState(null)
  let history = useHistory()

  useEffect(() => {
    GetElectives(
      props.studata.rollno.match(/\D\D\D/g)[0].toUpperCase(),
      props.studata.semester,
      setElectiveList
    )
  }, [props.studata.rollno, props.studata.semester, setElectiveList])

  const transferData = () => {
    SendChangedElectives(
      {
        rollno: props.studata.rollno,
        elec1: pref1,
        elec2: pref2,
        elec3: pref3
      },
      setmsg
    )
  }

  const valid_data = () => {
    if (pref1 !== false && pref2 !== false && pref3 !== false) return false
    else return true
  }

  const renderTableData = num => {
    const setpref = e => {
      if (e.target.name === "radio1") {
        setpref1(e.target.value)
      } else if (e.target.name === "radio2") {
        setpref2(e.target.value)
      } else if (e.target.name === "radio3") {
        setpref3(e.target.value)
      }
    }
    return electiveList.map((tuple, index) => {
      return (
        <tr>
          <FormGroup check>
            <Label check>
              <td>
                <Input
                  type="radio"
                  name={"radio" + num}
                  value={tuple.course_code}
                  onClick={setpref}
                />
                {tuple.course_code}
              </td>
            </Label>
          </FormGroup>

          <td name={"course_name" + num}>{tuple.course_name}</td>
        </tr>
      )
    })
  }
  return (
    <div className="selection-table" style={{ width: "70%" }}>
      <Table
        striped
        bordered
        hover
        className="table-striped table-light"
        size="sm"
      >
        <thead>
          <tr>
            <th>Preference 1</th>
          </tr>
          <tr>
            <th>course_code </th>
            <th>course </th>
          </tr>
        </thead>
        {electiveList ? (
          <tbody>{renderTableData(1)}</tbody>
        ) : (
          <h1> fetching please wait.....</h1>
        )}
      </Table>
      <Table striped bordered hover className="table-striped table-light">
        <thead>
          <tr>
            <th>Preference 2</th>
          </tr>
          <tr>
            <th>course_code </th>
            <th>course </th>
          </tr>
        </thead>
        {electiveList ? (
          <tbody>{renderTableData(2)}</tbody>
        ) : (
          <h1> fetching please wait.....</h1>
        )}
      </Table>
      <Table striped bordered hover className="table-striped table-light">
        <thead>
          <tr>
            <th>Preference 3</th>
          </tr>
          <tr>
            <th>course_code </th>
            <th>course </th>
          </tr>
        </thead>
        {electiveList ? (
          <tbody>{renderTableData(3)}</tbody>
        ) : (
          <h1> fetching please wait.....</h1>
        )}
      </Table>
      <Button onClick={transferData} disabled={valid_data()} id="PopoverFocus">
        Submit
      </Button>
      <UncontrolledPopover
        trigger="focus"
        placement="bottom"
        target="PopoverFocus"
      >
        <PopoverBody>{msg}</PopoverBody>
      </UncontrolledPopover>
      <Button onClick={() => history.goBack()}> back</Button>
    </div>
  )
}

export default ChangeElectives
