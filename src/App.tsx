import { Router } from "@reach/router";
import GradeBook from "./pages/GradeBook";
import Selector from "./components/Selector";

function App() {
  return (
    <div>
      <h1>FILEX Calificaciones</h1>
      <Router>
        <GradeBook path="grades/:codigo" />
        <Selector path="/" />
      </Router>
    </div>
  );
}

export default App;
