import axios from "axios";
import { Alert } from "reactstrap";

const UploadElectives = data => {
  return axios
    .post("/addElectives", {
      data: data
    })
    .then(res => {
      Alert("uploaded sucessfully");
      console.log("uploaded sucessfully");
    });
};
export default UploadElectives;
