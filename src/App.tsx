import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/new" element={<NewNote />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
