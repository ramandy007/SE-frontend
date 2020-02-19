import axios from "axios";

const register = newUser => {
  return axios
    .post("/Register", {
      name: newUser.name,
      rollno: newUser.rollno,
      pass: newUser.pass,
      sec: newUser.sec,
      sem: newUser.sem
    })
    .then(res => {
      console.log("Registered");
    });
};
export default register;
