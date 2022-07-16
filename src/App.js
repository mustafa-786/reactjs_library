import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Routers from "./Router";

function App() {
  return (
    <>
      <Router>
        <Container fluid>
          <Routers />
        </Container>
      </Router>
    </>
  );
}

export default App;
