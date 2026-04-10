import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

function App() {
  return (
    <div>
      <AddStudent refresh={() => window.location.reload()} />
      <StudentList />
    </div>
  );
}

export default App;