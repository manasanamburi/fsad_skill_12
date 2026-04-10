import axios from "axios";
import { useEffect, useState } from "react";

function StudentList() {
  const [data, setData] = useState([]);

  const load = () => {
    axios.get("http://localhost:8081/students")
      .then(res => setData(res.data));
  };

  useEffect(() => { load(); }, []);

  // DELETE
  const del = (id) => {
    axios.delete(`http://localhost:8081/students/${id}`)
      .then(() => load());
  };

  // UPDATE
  const update = (s) => {
    const name = prompt("Enter new name", s.name);
    const email = prompt("Enter new email", s.email);
    const course = prompt("Enter new course", s.course);

    axios.put(`http://localhost:8081/students/${s.id}`, {
      name, email, course
    }).then(() => load());
  };

  return (
    <div>
      <h2>Student List</h2>
      {data.map(s => (
        <div key={s.id}>
          {s.name} - {s.email} - {s.course}
          <button onClick={() => update(s)}>Update</button>
          <button onClick={() => del(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;