import axios from "axios";
import { useState } from "react";

function AddStudent({ refresh }) {
  const [data, setData] = useState({ name:"", email:"", course:"" });

  const handle = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = () => {
    axios.post("http://localhost:8081/students", data)
      .then(() => {
        setData({ name:"", email:"", course:"" });
        refresh();
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input name="name" onChange={handle} placeholder="Name"/><br/>
      <input name="email" onChange={handle} placeholder="Email"/><br/>
      <input name="course" onChange={handle} placeholder="Course"/><br/>
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default AddStudent;