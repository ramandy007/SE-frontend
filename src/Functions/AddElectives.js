import axios from "axios"
import { Alert } from "reactstrap"

export const UploadElectives = data => {
  return axios
    .post("/addElectives", {
      data: data
    })
    .then(res => {
      Alert("uploaded sucessfully")
      console.log("uploaded sucessfully")
    })
}
export const SendSelectedElectives = (data, setmsg) => {
  return axios.post("/chooseElectivePreference", data).then(res => {
    if (res.data === true) setmsg("Preference submitted Successfully")
    else if (res.data === false) {
      setmsg("Failed to submit preferences")
    }
  })
}

export const SendChangedElectives = (data, setmsg) => {
  return axios.post("/changeElectivePreference", data).then(res => {
    if (res.data === true) setmsg("Preference submitted Successfully")
    else if (res.data === false) {
      setmsg("Failed to submit preferences")
    }
  })
}

export const UploadElectivesSingle = data => {
  return axios.post("/addOneElective", { ...data }).then(res => {
    Alert("uploaded sucessfully")
    console.log("uploaded sucessfully")
  })
}

export const GetElectives = (dept, sem, setElectiveList) => {
  return axios
    .post("/student/viewElectives", {
      department: dept,
      sem: sem
    })
    .then(res => {
      setElectiveList(res.data)
      console.log(res)
    })
}

// module.exports = { UploadElectives, UploadElectivesSingle }
