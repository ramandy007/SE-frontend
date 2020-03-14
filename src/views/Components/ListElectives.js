import React, { useState, useEffect } from "react"
import { GetElectives } from "../../Functions/AddElectives"
import { Table } from "reactstrap"

const ListElectives = props => {
  const [electiveList, setElectiveList] = useState(null)
  useEffect(() => {
    GetElectives(
      props.studata.rollno.match(/\D\D\D/g)[0].toUpperCase(),
      props.studata.semester,
      setElectiveList
    )
  }, [props.studata.rollno, props.studata.semester, setElectiveList])

  const renderTableData = () => {
    return electiveList.map((tuple, index) => {
      //     const { user_name, user_address, user_id, licence_no, user_permission, user_mobile } = tuple;

      return (
        <tr>
          <td>{tuple.course_code}</td>
          <td>{tuple.course_name}</td>
        </tr>
      )
    })
  }
  return (
    <div>
      <Table striped bordered hover className="table-striped table-light">
        <thead>
          <tr>Preference 1</tr>
          <tr>
            <th>course_code </th>
            <th>course </th>
          </tr>
        </thead>
        {electiveList ? (
          <tbody>{renderTableData()}</tbody>
        ) : (
          <h1> fetching please wait.....</h1>
        )}
      </Table>
      <Table striped bordered hover className="table-striped table-light">
        <thead>
          <tr>Preference 2</tr>
          <tr>
            <th>course_code </th>
            <th>course </th>
          </tr>
        </thead>
        {electiveList ? (
          <tbody>{renderTableData()}</tbody>
        ) : (
          <h1> fetching please wait.....</h1>
        )}
      </Table>
      <Table striped bordered hover className="table-striped table-light">
        <thead>
          <tr>Preference 3</tr>
          <tr>
            <th>course_code </th>
            <th>course </th>
          </tr>
        </thead>
        {electiveList ? (
          <tbody>{renderTableData()}</tbody>
        ) : (
          <h1> fetching please wait.....</h1>
        )}
      </Table>
    </div>
  )
}

export default ListElectives
