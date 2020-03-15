import React, { useState, useEffect } from "react"
import { GetElectives } from "../../Functions/AddElectives"
import { Table, FormGroup, Input, Label } from "reactstrap"

const ListElectives = props => {
  const [pref1, setpref1] = useState(null)
  const [pref2, setpref2] = useState(null)
  const [pref3, setpref3] = useState(null)
  const [electiveList, setElectiveList] = useState(null)
  useEffect(() => {
    GetElectives(
      props.studata.rollno.match(/\D\D\D/g)[0].toUpperCase(),
      props.studata.semester,
      setElectiveList
    )
  }, [props.studata.rollno, props.studata.semester, setElectiveList])

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
      //     const { user_name, user_address, user_id, licence_no, user_permission, user_mobile } = tuple;

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
    </div>
  )
}

export default ListElectives
