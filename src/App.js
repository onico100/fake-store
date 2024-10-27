import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./componets/Home/Home";
import Electronicts from "./componets/Electronicts/Electronicts";
import Jewlery from "./componets/Jewlery/Jewlery";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Electronicts">Electronicts</Link>
              </li>
              <li>
                <Link to="/Jewlery">Jewlery</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Electronicts" element={<Electronicts />} />
            <Route path="/Jewlery" element={<Jewlery />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
