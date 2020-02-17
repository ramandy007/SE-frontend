import axios from "axios";

const register = newUser => {
  return axios
    .post("/Register", {
      name: newUser.name,
      rollno: newUser.rollno,
      pass: newUser.password,
      sec: newUser.section,
      sem: newUser.semester
    })
    .then(res => {
      console.log("Registered");
    });
};
export default register;
